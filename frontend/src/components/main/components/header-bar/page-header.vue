<template>
  <Header class="compo">
    <div class="header-bar">
      <user></user>
    </div>
  </Header>
</template>

<script>
import User from '../user';

export default {
  name: 'PageHeader',
  components: {
    User,
  },
};
</script>

<style lang="less" scoped>
.compo {
  background: #fff;
  box-shadow: 0px 2px 0 #dddddd4d;
  .header-bar {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
