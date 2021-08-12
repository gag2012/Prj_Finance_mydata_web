function initViz() {
            var containerDiv = document.getElementById("vizContainer"),
                url = "https://public.tableau.com/app/profile/.71444588/viz/1_16287770486580/1",
                options = {
                    hideTabs: true,
                    hideToolbar: true,
                    width: "650px",
                    height: "650px",
                };

            viz = new tableau.Viz(containerDiv, url, options);
}