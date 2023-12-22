console.log("JS loaded utils.js");

function getLocation() {

    //var location
    console.log("JS getLocation ");
    console.log(window.location);

}

function toHash(array) {
    var hash = {};
    for (let item of array) {
        hash[item] = true;
    }
    return hash;
}


function toStringAbbr(number) {
    var ret = "";
    var value = Math.abs(number);
    if (value > 1000000000000) {
        ret = (value / 1000000000000).toFixed(1) + " T"
    } else if (value > 1000000000) {
        ret = (value / 1000000000).toFixed(1) + " B"
    } else if (value > 1000000) {
        ret = (value / 1000000).toFixed(1) + " M"
    } else if (value > 1000) {
        ret = (value / 1000).toFixed(1) + " K"
    } else {
        ret = value.toFixed(0);
    }
    if (number < 0) {
        ret = "-" + ret;
    }
    return ret;
}

function toCSV(number) {
    if (typeof (number) === "number") {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return number;
}


function toRGBA(hex, alpha) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        var r = (c >> 16) & 255;
        var g = (c >> 8) & 255;
        var b = c & 255;
        var a = alpha || 1;
        return 'rgba(' + [r, g, b].join(',') + ',' + a + ')';
    }
    throw new Error('Bad Hex');
}


function getDataValue(item, property) {
    var propWithDot = property.includes(".");
    if (!propWithDot) {
        return item[property];
    } else {
        var props = property.split('.');
        var subItem = item[props[0]];
        var subProp = props.slice(1).join('.');
        return getDataValue(subItem, subProp);
    }

}