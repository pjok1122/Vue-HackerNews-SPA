<template>
  <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
// import Chart from 'chart.js';
export default {
    mounted(){
        //vue에서는 this.refs.lineChart로 DOM에 접근한다. refs는 컴포넌트 기반의 개발 방식에 적합하다.
        //DOM에서 같은 id를 가지면 충돌이 나지만 ref는 컴포넌트에서만 사용가능하기 때문.

        // var ctx = document.getElementById('lineChart').getContext('2d');
        var ctx = this.$refs.lineChart.getContext('2d');
        var chart = new this.$_Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },

            // Configuration options go here
            options: {}
        });
    }
}
</script>

<style>

</style>