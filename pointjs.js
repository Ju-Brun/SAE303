/* lien vers la doc chart.js https://www.chartjs.org/docs/latest/ */ 


let ctx=document.getElementById('chart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["A", "B", "C"],
        datasets: [{
            label: ['data 1'],
            data: [10,20,30],
            backgroundColor : "red"
        },
        {
            label: ['data 2'],
            data: [5,8,45],
            backgroundColor : "rgba(15, 0, 102, 0.4)"
        },
        {
            label: ['data 3'],
            data: [8,10,7],
            backgroundColor : "#03befc"
        }]
    }
});


let truc=document.getElementById('chart2');
let data=[10, 8, 30, 20, 12, 5];
let labels=["janv", "fév", "mar", "avr", "mai", "juin"];
new Chart(truc, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'data',
            data: data,
            fill : true,
            pointRadius : 0,
        }]
    },
    options: {
        scales: {
            y: {min: 0, max: 50, type: 'logarithmic'}
        }
    }
});