/*
 * @Author: yezi
 * @Date: 2019-05-31 09:00:00
 * @Last Modified by: yezi
 * @Last Modified time: 2019-05-31 10:23:21
 * 侧边栏 折叠显示
 */
<template>
  <Dropdown ref="dropdown"
    @on-click="handleClick"
    :class="hideTitle ? '' : 'collased-menu-dropdown'" :transfer="hideTitle"
    :placement="placement">
    <a class="drop-menu-a"
      type="text"
      @mouseover="handleMousemove($event, children)"
      :style="{textAlign: !hideTitle ? 'left' : ''}">
      <Icon :size="rootIconSize" :type="parentItem.icon"/>
      <span class="menu-title" v-if="!hideTitle">
        {{ parentItem.meta.title }}
      </span>
      <Icon style="float: right;" v-if="!hideTitle" type="ios-arrow-forward" :size="16"/>
    </a>
    <DropdownMenu ref="dropdown" slot="list">
      <template v-for="child in children">
        <collapsed-menu v-if="showChildren(child)" :icon-size="iconSize" :parent-item="child"
        :key="`drop-${child.name}`">
        </collapsed-menu>
        <DropdownItem v-else
          :key="`drop-${child.name}`" :name="child.name">
          <!-- <Icon :size="iconSize" :type="child.icon"/> -->
          <span class="menu-title">{{ child.meta.title }}</span>
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
// import mixin from './mixin';
// import itemMixin from './item-mixin';
// import { findNodeUpperByClasses } from '@/libs/util';

export default {
  name: 'CollapsedMenu',
  // mixins: [mixin, itemMixin],
  props: {
    parentItem: {
      type: Object,
      default: () => {},
    },
    hideTitle: {
      type: Boolean,
      default: false,
    },
    rootIconSize: {
      type: Number,
      default: 16,
    },
  },
  data() {
    return {
      placement: 'right-end',
    };
  },
  computed: {
    children() {
      return this.parentItem.children;
    },
  },
  methods: {
    showChildren(item) {
      return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways));
    },
    handleClick(name) {
      this.$emit('on-click', name);
    },
    handleMousemove(event, children) {
      const { pageY } = event;
      const height = children.length * 38;
      const isOverflow = pageY + height < window.innerHeight;
      this.placement = isOverflow ? 'right-start' : 'right-end';
    },
  },
  mounted() {
    // const dropdown = findNodeUpperByClasses(this.$refs.dropdown.$el, ['ivu-select-dropdown', 'ivu-dropdown-transfer']);
    // if (dropdown) dropdown.style.overflow = 'visible';
  },
};
</script>
