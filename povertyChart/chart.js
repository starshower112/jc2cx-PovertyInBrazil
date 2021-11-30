const ctx = document.getElementById("myChart").getContext("2d");

const labels = [
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
];
// Gradient fill
let gradient = ctx.createLinearGradient(200,0,0,400);
gradient.addColorStop(0,'#15268b');
gradient.addColorStop(1, '#009c3b');

let delayed;


const data = {
  labels,
  datasets: [
    {
    data: [37.2, 40,40.4,39.6,39.2,],
    label: "Poverty in Brazil in Millions",
    fill: true,
    backgroundColor: gradient,
    borderColor: '#FFA500',
    pointBackgroundColor: '#FFDF00',
    tension: .2,
    },
  ],  
};

const config = {
  type: 'line',
  data: data, 
  options: {
    radius: 5,
    hitRadius: 12,
    responsive: true,
     animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 500 + context.datasetIndex * 200;
        }
        return delay;
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return "$" + value + "m"; 
          },
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);