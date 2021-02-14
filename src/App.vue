<template>
  <div>
    <charts :request_data="DATA"
    />
    <v-table
      :request_data="DATA"
    />
  </div> 
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Charts from './components/v-charts'
import VTable from './components/v-table'

export default {
  
  components: {
  Charts, VTable
  },
  computed: {
    ...mapGetters([
      'DATA'
    ])
  },
  methods : {
    ...mapActions([
      'GET_DATA'
      ]),

    
  },

  mounted() {
    return this.GET_DATA()
    
  }
  
  }
</script>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;

}
</style>
