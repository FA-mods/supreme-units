using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

using IgniteUI.Blazor.Controls;

Console.WriteLine("FAF ");
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<SupremeUnitsApp.App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

builder.Services.AddScoped(typeof(FAF.BlueprintStats));

builder.Services.AddScoped(typeof(FAF.WebService));

// registering Infragistics Blazor
builder.Services.AddIgniteUIBlazor(
    typeof(IgbLegendModule),
    typeof(IgbNumberAbbreviatorModule),
    typeof(IgbDataChartCoreModule),
    typeof(IgbDataChartScatterModule),
    typeof(IgbDataChartScatterCoreModule),
    typeof(IgbDataChartInteractivityModule)
);

await builder.Build().RunAsync();
