console.log("JS loaded");

function onSeriesMouseEnter(o, e) {
    if (e.series.tooltipTemplate === null ||
        e.series.tooltipTemplate === undefined) {
        e.series.tooltipTemplate = createChartTooltip; 
        console.log("JS onSeriesMouseEnter ");
    }
}
igRegisterScript("onSeriesMouseEnter", onSeriesMouseEnter, false);

function createChartTooltip(context) {
    if (!context) return null;

    var dataItem = context.item;
    if (!dataItem) return null;

    var dataSeries = context.series;
    if (!dataSeries) return null;

    var tooltip = document.createElement("div");
    tooltip.className = "ui-tooltip-content";

    var title = document.createElement("div");
    title.innerHTML = dataItem.Id + " ";
    title.className = "tooltipTitle";
    tooltip.appendChild(title);

   // console.log("JS createChartTooltip ");

    var line1 = createChartTooltipLine(dataSeries, "Build Mass", dataItem.Economy.BuildCostMass);
    var line2 = createChartTooltipLine(dataSeries, "Build Time", dataItem.Economy.BuildTime);

    tooltip.appendChild(line1);
    tooltip.appendChild(line2); 

    return tooltip;
}

function createChartTooltipLine(dataSeries, dataName, dataValue) {

    var label = document.createElement("label");
    label.innerHTML = dataName + ":";
    label.className = "tooltipLbl";
    label.style.width = "4rem";

    var value = document.createElement("label");
    value.innerHTML = dataValue;
    value.className = "tooltipVal";

    var line = document.createElement("div");
    line.className = "tooltipHorizontal";

    // applying conditional styling based on mapping of the current series
    var isMatching = dataSeries.valueMemberPath == dataName;
    if (isMatching)
        line.style.color = dataSeries.actualBrush;
    else
        line.style.color = "black";

    line.appendChild(label);
    line.appendChild(value);
    return line;
}