<template>
  <div class="hello">
     <div>
       <a-menu>
        <template v-for="item in list" >
        <a-menu-item :key="item.id">
           <template #title>
               {{item.title}}
           </template>
           <template v-if="item.children" #sub>
             <re-submenu :parent="item.children"></re-submenu>
           </template>
         </a-menu-item>
       </template>
         
         <!-- <a-menu-item>
           <template #title>
               project
           </template>
         </a-menu-item>
         <a-menu-item>
           <template #title>
               happy
           </template>
           <template #sub>
             <a-submenu>666</a-submenu>
             <a-submenu>666</a-submenu>
           </template>
         </a-menu-item> -->
       </a-menu>
     </div>
  </div>
</template>

<script>
import AMenu from '../components/menu/AMenu'
 import AMenuItem from '../components/menu/AMenuItem'
 import ReSubmenu from './ReSubmenu'
//  import ASubmenu from '../components/menu/ASubmenu'
export default {
  data(){
    return {
      list:[
        {
          id:1,
          title:"folder"
        },
        {
          id:2,
          title:"document",
           children:[
                  {
                    id:48,
                    title:"haidao",
                  },
                   {
                    id:48,
                    title:"wangzhe",
                  }
              ]
        },
        {
          id:3,
          title:"project",
          children:[
            {
              id:4,
              title:"Nick",
              children:[
                  {
                    id:41,
                    title:"Nick22222",
                  },
                   {
                    id:42,
                    title:"demi222222222",
                  }
              ]
            },
            {
              id:5,
              title:"Demi"
            }
          ]
        }
      ]
    }
  },
  name: 'Menu',
  components:{
    AMenu,
     AMenuItem,
     ReSubmenu,
    //  ASubmenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 300px;
    text-align: left;
  }
</style>
