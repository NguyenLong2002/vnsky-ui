<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import {
    faCartShopping,
    } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <div class="bg-[#f6f6f6]">
    <div class="recharge md:pt-40 md:w-3/4 mx-auto pb-20">
        <div class="flex flex-col justify-center items-center">
            <h1 class="text-black font-bold text-4xl">Nạp tiền điện thoại</h1>
            <p class="text-black md:mt-3">Nạp tiền dễ dàng - Gia hạn nhanh chóng</p>
            <div class="md:mt-5">
                <button class="md:px-14 md:w-56 rounded-3xl md:py-1 
                text-white font-bold mr-5 bg-gradient-to-br from-blue-500 to-purple-900 cursor-default">Nạp tiền</button>
                <button class="md:w-56 md:py-1 rounded-3xl border-solid border-[2px] border-primary font-bold text-primary" ><a class="md:px-14" href="/packofdata">Mua gói cước</a></button>
            </div>
        </div>
        <div class="md:mt-5 flex">
            <div class="md:w-1/2">
                <div class="">
                    <div class="md:px-16 md:py-9 border-[2px] border-solid border-[#5d0de7] rounded-3xl bg-white">
                        <h2 class="text-black font-bold">Nhập số điện thoại<span class="text-red-600"> (*)</span></h2>
                        <div class="flex  mt-3">
                            <div class="inline-block p-2  border-t-[2px] border-l-[2px] border-b-[2px] border-gray-300 rounded-l-md">+84</div>
                            <input class="w-full border border-gray-300 rounded-r-md" type="number" placeholder="Nhập số điện thoại">
                        </div>
                    </div>
                </div>
                <div class="md:px-16 md:py-9 border-[2px] border-solid border-[#5d0de7] rounded-3xl bg-white mt-5">
                    <div class="a">
                        <h2 class="text-black font-bold">Nhập số tiền muốn nạp<span class="text-red-600">(*)</span></h2>
                        <div class="price w-full border border-gray-300 rounded-md mt-3 flex items-center"><span class="px-3 py-2 ">0.000<span>đ</span></span></div>
                    </div>
                    <div class="">
                        <h2 class="text-black font-bold mt-3">Hoặc chọn mệnh giá</h2>
                        <div class="mt-3 grid grid-cols-3 gap-5 text-black font-bold text-lg">
                            <button class=" md:py-7 border border-gray-400 rounded-2xl background-number text-white">10.000</button>
                            <button class=" md:py-7 border border-gray-400 rounded-2xl">20.000</button>
                            <button class=" md:py-7 border border-gray-400 rounded-2xl">30.000</button>
                            <button class=" md:py-7 border border-gray-400 rounded-2xl">100.000</button>
                            <button class=" md:py-7 border border-gray-400 rounded-2xl">200.000</button>
                            <button class=" md:py-7 border border-gray-400 rounded-2xl">500.000</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2 md:px-16 md:py-9 shadow-full rounded-3xl bg-white md:ml-5 text-black">
                <h1 class=" font-bold  border-b border-gray-300 md:pb-3 ">Tổng thanh toán</h1>
                <div class="flex justify-between items-center md:mt-2 md:pb-5 border-b border-gray-300">
                    <p class="">Số tiền</p>
                    <div class="font-bold">0.000<span>đ</span></div>
                </div>
                <h2 class="font-bold mt-5">Phương thức thanh toán</h2>
                <p class="mt-6">Cổng thanh toán trực tuyến</p>
                <div class="mt-2 border-b border-gray-300 md:pb-10">
                    <ul class="flex">
                        <li class="mr-4"><img class="w-14 h-8" src="../../assets/images/vi_vnpay_img.svg" alt=""></li>
                        <li class="mr-4"><img class="w-14 h-8" src="../../assets/images/vnpay_img.svg" alt=""></li>
                        <li class="mr-4"><img class="w-14 h-8" src="../../assets/images/visa_img.svg" alt=""></li>
                        <li class="mr-4"><img class="w-14 h-8" src="../../assets/images/mastercard_img.svg" alt=""></li>
                        <li class="mr-4"><img class="w-14 h-8" src="../../assets/images/atm_img.svg" alt=""></li>
                    </ul>
                </div>

                <p class="mt-20">Điều kiện và điều khoản giao dịch</p>
                 <div class="flex items-center mt-3">
                    <input type="checkbox">
                    <p class="text-sm text-gray-600 ml-2">Tôi đã đọc và đồng ý với <a class="text-primary cursor-pointer">Điều kiện giao dịch chung của VNSKY</a></p>
                 </div>

                <button class="w-full background-btn-active py-2 rounded-3xl text-white font-bold mt-8">
                    <font-awesome-icon :icon="faCartShopping" /><span class="ml-2">Thanh Toán</span>
                </button>
                 
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>
.background-number {
    background: linear-gradient(to right, #0077ff, #7c3aed);
}
.background-btn-disable {
    background: linear-gradient(to right, #96c4f8, #a87ef0);
    cursor: default;
}
.background-btn-active {
    background: linear-gradient(to right, #6aadfa, #620ef3);
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1)
}
.background-btn-active:hover{
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.3)
}
a{
    text-decoration: none;
}
</style>