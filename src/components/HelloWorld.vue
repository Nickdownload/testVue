<template>
  <div class="hello">
   <slot-view >
      <template #head="item">
        {{item}}
      </template>
   </slot-view>
  </div>
</template>

<script>
import SlotView from './Slot-view'
export default {
  name: 'HelloWorld',
  components:{
    SlotView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
