function initViz() {
            var containerDiv = document.getElementById("mapContainer"),
                url = "https://public.tableau.com/app/profile/.71444588/viz/20192020_16292798652610/sheet3?publish=yes&:toolbar=no&:embed=yes",
                options = {
                    hideTabs: true,
                    hideToolbar: true,
                    width: "1600px",
                    height: "650px",
                };

            var viz = new tableau.Viz(containerDiv, url, options);
}
