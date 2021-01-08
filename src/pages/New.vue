<template>
  <div class="hello">
      <titles v-model="title"></titles>
      {{title}}

      <titles-2 :fx.sync="fx" />
      {{fx}}
      <titles-3 />
  </div>
</template>

<script>
import Titles from './Title'
import Titles2 from './Title2'
import Titles3 from './Title3'
import mitter from '../utils/mx'
export default {
  name: 'News',
  data(){
      return {
          title:'',
          fx:""
      }
  },
  components:{
     Titles ,
     Titles2,
     Titles3
  },
  mounted(){
      mitter.on('changeName',(e)=>{
          console.log(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>