console.log("JS loaded chart-tooltips.js");

function onSeriesMouseEnter(o, e) {

    //console.log("JS onSeriesMouseEnter ");

    if (e.series.tooltipTemplate === null ||
        e.series.tooltipTemplate === undefined) {
        e.series.tooltipTemplate = createChartTooltip; 
      //  console.log("JS onSeriesMouseEnter tooltipTemplate=");
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
    //tooltip.style = "z-index: 10000"

    var title = document.createElement("div");
    //title.innerHTML = dataItem.Id + " ";
    title.innerHTML = dataItem.Title;
    title.className = "tooltipTitle";
    title.style = "color: " + toFactionColor(dataItem.FactionName) + ";";

    tooltip.appendChild(title);

   // console.log("JS createChartTooltip ");


    var itemDetails = [];
    itemDetails.push({ txt: "ID", value: dataItem.Id });
    itemDetails.push({ txt: "Build Mass", value: dataItem.Economy.BuildCostMass });
    itemDetails.push({ txt: "Build Time", value: dataItem.Economy.BuildTime });
    //itemDetails.push({ txt: "Faction", value: dataItem.FactionName });

    if (dataItem.Name) {
        itemDetails.push({ txt: "Name", value: dataItem.Name });
    }

    for (let info of itemDetails) {
        var line = createChartTooltipLine(dataSeries, info.txt, info.value);
        tooltip.appendChild(line);
    }

    //var line1 = createChartTooltipLine(dataSeries, "Build Mass", dataItem.Economy.BuildCostMass);
    //var line2 = createChartTooltipLine(dataSeries, "Build Time", dataItem.Economy.BuildTime);

    //tooltip.appendChild(line1);
    //tooltip.appendChild(line2); 

    return tooltip;
}

function createChartTooltipLine(dataSeries, dataName, dataValue) {

    var label = document.createElement("label");
    label.innerHTML = dataName + ":";
    label.className = "tooltipLbl";
    label.style.width = "4rem";

    var value = document.createElement("label");
    value.innerHTML = toCSV(dataValue);
    value.className = "tooltipVal";
  //  value.style = "text-align: right; width: 2.5rem"
    //value.style = "text-align: right;"

    var line = document.createElement("div");
    line.className = "tooltipHorizontal";

    // applying conditional styling based on mapping of the current series
    var isMatching = dataSeries.valueMemberPath === dataName;
    if (isMatching)
        line.style.color = dataSeries.actualBrush;
    else
        line.style.color = "black";

    line.appendChild(label);
    line.appendChild(value);
    return line;
}

