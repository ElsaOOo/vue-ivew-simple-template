/*
 * @Author: yezi
 * @Date: 2019-04-24 16:51:09
 * @Last Modified by: yezi
 * @Last Modified time: 2019-06-01 10:49:38
 * 登录页
 */

<template>
 <div class="page">
   <div class="form-wrapper">
     <Card style="width:400px" class="login-card">
      <div slot="title">
        欢迎登录
      </div>
      <Form ref="login-form" :model="loginForm" :rules="rules" :label-width="80">
        <FormItem label="用户" prop="name">
          <Input type="password" v-model="loginForm.name"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input type="password" v-model="loginForm.password"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
        </FormItem>
      </Form>
    </Card>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: '',
        password: '',
      },
      rules: {

      },
    };
  },
  methods: {
    handleSubmit() {

    },
  },
};
</script>
<style lang="less" scoped>
.page {
  background: #e9faff;
  height: 100%;
  margin: 0 auto;
  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .login-card {
    /deep/ .ivu-card-head {
      text-align: center;
      font-size: 26px;
      font-weight: 600;
      border-bottom: none;
      padding: 40px 16px;
    }
  }
}
.ivu-form-item {
  /deep/ .ivu-form-item-label {
    font-size: 16px;
  }
}
</style>
