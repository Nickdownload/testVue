<template>
  <div class="wrapper" ref="wrapper">
      <div class="left" :style="{width:cumLeft}">
          <button @click="add">点击</button>
      </div>
      <div class="target" @mousedown="change" :style="{left:targetCenter}"></div>
      <div class="right" :style="{left:cumLeft}"></div>
  </div>
</template>

<script>
export default {
  name: 'Food',
  props:{
      min:{
          type:Number,
          default:0.1
      },
      max:{
          type:Number,
          default:0.9
      },
      value:{
          type:Number,
          default:0.3
      }
  },
  data(){
      return{
          offsetLeft:0.3,
          canMove:false
      }
  },
  methods:{
    add(){
        this.value=this.value+0.1
    },
    change(){
      this.canMove=true  
      document.addEventListener('mousemove',this.mouseMoveEvent)
      document.addEventListener('mouseup',this.mouseUpEvent)
    },
    mouseMoveEvent(e){
        console.log(e)
       if(!this.canMove) return 
       let V;
       const outerRect =this.$refs.wrapper.getBoundingClientRect()
       let cLeft =outerRect.left
       let pageX= e.pageX
       let ofL=(pageX-cLeft) / outerRect.width
       if(ofL<=this.min){
         V = this.min
       }else if(ofL>=this.max) {
    V = this.max
       }else{
    V=ofL
       }
       console.log(V)
        this.$emit('update:value',V)
    },
    mouseUpEvent(){
       this.canMove=false
    },
       fangdou(fn,time){
        let timer;
        return function(){
            console.log(...arguments)
            if(timer){
                clearTimeout(timer)
            }
           timer =setTimeout(()=>{
             fn.apply(this,...arguments)
           },time)
        }
    }
  },
  computed:{
      cumLeft(){
          return `${this.value*100}%`
      },
      targetCenter(){
          console.log(`calc(${this.cumLeft}-4px)`)
          return `calc(${this.cumLeft} - 4px)`
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .wrapper{
   width: 100%;
   height: 100%;
   position: relative;
 }
 .left{
  position:absolute;
  top:0;
  left:0;
  height: 100%;
  background: pink;
 }
 .right{
    position:absolute;
    top:0;
    right: 0; 
    height: 100%;
    background: yellow;
 }
 .target{
     position: absolute;
     z-index: 4;
     width: 8px;
     top:0;
     height: 100%;
     background: tomato;
     user-select: none;
 }
</style>