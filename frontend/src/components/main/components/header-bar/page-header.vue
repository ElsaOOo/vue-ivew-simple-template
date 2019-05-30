<template>
  <Header class="compo">
    <img class="menu-img" src="@/assets/svg/menu.svg" alt="menu.icon" @click="collapseChange">
    <div class="header-bar">
      <user :userAvatar="userAvatar"></user>
    </div>
  </Header>
</template>

<script>
import EventBus from '@/utils/event-bus';
import User from '../user';
import userAvatar from '@/assets/image/avatar.svg';

export default {
  name: 'PageHeader',
  components: {
    User,
  },
  data() {
    return {
      userAvatar,
      isCollapsed: false,
    };
  },
  methods: {
    collapseChange() {
      this.isCollapsed = this.isCollapsed;
      EventBus.$emit('collapseChange', this.isCollapsed);
    },
  },
};
</script>

<style lang="less" scoped>
.compo {
  background: #fff;
  border-bottom: solid 1px #dddddd4d;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .menu-img {
    margin: 0 10px;
    height: 32px;
    width: 32px;
    cursor: pointer;
  }
  .header-bar {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
