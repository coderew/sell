<template>
  <div v-show="showFlag" class="food">
    <div class="food-content">
      <div class="image-header">
        <!--注意:冒号-->
        <img :src="food.image">
      </div>
    </div>
  <ratingselect></ratingselect>

  </div>

</template>

<script type="text/ecmascript-6">
//  import split from 'components/split/split';
  import ratingselect from 'components/ratingselect/ratingselect';

  export default {
    props: {
        food: {
            type: Object
        }
    },
    data() {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        this.showFlag = true;
      }
    },
    components: {
      ratingselect
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
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%


</style>
