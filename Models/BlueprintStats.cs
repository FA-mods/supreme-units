using System;
using System.Collections.Generic;
using System.Collections;
using System.Collections.Specialized;
using System.Collections.ObjectModel;
using System.ComponentModel; 

using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components;
using System.Linq;

namespace FAF
{
    public class ObservableObject
    {
        public event Action OnChange;
        protected void NotifyPropertyChanged() => OnChange?.Invoke();
    }

    public class BlueprintAnalyzer : ObservableObject
    {

    }

    public class BlueprintStats : ObservableObject
    {
        protected int Limit = 3;
        protected IJSRuntime JSRuntime;
        protected HttpClient HttpClient;
        protected NavigationManager NavManager;

        public BlueprintStats(NavigationManager navManager, IJSRuntime jsRuntime, HttpClient httpClient)
        {
            // this.IsLoading = true;
            this.NavManager = navManager;
            this.HttpClient = httpClient;
            this.JSRuntime = jsRuntime;

          //  Console.WriteLine("FAF BP URL: " + navManager.Uri);
        }

        public BlueprintStats()
        {
            //  Load();
        }

        public List<BlueprintGroup> GroupBy(List<BlueprintUnit> allUnits, string propertyName)
        {
            Start = DateTime.Now;
            var groupNames = new List<object>();

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

                //if (!groupNames.Contains(unit.FactionName))
                //     groupNames.Add(unit.FactionName);

                //if (!groupNames.Contains(unit.General.FactionName))
                //     groupNames.Add(unit.General.FactionName);
                
                if (!groupNames.Contains(unit.General.Classification))
                     groupNames.Add(unit.General.Classification);

                //  Console.WriteLine("FAF BP group " + unit.ID + " " + unit.Groups["FactionName"] + " " + unit.Groups["Type"]);
            }

            groupNames.Sort();
           // Console.WriteLine("FAF BP groups " + groupNames.Count);

            var ret = new List<BlueprintGroup>();
            foreach (var name in groupNames)
            {
                // Console.WriteLine("FAF BP groupby " + value);
                var group = new BlueprintGroup();
                group.Title = name.ToString();
                // group.Units = allUnits.Where(x => x.Groups[propertyName].Equals(value)).ToList();
                // group.Units = allUnits.Where(x => x.Data[propertyName].Equals(name)).ToList();
              //  group.Units = allUnits.Where(x => x.General.FactionName.Equals(name)).ToList();
                group.Units = allUnits.Where(x => x.General.Classification.Equals(name)).ToList();
                //    group.Units = flatUnits.Where(x => x["GeneralFactionName"].Equals(name)).ToList();

                ret.Add(group);

                //  Console.WriteLine("FAF BP group " + name + " " + group.Units.Count);
            }
            Stop = DateTime.Now;
            Console.WriteLine("FAF Group " + Stop.Subtract(Start).TotalMilliseconds);


            return ret;
        }
         
        public static Dictionary<string, int> FactionIndexes = new Dictionary<string, int>();

     //   public static List<string> UnitFactions = new List<string>();
     //   public static List<string> UnitTypes = new List<string>();
     //   public static List<string> UnitTechLevels = new List<string>();

     //   public static Dictionary<string, List<string>> Filters = new Dictionary<string, List<string>>();

        static DateTime Start;
        static DateTime Stop;

        public DateTime ChartStart = DateTime.Now;
        public DateTime ChartStop = DateTime.Now;

        public static List<BlueprintUnit> ConvertData(Dictionary<string, JsonElement>[] arr)
        {
            //Filters.Add("FactionName", new List<string>());
            //Filters.Add("", new List<string>());
          
            //Console.WriteLine("FAF BP ConvertData");
            var ret = new List<BlueprintUnit>();

            var allFactions = new Dictionary<string, int>();
            var allFilters = new List<string>();
            var techLevels = new List<string> { "TECH1", "TECH2", "TECH3" };

            Start = DateTime.Now;
            
            foreach (var json in arr)
            {
                //var parts = date.Split('-'); // "2020-01-01"
                
                var bp = new BlueprintUnit();
                
                if (json.ContainsKey("Id"))
                {
                    bp.ID = json["Id"].GetString();
                }
                if (json.ContainsKey("Description"))
                {
                    bp.Description = json["Description"].GetString();
                }

                if (json.ContainsKey("Economy"))
                { 
                    bp.Economy = json["Economy"].Deserialize<BlueprintEconomy>();
                }

                if (json.ContainsKey("Categories"))
                {
                    //bp.Categories = json["Categories"].Deserialize<string[]>().ToList();
                    bp.Categories = json["Categories"].Deserialize<List<string>>();
                }
                
                if (json.ContainsKey("General"))
                {
                    bp.General = json["General"].Deserialize<BlueprintGeneral>();
                    if (bp.General != null)
                    {
                        if (!string.IsNullOrEmpty(bp.General.Classification))
                        { 
                            var parts = bp.General.Classification.Split("_");
                            if (parts.Length == 2)
                                bp.General.Classification = parts[1];
                        }

                        bp.General.Verify();

                        //bp.Filters.Class = bp.General.Classification;
                        //bp.Filters.Type = bp.General.Icon.ToUpper();
                        //bp.Filters.Faction = bp.General.FactionName.ToUpper();

                        //if (bp.Categories.Contains("TECH1")) bp.Filters.Tech = "TECH1";
                        //if (bp.Categories.Contains("TECH2")) bp.Filters.Tech = "TECH2";
                        //if (bp.Categories.Contains("TECH3")) bp.Filters.Tech = "TECH3"; 
                        //if (bp.Categories.Contains("EXPERIMENTAL")) bp.Filters.Tech = "TECH4";

                    }
                     

                    if (!allFactions.ContainsKey(bp.General.FactionName))
                    {
                        allFactions.Add(bp.General.FactionName, allFactions.Count);
                    }
                    
                }

                if (ret.Count > 100)
                {
                    break;
                    //    Console.WriteLine("FAF BP " + bp.Description + " " + bp.Economy.BuildTime);
                }

                //item.High = json["high"].GetDouble(); 
                ret.Add(bp);
            }
            Stop = DateTime.Now;
            Console.WriteLine("FAF Convert " + Stop.Subtract(Start).TotalMilliseconds);

            Start = DateTime.Now;
            foreach (var bp in ret)
            {
                if (bp.General != null)
                {
                    bp.General.FactionIndex = 1 + allFactions[bp.General.FactionName];
                     
                    //bp.UpdateGroup("FactionName", bp.General.FactionName);
                    //bp.UpdateGroup("Type", bp.General.Icon);
                }

                //bp.Data = Flatten(bp, "", new List<string> { "General", "Filters" });
                // bp.Data = Flatten(bp, "", new List<string> { "General", "Economy", });

               // var flat = Flatten(bp, "", new List<string> { "General", "Economy", });

                //foreach (var name in bp.Filters)
                //{
                //    if (allFilters.Contains(name))
                //    {
                //        allFilters.Add(name);
                //    }
                //}
                //     bp.Log();
                // Console.WriteLine("FAF bp.Categories");
                //  Console.WriteLine(string.Join(", ", bp.Categories));
            }

            Stop = DateTime.Now;
            Console.WriteLine("FAF Flatten " + Stop.Subtract(Start).TotalMilliseconds);

            // Console.WriteLine("FAF allFilters");
            // Console.WriteLine(string.Join(", ", allFilters));
            return ret;
        }

        static bool isFirst = true;
        public static Dictionary<string, object> Flatten(object bp, string parent, List<string> allow)
        {
            if (allow == null)
                allow = new List<string>();

            var data = new Dictionary<string, object>();

            if (isFirst)
            {
                var allProps = bp.GetType().GetProperties();
                foreach (var prop in allProps)
                { 
                    var value = prop.GetValue(bp);
                    if (value == null) continue;

                    var key = prop.Name;
                    if (!string.IsNullOrEmpty(parent))
                        key = parent + "" + key;

                    var type = prop.PropertyType.Name;
                    if (type == "String" || type == "Double" || type == "Integer")
                    {
                        data.Add(key, value);
                        // Filters.Add(prop.Name);
                    }
                    else if (allow.Count > 0 && allow.Contains(prop.Name))
                    {
                    //    Console.WriteLine("FAF >> " + prop.Name + ":");
                        var flatData = Flatten(value, prop.Name, new List<string>());
                        foreach (var item in flatData)
                        {
                            data.Add(item.Key, item.Value);
                       //     Console.WriteLine("FAF >> " + item.Key + " " + item.Value);
                        }

                    }
                }
                //isFirst = false;
            }
            return data;
            //var props = this.Economy.GetType().GetProperties();
            //foreach (var prop in props)
            //{
            //    //Data.Add("Economy." + prop.Name, prop.GetValue(prop, null));
            //    var val = prop.GetValue(this.Economy);

            //    if (val != null)
            //        Console.WriteLine("FAF >> " + prop.Name + " null ");
            //    else
            //    { 
            //        if (prop.PropertyType.Name == "String")
            //        {
            //            Filters.Add(prop.Name);
            //        }

            //        if (prop.GetIndexParameters().Length == 0)
            //            Console.WriteLine("FAF >> " + prop.Name + " " + prop.PropertyType.Name);

            //        //prop.GetValue(this.Economy));
            //        else
            //            Console.WriteLine("FAF    {0} ({1}): <Indexed>", prop.Name,
            //                              prop.PropertyType.Name);
            //    }
            //}

        }


       #region Load
        public async Task<List<BlueprintUnit>> Load()
        {
            //HttpClient client = new HttpClient();

            //var data = await Fetch("data/bp_extracted.json");

         //   Console.WriteLine("FAF BP Load");
            //Fetch("data/bp_extracted.json").ContinueWith((t) => { 
            //    var data = t.Result;
            //    Console.WriteLine("FAF BP Result");   
            //});
            // var root = NavigationManager;

            //var url = "https://localhost:44385/data/bp_extracted.json";
            var url = NavManager.Uri + "data/bp_extracted.json"; 
            var data = await Fetch(url);

            var units = ConvertData(data);

            //var UEF = units.Where(x => x.General.FactionName == "UEF").ToList();

            //var stockData = ConvertData(data); 

            // Console.WriteLine("FAF BP Units=" + data.Units.Length);
            return units; // stockData;
        }

        private async static Task<Dictionary<string, JsonElement>[]> Fetch(string address)
        {

            Start = DateTime.Now;
            HttpClient http = new HttpClient();
            var uri = new Uri(address, UriKind.RelativeOrAbsolute);
            var str = await http.GetStringAsync(uri);
            //   Console.WriteLine("FAF BP Dictionary");
            var arr = JsonSerializer.Deserialize<Dictionary<string, JsonElement>[]>(str);
            //var arr = JsonSerializer.Deserialize<Dictionary<string, BlueprintUnit>[]>(str);
            //var arr = JsonSerializer.Deserialize<Dictionary<string, BlueprintUnit>[]>(str);
            //var arr = JsonSerializer.Deserialize<BlueprintFile>(str);
            //Console.WriteLine("FAF BP Units=" + arr.Length);

            Stop = DateTime.Now;
            Console.WriteLine("FAF Fetch " + Stop.Subtract(Start).TotalMilliseconds);
            return arr;
        }

        #endregion
        
    }


}
