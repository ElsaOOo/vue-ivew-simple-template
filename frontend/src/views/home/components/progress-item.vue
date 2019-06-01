/*
 * @Author: yezi
 * @Date: 2019-05-31 17:23:06
 * @Last Modified by: yezi
 * @Last Modified time: 2019-06-01 08:35:32
 * 进度条组件
 */
<template>
 <div class="progress-item">
   <Row type="flex"
   justify="space-between"
   class="progress-info"
   >
     <Col span="18">progress info</Col>
     <Col span="4" class="text-right">50%</Col>
   </Row>
    <Progress :percent="45" status="active" hide-info/>
 </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.progress-item {
  margin: 10px 0;
}
.progress-info {
  margin-bottom: 10px;
}
</style>
