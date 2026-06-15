TEMPLATE ?= default
THEME ?= black
DATE := $(shell date +%Y-%m-%d)
PORT ?= 8000

# Resolve theme: custom (templates/themes/) or built-in (node_modules)
CUSTOM_THEME_EXISTS := $(wildcard templates/themes/$(THEME).css)
ifneq ($(CUSTOM_THEME_EXISTS),)
  THEME_LINK := <link rel="stylesheet" href="../../templates/themes/$(THEME).css">
else
  THEME_LINK := <link rel="stylesheet" href="../../node_modules/reveal.js/dist/theme/$(THEME).css">
endif

.PHONY: new serve build build-all pdf list clean help

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*##' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

new: ## Create a new presentation (NAME= required, TEMPLATE=default, THEME=black)
ifndef NAME
	$(error NAME is required. Usage: make new NAME=my-talk [TEMPLATE=default] [THEME=black])
endif
	@mkdir -p talks/$(NAME)/assets
	@sed -e 's/{{TITLE}}/$(NAME)/g' \
	     -e 's/{{NAME}}/$(NAME)/g' \
	     -e 's|{{THEME_LINK}}|$(THEME_LINK)|g' \
	     -e 's/{{THEME}}/$(THEME)/g' \
	     -e 's/{{DATE}}/$(DATE)/g' \
	     templates/$(TEMPLATE).html > talks/$(NAME)/index.html
	@echo "Created talks/$(NAME)/"
	@echo "  Edit: talks/$(NAME)/index.html"
	@echo "  Serve: make serve NAME=$(NAME)"

serve: ## Serve a presentation (NAME= required, PORT=8000)
ifndef NAME
	$(error NAME is required. Usage: make serve NAME=my-talk [PORT=8000])
endif
	@echo "Serving at http://localhost:$(PORT)/talks/$(NAME)/"
	@open "http://localhost:$(PORT)/talks/$(NAME)/" 2>/dev/null || true
	@python3 -m http.server $(PORT)

list: ## List all presentations
	@echo "Presentations:"
	@ls -1 talks/ 2>/dev/null || echo "  (none yet — run make new NAME=my-talk)"

pdf: ## Export presentation to PDF (NAME= required, PORT=8000)
ifndef NAME
	$(error NAME is required. Usage: make pdf NAME=my-talk [PORT=8000])
endif
	@mkdir -p build
	@echo "Starting server and exporting PDF..."
	@python3 -m http.server $(PORT) &>/dev/null & SERVER_PID=$$!; \
	sleep 1; \
	npx decktape reveal "http://localhost:$(PORT)/talks/$(NAME)/" build/$(NAME).pdf; \
	kill $$SERVER_PID 2>/dev/null; \
	echo "Exported build/$(NAME).pdf"

build: ## Build a self-contained copy (NAME= required)
ifndef NAME
	$(error NAME is required. Usage: make build NAME=my-talk)
endif
	@mkdir -p build/$(NAME)/reveal.js/theme build/$(NAME)/reveal.js/plugin
	@cp -r talks/$(NAME)/* build/$(NAME)/
	@cp node_modules/reveal.js/dist/reveal.css build/$(NAME)/reveal.js/
	@cp node_modules/reveal.js/dist/reset.css build/$(NAME)/reveal.js/
	@cp node_modules/reveal.js/dist/reveal.js build/$(NAME)/reveal.js/
	@cp -r node_modules/reveal.js/dist/theme/* build/$(NAME)/reveal.js/theme/
	@cp -r node_modules/reveal.js/plugin/* build/$(NAME)/reveal.js/plugin/
	@# Copy custom themes if referenced
	@if grep -q 'templates/themes/' build/$(NAME)/index.html 2>/dev/null; then \
		mkdir -p build/$(NAME)/themes; \
		cp templates/themes/*.css build/$(NAME)/themes/; \
		sed -i '' 's|../../templates/themes/|./themes/|g' build/$(NAME)/index.html; \
	fi
	@# Copy custom plugins if referenced
	@if grep -q 'templates/plugins/' build/$(NAME)/index.html 2>/dev/null; then \
		mkdir -p build/$(NAME)/plugins; \
		cp templates/plugins/*.js build/$(NAME)/plugins/; \
		sed -i '' 's|../../templates/plugins/|./plugins/|g' build/$(NAME)/index.html; \
	fi
	@sed -i '' 's|../../node_modules/reveal.js/dist|./reveal.js|g' build/$(NAME)/index.html
	@sed -i '' 's|../../node_modules/reveal.js/plugin|./reveal.js/plugin|g' build/$(NAME)/index.html
	@echo "Built build/$(NAME)/ (self-contained, no node_modules needed)"

build-all: ## Build all presentations
	@for dir in talks/*/; do \
		name=$$(basename "$$dir"); \
		echo "Building $$name..."; \
		$(MAKE) build NAME=$$name --no-print-directory; \
	done

clean: ## Remove build output
	rm -rf build/
	@echo "Cleaned build/"
