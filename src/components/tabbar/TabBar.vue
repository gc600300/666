<template>

    <div id="tab-bar">
      <slot></slot>
    </div>

</template>

<script>

require("../../assets/iconfont/iconfont.css")
export default {

}
</script>

<style>

#tab-bar{
 
  display: flex;
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 3px rgba(100, 100,100, 0.2);
}

</style>
