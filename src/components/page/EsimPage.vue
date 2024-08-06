<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faChevronDown,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

</script>
<template>
    <div class="mt-20">
        <div class="banner background-img">
            <div class="lg:w-3/4 mx-auto flex ">
                <div class="w-1/2"></div>
                <div class="w-1/2 text-end mr-8">
                    <p class="md:mt-28 md:mb-20 text-white text-5xl font-bold">eSIM là gì?</p>
                    <p class="text-lg text-gray-400">eSIM (embedded SIM) là SIM điện tử công nghệ hiện đại thay thế SIM vật lý truyền thống.</p>
                    <p class="text-lg text-gray-400 mt-5">Không cần "tháo ra lắp vào", người dùng chỉ cần kích hoạt dễ dàng ngay trên thiết bị đã được tích hợp eSIM.</p>
            
                    <div class="md:mt-20">
                        <a href="#" class="px-7 py-3 text-white font-bold bg-primary rounded-2xl hover:text-white hover:bg-[#438ac8] transition-colors duration-200 ease-in-out">Đổi sang eSim</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-[#f5f5f5]">
            <div class="md:w-3/4 mx-auto md:pt-28 md:pb-24 text-black">
                <h1 class="text-3xl font-bold text-center">Danh sách các dòng máy <span class="text-primary">hỗ trợ eSIM</span></h1>
                <ul class="flex justify-between md:mt-8">
                    <li  class="bg-white md:px-16 md:py-4 mx-4 flex flex-col items-center rounded-2xl shadow-3xl w-1/3">
                        <img src="../../assets/images/phone-esim_img.svg" alt="" class="h-20">
                        <p class="text-lg md:mt-7">Điện thoại/Máy tính bảng</p>
                        <div @click="chosse('phone')" class="md:mt-5 text-primary cursor-pointer text-sm font-bold">Chi tiết <font-awesome-icon :icon="faChevronDown" /></div>
                    </li>
                    <li class="bg-white md:px-16 md:py-4 mx-4 flex flex-col items-center rounded-2xl shadow-3xl w-1/3">
                        <img src="../../assets/images/laptop-esim_img.svg" alt="" class="h-20">
                        <p class="text-lg md:mt-7">Laptop</p>
                        <div @click="chosse('laptop')" href="#" class="md:mt-5 text-primary cursor-pointer text-sm font-bold">Chi tiết <font-awesome-icon :icon="faChevronDown" /></div>
                    </li>
                    <li class="bg-white md:px-16 md:py-4 mx-4 flex flex-col items-center rounded-2xl shadow-3xl w-1/3">
                        <img src="../../assets/images/clock-esim_img.svg" alt="" class="h-20">
                        <p class="text-lg md:mt-7">Đồng hồ thông minh</p>
                        <div @click="chosse('clock')" href="#" class="md:mt-5 text-primary cursor-pointer text-sm font-bold">Chi tiết <font-awesome-icon :icon="faChevronDown" /></div>
                    </li>
                </ul>
                <div v-show="showDetails" class="lg:h-[300px] border border-primary rounded-3xl mt-10 mx-4 px-5 bg-white overflow-hidden">
                    <div class="h-[290px] overflow-y-auto pt-8" >
                        <h2 class="font-bold">Thông tin chi tiết</h2>
                        <ul v-if="selectedCategory" class="mt-5  ">
                            <li v-for="(item, index) in selectedCategory" :key="index" class="mt-3">
                                <p class="text-sm"><span class="text-primary">{{ item.name }}:</span><span>{{ item.version }}</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-20 flex flex-col items-center">
            <h1 class="text-center text-3xl font-bold ">Lý do sử dụng <span class="text-primary">eSIM SVSKY</span></h1>
            <div class="flex w-3/4 mx-auto md:mt-5">
                <div class="w-1/2">
                    <div class="flex md:px-6">
                        <div class="md:w-[20%]" >
                            <img  src="../../assets/images/download-esim_img.png" alt="">
                        </div>
                        <div class="md:w-[80%] md:px-6">
                            <p class="text-2xl font-semibold text-primary">Sử dụng nhiều thuê bao trên một thiết bị</p>
                            <p class="text-black md:mt-4">Không cần lắp SIM vật lý và không bị giới hạn chỉ 1 hoặc 2 SIM như phương thức truyền thống</p>
                        </div>
                    </div>
                    <div class="flex md:px-6 md:mt-10">
                        <div class="md:w-[20%]" >
                            <img  src="../../assets/images/download-esim_img3.png" alt="">
                        </div>
                        <div class="md:w-[80%] md:px-6">
                            <p class="text-2xl font-semibold text-primary">Không lo mất/hỏng SIM</p>
                            <p class="text-black md:mt-4">eSIm được tích hợp vào phần cứng của thiết bị nên tránh được rủi ro mất hoặc hỏng SIM</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="flex md:px-6">
                        <div class="md:w-[20%]" >
                            <img  src="../../assets/images/download-esim_img2.png" alt="">
                        </div>
                        <div class="md:w-[80%] md:px-6">
                            <p class="text-2xl font-semibold text-primary">Dễ dàng hòa mạng và chuyển đổi eSIM VNSKY</p>
                            <p class="text-black md:mt-4">Hòa mạng VNSKY hoặc chuyển đổi từ SIM vật lý sang eSIM trực tiếp dễ dàng</p>
                        </div>
                    </div>
                    <div class="flex md:px-6 md:mt-10">
                        <div class="md:w-[20%]" >
                            <img  src="../../assets/images/download-esim_img4.png" alt="">
                        </div>
                        <div class="md:w-[80%] md:px-6">
                            <p class="text-2xl font-semibold text-primary">Bảo vệ môi trường</p>
                            <p class="text-black md:mt-4">Sử dụng eSIM giúp giảm thiểu rác thải nhựa sử dụng để sản xuất SIM truyền thống, góp phần bảo vệ môi trường.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="md:mt-12">
                <a href="/numberpage" class="md:px-5 md:py-2 bg-primary font-bold text-white rounded-full shadow-3xl hover:bg-gray-100 transition-colors duration-300 ease-in-out">Khám phá eSIM ngay</a>
            </button>
        </div>

        <div class="background-img2">
            <div class="w-3/4 mx-auto ">
                <h1 class="text-white text-3xl font-bold text-center md:pt-10">Hướng dẫn cài đặt eSim trên điện thoại</h1>
                <div class="text-center mt-8">
                    <div @click="optionApp('ios')" :class="{ 'btn-active': activeBtn === 'ios' }" class=" text-white md:py-2 mx-1 rounded-xl border-[2px] border-white md:w-36 inline-block font-bold text-lg cursor-pointer" >iOS</div>
                    <div @click="optionApp('android')" :class="{ 'btn-active': activeBtn === 'android' }" class="text-white md:py-2 mx-1 rounded-xl border-[2px] border-white md:w-36 inline-block font-bold text-lg cursor-pointer" >Android</div>
                </div>
                
                <div class=" grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-16 pb-3">
                    <div class="lg:col-span-8 lg:mt-16">
                            <div class="lg:mt-32">
                                <div class="flex justify-center relative mx-12">
                                    <div class="progress absolute w-[70%] h-1 bg-gray-200 top-7"></div>
                                    <div class="step flex flex-col items-center w-1/3 px-10 z-10">
                                        <div id="step1" @click="showImage(0)"  >
                                            <span :class="{'step-active': isActive(0)}" class="block bg-step1-esim bg-no-repeat bg-center bg-cover w-[42px] h-[60px] z-99 cursor-pointer "></span>
                                        </div>
                                        <div class="step-lable text-center mt-5">
                                            <h2 class="text-white">Bước 1</h2>
                                            <p class="text-white leading-7">Vào <span class="font-bold">cài đặt, </span >chọn mục<span class="font-bold"> Di động</span></p>
                                        </div>
                                    </div>
                                    <div class="step flex flex-col items-center w-1/3 px-10 z-10">
                                        <div id="step2" @click="showImage(1)">
                                            <span :class="{'step-active1': isActive(1)}" class="block bg-step2-esim bg-no-repeat bg-center bg-cover w-[42px] h-[60px] z-99 cursor-pointer"></span>
                                        </div>
                                        <div class="step-lable text-center mt-5">
                                            <h2 class="text-white">Bước 2</h2>
                                            <p class="text-white leading-7">Chọn mục thêm <span class="font-bold">gói cước di động </span>hoặc thêm <span class="font-bold">eSIM</span></p>
                                        </div>
                                    </div>
                                    <div class="step flex flex-col items-center w-1/3 px-10 z-10">
                                        <div id="step3 " @click="showImage(2)" >
                                            <span :class="{'step-active2': isActive(2)}" class="block bg-step3-esim bg-no-repeat bg-center bg-cover w-[42px] h-[60px] z-99 cursor-pointer"></span>
                                        </div>
                                        <div class="step-lable text-center mt-5">
                                            <h2 class="text-white">Bước 3</h2>
                                            <p class="text-white leading-7">Quét mã QR eSIM đã nhận từ<span class="font-bold"> VNSKY</span></p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                    <div class="lg:col-span-4 mx-4">
                            <div class="content">
                                <div id="ios1" v-for="(item, index) in currentData" :key="index" :class="{ 'hidden': activeButton !== index }">
                                    <img :src="item.img" alt="" class="w-full max-h-[620px]">
                                </div>
                            </div>
                            <div class="text-center">
                                <span class="dot dot-active inline-block w-4 h-4 bg-gray-300 rounded-full mx-2 text-white cursor-pointer"></span>
                                <span class="dot inline-block w-4 h-4 bg-gray-300 rounded-full mx-2 text-white cursor-pointer"></span>
                                <span class="dot inline-block w-4 h-4 bg-gray-300 rounded-full mx-2 text-white cursor-pointer"></span>
                            </div>
                    </div>
                </div>
               
            </div>
        </div>

        <div class="w-3/4 mx-auto my-28">
            <h2 class="text-4xl font-bold text-center text-black">Câu hỏi thường gặp</h2>
            <div class="flex mt-4">
                <div class="w-1/2 mr-4">
                    <div>
                        <div  @click="toggleVisibility(1)" class="flex justify-between items-center bg-[#e6f5ff] text-black px-2 py-2 border border-primary rounded-2xl mt-8 cursor-pointer hover:shadow-lg select-none">Làm thế nào để đổi từ sinm Vật lý sang eSIM? <font-awesome-icon class="text-xs" :icon="faChevronDown" /></div>
                        <p :class="{ 'hidden': !isVisible[1] }" class="px-3 text-black mt-8">Vui lòng vào mục Tiện ích > Đổi/cấp lại SIM trên website hoặc ứng dụng VNSKY và làm theo hướng dẫn</p>
                    </div>
                    <div>
                        <div  @click="toggleVisibility(2)" class="flex justify-between items-center bg-[#e6f5ff] text-black px-2 py-2 border border-primary rounded-2xl mt-8 cursor-pointer hover:shadow-lg select-none">Khi tôi đổi sang eSIM thì số dư tài khoản có thay đổi không? <font-awesome-icon class="text-xs" :icon="faChevronDown" /></div>
                        <p :class="{ 'hidden': !isVisible[2] }" class="px-3 text-black mt-8">Các thuê bao khi thay đổi từ SIM vật lý sang eSIM thì tài khoản, gói cước và các dịch vụ gia tăng đã đăng ký vẫn được giữ nguyên.</p>
                    </div>
                    <div>
                        <div  @click="toggleVisibility(3)" class="flex justify-between items-center bg-[#e6f5ff] text-black px-2 py-2 border border-primary rounded-2xl mt-8 cursor-pointer hover:shadow-lg select-none">Reset lại máy có bị mất dữ liệu eSIM không? <font-awesome-icon class="text-xs" :icon="faChevronDown" /></div>
                        <p :class="{ 'hidden': !isVisible[3] }" class="px-3 text-black mt-8">Nếu reset và chọn xóa toàn bộ dữ liệu thì sẽ mất dữ liệu eSIM đã cài trên máy. Khi đó, cần quét mã QR đã được VNSKY cấp. Nếu reset và chọn giữ lại gói cước di động thì sẽ không mất dữ liệu eSIM trên máy</p>
                    </div>
                    
                </div>
                <div class="w-1/2 ml-4">
                    <div>
                        <div  @click="toggleVisibility(4)" class="flex justify-between items-center bg-[#e6f5ff] text-black px-2 py-2 border border-primary rounded-2xl mt-8 cursor-pointer hover:shadow-lg select-none">Nếu tôi đổi sang eSIM thì tôi có phải trả chi phí gì không? <font-awesome-icon class="text-xs" :icon="faChevronDown" /></div>
                        <p :class="{ 'hidden': !isVisible[4] }" class="px-3 text-black mt-8">Bạn có thể đổi từ SIM vật lý sang eSIM và ngược lại. Phí đổi SIM là 25.000đ/ TB/ lần</p>
                    </div>
                    <div>
                        <div  @click="toggleVisibility(5)" class="flex justify-between items-center bg-[#e6f5ff] text-black px-2 py-2 border border-primary rounded-2xl mt-8 cursor-pointer hover:shadow-lg select-none">Có thể sử dụng cả eSIM và SIM vật lý trên một thiết bị được không? <font-awesome-icon class="text-xs" :icon="faChevronDown" /></div>
                        <p :class="{ 'hidden': !isVisible[5] }" class="px-3 text-black mt-8">Có thể sử dụng song song nếu thiết bị hỗ trợ cả 2 loại SIM trên</p>
                    </div>
                    <div>
                        <div  @click="toggleVisibility(6)" class="flex justify-between items-center bg-[#e6f5ff] text-black px-2 py-2 border border-primary rounded-2xl mt-8 cursor-pointer hover:shadow-lg select-none">Tôi đã mất mã QR eSIM của VNSKY, làm thế nào để lấy lại?<font-awesome-icon class="text-xs" :icon="faChevronDown" /></div>
                        <p :class="{ 'hidden': !isVisible[6] }" class="px-3 text-black mt-8">Bạn có thể tìm lại thông tin về mã QR cho eSIM VNSKY của mình bằng cách kiểm tra lại thông tin trong Email XÁC NHẬN THÔNG TIN ĐƠN HÀNG ESIM đã gửi về địa chỉ email cá nhân của bạn, hoặc liên hệ Hotline 1900 5222 (1000đ/phút) để được hỗ trợ nhanh nhất!</p>
                    </div>
                </div>
            </div>
        </div>
            
        <div class="mb-20">
            <div class="w-3/4 mx-auto">
                <div class="bg-bg2-esim_img h-80 bg-center bg-cover rounded-3xl flex ">
                    <div class="w-[30%]"></div>
                    <div class="w-[70%] mx-auto flex flex-col items-center ">
                        <h2 class="block mt-28 text-3xl text-white font-bold">Khai mở thế giới số cùng eSIM VNSKY</h2>
                        <button class="mt-12">
                            <a href="/packofdata" class="px-5 py-2 rounded-xl text-white font-bold bg-primary hover:text-white hover:bg-[#49a0ed]">Mở eSIM ngay <FontAwesomeIcon :icon="faArrowRight" class="ml-1" /></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    const isVisible = ref({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false });
    const toggleVisibility = (index) => {
      isVisible.value[index] = !isVisible.value[index];
    };
    const isStepClicked = null;
    const activeButton = 0;
    const selectedCategory = [];
    const showDetails = false;
    const showPhoneDetails = false;
    const showclockDetails = false;
    const showlaptopDetails = false;


    const iosImages = [
      { img: require('../../assets/images/ios1-esim_img.png') },
      { img: require('../../assets/images/ios2-esim_img.webp') },
      { img: require('../../assets/images/ios3-esim_img.png') },
    ];

    const androidImages = [
      { img: require('../../assets/images/Android1-esim_img.png') },
      { img: require('../../assets/images/Android2-esim_img.png') },
      { img: require('../../assets/images/Android3-esim_img.png') },
    ];

    const currentData = [];

    const phone =[
        {
            name:'Iphone',
            version: 'Xs, Xs Max, Xr, 11, 11 Pro, 11 Pro Max, SE, 12, 12 Pro, 12 Pro Max, 12 mini, 13, 13 mini, 13 Pro, 13 Pro Max, 14, 14 Plus, 14 Pro, 14 Pro Max, 15, 15 Plus, 15 Pro, 15 ProMax.'
        },
        {
            name:'Samsung',
            version: 'S20, S20+, S20 Ultra, Note20, Note20 Ultra, S21 5G, S21+ 5G, S21 Ultra 5G, S22 5G, S22+ 5G, S22 Ultra 5G, S23, S23+, S23 Ultra, Fold, Z Fold2, Z Fold3, Z Fold3 5G, Z Fold4, Z Flip, Z Flip3, Z Flip3 5G, Z Flip4.'
        },
        {
            name:'Google',
            version: 'Pixel 2, Pixel 2 XL, Pixel 3, Pixel 3 XL, Pixel 3a, Pixel 3a XL, Pixel 4, Pixel 4a, Pixel 4 XL, Pixel 5, Pixel 5a, Pixel 6, Pixel 6a, Pixel 6 Pro, Pixel 7, Pixel 7 Pro'
        },
        {
            name:'Huawei',
            version: 'Huawei P40, Huawei P40 Pro, Huawei Mate 40 Pro'
        },
        {
            name:'Oppo',
            version: 'Find X3 Pro, Reno 5A, Find X5, Find X5 Pro'
        },
        {
            name:'Nokia',
            version: 'Nokia 2720, Nokia 8.3 5G, Nokia C2, Nokia 3.4, Nokia 6300 4G, Nokia 8000 4G, Nokia 215 4G, Nokia 5.4, Nokia C20, Nokia X10, Nokia 105 4G, Nokia 110 4G, Nokia C01 Plus'
        },
        {
            name:'Xiaomi',
            version: 'Xiaomi Note 9 Pro, Xiaomi Note 10 Lite, Xiaomi MI 10T Lite, Xiaomi MI 10T Pro, Xiaomi MI 11, Xiaomi MI 11 Lite 5G, Xiaomi Redmi 8A Pro'
        },
        
        
    ];
    const laptop =[
        {
            name:'Acer',
            version: 'Swift 3, Swift 7, TravelMate P2, TravelMate Spin P4, TravelMate P6.'
        },
        {
            name:'ASUS',
            version: 'Mini Transformer T103HAF, NovaGo TP370QL, VivoBook Flip 14 TP401NA.'
        },
        {
            name:'Dell',
            version: 'Dell Latitude 7210 2-in-1, Dell Latitude 9410, Dell Latitude 7310, Dell Latitude 7410, Dell Latitude 9510, Dell Latitude 5410, Dell Latitude 5411, Dell Latitude 5511'
        }
        
    ];
    const clock =[
        {
            name:'Samsung Galaxy',
            version: 'Watch active2, Watch active2 small, Watch3, watch3 small, Watch4, Watch4 classic, Watch5, Watch5 pro, Watch6, Watch6 classic, Watch large.'
        },
        {
            name:'Huawei Watch',
            version: ' 3, 3 pro, 4.'
        },
        
    ]

    return {
    
      isVisible,
      toggleVisibility,
      isStepClicked,
      activeButton,
      iosImages,
      androidImages,
      currentData,

      selectedCategory,
      phone,
      laptop,
      clock,
      showDetails,
      showPhoneDetails,
      showlaptopDetails,
      showclockDetails,
    };
    },
  methods: {
    optionApp(option){
        this.activeBtn = option
        if(option ==='ios'){
            this.currentData = this.iosImages;
        }else if(option ==='android'){
            this.currentData = this.androidImages;
        }
    },
    showImage(index) {
      this.activeButton = index;
      this.isStepClicked = index;
    },
    isActive(index) {
      return this.isStepClicked === index;
    },
    
    chosse(category) {
        if (category === 'phone') {
            this.showDetails = true;
            if (this.selectedCategory !== this.phone) {
                 this.selectedCategory = this.phone;
            } else {
                this.showDetails = false;
                this.selectedCategory = [];
            }
        } else if(category === 'laptop'){
            this.showDetails = true;
            if (this.selectedCategory !== this.laptop) {
                 this.selectedCategory = this.laptop;
            } else {
                this.showDetails = false;
                this.selectedCategory = [];
            }
        } else if(category === 'clock'){
            this.showDetails = true;
            if (this.selectedCategory !== this.clock) {
                 this.selectedCategory = this.clock;
            } else {
                this.showDetails = false;
                this.selectedCategory = [];
            }
      }
      
    }
  },
  mounted(){
    this.activeButton=0;
    this.isStepClicked = 0;
    this.optionApp('ios')
    this.activeBtn = 'ios'
  }
};
</script>


<style scoped>
.background-img{
    background-image: url('../../assets/images/banner_esim.webp');
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: cover;
    height: 630px;
}
.background-img2{
    background-image: url('../../assets/images/bg-esim_img.webp');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    height: 900px;
}
a{
    text-decoration: none;
}
.btn-active{
    background-color: white;
    color: black;
}
.step-active{
    background-image: url('../../assets/images/step1w-esim_img.png');
}
.step-active1{
    background-image: url('../../assets/images/step2w-esim_img.png');
}
.step-active2{
    background-image: url('../../assets/images/step3w-esim_img.png');
}
.dot-active{
    background-color: #3395ec;
}
.hidden {
  display: none;
}
</style>