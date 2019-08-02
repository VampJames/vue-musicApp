<template>
  <div class="container">
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="list.length > 1">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <a :href="item.linkUrl"><img class="slider-img" :src="item.picUrl"></a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'slider',
  props: ['list'],
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container >>> .swiper-pagination-bullet-active
    background #ccc
    width 20px
    border-radius 4px
  .container
    flex-direction column
    justify-content center
    background #000
    .wrapper
      height 0
      width 100%
      padding-bottom 40%
      .slider-img
        width 100%
      .swiper-pagination
        color #fff
</style>
