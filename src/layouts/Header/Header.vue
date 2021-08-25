<template>
  <header id="header">
    <div class="menu-left">
      <a-dropdown :getPopupContainer="triggerNode => {return triggerNode.parentNode || document.body;}"
                  :trigger="['click']">
        <a class="logo" href="/">
          <img :src="TopMenu.logo" alt="logo">
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item @click="sysInfo">
              关于本机
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item @click="AppStore">
              应用商店
            </a-menu-item>
            <a-menu-item @click="Settings">
              系统设置
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item @click="LockScreen">
              锁定屏幕
            </a-menu-item>
            <a-menu-item @click="Logout">
              退出登录
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <div class="app-menu">
        <a-dropdown :getPopupContainer="triggerNode => {return triggerNode.parentNode || document.body;}"
                    :trigger="['click']"
                    placement="bottomCenter">
          <div class="title">
            {{ TopMenu.title }}
          </div>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                应用设置
              </a-menu-item>
              <a-menu-divider/>
              <a-menu-item>
                应用信息
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <div class="menu-list">
          <a-dropdown v-for="(menu,index) in TopMenu.menuList"
                      :key="index"
                      :getPopupContainer="triggerNode => {return triggerNode.parentNode || document.body;}"
                      :trigger="['click']" placement="bottomCenter">
            <div class="menu-title">{{ menu.title }}</div>
            <template #overlay>
              <a-menu>
                <a-menu-item v-for="(item,index) in menu.item" :key="index">
                  {{ item.title }}
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
    <div class="menu-right">
      <div class="notice">
        <a-dropdown
            :getPopupContainer="triggerNode => {return triggerNode.parentNode || document.body;}"
            :trigger="['hover']"
            placement="bottomCenter"
        >
          <a-badge count="10" dot title="通知数量：10">
              <span class="notice-icon">
                <BellOutlined/>
              </span>
          </a-badge>
          <template #overlay>
            <a-card>
              <div class="notice-top">
                <div class="bar"/>
                <div class="notice-title">通知中心</div>
                <div class="notice-count">
                  <a-tag color="blue">10 条</a-tag>
                </div>
              </div>
              <a-row :gutter="[12,12]" class="user-info-card-top">
                <a-col :xs="24" @click="linkTo('Home')">
                  <a-card>
                    <div class="icon">
                      <RocketOutlined/>
                    </div>
                    <div class="title">
                      <div>系统升级</div>
                      <div class="sub-title">系统版本已升级至 v2.0 (Dev)</div>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="24" @click="linkTo('Home')">
                  <a-card>
                    <div class="icon">
                      <RedEnvelopeOutlined/>
                    </div>
                    <div class="title">
                      <div>充值返利</div>
                      <div class="sub-title">某某节日 充值返利</div>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="24" @click="linkTo('Home')">
                  <a-card>
                    <div class="icon">
                      <GiftOutlined/>
                    </div>
                    <div class="title">
                      <div>限免领取</div>
                      <div class="sub-title">点击立即免费领取XXX</div>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="24" @click="linkTo('Home')">
                  <a-card>
                    <div class="icon">
                      <ExperimentOutlined/>
                    </div>
                    <div class="title">
                      <div>内测先锋</div>
                      <div class="sub-title">参与活动抢先体验新功能</div>
                    </div>
                  </a-card>
                </a-col>
              </a-row>
              <div class="notice-bottom">
                <div>
                  清空通知
                </div>
                <div>
                  查看更多
                </div>
              </div>
            </a-card>
          </template>
        </a-dropdown>
      </div>

      <div class="control">
        <a-dropdown
            :getPopupContainer="triggerNode => {return triggerNode.parentNode || document.body;}"
            :trigger="['hover']"
            placement="bottomCenter"
        >
            <span class="notice-icon">
                <ControlOutlined/>
            </span>
          <template #overlay>
            <a-card>
              <div class="notice-top">
                <div class="bar"/>
                <div class="notice-title">控制中心</div>
                <div class="control-setting" @click="Settings">
                  <SettingOutlined/>
                </div>
              </div>
              <a-row :gutter="[12,12]" class="user-info-card-top">
                <a-col :xs="12">
                  <a-card>
                    <div class="control-icon">
                      <RocketOutlined/>
                    </div>
                    <div class="title">
                      <div class="main-title">Future OS</div>
                      <div class="sub-title"> v1.0.00</div>
                      <div class="sub-title">预览版</div>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="12">
                  <a-card>
                    <div class="title">
                      <div>平台名称</div>
                      <div class="sub-title">小存APP平台</div>
                    </div>
                  </a-card>
                  <a-card>
                    <div class="title">
                      <div>站点版本</div>
                      <div class="sub-title">全站超管 - 终极版</div>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="6">
                  <a-card>
                    <div class="control-icon">
                      <SettingOutlined/>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="6">
                  <a-card>
                    <div class="control-icon">
                      <SettingOutlined/>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="12">
                  <a-row :gutter="[12,12]" class="user-info-card-top">
                    <a-col :xs="24" @click="theme">
                      <a-card>
                        <div class="control-icon line">
                          <SkinOutlined/>
                        </div>
                        <div class="title">
                          主题切换
                        </div>
                      </a-card>
                    </a-col>
                    <a-col :xs="12">
                      <a-card>
                        <div class="control-icon">
                          <SettingOutlined/>
                        </div>
                      </a-card>
                    </a-col>
                    <a-col :xs="12">
                      <a-card>
                        <div class="control-icon">
                          <SettingOutlined/>
                        </div>
                      </a-card>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :xs="6">
                  <a-card>
                    <div class="control-icon">
                      <SettingOutlined/>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="6">
                  <a-card>
                    <div class="control-icon">
                      <SettingOutlined/>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="6">
                  <a-card>
                    <div class="control-icon">
                      <SettingOutlined/>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="6">
                  <a-card>
                    <div class="control-icon">
                      <SettingOutlined/>
                    </div>
                  </a-card>
                </a-col>
                <a-col :xs="24">
                  <a-card class="center">
                    <div class="control-icon line">
                      <ThunderboltOutlined/>
                    </div>
                    <div class="title">
                      花仙 - 提供强力UI驱动
                    </div>
                  </a-card>
                </a-col>
              </a-row>
            </a-card>
          </template>
        </a-dropdown>
      </div>

      <div v-if="!isLogin" class="user">
        <a-button shape="round" type="primary" @click="login">登录</a-button>
      </div>
      <div v-else class="user">
        <a-dropdown
            :getPopupContainer="triggerNode => {return triggerNode.parentNode || document.body;}"
            :trigger="['hover']"
            placement="bottomCenter"
        >
            <span>
              <a-avatar :src="'https://q4.qlogo.cn/headimg_dl?dst_uin='+user.qq+'&spec=100'"
                        shape="square" size="small"
              />
              <span class="user-name">{{ user.name }}
                <span v-if="user.name == ''">游客</span>
              </span>
            </span>
          <template #overlay>
            <a-card>
              <a-card :bordered="false" class="user-info-card-header purple">
                <a-avatar :size="64"
                          :src="'https://q4.qlogo.cn/headimg_dl?dst_uin='+user.qq+'&spec=100'"
                          shape="square"
                />
                <div class="user-info">
                  <div class="user-name">
                    {{ user.name }}
                    <span v-if="user.name == ''">游客</span>
                  </div>
                  <div class="user-id">
                    ID: {{ user.id }}
                    <span v-if="user.id == ''">无</span>
                  </div>
                </div>
              </a-card>
              <a-row :gutter="[12,12]" class="user-info-card-body">
                <a-col :xs="12" @click="linkTo('Home')">
                  <a-card>
                    <HomeOutlined/>
                    标题
                    <div class="sub-title">副标题</div>
                  </a-card>
                </a-col>
                <a-col :xs="12" @click="linkTo('Home')">
                  <a-card>
                    <HomeOutlined/>
                    标题
                    <div class="sub-title">副标题</div>
                  </a-card>
                </a-col>
                <a-col :xs="12" @click="linkTo('Home')">
                  <a-card>
                    <HomeOutlined/>
                    标题
                    <div class="sub-title">副标题</div>
                  </a-card>
                </a-col>
                <a-col :xs="12" @click="linkTo('Home')">
                  <a-card>
                    <HomeOutlined/>
                    标题
                    <div class="sub-title">副标题</div>
                  </a-card>
                </a-col>
              </a-row>
              <a-row :gutter="[12,12]" class="user-info-card-footer">
                <a-col :xs="6" @click="linkTo('Home')">
                  <HomeOutlined/>
                  <div>首页</div>
                </a-col>
                <a-col :xs="6" @click="linkTo('Home')">
                  <BellOutlined/>
                  <div>消息</div>
                </a-col>
                <a-col :xs="6" @click="linkTo('Home')">
                  <QuestionCircleOutlined/>
                  <div>反馈</div>
                </a-col>
                <a-col :xs="6" @click="Logout">
                  <LogoutOutlined/>
                  <div>退出</div>
                </a-col>
              </a-row>
            </a-card>
          </template>
        </a-dropdown>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {
  ArrowLeftOutlined,
  BellOutlined,
  ControlOutlined,
  ExperimentOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  GiftOutlined,
  HomeOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  RedEnvelopeOutlined,
  RocketOutlined,
  SettingOutlined,
  SkinOutlined,
  ThunderboltOutlined
} from '@ant-design/icons-vue';
import {message, Modal} from 'ant-design-vue';
import {createVNode, defineComponent} from 'vue';
import axios from "axios";
import {mapActions, mapState} from 'vuex'

import AppStore from "../../config/app/AppStore";

interface FormState {
  user: string;
  pass: string;
}

export default defineComponent({
  components: {
    HomeOutlined,
    LogoutOutlined,
    BellOutlined,
    QuestionCircleOutlined,
    RocketOutlined,
    RedEnvelopeOutlined,
    GiftOutlined,
    ExperimentOutlined,
    ControlOutlined,
    SettingOutlined,
    ThunderboltOutlined,
    SkinOutlined,
    ArrowLeftOutlined,
    FullscreenExitOutlined,
    FullscreenOutlined
  },
  data() {
    return {
      user: {
        id: '',
        name: ''
      },
      apps: [],
      isLogin: true,
      maxStatus: false,
      TopMenu: {}
    }
  },
  created() {
    this.isLoginx()
    this.TopMenu = this.menu
  },
  computed: {
    ...mapState({menu: state => state.os.menu})
  },
  methods: {
    ...mapActions(['OpenApp', 'UpdateMenu', 'CloseApp']),
    isLoginx() {
      // axios.get('/admin/ajax.php?act=islogin', {
      //   baseURL: 'http://apps.k77.co'
      // }).then(res => {
      //   if (res.data.code == 1) {
      //     this.isLogin = true;
      //     this.user = res.data;
      //     this.user.id = res.data.id
      //   } else {
      //     this.isLogin = false;
      //     const routerName = this.$route.name;
      //     if (routerName != 'Home') {
      //       this.$router.push({
      //         name: `Home`
      //       })
      //     }
      //   }
      // })
    },
    Logout() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;
      Modal.confirm({
        title: '退出',
        icon: createVNode(QuestionCircleOutlined),
        content: '确定要退出登录么？',
        okText: '退出',
        cancelText: '取消',
        centered: true,
        onOk() {
          axios.get('/admin/login.php?logout', {
            baseURL: 'http://apps.k77.co'
          });
          message.success('退出成功');
          setTimeout(() => {
            that.isLogin = false;
            const routerName = that.$route.name;
            if (routerName == 'Home') {
              location.reload()
            } else {
              that.$router.push({
                name: `Home`
              })
            }
          }, 1000)
        },
        onCancel() {
          message.config({top: '40px'})
          message.warn('取消退出')
        },
      })
    },
    linkTo(name: string) {
      this.$router.push({
        name: name,
        query: {
          uId: this.user.id
        }
      })
    },
    theme() {
      alert("点击了主题切换按钮")
    },
    sysInfo() {
      this.OpenApp({
        ico: 'https://aliyuncdn.antdv.com/v2/assets/logo.1ef800a8.svg',
        name: '关于本机',
        url: '/os/system/info',
        width: '520px',
        height: '260px',
        scale: false
      })
    },
    AppStore() {
      this.OpenApp(AppStore)
    },
    Settings() {
      this.OpenApp({
        ico: './images/setting.jpg',
        name: '系统设置',
        url: '/os/Settings'
      })
    },
    LockScreen() {
      alert("点击了锁定屏幕按钮")
    }
  }
})
</script>

<style lang="less">
.config {
  width: 800px !important;

  .ant-modal-content {
    border-radius: 8px !important;
    box-shadow: 0 6px 16px -8px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03);
  }

  .ant-modal-close-x {
    background: #e6e6e67a;
    border-radius: 6px;
    padding: 4px;
    width: auto;
    height: auto;
    line-height: 0;
    position: absolute;
    top: 20px;
    right: 24px;
  }
}
</style>
<style lang="less" scoped src="./header.less"/>
