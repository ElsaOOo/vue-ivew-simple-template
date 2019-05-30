<template>
  <div style="height: 100%" class="content-wrapper">
    <page-sider></page-sider>
    <Layout class="content-area">
      <page-header></page-header>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
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
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.content-wrapper {
  display: flex;
  .content-area {
    height: 100%;
    flex: 1;
  }
}

</style>
