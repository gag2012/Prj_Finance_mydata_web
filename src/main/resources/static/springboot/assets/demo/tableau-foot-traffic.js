function initViz() {
            var containerDiv = document.getElementById("vizContainer"),
                url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
                options = {
                    hideTabs: true,
                    hideToolbar: true,
                    width: "650px",
                    height: "650px",
                };

            viz = new tableau.Viz(containerDiv, url, options);
}