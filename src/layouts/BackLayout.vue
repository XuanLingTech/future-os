<template>
  <div class="bg"/>
  <Header/>
  <div class="desktop">
    <Desktop/>
  </div>
  <TaskBar/>
</template>

<script lang="ts">
import Header from "./Header/Header.vue";
import Desktop from "./Desktop/Desktop.vue";
import TaskBar from "./TaskBar/TaskBar.vue";

export default {
  name: "BackLayout",
  components: {
    Header,
    Desktop,
    TaskBar
  },
  data() {
    return {
      active: false
    }
  }
}
</script>

<style lang="less" scoped>
.bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("../assets/bg.jpg") no-repeat fixed;
  background-size: 100% 100%;
  z-index: -9999;
}

.desktop {
  position: fixed;
  top: 32px;
  left: 0;
  right: 0;
  bottom: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  user-select: none;
}
</style>
