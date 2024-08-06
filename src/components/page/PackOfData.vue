<script setup >
import ImageSlider from '../layout/ImageSlider.vue';
</script>
<template>
    <div class="mt-24 md:w-3/4 md:mx-auto">
        <ul class="flex md:my-5 items-center ">
            <div class="relative">
                <li class=" px-5 py-1 rounded-3xl text-white bg-primary mr-10">1. Chọn gói cước</li>
                <span class="absolute md:w-10 md:h-[1px] top-2/4 right-0 bg-gray-400"></span>
            </div>
            <div class="relative">
                <li class="relative px-5 py-1 rounded-3xl text-white bg-gray-400 mr-10 text-[0.7rem]">2. Chọn số</li>
                <span class="absolute md:w-10 md:h-[1px] top-2/4 right-0 bg-gray-400"></span>
            </div>
            <div class="relative">
                <li class="relative px-5 py-1 rounded-3xl text-white bg-gray-400 mr-10 text-[0.7rem]">3. Nhập thông tin</li>
                <span class="absolute md:w-10 md:h-[1px] top-2/4 right-0 bg-gray-400"></span>
            </div>
            <div class="relative">
                <li class="relative px-5 py-1 rounded-3xl text-white bg-gray-400 mr-10 text-[0.7rem]">4. Đơn hàng & thanh toán</li>
                <span class="absolute md:w-10 md:h-[1px] top-2/4 right-0 bg-gray-400"></span>
            </div>
                <li class="relative px-5 py-1 rounded-3xl text-white bg-gray-400 mr-10 text-[0.7rem]">5. Hoàn thành</li>
        </ul>
    </div>
    <ImageSlider />
</template>