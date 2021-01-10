<template>
  <div class="hello">
     <slot name="head" :value="list"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:'cccc'
    }
  },
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
