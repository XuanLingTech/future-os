<template>
  <a-row class="install">
    <div class="install-filter"/>
    <a-col :lg="16" :md="18" :sm="22" :xl="12" :xs="22">
      <div class="install-card">
        <ArrowLeftOutlined v-if="current > 1" class="back" @click="prev"/>
        <div class="install-title">
          Future OS 安装
        </div>
        <div v-if="current == 1" class="install-step">
          <div class="step-title">激活系统</div>
          <div class="install-content">
            <div class="guide">
              请输入您购买的激活密钥，以启用Future OS，享受来自未来的云服务
            </div>
            <a-row class="key-box">
              <a-col :xs="4">
                <div class="key-value">
                  <input/>
                </div>
              </a-col>
              <a-col :xs="4">
                <div class="key-value">
                  <input/>
                </div>
              </a-col>
              <a-col :xs="4">
                <div class="key-value">
                  <input/>
                </div>
              </a-col>
              <a-col :xs="4">
                <div class="key-value">
                  <input/>
                </div>
              </a-col>
              <a-col :xs="4">
                <div class="key-value">
                  <input/>
                </div>
              </a-col>
              <a-col :xs="4">
                <div class="key-value">
                  <input/>
                </div>
              </a-col>
            </a-row>
          </div>
          <div class="btn-group">
            <a-button class="btn" size="large" type="primary" @click="next">激 活</a-button>
          </div>
        </div>
        <div v-if="current == 2" class="install-step">
          <div class="step-title">创建账户</div>
          <div class="install-content">
            <div class="guide">
              此账户将作为系统的超级管理员，请认真填写并牢记
            </div>
            <a-form
                :model="formState"
                layout="vertical"
                @finish="handleFinish"
                @finishFailed="handleFinishFailed"
            >
              <a-form-item>
                <a-input v-model:value="formState.user" placeholder="账户" size="large">
                  <template #prefix>
                    <UserOutlined style="color: rgba(0, 0, 0, 0.25)"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input v-model:value="formState.password" placeholder="密码" size="large" type="password">
                  <template #prefix>
                    <LockOutlined style="color: rgba(0, 0, 0, 0.25)"/>
                  </template>
                </a-input>
              </a-form-item>
            </a-form>
          </div>
          <div class="btn-group">
            <a-button :disabled="formState.user === '' || formState.password === ''" class="btn" html-type="submit"
                      size="large" type="primary" @click="next">创 建
            </a-button>
          </div>
        </div>
        <div v-if="current == 3" class="install-step">
          <div class="step-title">安装完毕</div>
          <div class="install-content">
            <div class="guide">
              恭喜您已完成系统的安装操作，尽情的体验其中的乐趣！
            </div>
          </div>
          <div class="btn-group">
            <a-button class="btn" html-type="submit"
                      size="large" type="primary" @click="ToHome">进入系统
            </a-button>
          </div>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import {ArrowLeftOutlined, LockOutlined, UserOutlined} from '@ant-design/icons-vue';
import {ValidateErrorEntity} from 'ant-design-vue/es/form/interface';
import {defineComponent, reactive, ref, UnwrapRef} from 'vue';
import router from "../../router";

interface FormState {
  user: string;
  password: string;
}

export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    const current = ref<number>(1);
    const next = () => {
      current.value++;
    };
    const prev = () => {
      current.value--;
    };
    const ToHome = () => {
      router.push('/')
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
      current,
      next,
      prev,
      ToHome
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
    ArrowLeftOutlined,
  }
});
</script>

<style lang="less" scoped>
.install {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../assets/bg.jpg") no-repeat fixed;
  background-size: 100% 100%;
  user-select: none;
  position: relative;

  .install-filter {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(16px);
  }
}

.install-card {
  
  position: relative;
  width: 100%;
  max-height: 80vh;
  min-height: 60vh;
  padding: 2rem 24px;
  background: #FFF;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px double #e6e6e6;
  box-shadow: 0 6px 8px -8px rgba(0, 0, 0, .08), 0 9px 7px 0 rgba(0, 0, 0, .05), 0 4px 12px 2px rgba(0, 0, 0, .03);
}

.back {
  padding: 6px;
  position: absolute;
  top: 16px;
  left: 16px;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
}

.install-step {
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.install-title {
  font-size: 2rem;
  font-weight: bold;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 6px auto;
}

.install-content {
  flex: auto;
  margin: 24px 0;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.guide {
  margin: 24px auto;
  font-size: 16px;
}

.key-box {
  .key-value {
    margin: 0 12%;
    border: 1px solid #d9d9d9;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: 8px;

    input {
      outline: none;
      width: 100%;
      max-width: 48px;
      border: none;
      text-align: center;
      border-radius: 8px;
    }
  }
}

.ant-form {
  width: 80%;
}

.btn-group {
  text-align: center;
  margin-bottom: 12px;

  .btn {
    font-size: 1.4rem;
    height: 48px;
    border-radius: 6px;
    min-width: 100px;
  }
}
</style>
