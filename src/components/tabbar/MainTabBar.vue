<template>

 <tab-bar> 
   <tab-bar-item path="/basketball" activeColor="yellow">
     <span slot="iconfont" class="iconfont icon-lanqiu"></span>
    <p slot="name" >篮球</p>
     </tab-bar-item>
  <tab-bar-item   path="/soccer" activeColor="purple"><span slot="iconfont" class="iconfont icon-zuqiu-copy"></span>
    <p  slot="name">足球</p></tab-bar-item>
   <tab-bar-item  path="/baseball" activeColor="green"> <span slot="iconfont" class="iconfont icon-bangqiu"></span>
    <p   slot="name">棒球</p></tab-bar-item>
    <tab-bar-item  path="/tennis">  <span slot="iconfont" class="iconfont icon-wangqiu"></span>
    <p  slot="name">网球</p></tab-bar-item>
    </tab-bar>

</template>

<script> 
import  TabBar from './TabBar'
import TabBarItem from './TabBarItem'
export default {
components:{
     TabBar,
     TabBarItem
}
}
</script>

<style>
.icon-lanqiu{
  color: brown !important;
}
.icon-zuqiu-copy{
  color:black !important;
}
.icon-bangqiu{
  color:deepskyblue !important;
}
.icon-wangqiu{
  color: purple !important;
}
.iconfont{
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 10px;

}
</style>