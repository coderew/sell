<template>
  <div v-show="showFlag" class="food" >
    <div class="food-content">
      <div class="image-header">
        <!--注意:冒号-->
        <img :src="food.image">
        <div class="back">
          <i class="icon-arrow_lift" @click="hide"></i>
        </div>
      </div>
      <div ></div>
    </div>
    <div class="content">
      <h1 class="title">{{food.name}}</h1>
      <div class="detail">
        <span class="sell-count">月售{{food.sellCount}}份</span>
        <span class="rating">好评率{{food.rating}}%</span>
      </div>
      <div class="price">
        <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
      </div>
    </div>
    <!--<div class="cart-controll-wrapper">-->
     <!--<cartcontroll :food="food"></cartcontroll>-->
    <!--</div>-->
    <div class="buy"></div>
    <split></split>
    <div class="rating">
      <h1 class="title">商品评价</h1>
      <ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import split from 'components/split/split';
  import ratingselect from 'components/ratingselect/ratingselect';
//  import BScroll from 'better-scroll';
  import cartcontroll from 'components/cartcontroll/cartcontroll';
//  const POSITIVE = 0;
//  const NEGATIVE = 1;
  const ALL = 2;

  export default {
    props: {
        food: {
            type: Object
        }
    },
    data() {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      };
    },
    methods: {
      show() {
        this.showFlag = true;
        this.selectType = ALL;
        this.onlyContent = true;
//        this.$nextTick(() => {
//          if (!this.scroll) {
//              this.scroll = new BScroll(this.$el.querySelector('.food'), {
//                  click: true
//              });
//          } else {
//            this.scroll.refresh();
//          }
//        });
      },
      hide() {
        this.showFlag = false;
      }
    },
    components: {
      ratingselect,
      cartcontroll,
      split
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #ffffff
    //  &.move-transition
    // transition: all 0.8s linear
    //  transform: translate3d(0, 0, 0)
    //  &.move-enter, &.move-leave
    //  transform: translate3d(100%,0,0)
    .image-header
      position: relative
      width: 100%
      height: 0
      // 黑魔法，注意查看相关资料
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute;
        top: 10px;
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff
    .content
      padding: 18px
    .title
      font-size: 14px
      line-height: 14px
      margin-bottom: 8px
      font-weight: 700
      color: rgb(7, 17, 27)
    .detail
      margin-bottom: 18px
      line-height: 10px
      height: 10px
      font-size: 0
      .sell-count,.rating
        font-size: 10px;
        color: rgb(147, 153, 159)
      .sell-count
        margin-right: 12px
    .price
      font-weight: 700
      line-height: 24px
      .now
        margin-right: 8px
        font-size: 14px
        color: rgb(240, 20, 20)
      .old
        text-decoration: line-through
        font-size: 10px
        color: rgb(147, 153, 159)
    .rating
      padding-top: 18px
      .title
        font-size: 14px
        line-height: 14px
        margin-left: 18px
        color: rgb(7, 17, 27)
</style>
