fetch("./js/data.json")
    .then(function(res){ return res.json() })
    .then(function(json){ renderChart(json) });

function renderChart(json){

    Object.keys(json.bills.remit.categories).forEach(key=>{

    });
      
    var chart = new ApexCharts(document.querySelector("#chart"),{
        chart: {
          type: 'line'
        },
        series: [{
          name: 'sales',
          data: [30,40,35,50,49,60,70,91,125]
        }],
        xaxis: {
          categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        }
      }).render();
}
