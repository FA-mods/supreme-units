console.log("JS loaded chart-markers.js");

function drawRect(ctx, x, y, width, height) {
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
    ctx.stroke();
    ctx.fill();
}

function drawSquare(ctx, x, y, size) {
    drawRect(ctx, x, y, size, size);
}

function drawCircle(ctx, x, y, size) {
    ctx.beginPath();
    ctx.arc(x, y, size / 2.0, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fill();
}

function drawDiamond(ctx, x, y, width, height) {
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    //ctx.save();
    //ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x, y - halfHeight); // top
    // top left edge
    ctx.lineTo(x - halfWidth, y);
    // bottom left edge
    ctx.lineTo(x, y + halfHeight);
    // bottom right edge
    ctx.lineTo(x + halfWidth, y);
    // the top right edge
    ctx.lineTo(x, y - halfHeight);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //ctx.restore();
}

function drawPyramid(ctx, x, y, width, height) {
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var offset = height / 7;
    //ctx.save();
   // ctx.globalAlpha = 0.25;
   // ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x, y - halfHeight - offset); // top
    // left edge
    ctx.lineTo(x - halfWidth, y + halfHeight - offset);
    // bottom edge
    ctx.lineTo(x + halfWidth, y + halfHeight - offset);
    // right edge
    ctx.lineTo(x, y - halfHeight - offset);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  //  ctx.globalAlpha = 1.0;
    //ctx.restore();
}

function drawArc(ctx, x, y, size, startAngle, endAngle, scaleX, scaleY) {
    var radius = size / 2.0;
    let radStart = startAngle * (Math.PI / 180);
    let radEnd = endAngle * (Math.PI / 180);
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, radStart, radEnd);
    ctx.scale(scaleX || 1, scaleY || 1);
    ctx.closePath();
    ctx.restore();
    ctx.fill();
    ctx.stroke();
}

function drawCurve(ctx, x, y, size) {
    var radius = size / 2.0;
    ctx.beginPath();
    y = y + (size / 4)
    var x0 = x - radius,
        y0 = y, // - radius,
        x2 = x + radius,
        y2 = y; // + radius;
    var x1 = x * 2 - (x0 + x2) / 2,
        y1 = (y - size) * 2 - (y0 + y2) / 2;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.quadraticCurveTo(x1, y1, x2, y2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawOval(ctx, x, y, size, isDownwards) {
    var radius = size / 2.0;
    var offset = size * 0.7;

    var xStart = x - radius,
        yStart = y + (size / 2.5),
        xC1 = x - offset,
        yC1 = y - offset,
        xC2 = x + offset,
        yC2 = y - offset;

    if (isDownwards) {
        yStart = y - (size / 3);
        yC1 = y + (size * 0.75);
        yC2 = y + (size * 0.75);
    }

    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.bezierCurveTo(xC1, yC1, xC2, yC2, x + radius, yStart);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawPolygon(ctx, x, y, size, corner) {
   // let length = cLength; //fLength / cLength;
    let length = size / 2
    ctx.beginPath();
    ctx.moveTo(x - corner, y - length);
    ctx.lineTo(x + corner, y - length);
    ctx.lineTo(x + length, y - corner);
    ctx.lineTo(x + length, y + corner);
    ctx.lineTo(x + corner, y + length);
    ctx.lineTo(x - corner, y + length);
    ctx.lineTo(x - length, y + corner);
    ctx.lineTo(x - length, y - corner);
    ctx.lineTo(x - corner, y - length);
    ctx.fill();
    ctx.stroke();
}
var firstMarker = true;
function onSeriesMarkerTemplate(o, e) {

    let size = 20;

    
    return {
        measure: function (measureInfo) {
            const data = measureInfo.data;
            const context = measureInfo.context;
            let value = "0.00";
            let item = data.item;
            //if (item !== null) {
            //    value = item.Value.toString();
            //}
            const height = context.measureText("M").width;
            const width = context.measureText("M").width;
            //const width = context.measureText(value).width;
            measureInfo.width = width;
            measureInfo.height = height + size;
        },
        render: function (renderInfo) {
            const item = renderInfo.data.item;
            //const value = item.Value.toString();
            const ctx = renderInfo.context;
            let x = renderInfo.xPosition;
            let y = renderInfo.yPosition;
            //let halfHeight = renderInfo.availableHeight / 2.0;
            if (renderInfo.isHitTestRender) {
                ctx.fillStyle = renderInfo.data.actualItemBrush.fill;
                let width  = renderInfo.availableWidth;
                let height = renderInfo.availableHeight;
                ctx.fillRect(x - (width / 2), y - (height / 2), width, height);
                return;
            }

            if (item === null ||
                item.FactionColor === null ||
                item.FactionColor === undefined)
                return;

            let width = size;  //renderInfo.availableWidth + offset;
            let height = size; //halfHeight + yOffset;

            if (firstMarker) {
                firstMarker = false;
                console.log(item);
            }
          //  console.log("onSeriesMarkerTemplate");
            //ctx.beginPath(); 

            //ctx.globalAlpha = 0.2;
            ctx.fillStyle = toRGBA(item.FactionColor, 0.25);
            //ctx.fillRect(x - (width / 2), y - (height / 2), width, height);

            ctx.lineWidth = 1;
            ctx.strokeStyle = item.FactionColor;
           // ctx.strokeRect(x - (width / 2), y - (height / 2), width, height);
            //ctx.globalAlpha = 1.0;

           // console.log("JS onSeriesMarkerTemplate " + dataMarkerType);

            if (item.CategoriesHash.AIR) {
                drawPyramid(ctx, x, y, size, size);
            } else if (item.CategoriesHash.STRUCTURE) {
                drawSquare(ctx, x, y, size);
            } else if (item.CategoriesHash.LAND) {
                drawDiamond(ctx, x, y, size, size);
            } else if (item.CategoriesHash.NAVAL) {
                //if (item.CategoriesHash.SUBMERSIBLE) {
                //    drawOval(ctx, x, y, size, true);
                //} else {
                    drawOval(ctx, x, y, size, false);
                //}
            } else if (item.CategoriesHash.SONAR) {
                drawSquare(ctx, x, y, size);
            } else {
                drawCircle(ctx, x, y, size);
            }

            //drawDiamond(ctx, x, y, size, size);
            //drawPyramid(ctx, x, y, size, size);
            //drawCircle(ctx, x, y, size);
            //drawArc(ctx, x, y, size, 180, 0, 1, 2);
            //drawOval(ctx, x, y, size, size);
            //drawPolygon(ctx, x, y, size, 2);
                            
            //ctx.font = '8pt Verdana';
            //ctx.fillStyle = "#4d4d4d";
            //ctx.fillText(item.TechLevel, x - 4, y + 4);
        }
    }
}

igRegisterScript("onSeriesMarkerTemplate", onSeriesMarkerTemplate, true);
