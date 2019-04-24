<template>
 <Sider class="sider">
   <Menu theme="light" width="auto">
     <Submenu name="1">
       <template slot="title">
         Item 1
       </template>
     </Submenu>
     <Submenu name="2">
       <template slot="title">
         Item 2
       </template>
     </Submenu>
     <Submenu name="3">
       <template slot="title">
         Item 3
       </template>
     </Submenu>
   </Menu>
 </Sider>
</template>

<script>
export default {
  name: 'PageSider',
  data() {
    return {
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.sider {
  min-height: calc(100vh - 64px);
}
</style>
