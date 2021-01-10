<template>
  <div class="hello">
      Home
      {{name}}

      {{friend}}
      <button @click="btnClick">点击 </button>
       <button @click="btn">Friend </button>

       <button @click="req">发送请求</button>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import request from '../utils/request'
export default {
  name: 'home',
  computed:{
   ...mapState('folder', ['name']),
   ...mapState('user',{
     friend:state=>state.friend
   })
  },
  methods:{
   ...mapMutations('folder',{
      changeName:'changeName' 
   }),
   ...mapMutations('user',{
     changeFriend:'changeFriend'
   }),
    btnClick(){
      this.changeName("99999")
    },
    btn(){
      this.changeFriend('Nic')
    },
    req(){
      request({
        url:'/users'
      }).then(res=>{
        console.log(res)
      })
    }
  },
  mounted(){
      console.log(this.$store)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>