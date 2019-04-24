<template>
  <Header class="compo">
    <div class="header-bar">
      <user :userAvatar="userAvatar"></user>
    </div>
  </Header>
</template>

<script>
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
    };
  },
};
</script>

<style lang="less" scoped>
.compo {
  background: #fff;
  border-bottom: solid 1px #dddddd4d;
  .header-bar {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
