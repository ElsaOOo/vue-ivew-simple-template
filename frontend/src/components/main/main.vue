<template>
 <Layout style="height: 100%" class="main">
   <page-header></page-header>
   <div class="content-wrapper fl">
     <page-sider></page-sider>
      <div class="content-area">
        <router-view/>
      </div>
   </div>
 </Layout>
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
  height: calc(100vh - 64px);
  .content-area {
    height: 100%;
    width: 100%;
    padding: 18px;
  }
}

</style>
