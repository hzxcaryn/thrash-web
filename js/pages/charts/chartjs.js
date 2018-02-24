Chart.defaults.global.defaultFontColor = '#9c9fce';
$(function () {
    new Chart(document.getElementById("generalChart").getContext("2d"), getChartJs('line'));
});

function getChartJs(type) {
    var config = null;

    if (type === 'line') {
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
    }
    return config;
}