<template>
  <div class="page">
    <Row type="flex" justify="space-around">
      <Col span="5"><num-card></num-card></Col>
      <Col span="5"><num-card></num-card></Col>
      <Col span="5"><num-card></num-card></Col>
      <Col span="5"><num-card></num-card></Col>
    </Row>

    <!-- map -->
    <Row type="flex" class="map-data">
      <Col :sm="24" :md="16" :lg="16" :xl="16" class="map-wrapper">
        <ve-map :data="chartData"></ve-map>
      </Col>
      <Col :sm="24" :md="8" :lg="8" :xl="8" class="map-figure">
        <progress-item></progress-item>
        <progress-item></progress-item>
        <progress-item></progress-item>
        <progress-item></progress-item>
      </Col>
    </Row>

    <Row type="flex">
      <Col :sm="24" :md="12" :lg="12" :xl="12">part1</Col>
      <Col :sm="24" :md="12" :lg="12" :xl="12">part2</Col>
    </Row>
  </div>
</template>

<script>
import VeMap from 'v-charts/lib/map.common';
import NumCard from './components/num-card.vue';
import ProgressItem from './components/progress-item.vue';

export default {
  name: 'home',
  components: {
    NumCard,
    VeMap,
    ProgressItem,
  },
  data() {
    return {
      chartData: {
        columns: ['位置', '税收', '人口', '面积'],
        rows: [
          {
            位置: '吉林', 税收: 123, 人口: 123, 面积: 92134,
          },
          {
            位置: '北京', 税收: 1223, 人口: 2123, 面积: 29234,
          },
          {
            位置: '上海', 税收: 2123, 人口: 1243, 面积: 94234,
          },
          {
            位置: '浙江', 税收: 4123, 人口: 5123, 面积: 29234,
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.map-data {
  margin: 40px 0;
  .map-wrapper {
    padding: 0 10px;
  }
  .map-figure {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 0 20px;
  }
}
</style>
