<template>
 <Layout style="height: 100%" class="main">
   <page-header></page-header>
   <Layout>
     <page-sider></page-sider>
     <router-view/>
   </Layout>
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


</style>
