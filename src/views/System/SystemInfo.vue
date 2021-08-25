<template>
  <div class="system">
    <div class="system-card">
      <div class="logo">
        <img src="/src/assets/bg.jpg"/>
      </div>
      <div class="info">
        <div class="title">Future OS</div>
        <div class="version">
          版本：1.0.00 预览版
          <a-button shape="round" size="small" style="margin-left: 6px">检测更新</a-button>
        </div>
        <div class="status">
          状态：已激活
          <small>（有效期至：2021.10.24）</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemInfo"
}
</script>

<style lang="less" scoped>
.system {
  width: 100%;
  height: 100vh;
  padding: 24px 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  user-select: none;

  .system-card {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: calc(100vw - 24px);
    padding: 24px;
    background: #FFF;
    border-radius: 12px;
    box-shadow: 0 6px 16px -8px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 24px 16px rgba(0, 0, 0, .03);
  }

  .logo {
    border: 4px solid #f9f9f9;
    border-radius: 100%;
    margin-right: 24px;
    box-shadow: 0 1px 3px -4px #0000001f, 0 2px 4px #00000014, 0 3px 7px 4px #0000000d;

    img {
      width: 120px;
      height: 120px;
      border-radius: 100%;
    }
  }

  .info {
    font-size: 24px;
    font-weight: bold;

    .status, .version {
      font-size: 16px;
      margin: 8px 0;
    }
  }
}

@media (max-width: 480px) {
  .system {
    padding: 0;
    background: transparent;
  }

  .system-card {
    flex-direction: column;

    .logo {
      flex: auto;
      margin: 12px;
    }

    .info {
      .title {
        text-align: center;
      }

      .status, .version {
        font-size: 0.96rem;
      }
    }
  }
}

@media (width: 520px) {
  .system-card {
    padding: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }
}
</style>
