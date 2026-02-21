var map = L.map('mapContainer').setView([-13.1339, 27.8493], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var goldData = [
    [-12.8, 28.2, 0.9],
    [-13.4, 27.5, 0.8],
    [-14.0, 28.0, 0.7]
];

var copperData = [
    [-13.0, 27.8, 0.9],
    [-12.9, 28.1, 0.8]
];

var reeData = [
    [-13.6, 27.9, 0.85],
    [-12.7, 28.3, 0.75]
];

var heat;

function loadHeat(data) {
    if (heat) map.removeLayer(heat);
    heat = L.heatLayer(data, {radius: 40}).addTo(map);
}

function showGold() {
    loadHeat(goldData);
    animateStats(87, 14);
}

function showCopper() {
    loadHeat(copperData);
    animateStats(79, 9);
}

function showREE() {
    loadHeat(reeData);
    animateStats(83, 11);
}

function animateStats(score, targets) {
    let s = 0;
    let t = 0;

    let interval = setInterval(() => {
        if (s >= score) clearInterval(interval);
        else {
            s++;
            document.getElementById("score").innerText = s + "%";
        }
    }, 20);

    let interval2 = setInterval(() => {
        if (t >= targets) clearInterval(interval2);
        else {
            t++;
            document.getElementById("targets").innerText = t;
        }
    }, 50);
}

// Load default
showGold();
