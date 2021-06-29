<template>
     <div class="tabbar-item" @click="itemClick">
       <img src="~img/1.jpg" alt="">
        <slot name="iconfont"></slot>
       <div :class="{active:isactive}" :style="isactiveColor"><slot name="name"></slot></div> 
     </div>
</template>

<script>
export default {
 data(){
    return{

    }
     
  },
  props:{
      path:{
        type:String
      },
      activeColor:{
        type:String,
        default:'red'
      }
  }
  ,
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  },
  computed:{
       isactive(){
         return this.path.indexOf(this.$route.path)!==-1;
       },
       isactiveColor(){
         return this.isactive?{color:this.activeColor}:{}
       }
  }
}
</script>

<style>
.tabbar-item img{
  width: 20px;
  height: 20px;
}
.tabbar-item p{
  margin-top:3px ;
}
.tabbar-item{
  flex:1;
  padding-top:3px ;
  font-size: 15px;
  height: 49px;
  text-align: center;
}
.tabbar-item:nth-child(4){
   border-right: none;
}

</style>