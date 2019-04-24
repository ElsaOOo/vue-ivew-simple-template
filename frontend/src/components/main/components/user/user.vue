<template>
 <div class="user-avatar-dropdown">
   <Dropdown @on-click="handleClick">
    <Badge>
      <Avatar :src="userAvatar"/>
    </Badge>
    <Icon :size="18" type="md-arrow-dropdown"></Icon>
    <DropdownMenu slot="list">
      <DropdownItem name="logout">退出登录</DropdownItem>
    </DropdownMenu>
  </Dropdown>
 </div>
</template>

<script>

export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    handleClick() {},
  },
};
</script>
<style lang="less" scoped>
.user-avatar-dropdown {

}

</style>
