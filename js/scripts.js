//Sidebar Toggle

var sidebarOpen=false;
var sidebar=document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebar.Open=true;
    }
}

function closeSidebar(){
    if(!sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen=false;
    }
}

//------------- CHARTS --------------------
// ------------ BAR CHART -----------------

  var barChartOptions = {
    series: [{
    data: [10, 8, 6, 4, 2]
  }],
    chart: {
    type: 'bar',
    height: 350,
    tool: {show:false}
  },
  colors: ["#246dec", "#cc3c43", "#367952", "#f5b741", "#4f35a1"],
  plotOptions: {
    bar: {
        distributed: true,
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: false,
      columnWidth:'40%'
    }
  },
  dataLabels: {
    enabled: false
  },
  legends:{show:false},
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphone', 'Camera'],
  },
  yaxis:{
    title:{
        text: "Count"
    }
},
  };

  var barchart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barchart.render();

// ------------ AREA CHART -----------------

var areaChartOptions = {
    series: [{
    name: 'Purchase Orders',    
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Orders',    
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar:{show:false},
  },
  colors: ["#367952", "#246dec"],
  dataLabels:{enabled:false},  
  stroke: {
    curve: 'smooth'
  },
 
  labels: ['Jan', 'Feb','Mar','Apr','May','Jun'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orcers',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();

  // ------------ MULTI-AXIS CHART -----------------

  var multiAxisChartoptions = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
      {
        name: "Purchase Orders",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      
      {
        name: "Sales Orders",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FF1654"
        },
        labels: {
          style: {
            colors: "#FF1654"
          }
        },
        title: {
          text: "Purchase Orders",
          style: {
            color: "#FF1654"
          }
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#247BA0"
        },
        labels: {
          style: {
            colors: "#247BA0"
          }
        },
        title: {
          text: "Sales Orders",
          style: {
            color: "#247BA0"
          }
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  };
  
  var multiaxischart = new ApexCharts(document.querySelector("#multiaxis-chart"), multiAxisChartoptions);
  
  multiaxischart.render();

  //---------------CHARTY THAT UPDATES WITH TIME INTERVAL ---------------------
  var data={
    labels:[0],
    datases: [
    {
    label: 'Dataset 1', 
    data: [0],
    borderColor :'rgb(189, 195, 199)',
    lineTension: 0.5}
    ]
    };
    
    var config = {
    type: 'line',
    data: data,
    };
    
    var myChart = new ApexCharts(
    document.getElementByID('myChart'),
    config
    );
    
    window.setInterval(myCallBack, 2000);
    myChart.update();
    
    function myCallBack(){
    var now = new Date();
    now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    var value=Math.floor(Math.random() * 1000);
    data.labels.push(now);
    data.datasets[0].data.push(value);
    
    //myChart.update();
    }
    