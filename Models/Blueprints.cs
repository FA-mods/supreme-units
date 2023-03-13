using System;
using System.Collections.Generic;
using System.Collections.ObjectModel; 
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
  
namespace FAF
{
    public class BlueprintInfo
    {
        public string Id { get; set; }
        public string FactionName { get; set; }
        public int FactionIndex { get; set; }

        public BlueprintEconomy Economy { get; set; } 
        public BlueprintDefense Defense { get; set; }

        public BlueprintInfo()
        {
            Economy = new BlueprintEconomy(); 
            Defense = new BlueprintDefense();
        }
    }

    public class BlueprintGroup
    {
        public List<Blueprint> Units { get; set; }
        public string Title { get; set; }

        public BlueprintGroup()
        {
            Units = new List<Blueprint>();
        }
    }

    public class Blueprint
    {
        public string Id { get; set; }
        public BlueprintEconomy Economy { get; set; }
        public BlueprintGeneral General { get; set; }
        public BlueprintDefense Defense { get; set; }

        public Blueprint()
        { 
            Economy = new BlueprintEconomy();
            General = new BlueprintGeneral();
            Defense = new BlueprintDefense();
        }
    }

    public class BlueprintData
    {
        public string Description { get; set; }
        public string Id { get; set; }
        public int Index { get; set; }

        public BlueprintEconomy Economy { get; set; }
        public BlueprintGeneral General { get; set; }
        public BlueprintDefense Defense { get; set; }
        public List<string> Categories { get; set; }

        public BlueprintData()
        {
            Index = Counter;
            Id = "UNK" + Counter.ToString("000");
            Description = "UNKNOWN";
            Economy = new BlueprintEconomy();
            General = new BlueprintGeneral();
            Defense = new BlueprintDefense();

            //     Filters = new BlueprintFilters();
            //Tasks = new Dictionary<string, DateTime>();
            Counter++;
        }

        static int Counter { get; set; }
        public async static Task<List<Blueprint>> Load(string url)
        { 
            TaskUtils.Start("Blueprint.Fetch");
            var str = await Web.Fetch(url);
            TaskUtils.Stop("Blueprint.Fetch");
             
            TaskUtils.Start("Blueprint.Load ");
            var units = JsonSerializer.Deserialize<List<Blueprint>>(str);
            TaskUtils.Stop("Blueprint.Load ");

           // var factionNames = new Dictionary<string, int>();
            //var factionNames = new List<string>();
            var allFilters = new List<string>();
            var techLevels = new List<string> { "TECH1", "TECH2", "TECH3" };

            TaskUtils.Start("Blueprint.Prase");
            //foreach (var bp in units)
            //{
            //    if (bp.General == null || bp.General.FactionName == null) continue;

            //    if (!factionNames.Contains(bp.General.FactionName))
            //         factionNames.Add(bp.General.FactionName);

            //}

            //factionNames.Sort();

            var factionNames = new List<string> { "UEF", "Cybran", "Aeon", "Seraphim", "Nomads", "UNKNOWN" };

            var factionLookup = new Dictionary<string, int>();
            foreach (var faction in factionNames)
            {
                Console.WriteLine("FAF faction " + faction);
                if (!factionLookup.ContainsKey(faction))
                     factionLookup.Add(faction, factionLookup.Count);
            }

            foreach (var bp in units)
            {
                if (bp.General == null || bp.General.FactionName == null) continue;

                bp.General.FactionIndex = 1 + factionLookup[bp.General.FactionName];
            }

            TaskUtils.Stop("Blueprint.Prase");
            return units;
        }

        public static List<BlueprintGroup> GroupBy(List<Blueprint> allUnits, string propertyName)
        {
            TaskUtils.Start("Blueprint.GroupBy");
            if (string.IsNullOrEmpty(propertyName)) {
                propertyName = "FactionName";
            }
            
            var groupNames = new List<string>();

            //var flatUnits = new List<BlueprintFlat>();
            //foreach (var unit in allUnits)
            //{
            //    var bp = new BlueprintFlat();
            //    var dict = Flatten(unit, "", new List<string> { "General", "Economy", });
            //    foreach (var item in dict)
            //    {
            //        bp.Add(item.Key, item.Value);
            //    }
            //    //bp.BuildCostMass = unit.Economy.BuildCostMass;
            //    //bp.BuildTime = unit.Economy.BuildTime;
            //    //bp.FactionName = unit.General.FactionName;
            //    //bp.FactionIndex = unit.General.FactionIndex; 
            //    flatUnits.Add(bp);
            //}


            foreach (var unit in allUnits)
            {
                //if (!unit.Groups.ContainsKey(propertyName)) continue;
                //if (!groupNames.Contains(unit.Groups[propertyName]))
                //     groupNames.Add(unit.Groups[propertyName]);

                //if (!unit.Data.ContainsKey(propertyName)) continue;
                //if (!groupNames.Contains(unit.Data[propertyName]))
                //     groupNames.Add(unit.Data[propertyName]);

                //if (!groupNames.Contains(unit["GeneralFactionName"]))
                //     groupNames.Add(unit["GeneralFactionName"]);

                if (propertyName == "FactionName")
                {
                    if (!groupNames.Contains(unit.General.FactionName))
                        groupNames.Add(unit.General.FactionName);

                }

                //if (!groupNames.Contains(unit.General.FactionName))
                //     groupNames.Add(unit.General.FactionName);

                //if (!groupNames.Contains(unit.General.Classification))
                //     groupNames.Add(unit.General.Classification);

                //  Console.WriteLine("FAF BP group " + unit.ID + " " + unit.Groups["FactionName"] + " " + unit.Groups["Type"]);
            }

           // groupNames.Sort();
            // Console.WriteLine("FAF BP groups " + groupNames.Count);

            var ret = new List<BlueprintGroup>();
            foreach (var name in groupNames)
            {
                // Console.WriteLine("FAF BP groupby " + value);
                var group = new BlueprintGroup();
                group.Title = name.ToString();
                // group.Units = allUnits.Where(x => x.Groups[propertyName].Equals(value)).ToList();
                // group.Units = allUnits.Where(x => x.Data[propertyName].Equals(name)).ToList();
                 group.Units = allUnits.Where(x => x.General.FactionName.Equals(name)).ToList();
                // group.Units = allUnits.Where(x => x.General.Classification.Equals(name)).ToList();
                //    group.Units = flatUnits.Where(x => x["GeneralFactionName"].Equals(name)).ToList();

                ret.Add(group);

                 Console.WriteLine("FAF group " + name + " " + group.Units.Count);
            }

            TaskUtils.Stop("Blueprint.GroupBy");
            return ret;
        }

    }

}
