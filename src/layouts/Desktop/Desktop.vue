<template>
  <div v-for="(app,index) in windowList" :key="index" :class="{active:app.active,max: app.max,min:app.min}"
       :style="{width: app.width,height: app.height}"
       class="window" @click="activeApp(app)">
    <div class="title" @mousedown="move" @mouseup="moveDone">
      {{ app.name }}
      <div class="btn">
        <MinusOutlined @click="min(app)"/>
        <FullscreenExitOutlined v-if="!scaleStatus && app.scale" @click="scale(index)"/>
        <FullscreenOutlined v-if="scaleStatus && app.scale" @click="scale(index)"/>
        <CloseOutlined @click="closeApp(app)"/>
      </div>
    </div>
    <div class="body">
      <div v-if="!app.active || dragStatus" class="not-active"/>
      <iframe :src="app.url"/>
    </div>
  </div>
</template>

<script lang="ts">
import {mapActions, mapState} from 'vuex'
import {message, Modal} from 'ant-design-vue';
import {CloseOutlined, FullscreenExitOutlined, FullscreenOutlined, MinusOutlined} from '@ant-design/icons-vue';

export default {
  name: "Desktop",
  components: {
    CloseOutlined,
    MinusOutlined,
    FullscreenExitOutlined,
    FullscreenOutlined
  },
  data() {
    return {
      scaleStatus: true,
      minStatus: false,
      dragStatus: false
    }
  },
  computed: {
    ...mapState({windowList: state => state.os.windowList})
  },
  methods: {
    ...mapActions(['ActiveApp', 'CloseApp', 'MinApp']),
    move(e) {
      this.dragStatus = true
      if (e.target.className == 'title') {
        let odiv = e.target.offsetParent;
        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft;
        let disY = e.clientY - odiv.offsetTop;
        document.onmousemove = (e) => {       //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;
          if (top < 12) {
            top = 0
          }
          //移动当前元素
          odiv.style.left = left + 'px';
          odiv.style.top = top + 'px';
        };
        document.onmouseup = (e) => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    },
    moveDone() {
      this.dragStatus = false
    },
    activeApp(app: any) {
      this.ActiveApp(app)
    },
    min(app: any) {
      this.MinApp(app)
    },
    scale(index: number) {
      this.windowList.map((item: { max: boolean; }, indexApp: number) => {
        if (index == indexApp) {
          item.max = !item.max
        }
      })
      this.scaleStatus = !this.scaleStatus
    },
    closeApp(app: { name: string; }) {
      const that = this
      Modal.confirm({
        title: '确定要关闭' + app.name + '吗?',
        icon: '',
        content: '',
        okText: '关闭',
        cancelText: '取消',
        class: 'closeModal',
        onOk() {
          that.CloseApp(app)
        },
        onCancel() {
          message.config({top: '40px'})
          message.info('取消关闭');
        }
      });
    }
  }
}
</script>

<style lang="less">
.closeModal {
  .ant-modal-content {
    border-radius: 8px;
  }
}
</style>

<style lang="less" scoped src="./desktop.less"/>
