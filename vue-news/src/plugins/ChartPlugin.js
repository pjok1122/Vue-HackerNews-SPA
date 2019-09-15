import Chart from 'chart.js';

export default{
    install(Vue){
        //다른 컴포넌트나 main.js에서 Vue.use(ChartPlugin) 을 명시할 경우 install이 실행된다.
        console.log('install');
        Vue.prototype.$_Chart = Chart;
    }
}