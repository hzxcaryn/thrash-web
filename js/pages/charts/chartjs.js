Chart.defaults.global.defaultFontColor = '#9c9fce';
$(function () {
    new Chart(document.getElementById("overviewChart").getContext("2d"), getChartJs('line', 'overviewChart'));
    new Chart(document.getElementById("meatChart").getContext("2d"), getChartJs('line', 'meatChart'));
    new Chart(document.getElementById("vegeChart").getContext("2d"), getChartJs('line', 'vegeChart'));
    new Chart(document.getElementById("fruitChart").getContext("2d"), getChartJs('line', 'fruitChart'));
    new Chart(document.getElementById("dairyChart").getContext("2d"), getChartJs('line', 'dairyChart'));
    new Chart(document.getElementById("confecChart").getContext("2d"), getChartJs('line', 'confecChart'));
    new Chart(document.getElementById("othersChart").getContext("2d"), getChartJs('line', 'othersChart'));
});

function getChartJs(type, id) {
    var config = null;

    if (id === 'overviewChart') {
        config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Food Waste",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(105, 154, 253, 0.6)',
                    backgroundColor: 'rgba(90, 84, 149, 0)',
                    pointBorderColor: 'rgba(105, 154, 253, 0.5)',
                    pointBackgroundColor: 'rgba(105, 154, 253, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "Others",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        borderColor: 'rgba(249, 106, 149, 0.6)',
                        backgroundColor: 'rgba(90, 84, 149, 0)',
                        pointBorderColor: 'rgba(249, 106, 149, 0.5)',
                        pointBackgroundColor: 'rgba(249, 106, 149, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    } else if (id === "meatChart") {
        config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Food Waste",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(105, 154, 253, 0.6)',
                    backgroundColor: 'rgba(90, 84, 149, 0)',
                    pointBorderColor: 'rgba(105, 154, 253, 0.5)',
                    pointBackgroundColor: 'rgba(105, 154, 253, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "Others",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        borderColor: 'rgba(249, 106, 149, 0.6)',
                        backgroundColor: 'rgba(90, 84, 149, 0)',
                        pointBorderColor: 'rgba(249, 106, 149, 0.5)',
                        pointBackgroundColor: 'rgba(249, 106, 149, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    } else if (id === "vegeChart") {
        config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Food Waste",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(105, 154, 253, 0.6)',
                    backgroundColor: 'rgba(90, 84, 149, 0)',
                    pointBorderColor: 'rgba(105, 154, 253, 0.5)',
                    pointBackgroundColor: 'rgba(105, 154, 253, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "Others",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        borderColor: 'rgba(249, 106, 149, 0.6)',
                        backgroundColor: 'rgba(90, 84, 149, 0)',
                        pointBorderColor: 'rgba(249, 106, 149, 0.5)',
                        pointBackgroundColor: 'rgba(249, 106, 149, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    } else if (id === "fruitChart") {
        config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Food Waste",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(105, 154, 253, 0.6)',
                    backgroundColor: 'rgba(90, 84, 149, 0)',
                    pointBorderColor: 'rgba(105, 154, 253, 0.5)',
                    pointBackgroundColor: 'rgba(105, 154, 253, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "Others",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        borderColor: 'rgba(249, 106, 149, 0.6)',
                        backgroundColor: 'rgba(90, 84, 149, 0)',
                        pointBorderColor: 'rgba(249, 106, 149, 0.5)',
                        pointBackgroundColor: 'rgba(249, 106, 149, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    } else if (id === "dairyChart") {
        config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Food Waste",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(105, 154, 253, 0.6)',
                    backgroundColor: 'rgba(90, 84, 149, 0)',
                    pointBorderColor: 'rgba(105, 154, 253, 0.5)',
                    pointBackgroundColor: 'rgba(105, 154, 253, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "Others",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        borderColor: 'rgba(249, 106, 149, 0.6)',
                        backgroundColor: 'rgba(90, 84, 149, 0)',
                        pointBorderColor: 'rgba(249, 106, 149, 0.5)',
                        pointBackgroundColor: 'rgba(249, 106, 149, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    } else if (id === "confecChart") {
        config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Food Waste",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(105, 154, 253, 0.6)',
                    backgroundColor: 'rgba(90, 84, 149, 0)',
                    pointBorderColor: 'rgba(105, 154, 253, 0.5)',
                    pointBackgroundColor: 'rgba(105, 154, 253, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "Others",
                        data: [28, 48, 40, 19, 86, 27, 100],
                        borderColor: 'rgba(249, 106, 149, 0.6)',
                        backgroundColor: 'rgba(90, 84, 149, 0)',
                        pointBorderColor: 'rgba(249, 106, 149, 0.5)',
                        pointBackgroundColor: 'rgba(249, 106, 149, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }  else if (id === "othersChart") {
        config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Food Waste",
                    data: [65, 59, 80, 81, 56, 80, 40],
                    borderColor: 'rgba(105, 154, 253, 0.6)',
                    backgroundColor: 'rgba(90, 84, 149, 0)',
                    pointBorderColor: 'rgba(105, 154, 253, 0.5)',
                    pointBackgroundColor: 'rgba(105, 154, 253, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "Others",
                        data: [28, 48, 50, 19, 86, 27, 90],
                        borderColor: 'rgba(249, 106, 149, 0.6)',
                        backgroundColor: 'rgba(90, 84, 149, 0)',
                        pointBorderColor: 'rgba(249, 106, 149, 0.5)',
                        pointBackgroundColor: 'rgba(249, 106, 149, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    return config;
}

var graph, clickme;
function showChart(graph, clickme) {
    clickme.click(function(e) {
        graph.fadeIn();
    });
}

$(document).ready(function() {
    
    overviewChart = $('#overviewChart');
    meatChart = $('#meatChart');
    vegeChart = $('#vegeChart');
    fruitChart = $('#fruitChart');
    dairyChart = $('#dairyChart');
    confecChart = $('#confecChart');
    othersChart = $('#othersChart');
    sidebarOverview = $('sidebarOverview');
    sidebarMeat = $('sidebarMeat');
    sidebarVegetables = $('sidebarVegetables');    
    sidebarFruits = $('sidebarFruits');
    sidebarDairy = $('sidebarDairy');  
    sidebarConfectionery = $('sidebarConfectionery');  
    sidebarOthers = $('sidebarOthers');

/*
    showChart(overviewChart, sidebarOverview);
    showChart(meatChart, sidebarMeat);
    showChart(vegeChart, sidebarVegetables);
    showChart(fruitChart, sidebarFruits);
    showChart(dairyChart, sidebarDairy);
    showChart(confecChart, sidebarConfectionery);
    showChart(othersChart, sidebarOthers);
*/

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
});