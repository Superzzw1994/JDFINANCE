<template>
  <div :class="$style.hslider">
      <slider :items="items" :cname="$style.slider" :options="slider.options"></slider>
      <div :class="$style.list">
          <div :class="$style.item" v-for="item in slider.enters">
              <router-link :to="item.href">
                  <img :src="item.img" :alt="item.title">
                  <h4>{{item.title}}</h4>
              </router-link>
          </div>
      </div>
  </div>
</template>
<script>
import slider from '../core/slider';
export default {
  components: {
      slider
  },
  props:{
      slider:{
          type:Object,
          default(){
              return{

              }
          }
      }
  },
  data(){
      return {
          items:[
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t16588/225/2090263765/46163/d17f76d8/5a8acde6N2b357bb8.jpg?width=750&height=320'
              },
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t18235/74/492908201/27698/ce4197e2/5a8acdb9Nb104dab9.jpg?width=750&height=320'
              },
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t16672/61/485752320/46238/388f82ca/5a8acd83N73a6ea6b.jpg?width=750&height=320'
              }
          ]
      }
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.hslider{
    padding-top:100px;
}
.slider{
   margin-top:100px;
   img{
       vertical-align:middle;
       width:100%;
   }
}
.list{
    @include list(row);
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
        text-decoration: none;
    }
    .item{
        text-align: center;
        img{
            display: inline-block;
            width:90px;
            height:90px;
        }
        h4{
            font-size: 26px;
            margin-top: 12px;
            color:#666;
        }
    }
}
</style>
