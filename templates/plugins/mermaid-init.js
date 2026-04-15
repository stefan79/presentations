/**
 * Mermaid plugin for reveal.js presentations.
 *
 * Usage: place diagrams in <pre class="mermaid"> blocks.
 * Requires mermaid.js to be loaded before this script.
 *
 * Automatically configures dark theme when the background is dark.
 */
const RevealMermaid = {
  id: "mermaid",
  init: () => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        primaryColor: "#00A0E3",
        primaryTextColor: "#E6E9ED",
        primaryBorderColor: "#00A0E3",
        lineColor: "#8B949E",
        secondaryColor: "#1a2332",
        tertiaryColor: "#0D1117",
        background: "#0D1117",
        mainBkg: "#1a2332",
        nodeBorder: "#00A0E3",
        clusterBkg: "rgba(0,160,227,0.08)",
        clusterBorder: "#00A0E3",
        titleColor: "#E6E9ED",
        edgeLabelBackground: "#0D1117",
        nodeTextColor: "#E6E9ED",
      },
      flowchart: {
        htmlLabels: true,
        curve: "linear",
      },
      fontSize: 14,
    });
    return mermaid.run({ querySelector: ".mermaid" });
  },
};
