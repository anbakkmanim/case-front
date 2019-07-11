<template>
  <div>
    <vue-apex-charts type="pie" height="350" :options="pieChart.chartOptions" :series="pieChart.series"></vue-apex-charts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  data() {
    return {
      themeColors: ['#FFFF00', '#28C76F'],
      pieChart: {
        series: [10, 5],
        chartOptions: {
          labels: ['정답', '오답'],
          colors: ['#FFFF00', '#0000FF'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          }],
        },
      },
    };
  },
  components: {
    VueApexCharts,
  },
};
</script>

<style>

</style>
