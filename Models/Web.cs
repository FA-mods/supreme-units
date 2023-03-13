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

namespace FAF
{
    public class WebService
    {
        public IJSRuntime JS;
        public HttpClient Http;
        public NavigationManager Local;

        public WebService(NavigationManager navManager, IJSRuntime jsRuntime, HttpClient httpClient)
        { 
            this.Local = navManager;
            this.Http = httpClient;
            this.JS = jsRuntime;

            //  Console.WriteLine("FAF BP URL: " + navManager.Uri);
        }

    }
     
    public static class Web
    {
        //static List<string> Tasks2;
        static Dictionary<string, string> Cache;
        public static WebService Service;

        static Web()
        {
            Cache = new Dictionary<string, string>();
        }

        public async static Task<string> Fetch(string address)
        { 
            if (Cache.ContainsKey(address))
            {
                return Cache[address];
            }
            else
            {
                var http = new HttpClient();
                var uri = new Uri(address, UriKind.RelativeOrAbsolute);
                var str = await http.GetStringAsync(uri);
                return str;
            }
        }

        public async static Task<T> Fetch<T>(string address)
        {
            var str = await Fetch(address);
            var arr = JsonSerializer.Deserialize<T>(str);
            //var arr = JsonSerializer.Deserialize<Dictionary<string, BlueprintUnit>[]>(str);
            //var arr = JsonSerializer.Deserialize<Dictionary<string, BlueprintUnit>[]>(str);
            //var arr = JsonSerializer.Deserialize<BlueprintFile>(str); 
            //Console.WriteLine("FAF BP Units=" + arr.Length);
            return arr;
        }



    }
          
}
