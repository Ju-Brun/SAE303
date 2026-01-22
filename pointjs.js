/* lien vers la doc chart.js https://www.chartjs.org/docs/latest/ */ 


let truc=document.getElementById('chart');

let cfc=[1080000, 1040000, 732449, 285590, 146952, 44174, -209,  -1493, -807];
let halo=[217894, 186794,  162559, 46065,  25513,  4327,  -161,  -317,  -653];
let carbon=[52,   349591,  60715,  -10809, 22959,  -955,  -1378, -1850, -2041];
let hydro=[23,    14336,   4637,   33002,  38261,  32107, 40900, 26399, 13087];
let bro=[12,      128,     426,    37348,  27316,  12587, 4565,  323,   -15];
let chlo=[5,      65667,   16754,  15456,  2120,   618,   -20,   -22,   -32];

let annees=["1986", "1989", "1990", "1995", "2000", "20005", "2010", "2015", "2020"];


new Chart(truc, {
    type: 'line',
    data: {
        labels: annees,
        datasets: [{
            label: 'Methyl Chloroform',
            data: chlo,
            fill : true,
            pointRadius : 1,
            backgroundColor : "#7043058c",
        },{
            label: 'Methyl Bromide',
            data: bro,
            fill : true,
            pointRadius : 1,
            backgroundColor : "#dda92592",
        },{
            label: 'Hydrochlorofluocarbons(HCFCs)',
            data: hydro,
            fill : true,
            pointRadius : 1,
            backgroundColor : "#2525cd8d",
        },{
            label: 'Carbon Tetrachloride',
            data: carbon,
            fill : true,
            pointRadius : 1,
            backgroundColor : "#25bb2591",
        },{
            label: 'Halons',
            data: halo,
            fill : true,
            pointRadius : 1,
            backgroundColor : "#aa202065",
        },{
            label : "Chlorofluorocarbons(CFCs)",
            data: cfc,
            fill : true,
            pointRadius : 1,
            backgroundColor : "#b759ff92",
        }
        ]
    },
    options: {
        scales: {
            y: {min: -11000, max: 1100000, type: 'linear'}
        }
    }
});





let ctx=document.getElementById('test');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: annees,
        datasets: [{
            label: 'Methyl Chloroform',
            data: chlo,
            fill : true,
            pointRadius : 0,
            backgroundColor : "#704305",
        },{
            label: 'Methyl Bromide',
            data: bro,
            fill : true,
            pointRadius : 0,
            backgroundColor : "#ddaa25",
        },{
            label: 'Hydrochlorofluocarbons(HCFCs)',
            data: hydro,
            fill : true,
            pointRadius : 0,
            backgroundColor : "#2525cd",
        },{
            label: 'Carbon Tetrachloride',
            data: carbon,
            fill : true,
            pointRadius : 0,
            backgroundColor : "#25bb25",
        },{
            label: 'Halons',
            data: halo,
            fill : true,
            pointRadius : 0,
            backgroundColor : "#aa2020",
        },{
            label : "Chlorofluorocarbons(CFCs)",
            data: cfc,
            fill : true,
            pointRadius : 0,
            backgroundColor : "#b759ff",
        }
        ]
    },
    options: {
        scales: {
            y: {min: -11000, max: 1100000, type: 'logarithmic'}
        }
    }
});