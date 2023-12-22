using IgniteUI.Blazor.Controls;
using Microsoft.AspNetCore.Components;

namespace SupremeUnitsApp.Pages
{
    public partial class Scripter
    {

        private string DataMemberR = "";

        private string _DataMemberX = "Economy.BuildCostMass"; //Economy.BuildCostTotal";
        public string DataMemberX
        {
            get { return _DataMemberX; }
            set { _DataMemberX = value; StateHasChanged(); }
        }

        private string _DataMemberY = "FactionLevel";
        public string DataMemberY
        {
            get { return _DataMemberY; }
            set { _DataMemberY = value; StateHasChanged(); }
        }

        public List<string> DataMemberPathsX
        {
            get { return _DataMemberPathsX; }
            set { _DataMemberPathsX = value; StateHasChanged(); }
        }

        public List<string> DataMemberPathsY
        {
            get { return _DataMemberPathsY; }
            set { _DataMemberPathsY = value; StateHasChanged(); }
        }
        private List<string> _DataMemberPathsX = new List<string> {
            "Economy.BuildTime",
            "Economy.BuildCostMass",
            "Economy.BuildCostEnergy",
            "Economy.BuildCostTotal",
            "FactionLevel",
            "TechLevel",
            "Index",
        };
        private List<string> _DataMemberPathsY = new List<string> { 
            "Economy.BuildCostMass",
            "Economy.BuildTime",
            "Economy.BuildCostEnergy",
            "Economy.BuildCostTotal",
            "FactionLevel",
            "TechLevel",
            "Index",
        };

        private List<string> DataMarkerTypeList = new List<string> {
            "UnitType",
            "Circle",
        };

        private string _DataMarkerType = "UnitType";
        public string DataMarkerType
        {
            get { return _DataMarkerType; }
            set { _DataMarkerType = value; StateHasChanged(); }
        }

        private Dictionary<string, TrendLineType> DataTrendLineLookup = new Dictionary<string, TrendLineType>();
        private List<TrendLineType> DataTrendLineList = new List<TrendLineType>
        {
            TrendLineType.PowerLawFit,
            TrendLineType.CubicFit,
            TrendLineType.CumulativeAverage,
            TrendLineType.ExponentialAverage,
            TrendLineType.ExponentialFit,
            TrendLineType.LinearFit,
            TrendLineType.LogarithmicFit,
            TrendLineType.ModifiedAverage,
            TrendLineType.QuarticFit,
            TrendLineType.QuinticFit,
            TrendLineType.SimpleAverage,
            TrendLineType.WeightedAverage,
            TrendLineType.None,
        };
        private TrendLineType _DataTrendLine = TrendLineType.PowerLawFit;
        public TrendLineType DataTrendLine
        {
            get { return _DataTrendLine; }
            set { _DataTrendLine = value; StateHasChanged(); }
        }

        #region Events


        void onDataMemberX(ChangeEventArgs e)
        {
            this.DataMemberX = e.Value.ToString();
            Console.WriteLine("DataMemberX: " + DataMemberX);
            BindData();
        }

        void onDataMemberY(ChangeEventArgs e)
        {
            this.DataMemberY = e.Value.ToString();
            Console.WriteLine("DataMemberY: " + DataMemberY);
            BindData();
        }

        void onDataTrendLine(ChangeEventArgs e)
        {
            Console.WriteLine("onDataTrendLine: " + e.Value);
            var trendlineName = e.Value.ToString();
            this.DataTrendLine = DataTrendLineLookup[trendlineName];
            //BindData();
        }

        void onDataMarkerType(ChangeEventArgs e)
        {
            Console.WriteLine("onDataMarkerType: " + e.Value);
            var markerType = e.Value.ToString();
            if (this.DataMarkerType == "UnitType")
            {
               // dataSeries.MarkerTemplateScript = "onSeriesMarkerTemplate";
            }
            else {
             //   dataSeries.MarkerTemplateScript = null;
              //  dataSeries.MarkerType = MarkerType.Square;
            }
            this.DataMarkerType = markerType;
          
            Task.Delay(1).ContinueWith((t) => UpdateMarkerTypeAsync());
        }
        #endregion
    }
}
