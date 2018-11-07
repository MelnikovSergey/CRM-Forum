new WOW().init();
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Green', 'Blue', 'Yellow', 'Grey', 'LightRed'],
        datasets: [{
          label: '# 3 of Votes',
          data: [12, 14, 15, 11, 45, 5],
          backgroundColor: [
            'red',
            'green',
            'blue',
            'yellow',
            'grey',
            'red'
          ],
          borderColor: [
            'green',
            'grey',
            'blue',
            'red',
            'yellow',
            'red'
          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    var ctxPie = document.getElementById('pieChart').getContext('2d');
    var myPieChart = new Chart(ctxPie, {
      type: 'pie',
      data: {
        datasets: [{
          data: [350, 280, 320, 100, 42],
          backgroundColor: [
            'red',
            'green',
            'blue',
            'yellow',
            'grey'
          ],
          hoverBackgroundColor: [
            'green',
            'grey',
            'blue',
            'red',
            'yellow'
          ],
        }]
      },
      options: {
        responsive: true
      }
    });
    var ctxLineChart = document.getElementById('lineChart').getContext('2d');
    var myLineChart = new Chart(ctxLineChart, {
      type: 'line',
      data: {
        labels: ["metrix-1","metrix-2","metrix-3","metrix-4","metrix-5","metrix-6"],
        datasets: [
          {
            label: "dataset-1",
            fillColor: "black",
            strokeColor: "red",
            pointColor: "green",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "yellow",
            data: [54,24,6,36,67,34,2]            
          },
          {
            label: "dataset-2",
            fillColor: "black",
            strokeColor: "red",
            pointColor: "green",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "yellow",
            data: [14,54,51,4,61,54,15]            
          }          
        ]
      }
    });
    var ctxR = document.getElementById('radarChart').getContext('2d');
    var myRadarChart = new Chart(ctxR, {
      type: 'radar',
      data: {
        labels: ["First","second","Third","Fourth","Fifth"],
        datasets: [{
            label: "dataset-1",
            fillColor: "black",
            strokeColor: "red",
            pointColor: "green",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "yellow",
            data: [54,24,6,36,67,34,2]            
          },
          {
            label: "dataset-2",
            fillColor: "black",
            strokeColor: "red",
            pointColor: "green",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "yellow",
            data: [14,54,51,4,61,54,15]            
          } 
        ]
      }
    });
    var ctxD = document.getElementById('doughnutChart').getContext('2d');
    var mydoughnutChart = new Chart(ctxD, {
      type: 'doughnut',
      data: {
        labels: ["First","second","Third","Fourth","Fifth"],
        datasets: [{
          data: [300,50,100,34,120],
          backgroundColor: ["red","green","blue","yellow","black"],
          hoverBackgroundColor:  ["green","red","orange","yellow","blue"]
        }]        
      },
      options: { 
        responsive: true
      } 
    });
