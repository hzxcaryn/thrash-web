Chart.defaults.global.defaultFontColor = '#9c9fce';
var overviewChart;
$(function () {
    overviewChart = new Chart(document.getElementById("overviewChart").getContext("2d"), getChartJs('line', 'overviewChart'));
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
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Food Waste",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(105, 154, 253, 0.6)',
                    backgroundColor: 'rgba(90, 84, 149, 0)',
                    pointBorderColor: 'rgba(105, 154, 253, 0.5)',
                    pointBackgroundColor: 'rgba(105, 154, 253, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "Other Waste",
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
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Meat Waste",
                    data: [20, 10, 30, 25, 15, 8, 30],
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
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Vegetable Waste",
                    data: [65, 59, 80, 81, 56, 55, 40],
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
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Fruit Waste",
                    data: [20, 15, 17, 12, 14, 19, 14],
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
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Dairy Waste",
                    data: [25, 27, 32, 22, 19, 20, 10],
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
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Confectionery Waste",
                    data: [10, 5, 3, 7, 0, 8, 3],
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
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Other Waste",
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
    }
    return config;
}

var graph, clickme;
function showChart(graph, clickme) {
    clickme.click(function(e) {
        graph.fadeIn();
    });
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

$('body').click(function () {
    overviewChart.data.datasets[0].data[6] += 3;//this update the value of Sun
    overviewChart.update();
    var sum = overviewChart.data.datasets[0].data.reduce(function(a, b) { return a + b; }, 0);
    var cost = (sum * (0.03128)).toFixed(2);
    $('#summary-text').text(`A total of ${sum} g of food wasted this week! That means an estimated amout of $${cost} wasted in a week!`);
});

$(document).ready(function() { 

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })


});
