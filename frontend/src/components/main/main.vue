<template>
  <div style="height: 100%" class="content-wrapper">
    <page-sider :menuList="menuList">
      <div class="logo">
      <span v-if="!isCollapsed">Admin</span>
      <img class="img" src="@/assets/svg/letter-y.svg" alt="letter-y.svg" v-else>
    </div>
    </page-sider>
    <Layout class="content-area">
      <page-header></page-header>
      <div class="content">
        <router-view/>
      </div>
    </Layout>
  </div>
</template>

<script>
import EventBus from '@/utils/event-bus';
import PageHeader from './components/header-bar';
import PageSider from './components/side-bar';

export default {
  name: 'Main',
  components: {
    PageHeader,
    PageSider,
  },
  data() {
    return {
      isCollapsed: false,
      menuList: [
        {
          name: 'dashboard',
          icon: 'ios-home-outline',
          meta: {
            title: 'Dashboard',
          },
        },
        {
          name: 'Tabels',
          icon: 'ios-albums-outline',
          meta: {
            title: 'Tables',
          },
          children: [
            {
              name: 'basic-table',
              meta: {
                title: 'Basic Table',
              },
            },
            {
              name: 'advanced-table',
              meta: {
                title: 'Advanced Table',
              },
            },
          ],
        },
        {
          name: 'Charts',
          icon: 'ios-analytics-outline',
          meta: {
            title: 'Charts',
          },
        },
      ],
    };
  },
  methods: {},
  mounted() {
    EventBus.$on('collapseChange', (isCollapsed) => {
      this.isCollapsed = isCollapsed;
    });
  },
};
</script>
<style lang="less" scoped>
.content-wrapper {
  display: flex;
  .content-area {
    height: 100%;
    flex: 1;
    .content {
      padding: 10px 15px;
    }
  }
}
.logo {
  height: 64px;
  line-height: 64px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  color: #fff;
  font-size: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  .img {
    margin-top: 10px;
  }
}
</style>
