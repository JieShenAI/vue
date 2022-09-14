<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="https://www.pkuplanning.com/html/pic/d/468.html">
            <img src="https://www.pkuplanning.com/upload/20200715100447.jpg">
            <p>鞍山市国土空间总体规划</p>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="https://www.pkuplanning.com/html/pic/d/467.html">
            <img src="https://www.pkuplanning.com/upload/20200715100557.jpg">
            <p>河池市国土空间总体规划</p>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="https://www.pkuplanning.com/html/pic/d/464.html">
            <img src="https://www.pkuplanning.com/upload/20200412020234.jpg">
            <p>百色市乐业县国土空间总体规划</p>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="https://www.pkuplanning.com/html/pic/d/514.html">
            <img src="https://www.pkuplanning.com/upload/20200412021233.jpg">
            <p>威海市文登开发区总体规划</p>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="https://www.pkuplanning.com/html/pic/d/513.html">
            <img src="https://www.pkuplanning.com/upload/20200412020626.jpg">
            <p>老挝万象塞色塔综合开发区总体规划</p>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>

<script>
import Swiper from 'swiper';
import "swiper/css/swiper.min.css"
export default {
  mounted() {
    new Swiper('.swiper-container', {
      // loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
};
</script>

<style scoped>
body {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 250px;

}
</style>
