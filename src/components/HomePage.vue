<script setup>
import {
  faTowerBroadcast,
  faGift,
  faCarSide
} from '@fortawesome/free-solid-svg-icons'
import ImageSlider from './layout/ImageSlider.vue'

</script>

<template>
  <!-- Carouesel -->
  <div id="default-carousel" class="relative w-full mt-20" data-carousel="slide">
      <div class="relative h-96 overflow-hidden rounded-lg md:h-[485px]">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="../assets/images/slide1.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="../assets/images/slide2.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="../assets/images/slide3.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="../assets/images/slide4.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
      </div>
      <!-- Slider indicators -->
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    
      </div>
      <!-- Slider controls -->
      <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 ">
              <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span class="sr-only">Previous</span>
          </span>
      </button>
      <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 ">
              <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span class="sr-only">Next</span>
          </span>
      </button>
  </div>
   
  <!-- Select package -->
  <div class="package md:-mt-3">
        <ImageSlider />
  </div>

  <!-- Reasons to immediately choose VNSKY mobile network -->
  <div class="absolute right-0 left-0 top-[1080px] bg-[url('@/assets/images/bground.webp')] pt-48 pb-36">
    <div class="">
        <h1 class="text-4xl text-center font-bold text-white">Lý do chọn ngay mạng di động VNSKY</h1>
        <div class="grid grid-cols-3 gap-x-8 max-w-6xl mx-auto">
          <div class="flex flex-col items-center justify-center px-8 py-11 bg-white mt-20 rounded-xl">
            <h1 class="text-6xl"><font-awesome-icon :icon="faTowerBroadcast" /></h1>
            <h2 class="text-2xl font-bold mt-6 mb-6 text-primary">Sống khỏe ở mọi nơi</h2>
            <p class="text-center">Phủ sóng toàn quốc với hàng chục ngàn trạm thu phát sóng 4G</p>
          </div>
          <div class="flex flex-col items-center justify-center px-8 py-11 bg-white mt-20 rounded-xl">
            <h1 class="text-6xl"><font-awesome-icon :icon="faGift" /></h1>
            <h2 class="text-2xl font-bold mt-6 mb-6 text-primary">Ưu đãi ngập tràn</h2>
            <p class="text-center">Vô vàn mã giảm giá, khuyến mại từ hệ sinh thái VNPAY và đối tác liên kết</p>
          </div>
          <div class="flex flex-col items-center justify-center px-8 py-11 bg-white mt-20 rounded-xl">
            <h1 class="text-6xl"><font-awesome-icon :icon="faCarSide" /></h1>
            <h2 class="text-2xl font-bold mt-6 mb-6 text-primary">Giao hàng 24/7</h2>
            <p class="text-center">Đặt mua SIM online 100% - không cần ra cửa hàng. Giao hàng nhanh</p>
          </div>
        </div>
    </div>
  </div>
    
   <!-- Experience vnsky application -->
  <div class="experience mt-[650px]">
      <div class="relative py-36">
        <div class="">
            <h1 class="text-4xl pl-48 font-bold">Trải nghiệm <span class="text-primary">ứng dụng VNSKY</span></h1>
            <ul class="flex items-center bg-primary pl-48 py-2 mt-5">
              <li class="mr-4 cursor-pointer"><a href="#"><img src="../assets/images/appStoreImg.svg" alt="App-Store"></a></li>
              <li class="mr-4 cursor-pointer"><a href="#"><img src="../assets/images/googlePlayImg.svg" alt="Google-Play"></a></li>
              <li class="rounded-xl overflow-hidden"><img class="w-32" src="../assets/images/QRcodeApp.jpg" alt="QR-Code"></li>
            </ul>
        </div>
        <img class="absolute w-1/2 right-28 top-0" src="../assets/images/phoneImg.webp" alt="">
      </div>  
  </div>

  <!--Companions  -->
  <div class="companions md:mb-14">
      <h2 class="text-center text-3xl font-bold text-black">ĐỒNG HÀNH CÙNG <span class="text-primary">VNSKY</span></h2>
      <div class="uk-position-relative uk-visible-toggle uk-light mt-12 mx-auto w-9/12" tabindex="-1" uk-slider>
          <div class="w-[90%] mx-auto overflow-hidden">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-6@m uk-grid py-5 ">
          <li class="mx-5 p-0" v-for="(companion, index) in companions" :key="index">
            <div class="uk-panel flex justify-center items-center">
              <div class="rounded-[50%] h-32 w-32 p-4 border border-gray-200 flex justify-center items-center hover:shadow-3xl">
                  <img :src="companion.image"  alt="">
              </div>
            </div>
          </li>
        </ul></div>
        <a  class="uk-position-center-left uk-position-small shadow-lg rounded-full bg-primary hover:shadow-3xl" href uk-slidenav-previous uk-slider-item="previous"></a>
        <a  class="uk-position-center-right uk-position-small shadow-lg rounded-full bg-primary hover:shadow-3xl" href uk-slidenav-next uk-slider-item="next"></a>
      </div>
  </div>

</template>


<script>
export default {
  
  data(){
    return{
      companions: [
          { image: require('../assets/images/companions1.png') },
          { image: require('../assets/images/companions2.png') },
          { image: require('../assets/images/companions3.png') },
          { image: require('../assets/images/companions4.png') },
          { image: require('../assets/images/companions5.png') },
          { image: require('../assets/images/companions6.png') },
          { image: require('../assets/images/companions7.png') },
          { image: require('../assets/images/companions8.png') },
          { image: require('../assets/images/companions9.png') },
          { image: require('../assets/images/companions10.png') },
          { image: require('../assets/images/companions11.png') },
        ],
    }
  }
};
</script>
