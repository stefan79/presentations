# Presentations

A lightweight system for building multiple [reveal.js](https://revealjs.com/) presentations from shared templates.

## Setup

```bash
npm install
```

## Usage

```bash
make new NAME=my-talk                    # create a presentation
make serve NAME=my-talk                  # serve + open in browser
make build NAME=my-talk                  # export self-contained copy
make pdf NAME=my-talk                    # export to PDF via Chrome
make build-all                           # export all presentations
make list                                # list all talks
make clean                               # remove build output
make help                                # show all commands
```

### Options

| Option     | Default   | Description                          |
|------------|-----------|--------------------------------------|
| `NAME`     | (required)| Talk directory name                  |
| `TEMPLATE` | `default` | Template to use (`default`, `minimal`)|
| `THEME`    | `black`   | Reveal.js theme name                 |
| `PORT`     | `8000`    | Dev server port                      |

### Themes

Any built-in [reveal.js theme](https://revealjs.com/themes/): `black`, `white`, `league`, `beige`, `night`, `serif`, `simple`, `solarized`, `moon`, `dracula`, `sky`, `blood`.

Custom themes live in `templates/themes/` — see below.

### Custom themes

Create a `.css` file in `templates/themes/`. Use it by passing `THEME=epam` (matching the filename without extension). The default template picks up custom themes automatically.

Example:

```bash
make new NAME=my-talk THEME=epam
```

## Templates

- **`default`** — notes, markdown, syntax highlighting, and math (KaTeX) plugins
- **`minimal`** — core reveal.js only, no plugins

Templates are used only at creation time. After `make new`, each talk is independent and can be edited freely.

## Exporting to PDF

`make pdf NAME=my-talk` uses reveal.js's built-in print stylesheet and headless Chrome to export a PDF to `build/my-talk.pdf`. Requires Google Chrome installed.

## Building for distribution

`make build NAME=my-talk` produces a self-contained directory in `build/my-talk/` with all reveal.js assets copied in. No `node_modules` needed — works from a file server, static hosting, or opened directly in a browser.

## Project structure

```
presentations/
  Makefile                  # build system
  package.json              # reveal.js dependency
  templates/
    default.html            # full-featured template
    minimal.html            # minimal template
    themes/                 # custom CSS themes
      epam.css
  talks/
    my-talk/
      index.html            # the presentation
      assets/               # images, diagrams, etc.
  build/                    # self-contained exports (gitignored)
```
