
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components;
using System.Linq;
using Newtonsoft.Json;

namespace FAF
{

    public class BlueprintGroup2
    {
        public List<BlueprintUnit> Units { get; set; }
        public string Title { get; set; }
    }

    public class BlueprintFile
    {
        public string Version { get; set; }
        public Dictionary<string, object>[] Units { get; set; }
    }

    public class BlueprintFlat : Dictionary<string, object>
    {
        //public double BuildTime { get; set; }       
        //public double BuildCostMass { get; set; }     
        //public string FactionName { get; set; }
        //public int FactionIndex { get; set; }

        public BlueprintFlat()
        {

        }
    }

    public class BlueprintUnit
    {
        //public double BuildTime { get { return Economy.BuildTime; } }
        //public double BuildCostMass { get { return Economy.BuildCostMass; } }
        //public string FactionName { get { return General.FactionName; } }
        //public int FactionIndex { get { return General.FactionIndex; } }

        //[DataSeriesMemberIntent(DataSeriesIntent.SeriesTitle)]
        public string Description { get; set; }
        public string ID { get; set; }

        public List<string> Categories { get; set; }
        public BlueprintEconomy Economy { get; set; }
        public BlueprintGeneral General { get; set; }
        public BlueprintDefense Defense { get; set; }
      // public BlueprintFilters Filters { get; set; }

       // public Dictionary<string, string> Groups { get; set; }

       // internal Dictionary<string, object> Data { get; set; }

        public BlueprintUnit()
        {
            Categories = new List<string>();
            Economy = new BlueprintEconomy();
            General = new BlueprintGeneral();
            Defense = new BlueprintDefense(); 

       //     Filters = new BlueprintFilters();
            ID = "UUU000";
            Description = "UNKNOWN";
         //   Groups = new Dictionary<string, string>();

        //    Groups.Add("FactionName", ">>UNKNOWN<<");
         //   Groups.Add("Type", ">>UNKNOWN<<");
        }

        //public void UpdateGroup(string name, string value)
        //{
        //    if (!string.IsNullOrEmpty(value))
        //        Groups[name] = value.ToUpper();
        //}

        //public void Log()
        //{
        //    var items = new List<string>
        //    {
        //        //Filters.Tech,
        //        //Filters.Type,
        //        //Filters.Faction,
        //        //Filters.Class,
        //    };

        //    Console.WriteLine(string.Join(", ", items));

        //}
    }

    public class BlueprintFilters
    { 
        public string Tech { get; set; }
        public string Faction { get; set; }
        public string Class { get; set; }
        public string Type { get; set; }
    }

    public class BlueprintEconomy
    {
        // public string Description { get; set; } 
        public double BuildTime { get; set; }
        public double BuildRate { get; set; }
        public double BuildCostMass { get; set; }
        public double BuildCostEnergy { get; set; }

        public double StorageMass { get; set; }
        public double StorageEnergy { get; set; }
    }

    public class BlueprintDefense  
    {
        public double Health { get; set; }
        public double RegenRate { get; set; }
      //  public BlueprintShield Shield { get; set; }

        public BlueprintDefense()
        {
     //       Shield = new BlueprintShield();
        }

       // public double ShieldSize { get { return Shield.ShieldSize; } }
       // public double ShieldMaxHealth { get { return Shield.ShieldMaxHealth; } }
       // public double ShieldRegenStartTime { get { return Shield.ShieldRegenStartTime; } }
       // public double ShieldRegenRate { get { return Shield.ShieldRegenRate; } }
       // public double ShieldRechargeTime { get { return Shield.ShieldRechargeTime; } }
    }

    public class BlueprintShield
    {
        public double ShieldSize { get; set; }
        public double ShieldMaxHealth { get; set; }
        public double ShieldRegenStartTime { get; set; }
        public double ShieldRegenRate { get; set; }
        public double ShieldRechargeTime { get; set; }
    }

    public class BlueprintGeneral
    {
       // [JsonProperty("Classification", Required = Required.Default)]
       // public string Class { get; set; }

        public string Classification { get; set; }
        public string FactionName { get; set; }
        public int FactionIndex { get; set; }
        public string Icon { get; set; }

        public BlueprintGeneral()
        {
            Verify();
        }

        public void Verify()
        {
            if (string.IsNullOrEmpty(Classification)) Classification = "UNKNOWN";
            if (string.IsNullOrEmpty(FactionName)) FactionName = "UNKNOWN";
            if (string.IsNullOrEmpty(Icon)) Icon = "UNKNOWN";

        }
    }

    public class BlueprintArray
        : ObservableCollection<BlueprintUnit>
    {

    }
}
