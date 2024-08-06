

<template>
  <div class="mt-20 md:w-3/4 md:mx-auto">
      <h1 class = "text-center text-4xl font-bold mt-12">Chọn ngay <span class="text-primary">gói cước</span> phù hợp</h1>
       <div class="flex justify-center mt-4 mb-8">
          <ul class="flex text-center text-[1.05rem] font-bold ">
              <li @click="loadData('30days')" :class="{ 'bg-primary': activeTab === '30days' }" class="mr-2 py-1 px-9 bg-[#8f8f8f] text-white rounded-3xl cursor-pointer">1 tháng</li>
              <li @click="loadData('3months')" :class="{ 'bg-primary': activeTab === '3months' }" class="mr-2 py-1 px-9 bg-[#8f8f8f] text-white rounded-3xl cursor-pointer">3 tháng</li>
              <li @click="loadData('6months')" :class="{ 'bg-primary': activeTab === '6months' }" class="mr-2 py-1 px-9 bg-[#8f8f8f] text-white rounded-3xl cursor-pointer">6 tháng</li>
              <li @click="loadData('1years')" :class="{ 'bg-primary': activeTab === '1years' }" class="mr-2 py-1 px-9 bg-[#8f8f8f] text-white rounded-3xl cursor-pointer">12 tháng</li>
          </ul>
      </div>
  </div>
  
  <div class="uk-position-relative uk-visible-toggle uk-light mt-12 mx-auto w-3/4 z-50" tabindex="-1" uk-slider>
      <div class="w-[85%] mx-auto overflow-hidden">
          <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid py-12 m-0">
              <li class=" p-0 flex justify-center" v-for="(item, index) in currentData" :key="index">
                  <div class="uk-panel flex justify-center items-center hover:scale-125 w-60 h-80 transition-transform duration-500 ease-in-out ">
                      <div class="carousel-item rounded-2xl overflow-hidden  shadow-3xl cursor-pointer ">
                          <img :src="item.image"  alt="">
                          <button class="w-full block text-primary text-lg font-semibold bg-white py-2 ">Mua Ngay </button>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
    <a  class="uk-position-center-left uk-position-small shadow-lg rounded-full bg-gray-400 hover:bg-primary hover:shadow-3xl transition-colors duration-300 ease-in-out" href uk-slidenav-previous uk-slider-item="previous"></a>
    <a  class="uk-position-center-right uk-position-small shadow-lg rounded-full bg-gray-400 hover:bg-primary hover:shadow-3xl transition-colors duration-300 ease-in-out" href uk-slidenav-next uk-slider-item="next"></a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeTab: null,
      data30days: [
        { image: require('../../assets/images/data30days4.jpeg') },
        { image: require('../../assets/images/data30days5.jpeg') },
        { image: require('../../assets/images/data30days1.jpeg') },
        { image: require('../../assets/images/data30days2.jpeg') },
        { image: require('../../assets/images/data30days3.jpeg') },
      ],
      data3months: [
        { image: require('../../assets/images/data3month1.jpeg') },
      ],
      data6months: [
        { image: require('../../assets/images/data6month1.jpeg') },
        { image: require('../../assets/images/data6month2.jpeg') },
        { image: require('../../assets/images/data6month3.jpeg') },
        { image: require('../../assets/images/data6month4.jpeg') },
        { image: require('../../assets/images/data6month5.jpeg') },
      ],
      data1years: [
        { image: require('../../assets/images/data1.jpeg') },
        { image: require('../../assets/images/data2.jpeg') },
        { image: require('../../assets/images/data3.jpeg') },
        { image: require('../../assets/images/data4.jpeg') },
        { image: require('../../assets/images/data5.jpeg') },
      ],
      currentData: []
    };
  },
  mounted() {
  // Mặc định hiển thị dữ liệu từ data30days
      this.loadData('30days');
      this.activeTab = '30days';
   },
   methods: {
      loadData(option) {
          this.activeTab = option
          if (option === '30days') {
              this.currentData = this.data30days;
          } else if (option === '3months') {
              this.currentData = this.data3months;
          } else if (option === '6months') {
              this.currentData = this.data6months;
          } else if (option === '1years') {
              this.currentData = this.data1years;
          }
      }
  }

};
</script>



