<template>
    <div>
      <div class="title" @click="isShow=!isShow"><slot name="title"></slot><span class="font" :style="{transform: cs}">^</span></div>
      <div v-if="isShow"><slot name="sub"></slot></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow:false
        }
    },
    computed:{
        cs(){
            return this.isShow ? '' : 'rotate(180deg)'
        }
    }
}
</script>
<style scoped>
.title{
    background: tomato;
    text-align: left;
}
.font{
    float: right;
}
</style>