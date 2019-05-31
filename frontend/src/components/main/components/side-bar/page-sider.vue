<template>
 <Sider class="side-menu-wrapper sider"
  hide-trigger
  collapsible
  accordion
  :collapsed-width="78"
  :style="{height: '100vh', overflow: 'auto'}"
  v-model="isCollapsed">
   <slot></slot>
   <Menu theme="light" width="auto" v-show="!isCollapsed">
     <MenuItem name="1">
       <Icon type="ios-home-outline" size="26"/>
        <span v-if="!isCollapsed">Dashboard</span>
     </MenuItem>
     <Submenu name="2">
       <template slot="title">
         <Icon type="ios-albums-outline" size="26"/>
         <span v-if="!isCollapsed">Tabels</span>
       </template>
       <MenuItem name="basic-table">Basic Table</MenuItem>
       <MenuItem name="advanced-table">Advanced Table</MenuItem>
     </Submenu>
     <Submenu name="3">
       <template slot="title">
         <Icon type="ios-analytics-outline" size="26"/>
         <span v-if="!isCollapsed">Charts</span>
       </template>
     </Submenu>
   </Menu>

    <div class="menu-collapsed" v-show="isCollapsed">
      <template v-for="item in menuList">
        <collapsed-menu
          v-if="item.children && item.children.length > 1" @on-click="handleSelect" hide-title :root-icon-size="30"
          :icon-size="30"
          :parent-item="item"
          :key="`drop-menu-${item.name}`">
        </collapsed-menu>
        <Tooltip transfer v-else
          placement="right" :key="`drop-menu-${item.name}`"
          :content="item.meta && item.meta.title || item.name"
          >
          <a @click="handleSelect" class="drop-menu-a" :style="{textAlign: 'center'}">
            <Icon :size="30" :type="item.icon || (item.children && item.children[0].icon)"/>
          </a>
        </Tooltip>
      </template>
    </div>
 </Sider>
</template>

<script>
import EventBus from '@/utils/event-bus';
import CollapsedMenu from './collapsed-menu.vue';

export default {
  name: 'PageSider',
  components: {
    CollapsedMenu,
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    handleSelect(name) {
      console.log(name);
    },
  },
  mounted() {
    EventBus.$on('collapseChange', (isCollapsed) => {
      this.isCollapsed = isCollapsed;
    });
  },
};
</script>
<style lang="less">
@import './side-menu.less';
</style>
