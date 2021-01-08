<template>
  <div class="hello">
      Title2
      <input  :value="name" @input="change"/>
  </div>
</template>

<script>
import mitter from '../utils/mx'
export default {
  name: 'Title',
   data(){
     return {
       name:''
     }
   } ,
  methods:{
      change(event){
        console.log()
         mitter.emit('changeName',event.target.value)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>