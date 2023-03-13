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
            var arr = JsonSerializer.Deserialize<List<Blueprint>>(str);
            TaskUtils.Stop("Blueprint.Load ");

            return arr;
        }

    }
          
}
