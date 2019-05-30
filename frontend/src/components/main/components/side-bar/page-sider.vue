<template>
 <Sider class="sider" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
   <div class="logo">Admin</div>
   <Menu theme="light" width="auto">
     <MenuItem name="1">
       <Icon type="ios-home-outline" size="18"/>
        Dashboard
     </MenuItem>
     <Submenu name="2">
       <template slot="title">
         <Icon type="ios-albums-outline" size="18"/>
         Tabels
       </template>
     </Submenu>
     <Submenu name="3">
       <template slot="title">
         <Icon type="ios-analytics-outline" size="18"/>
         Charts
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
      isCollapsed: true,
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.logo {
  height: 64px;
  line-height: 64px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  color: #fff;
  font-size: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
