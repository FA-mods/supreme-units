console.log("JS loaded units-provider.js");

let unitBlueprints = [];
let unitData = [];

var unitFactions = [];
var unitClasses = [];
var unitTypes = [];
var unitIcons = [];
var unitIdentifiers = [];
var weaponCategories = [];
var weaponTypes = [];

var unitsByClass = {};
var unitsByFaction = {};
var unitsByType = {}; 

var Factions = {
    UEF:        { Index: 0, Symbol: "U", Color: "#1174ed", Name: "UEF" },
    Cybran:     { Index: 1, Symbol: "C", Color: "#eb2c1e", Name: "Cybran" },
    Aeon:       { Index: 2, Symbol: "A", Color: "#19d113", Name: "Aeon" },
    Seraphim:   { Index: 3, Symbol: "S", Color: "#d1bb13", Name: "Seraphim" },
    Nomads:     { Index: 4, Symbol: "N", Color: "#9e6d31", Name: "Nomads" },
    UNKNOWN:    { Index: 5, Symbol: "X", Color: "#292828", Name: "UNKNOWN" },
};

var FactionsByIndex = {};
var FactionsBySymbol = {};
function initalize() {


    for (let faction of Factions) {
        FactionsByIndex[faction.Index] = faction;
    }
}

function getFactionData(faction) {
    //console.log("getFactionData  '" + faction + "'");

    for (let info of Object.values(Factions)) {
        if (faction === info.Index ||
            faction === info.Symbol ||
            faction === info.Name) {
      //      console.log(info);
            return info;
        }            
    }
    return null;
}

function toFactionColor(faction) {

    var info = getFactionData(faction);
    if (info)
        return info.Color;

    return "black";
}

function groupUnitsBy(key) {
    var groups = {};
    for (let unit of unitBlueprints) {

        var name = unit[key];
        if (name === undefined) continue;

        if (groups[name] === undefined) {
            groups[name] = [];
        }
        groups[name].push(unit.Id);
    }
       
    return groups;
}

function is(unit, categories) {
    if (typeof categories === "string") {
        return unit.CategoriesHash[categories] || false;
    } else {
        for (let c of (categories || [])) {

            if (!unit.CategoriesHash[c]) return false;
        }
        return true;
    }
}

function isValid(unit) {

    if (unit.isWall) return false;
    if (unit.isCrabbEgg) return false;

    if (unit.isStructure) return false;

    if (unit.isFactionN) return false;
    //if (unit.isFactionU) return false;
    //if (unit.isFactionA) return false;
    //if (unit.isFactionS) return false;
    // if (unit.isFactionC) return false;
    //if (unit.isT3 || unit.isT2) return true;
     

    return true;
}

var unitTitles = [];
function populate(unit) {

    if (unit.Categories) {
        unit.CategoriesHash = toHash(unit.Categories);


        unit.isFactionN = is(unit, "NOMADS");
        unit.isFactionU = is(unit, "UEF");
        unit.isFactionC = is(unit, "CYRBAN");
        unit.isFactionA = is(unit, "AEON");
        unit.isFactionS = is(unit, "SERAPHIM");

        unit.isT1 = is(unit, ["TECH1"]);
        unit.isT2 = is(unit, ["TECH2"]);
        unit.isT3 = is(unit, ["TECH3"]);
        unit.isT4 = is(unit, ["EXPERIMENTAL"]);
        unit.isCrabbEgg = is(unit, ["CRABEGG"]);
        
        unit.isStealth = is(unit, ["STRUCTURE", "STEALTHFIELD"]);
        unit.isSensor = is(unit, ["STRUCTURE", "OPTICS", "TECH3"]);

        unit.isDefenseAA = is(unit, ["STRUCTURE", "DEFENSE", "ANTIAIR"]);
        unit.isDefensePD = is(unit, ["STRUCTURE", "DEFENSE", "DIRECTFIRE"]);
        unit.isDefenseTP = is(unit, ["STRUCTURE", "DEFENSE", "ANTINAVY"]);
        
        unit.isSMD = is(unit, ["STRUCTURE", "ANTIMISSILE", "SILO"]);           
        unit.isTMD = is(unit, ["STRUCTURE", "ANTIMISSILE", "TECH2"]);
        unit.isWall = is(unit, ["STRUCTURE", "WALL"]);
        unit.isStructure = is(unit, ["STRUCTURE"]);

        unit.isCommander = is(unit, ["LAND", "COMMAND"]);


        //if (unit.Id === "ZSB9601") {
        //    console.log("ZSB9601")
        //}
        unit.isFactorySupport = is(unit, ["STRUCTURE", "SUPPORTFACTORY"]);
        unit.isFactoryHQ = !unit.isFactorySupport && is(unit, ["STRUCTURE", "FACTORY"]);
        unit.isFactory = unit.isFactorySupport || unit.isFactoryHQ;

        //if (unit.Categories.indexOf("STRUCTURE") >= 0 &&
        //    unit.Categories.indexOf("TECH3") >= 0) {

        //    unit.isFactorySupport = unit.Categories.indexOf("SUPPORTFACTORY") >= 0;
        //    unit.isFactoryHQ = unit.Categories.indexOf("FACTORY") >= 0;

        //}

        if (unit.Categories.indexOf("STRUCTURE") >= 0 &&
            unit.Categories.indexOf("ECONOMIC") >= 0) {

            unit.isStorage = is(unit, "MASSSTORAGE") || is(unit, "ENERGYSTORAGE");
                //unit.Categories.indexOf("MASSSTORAGE") >= 0 ||
                //unit.Categories.indexOf("ENERGYSTORAGE") >= 0;
        }

        if (unit.isT1) unit.TechLevel = 1;
        else if (unit.isT2) unit.TechLevel = 2;
        else if (unit.isT3) unit.TechLevel = 3;
        else if (unit.isT4) unit.TechLevel = 4;
        else if (unit.isCommander) unit.TechLevel = 0;
        else unit.TechLevel = 4;

        unit.TechSymbol = "T" + unit.TechLevel;
    }
    
    unit.FactionName = unit.General.FactionName || "UKNOWN";
    unit.FactionColor  = Factions[unit.FactionName].Color;
    unit.FactionIndex  = Factions[unit.FactionName].Index;
    unit.FactionSymbol = Factions[unit.FactionName].Symbol;
    unit.FactionLevel  = 2 + (unit.FactionIndex * 10) + (unit.TechLevel * 2)

    unit.Title = unit.Description.replace("Experimental ", "");
    unit.Title = unit.Title.replace("Mobile Rapid-Fire", "Rapid-Fire"); 
    unit.Title = unit.Title.replace("Support Armored", "Support");
    unit.Title = unit.Title.replace("Stealth Shield", "Stealth");
    unit.Title = unit.Title.replace("Stealth Field", "Stealth");
    unit.Title = unit.Title.replace("Intelligence", "Intel");
    unit.Title = unit.Title.replace("Staging Beacon", "Staging Facility");

    unit.Title = unit.Title.replace("Rapid-fire", "Rapid-Fire");
    unit.Title = unit.Title.replace("Hydrocarbon", "Hydro");

    unit.Title = unit.Title.replace("AA Flak Artillery", "AA Turret");
    unit.Title = unit.Title.replace("AA Turret", "AA Flak Turret");
    unit.Title = unit.Title.replace("Heavy Railgun Array", "Torpedo Launcher");

    unit.Title = unit.Title.replace("Mobile Missile Anti-Air", "Mobile AA Launcher");
    unit.Title = unit.Title.replace("Mobile Rapid-Fire AA Cannon", "Mobile AA Launcher");
    unit.Title = unit.Title.replace("Mobile Anti-Air Missile Launcher", "Mobile AA Launcher");
    unit.Title = unit.Title.replace("Lightning Tank", "Mobile AA Lightning Tank");
    unit.Title = unit.Title.replace("Anti-Air", "AA");
    unit.Title = unit.Title.replace("Defense Satellite", "Satellite Defense Laser");
    unit.Title = unit.Title.replace("Satellite System", "Satellite Defense Factory");
    unit.Title = unit.Title.replace("Orbital", "Satellite");
    
    if (unit.isT3 && unit.isDefenseAA)
        unit.Title = "AA SAM Launcher";

    if (unit.Title === "Artillery Installation")
        unit.Title = "Stationary Artillery";

    unit.Title = unit.Title.replace("Installation", "");

    if (unit.isFactoryHQ && !unit.Title.endsWith("HQ")) {
        unit.Title = unit.Title + " HQ"
    }
    if (unit.isFactorySupport && !unit.Title.endsWith("Support")) {
        unit.Title = unit.Title + " Support"
    }

    //unit.Title = unit.Title + " " + unit.Id;
//    unit.Title = unit.Title + " " + unit.isFactoryHQ + " " + unit.isFactorySupport + " " + unit.Id;
    //unit.Title = unit.Title  + " " + unit.isFactorySupport;

    unit.Title = unit.TechSymbol + " " + unit.Title;

    if (isValid(unit)) {
        if (!unitTitles.includes(unit.Title)) {
             unitTitles.push(unit.Title);
        }
    }
    unit.Title = "(" + unit.FactionSymbol + ") " + unit.Title;

    if (unit.General && unit.General.UnitName) {
        unit.Name = unit.General.UnitName;
    }

    //if (unit.Economy === undefined) {
    //    unit.Economy = {};
    //}

    //if (unit.Economy.BuildTime === undefined) {
    //    unit.Economy.BuildTime = 1;
    //}

    //if (unit.Economy.BuildCostMass === undefined) {
    //    unit.Economy.BuildCostMass = 1;
    //}

    //if (unit.Economy.BuildCostEnergy === undefined) {
    //    unit.Economy.BuildCostEnergy = 1;
    //}

    //if (unitFactions.indexOf(unit.FactionName) < 0) {
    //    unitFactions.push(unit.FactionName);
    //}

    if (!unit.Economy) { unit.Economy = {}; console.log("no eco " + unit.Id) }
    if (!unit.Economy.BuildCostMass) unit.Economy.BuildCostMass = 1;
    if (!unit.Economy.BuildCostEnergy) unit.Economy.BuildCostEnergy = 1;
    

    if (unit.Economy &&
        unit.Economy.BuildCostMass > 0 &&
        unit.Economy.BuildCostEnergy > 0) {
        unit.Economy.BuildCostTotal = Math.round(unit.Economy.BuildCostMass + (unit.Economy.BuildCostEnergy / 150));
    }  

    unit.Type = unit.General.Icon || "UKNOWN";
    if (unitTypes.indexOf(unit.Type) < 0) {
        unitTypes.push(unit.Type);
    }

    var icon = unit.StrategicIconName;
    if (unitIcons.indexOf(icon) < 0) {
        unitIcons.push(icon);
    }

    unitIdentifiers.push(unit.Id);

    var clas = unit.General.Classification;
    clas = clas.replace('RULEUC_', '');
    clas = clas.replace('RULEUMT_', '');
    clas = clas.replace('Military', '');
    clas = clas.replace('MiscSupport', 'Support');

    if (unit.isStorage) clas = "Storage";
    if (unit.isFactorySupport) clas = "FactorySupport";
    if (unit.isFactoryHQ) clas = "FactoryHQ";

    if (clas === "CounterMeasure") {

        if (unit.Defense &&
            unit.Defense.Shield &&
            unit.Defense.Shield.ShieldSize > 0) {
            clas = "Sheild";
        }
        else if (unit.isStealth)    clas = "Stealth";        
        else if (unit.isTMD)        clas = "TMD";        
        else if (unit.isSMD)        clas = "SMD";        
        else if (unit.isSensor)     clas = "Sensor";
    }
    
    //unit.General.Classification = clas;
    unit.Classification = clas;

    if (unitClasses.indexOf(clas) < 0) {
        unitClasses.push(clas);
    }

    if (unit.isCommander) {
        // normalize
        unit.Economy.BuildTime = 150000;
    }
    //if (unitsByClass[clas] === undefined) {
    //    unitsByClass[clas] = [];
    //}
    //unitsByClass[clas].push(unit.Id);

    
    var unitInfo = {}; // Object.create(unit);
    unitInfo.Economy = unit.Economy;
    unitInfo.Physics = unit.Physics;
    unitInfo.Defense = unit.Defense;
    unitInfo.Intel = unit.Intel;
    unitInfo.Id = unit.Id;
    //unitInfo.Weapon = [];
    //unitInfo.Veteran = null;
    //unitInfo.Display = null;
    //unitInfo.Wreckage = null;
    //unitInfo.Description = null;
    //unitInfo.StrategicIconName = null;
    unitData.push(unitInfo);

    for (let w of (unit.Weapon || [])) {

        var wc = w.WeaponCategory;
        if (wc &&
            wc !== "Death" &&
            wc !== "Teleport" &&
            wc !== "Experimental") {

            wc = wc.replace('Naval', '');
            wc = wc.replace('Experimental', '');
            wc = wc.replace('Kamikaze', 'Bomb');
            wc = wc.replace(' ', '');
            wc = wc.trim();

            if (weaponCategories.indexOf(wc) < 0) {
                weaponCategories.push(wc);
            }

            w.isValid = true;
        }

        var wt = w.DamageType;
        if (wt && wc !== "Deathnuke") {
            if (weaponTypes.indexOf(wt) < 0) {
                weaponTypes.push(wt);
            }
            w.issValid = true;
        }
    }
     
    //Object.assign({}, item);
    //var wep = Object.create(unit.Weapon);
}

var dataMarkerType = "init";
async function updateMarkerType(markerType) {

    var charts = document.querySelectorAll("igc-data-chart");
    if (charts && charts.length > 0) {
        for (var i = 0; i < charts.length; i++) {
            var dc = charts[i];
            if (dc.actualAxes.length > 0) {

                var series = dc.actualAxes[0];
                console.log("JS updateMarkerType " + series.markerType + " >> " + markerType);

                dataMarkerType = markerType;

                if (markerType === "UnitType") {
                  //  dc.actualAxes[0].markerType = "Circle";
                    //dc.actualAxes[0].markerTemplate = onSeriesMarkerTemplate();
                }
                else { //if (markerType === "") {
                  //  dc.actualAxes[0].markerType = "Square";
                }

                //dc.actualSeries[0].notifyClearItems(unitBlueprints);
            }
        }
    }
}

// xProp, yProp, rProp
async function plotUnits(xProp, yProp, rProp) {
    const start = Date.now();
   // console.log("JS plotUnits ...");

    var charts = document.querySelectorAll("igc-data-chart");
    //console.log("JS plotUnits charts=" + charts.length);
    //console.log("JS plotUnits x=" + xProp + " y=" + yProp);

    var xMin = Number.MAX_VALUE;
    var xMax = Number.MIN_VALUE;
    var yMin = Number.MAX_VALUE;
    var yMax = Number.MIN_VALUE;

    for (var unit of unitBlueprints) {
        var xValue = getDataValue(unit, xProp);
        var yValue = getDataValue(unit, yProp);
        xMin = Math.min(xMin, xValue);
        xMax = Math.max(xMax, xValue);

        yMin = Math.min(yMin, yValue);
        yMax = Math.max(yMax, yValue);
    }
    console.log("JS plotUnits x=" + xMin + " " + xMax + " " + xProp);
    console.log("JS plotUnits y=" + yMin + " " + yMax + " " + yProp);

    var xRange = xMax - xMin;
    var yRange = yMax - yMin;

    if (charts && charts.length > 0) {
        for (var i = 0; i < charts.length; i++) {
            var dc = charts[i];

            if (dc.actualAxes.length > 0) {
                dc.actualAxes[0].isLogarithmic = xRange > 1000;
                dc.actualAxes[1].isLogarithmic = yRange > 1000;
                //console.log("JS plotUnits x axis=" + dc.actualAxes[0].isLogarithmic);
                //console.log("JS plotUnits y axis=" + dc.actualAxes[1].isLogarithmic);
            }

            if (dc.actualSeries.length > 0) {

                dc.actualSeries[0].xMemberPath = xProp;
                dc.actualSeries[0].yMemberPath = yProp;

                //console.log("JS plotUnits series=" + dc.actualSeries.length);
                if (dc.actualSeries[0].dataSource === null ||
                    dc.actualSeries[0].dataSource === undefined) {

                    dc.actualSeries[0].dataSource = unitBlueprints; //unitData;
                    dc.actualSeries[0].notifyClearItems(unitBlueprints);
                }


                if (dc.actualSeries[1].dataSource === null ||
                    dc.actualSeries[1].dataSource === undefined) {
                    dc.actualSeries[1].dataSource = unitBlueprints; //unitData;
                    dc.actualSeries[1].notifyClearItems(unitBlueprints);
                }

                for (let s of dc.actualSeries) {
                    //console.log("JS plotUnits type=" + typeof (s));
                    //console.log("JS plotUnits type=" + s.title);
                }

                //if (dc.actualSeries[0].dataSource === unitData) {
                //    dc.actualSeries[0].notifyClearItems(unitData);
                //    console.log("JS plotUnits notifyClearItems");
                //}
            }
         
        }
    }
    return new Promise((resolve, reject) => {
        //console.log("JS JSON load end");
        const time = Date.now() - start;
        //    console.log(`JS JSON load end ` + (Math.floor(time / 1000)).toFixed(2));
     //   console.log(`JS plotUnits end ` + time);
        //resolve(bpUnits);
        resolve("plotUnits");
    });
}


async function load() {
    const start = Date.now();
    //let url = window.location.origin + '/data/bp-extracted-small.json';
    let url = window.location.origin + '/data/bp-extracted.json';
    console.log("JS JSON url " + url);

    const response = await fetch(url);
    console.log("JS JSON load fetch");

    var units = await response.json();
    console.log("JS JSON load response");

    unitBlueprints = [];
    for (let unit of units) {
        populate(unit);
         
        if (isValid(unit)) {
            unit.Index = unitBlueprints.length;
            unitBlueprints.push(unit);
        }
    }

    unitsByFaction = groupUnitsBy("FactionName");
    unitsByClass = groupUnitsBy("Classification");
    unitsByType = groupUnitsBy("Type");

    
   // console.log(unitTitles);
    //console.log("JS JSON " + factions.length);
    // console.log(unitFactions);
    ////console.log("unitClasses");
    ////console.log(unitClasses); 
    //console.log("weaponCategories");
    //console.log(weaponCategories);
    //console.log("weaponTypes");
    //console.log(weaponTypes); 
    //console.log("unitsByClass");
    //console.log(unitsByClass);
    //console.log("unitsByFaction");
    //console.log(unitsByFaction);
    //console.log("unitsByType");
    //console.log(unitsByType);


  //  console.log("bps=" + unitBlueprints.length);
  //  console.log("ids=" + unitIdentifiers.length);
  //  console.log("icons=" + unitIcons.length);

    //var charts = document.querySelectorAll("igc-data-chart");
    //console.log("JS JSON load charts=" + charts.length);

    return new Promise((resolve, reject) => {
        //console.log("JS JSON load end");
        const time = Date.now() - start;
    //    console.log(`JS JSON load end ` + (Math.floor(time / 1000)).toFixed(2));
        console.log(`JS JSON load end ` + time + " items=" +  unitData.length);
        resolve(JSON.stringify(unitData));
        //resolve(unitBlueprints);
        //("items=" + unitBlueprints.length);
    });
}

function getFactionsTest() {
    return new Promise((resolve, reject) => {
        //console.log("JS JSON load end");
        const time = Date.now() - start;
        //    console.log(`JS JSON load end ` + (Math.floor(time / 1000)).toFixed(2));
      //  console.log(`JS JSON load end ` + time);
        //resolve(bpUnits);
        resolve("items=" + units.length);
    });
}



async function getUnitTitles() {
    unitTitles.sort();
    //return unitTitles;

    return new Promise((resolve, reject) => {
        console.log("JS getUnitTitles items=" + unitTitles.length);
        var json = JSON.stringify(unitTitles);
        //console.log(json);
        resolve(json);
    });
}

function getUnit() {
    return 'x'.repeat(5);
}