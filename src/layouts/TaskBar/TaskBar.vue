<template>
  <footer id="footer">
    <div class="TaskBar minor left">
      <div class="TaskBar-content">
        <div class="app-icon">
          <AppstoreOutlined/>
        </div>
      </div>
    </div>

    <div class="TaskBar main">
      <div class="TaskBar-content">
        <a-dropdown v-for="(task,index) in taskList"
                    :key="task.ico"
                    :getPopupContainer="triggerNode"
                    :trigger="['contextmenu']" class="rightMouse" placement="topCenter">
          <a-tooltip>
            <template #title>{{ task.name }}</template>
            <div
                :class="{active: task.active && !task.min,open: task.open}"
                class="app-icon"
                @click="openApp(task,index)"
                @mousedown="UpToDown(task,index)" @mouseup="UpToDown(task,index)">
              <img :class="{'down': task.ud,'up':!task.ud}" :src="task.ico"/>
            </div>
          </a-tooltip>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="OpenApp(task,index)">
                {{ task.name }}
              </a-menu-item>
              <a-menu-item v-if="!task.fixed" @click="openApp(task,index)">
                固定应用
              </a-menu-item>
              <a-menu-item v-if="task.fixed" @click="openApp(task,index)">
                取消固定
              </a-menu-item>
              <a-menu-divider v-if="task.active || task.open"/>
              <a-menu-item v-if="task.active || task.open" @click="closeApp(task,index)">
                关闭窗口
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>

    <div class="TaskBar minor right">
      <div class="TaskBar-content">
        <div class="app-icon">
          <SettingOutlined/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {mapActions, mapState} from 'vuex'
import {message, Modal} from 'ant-design-vue';
import {AppstoreOutlined, SettingOutlined} from '@ant-design/icons-vue';

export default {
  name: "TaskBar",
  components: {
    AppstoreOutlined,
    SettingOutlined
  },
  data() {
    return {
      ud: true
    }
  },
  computed: {
    ...mapState({'taskList': state => state.os.taskList, 'windowList': state => state.os.windowList})
  },
  methods: {
    ...mapActions(['OpenApp', 'UpdateMenu', 'CloseApp']),
    triggerNode(triggerNode) {
      return (triggerNode.parentNode).parentNode || document.body;
    },
    UpToDown(task: { ud: boolean; }) {
      task.ud = !task.ud
    },
    openApp(task: any, index: any) {
      if (task.fixed == undefined) {
        task.fixed = false
      }

      let app = {
        ico: task.ico,
        name: task.name,
        url: task.url,
        width: '60%',
        height: '80%',
        menuList: task.menuList,
        fixed: task.fixed
      }

      this.OpenApp(app)
    },
    closeApp(task: { name: string; open: boolean; active: boolean; fixed: boolean; }, index: number) {
      const that = this
      Modal.confirm({
        title: '确定要关闭' + task.name + '吗?',
        icon: '',
        content: '',
        okText: '关闭',
        cancelText: '取消',
        class: 'closeModal',
        onOk() {
          that.CloseApp(task)
        },
        onCancel() {
          message.info('取消关闭');
        }
      });
    }
  }
}
</script>

<style lang="less" scoped src="./taskBar.less"/>
