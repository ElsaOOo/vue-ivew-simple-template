<template>
 <Layout class="page">
   <page-header></page-header>
   <Layout>
     <router-view/>
   </Layout>
 </Layout>
</template>

<script>
import PageHeader from './components/header-bar';

export default {
  name: 'Main',
  components: {
    PageHeader,
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
