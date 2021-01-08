<template>
  <div class="hello">
      Title2
      <input  :value="fx" @input="change"/>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props:{
     fx:{
         type:String
     }
  },
  methods:{
      change(event){
          this.$emit("update:fx",event.target.value)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>