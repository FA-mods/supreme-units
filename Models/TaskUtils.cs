using System;
using System.Collections.Generic;
using System.Collections.ObjectModel; 
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
  
namespace FAF
{ 
    public static class TaskUtils
    {
        static Dictionary<string, DateTime> Tasks;

        static TaskUtils()
        {
            Tasks = new Dictionary<string, DateTime>();
        }

        public static void Start(string taskName)
        {
            if (Tasks.ContainsKey(taskName))
                Tasks[taskName] = DateTime.Now;
            else
                Tasks.Add(taskName, DateTime.Now);
        }

        public static void Stop(string taskName)
        {
            if (Tasks.ContainsKey(taskName))
            {
                var start = Tasks[taskName];
                var stop = DateTime.Now;
                var time = stop.Subtract(start);
                Console.WriteLine("FAF " + taskName + " " + time.TotalSeconds.ToString("0.000s"));
            }
        }


         
    }
          
}
