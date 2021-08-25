<template>
  <div class="config-panel">
    <div class="config-head">
      <div class="bar"/>
      <div class="config-title">设置</div>
    </div>
    <div class="config-body">
      <a-row :gutter="[24,24]">
        <a-col :lg="8" :xs="24">
          <a-card class="config-user-info">
            <a-avatar :size="64"
                      :src="'https://q4.qlogo.cn/headimg_dl?dst_uin=4762210&spec=100'"
                      shape="square"
            />
            <div class="user-info">
              <div class="user-name">
                游客
              </div>
              <div class="user-id">
                ID: 无
              </div>
            </div>
          </a-card>
          <a-input-search
              placeholder="查找设置"
          />
          <a-list :split="false">
            <a-list-item class="active">
              系统
            </a-list-item>
            <a-list-item>
              账户
            </a-list-item>
            <a-list-item>
              个性化
            </a-list-item>
            <a-list-item>
              应用
            </a-list-item>
            <a-list-item>
              对接
            </a-list-item>
            <a-list-item>
              支付
            </a-list-item>
            <a-list-item>
              反馈
            </a-list-item>
            <a-list-item>
              Future OS 更新
            </a-list-item>
          </a-list>
        </a-col>
        <a-col :lg="16" :xs="0">
          <a-page-header
              :breadcrumb="{ routes }"
          />
          <div class="config-content">
            <a-card>
              商品下单通知
            </a-card>
            <a-card>
              系统推送通知
            </a-card>
            <a-card>
              体验计划通知
            </a-card>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">

const routes = [
  {
    path: 'index',
    breadcrumbName: '系统',
  },
  {
    path: 'first',
    breadcrumbName: '通知',
  }
];

export default {
  name: "Settings",
  data() {
    return {
      routes
    }
  },
}
</script>

<style lang="less" scoped src="./settings.less"/>
