<template>
    <div>
    <highcharts  :options="chartOptions" ref="chart" v-if="request_data.length" :key="request_data.length"></highcharts>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
Vue.use(HighchartsVue)


export default {
  props: {
    request_data: {}
  },

  data() {
        return {
            chartOptions: {
                
            legend: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top'
            },
            
        

            title: {
                text: 'Statistic'
            },
            series: [
                {
                data: [],
                name: 'queries',
                color: '#176de6',
                tooltip: {
                valueDecimals: 2
            }
                },

                {
                data: [],
                name: 'groups',
                color: '#e3e317'
                },

                {
                data: [],
                name: 'documents',
                color: '#3de617'
                },

                {
                data: [],
                name: 'categories',
                color: '#e31717'
                },

            ],

            xAxis: {
                categories: []
            }
    }
  }
},
  computed: {
        ...mapGetters([
            'DATA'
    ]),

  },
        methods : {
        ...mapActions([
            'GET_DATA'
        ]),
        setDatas(){
            return setTimeout(()=>{
               for(let i=0; i<this.request_data.length; i++){
                    this.chartOptions.series[0].data = Object.values(this.request_data[0])[1].map(e=>e.value)
                    this.chartOptions.series[1].data = Object.values(this.request_data[1])[1].map(e=>e.value)
                    this.chartOptions.series[2].data = Object.values(this.request_data[2])[1].map(e=>e.value)
                    this.chartOptions.series[3].data = Object.values(this.request_data[3])[1].map(e=>e.value)
                    this.chartOptions.xAxis.categories = Object.values(this.request_data[0])[1].map(e=>new Date(e.date).getFullYear())
               }
            }, 500)
        },
 
  },
  created() {
        this.GET_DATA()
        this.setDatas()   
  }
  }
</script>