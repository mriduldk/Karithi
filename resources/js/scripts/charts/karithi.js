

$(function() {
    'use strict';

    var $textHeadingColor = '#5e5873';
    var $strokeColor = '#ebe9f1';
    var $labelColor = '#e7eef7';
    var $avgSessionStrokeColor2 = '#ebf0f7';
    var $budgetStrokeColor2 = '#dcdae3';
    var $goalStrokeColor2 = '#51e5a8';
    var $revenueStrokeColor2 = '#d0ccff';
    var $textMutedColor = '#b9b9c3';
    var $salesStrokeColor2 = '#df87f2';
    var $white = '#fff';
    var $earningsStrokeColor2 = '#28c76f66';
    var $earningsStrokeColor3 = '#28c76f33';

    // Donut Chart
    // --------------------------------------------------------------------
    var donutChartEl = document.querySelector('#donut-chart-1'),
        donutChartConfig1 = {
            chart: {
                height: 350,
                type: 'donut'
            },
            legend: {
                show: true,
                position: 'bottom'
            },
            labels: ['Elementry', 'LP', 'UP', 'HS'],
            series: [85, 16, 50, 50],
            colors: [
                chartColors.donut.series1,
                chartColors.donut.series5,
                chartColors.donut.series3,
                chartColors.donut.series2
            ],
            dataLabels: {
                enabled: true,
                formatter: function(val, opt) {
                    return parseInt(val) + '%';
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                fontSize: '2rem',
                                fontFamily: 'Montserrat'
                            },
                            value: {
                                fontSize: '1rem',
                                fontFamily: 'Montserrat',
                                formatter: function(val) {
                                    return parseInt(val) + '%';
                                }
                            },
                            total: {
                                show: true,
                                fontSize: '1.5rem',
                                label: 'Total',
                                formatter: function(w) {
                                    return '201';
                                }
                            }
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 380
                        }
                    }
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 320
                        },
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        name: {
                                            fontSize: '1.5rem'
                                        },
                                        value: {
                                            fontSize: '1rem'
                                        },
                                        total: {
                                            fontSize: '1.5rem'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };

    var donutChartE2 = document.querySelector('#donut-chart-2'),
        donutChartConfig2 = {
            chart: {
                height: 350,
                type: 'donut'
            },
            legend: {
                show: true,
                position: 'bottom'
            },
            labels: ['Male', 'Female'],
            series: [70, 30],
            colors: [
                chartColors.donut.series1,
                chartColors.donut.series5,
                chartColors.donut.series3,
                chartColors.donut.series2
            ],
            dataLabels: {
                enabled: true,
                formatter: function(val, opt) {
                    return parseInt(val) + '%';
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                fontSize: '2rem',
                                fontFamily: 'Montserrat'
                            },
                            value: {
                                fontSize: '1rem',
                                fontFamily: 'Montserrat',
                                formatter: function(val) {
                                    return parseInt(val) + '%';
                                }
                            },
                            total: {
                                show: true,
                                fontSize: '1.5rem',
                                label: 'Operational',
                                formatter: function(w) {
                                    return '31%';
                                }
                            }
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 380
                        }
                    }
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 320
                        },
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        name: {
                                            fontSize: '1.5rem'
                                        },
                                        value: {
                                            fontSize: '1rem'
                                        },
                                        total: {
                                            fontSize: '1.5rem'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };

    var donutChartE3 = document.querySelector('#donut-chart-3'),
        donutChartConfig3 = {
            chart: {
                height: 350,
                type: 'donut'
            },
            legend: {
                show: true,
                position: 'bottom'
            },
            labels: ['Pre Primary', 'Primary', 'Upper Primary', 'Secondary'],
            series: [85, 16, 50, 50],
            colors: [
                chartColors.donut.series1,
                chartColors.donut.series5,
                chartColors.donut.series3,
                chartColors.donut.series2
            ],
            dataLabels: {
                enabled: true,
                formatter: function(val, opt) {
                    return parseInt(val) + '%';
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                fontSize: '2rem',
                                fontFamily: 'Montserrat'
                            },
                            value: {
                                fontSize: '1rem',
                                fontFamily: 'Montserrat',
                                formatter: function(val) {
                                    return parseInt(val) + '%';
                                }
                            },
                            total: {
                                show: true,
                                fontSize: '1.5rem',
                                label: 'Operational',
                                formatter: function(w) {
                                    return '31%';
                                }
                            }
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 380
                        }
                    }
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 320
                        },
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        name: {
                                            fontSize: '1.5rem'
                                        },
                                        value: {
                                            fontSize: '1rem'
                                        },
                                        total: {
                                            fontSize: '1.5rem'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };

    var donutChartE4 = document.querySelector('#donut-chart-4'),
        donutChartConfig4 = {
            chart: {
                height: 350,
                type: 'donut'
            },
            legend: {
                show: true,
                position: 'bottom'
            },
            labels: ['Lower Primary', 'Upper Primary', 'High School', 'HS School'],
            series: [85, 16, 50, 50],
            colors: [
                chartColors.donut.series1,
                chartColors.donut.series5,
                chartColors.donut.series3,
                chartColors.donut.series2
            ],
            dataLabels: {
                enabled: true,
                formatter: function(val, opt) {
                    return parseInt(val) + '%';
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                fontSize: '2rem',
                                fontFamily: 'Montserrat'
                            },
                            value: {
                                fontSize: '1rem',
                                fontFamily: 'Montserrat',
                                formatter: function(val) {
                                    return parseInt(val) + '%';
                                }
                            },
                            total: {
                                show: true,
                                fontSize: '1.5rem',
                                label: 'Operational',
                                formatter: function(w) {
                                    return '31%';
                                }
                            }
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 380
                        }
                    }
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 320
                        },
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        name: {
                                            fontSize: '1.5rem'
                                        },
                                        value: {
                                            fontSize: '1rem'
                                        },
                                        total: {
                                            fontSize: '1.5rem'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };


    if (typeof donutChartEl !== undefined && donutChartEl !== null) {
        var donutChart = new ApexCharts(donutChartEl, donutChartConfig1);
        donutChart.render();
    }

    if (typeof donutChartE2 !== undefined && donutChartE2 !== null) {
        var donutChart = new ApexCharts(donutChartE2, donutChartConfig2);
        donutChart.render();
    }

    if (typeof donutChartE3 !== undefined && donutChartE3 !== null) {
        var donutChart = new ApexCharts(donutChartE3, donutChartConfig3);
        donutChart.render();
    }

    if (typeof donutChartE4 !== undefined && donutChartE4 !== null) {
        var donutChart = new ApexCharts(donutChartE4, donutChartConfig4);
        donutChart.render();
    }

    var polarAreaChartEx = $('.polar-area-chart-ex');
    var polarExample = new Chart(polarAreaChartEx, {
        type: 'polarArea',
        options: {
          responsive: true,
          maintainAspectRatio: false,
          responsiveAnimationDuration: 500,
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
              padding: 25,
              boxWidth: 9,
              fontColor: labelColor
            }
          },
          layout: {
            padding: {
              top: -5,
              bottom: -45
            }
          },
          tooltips: {
            // Updated default tooltip UI
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 8,
            shadowColor: tooltipShadow,
            backgroundColor: window.colors.solid.white,
            titleFontColor: window.colors.solid.black,
            bodyFontColor: window.colors.solid.black
          },
          scale: {
            scaleShowLine: true,
            scaleLineWidth: 1,
            ticks: {
              display: false,
              fontColor: labelColor
            },
            reverse: false,
            gridLines: {
              display: false
            }
          },
          animation: {
            animateRotate: false
          }
        },
        data: {
          labels: ['Africa', 'Asia', 'Europe', 'America', 'Antarctica', 'Australia'],
          datasets: [
            {
              label: 'Population (millions)',
              backgroundColor: [
                primaryColorShade,
                warningColorShade,
                window.colors.solid.primary,
                infoColorShade,
                greyColor,
                successColorShade
              ],
              data: [19, 17.5, 15, 13.5, 11, 9],
              borderWidth: 0
            }
          ]
        }
      });



    var chartWrapper = $('.chartjs')
    var lineChartEx = $('.line-chart-ex')

    if (chartWrapper.length) {
        chartWrapper.each(function () {
          $(this).wrap($('<div style="height:' + this.getAttribute('data-height') + 'px"></div>'));
        });
      }

    // Line Chart
    // --------------------------------------------------------------------
    if (lineChartEx.length) {
        var lineExample = new Chart(lineChartEx, {
        type: 'line',
        plugins: [
            // to add spacing between legends and chart
            {
            beforeInit: function (chart) {
                chart.legend.afterFit = function () {
                this.height += 20;
                };
            }
            }
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            backgroundColor: false,
            hover: {
            mode: 'label'
            },
            tooltips: {
            // Updated default tooltip UI
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 8,
            shadowColor: tooltipShadow,
            backgroundColor: window.colors.solid.white,
            titleFontColor: window.colors.solid.black,
            bodyFontColor: window.colors.solid.black
            },
            layout: {
            padding: {
                top: -15,
                bottom: -25,
                left: -15
            }
            },
            scales: {
            xAxes: [
                {
                display: true,
                scaleLabel: {
                    display: true
                },
                gridLines: {
                    display: true,
                    color: grid_line_color,
                    zeroLineColor: grid_line_color
                },
                ticks: {
                    fontColor: labelColor
                }
                }
            ],
            yAxes: [
                {
                display: true,
                scaleLabel: {
                    display: true
                },
                ticks: {
                    stepSize: 100,
                    min: 0,
                    max: 400,
                    fontColor: labelColor
                },
                gridLines: {
                    display: true,
                    color: grid_line_color,
                    zeroLineColor: grid_line_color
                }
                }
            ]
            },
            legend: {
            position: 'top',
            align: 'start',
            labels: {
                usePointStyle: true,
                padding: 25,
                boxWidth: 9
            }
            }
        },
        data: {
            labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
            datasets: [
            {
                data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
                label: 'Europe',
                borderColor: lineChartDanger,
                lineTension: 0.5,
                pointStyle: 'circle',
                backgroundColor: lineChartDanger,
                fill: false,
                pointRadius: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5,
                pointBorderColor: 'transparent',
                pointHoverBorderColor: window.colors.solid.white,
                pointHoverBackgroundColor: lineChartDanger,
                pointShadowOffsetX: 1,
                pointShadowOffsetY: 1,
                pointShadowBlur: 5,
                pointShadowColor: tooltipShadow
            },
            {
                data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
                label: 'Asia',
                borderColor: lineChartPrimary,
                lineTension: 0.5,
                pointStyle: 'circle',
                backgroundColor: lineChartPrimary,
                fill: false,
                pointRadius: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5,
                pointBorderColor: 'transparent',
                pointHoverBorderColor: window.colors.solid.white,
                pointHoverBackgroundColor: lineChartPrimary,
                pointShadowOffsetX: 1,
                pointShadowOffsetY: 1,
                pointShadowBlur: 5,
                pointShadowColor: tooltipShadow
            },
            {
                data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
                label: 'Africa',
                borderColor: warningColorShade,
                lineTension: 0.5,
                pointStyle: 'circle',
                backgroundColor: warningColorShade,
                fill: false,
                pointRadius: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5,
                pointBorderColor: 'transparent',
                pointHoverBorderColor: window.colors.solid.white,
                pointHoverBackgroundColor: warningColorShade,
                pointShadowOffsetX: 1,
                pointShadowOffsetY: 1,
                pointShadowBlur: 5,
                pointShadowColor: tooltipShadow
            }
            ]
        }
        });
    }


    // Sales Line Chart
    // -----------------------------

    var salesLineChart = document.querySelector('#sales-line-chart-bodo');
    var salesLineChartOptions = {
        chart: {
        height: 240,
        toolbar: { show: false },
        zoom: { enabled: false },
        type: 'line',
        dropShadow: {
            enabled: true,
            top: 18,
            left: 2,
            blur: 5,
            opacity: 0.2
        },
        offsetX: -10
        },
        stroke: {
        curve: 'smooth',
        width: 4
        },
        grid: {
        borderColor: $strokeColor
        },
        legend: {
        show: false
        },
        olors: [$salesStrokeColor2],
        fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            inverseColors: false,
            gradientToColors: [window.colors.solid.primary],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
        }
        },
        markers: {
        size: 0,
        hover: {
            size: 5
        }
        },
        xaxis: {
        labels: {
            style: {
            colors: $textMutedColor,
            fontSize: '1rem'
            }
        },
        axisTicks: {
            show: false
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: false
        },
        tickPlacement: 'on'
        },
        yaxis: {
        tickAmount: 5,
        labels: {
            style: {
            colors: $textMutedColor,
            fontSize: '1rem'
            },
            formatter: function (val) {
            return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
            }
        }
        },
        tooltip: {
        x: { show: false }
        },
        series: [
        {
            name: 'Bodo',
            data: [160, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 300]
        }
        ]
    };
    salesLineChart = new ApexCharts(salesLineChart, salesLineChartOptions);
    salesLineChart.render();




});