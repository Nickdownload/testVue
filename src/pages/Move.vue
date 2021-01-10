<template>
  <div class="warpper">
      <move-to min.number="0.2" max.number="0.8" :value.sync="value"></move-to>
  </div>
</template>

<script>
import MoveTo from '../components/Move-to/Move-to'
export default {
  name: 'Food',
  data(){
   return {
     value:0.4
   }
  },
  components:{
    MoveTo
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .warpper{
   height:400px ;
   width:600px;
   background: yellowgreen;
 }
</style>