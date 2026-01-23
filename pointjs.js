/* lien vers la doc chart.js https://www.chartjs.org/docs/latest/ */ 


let truc=document.getElementById('chart');

let cfc=[1080000, 1040000, 732449, 285590, 146952, 44174, -209,  -1493, -807];
let halo=[217894, 186794,  162559, 46065,  25513,  4327,  -161,  -317,  -653];
let carbon=[52,   349591,  60715,  -10809, 22959,  -955,  -1378, -1850, -2041];
let hydro=[23,    14336,   4637,   33002,  38261,  32107, 40900, 26399, 13087];
let bro=[12,      128,     426,    37348,  27316,  12587, 4565,  323,   -15];
let chlo=[5,      65667,   16754,  15456,  2120,   618,   -20,   -22,   -32];

let annees=["1986", "1989", "1990", "1995", "2000", "2005", "2010", "2015", "2020"];

new Chart(truc, {
    type: 'line',
    data: {
        labels: annees,
        datasets: [{
            label: 'Methyl Chloroform',
            data: chlo,
            fill : true,
            pointRadius : 1,
            backgroundColor : "#02ff788c",
        },{
            label: 'Methyl Bromide',
            data: bro,
            fill : true,
            pointRadius : 1,
            backgroundColor : "#ffb70092",
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
            backgroundColor : "#184c0b91",
        },{
            label: 'Halons',
            data: halo,
            fill : true,
            pointRadius : 1,
            backgroundColor : "#ff00008a",
        },{
            label : "Chlorofluorocarbons(CFCs)",
            data: cfc,
            fill : true,
            pointRadius : 1,
            backgroundColor : "#b759ff92",
        }]
    },
    options: {
        scales: {
            y: {min: -11000, max: 1100000, type: 'linear'}
        }
    }
});


let trou=document.getElementById('trou');
let Annee=["1979", "1985", "1990", "1995", "2000", "2005", "2010", "2015", "2020", "2024"];
let taille=[100000, 14200000, 19200000, 23000000, 24800000, 24400000, 19400000, 25600000, 23500000, 19600000];

new Chart(trou, {
    type: 'line',
    data: {
        labels: Annee,
        datasets: [{ 
            label : "Chlorofluorocarbons(CFCs)",
            data: taille,
            fill : false,
            pointRadius : 0,
            borderColor : "#06e8a1",
        }
        ]
    },
    options: {
        scales: {
            y: {min: 0, max: 30000000, type: 'linear'}
        }
    }
});
