<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'

</script>

<template>

    <nav class="fixed z-[100] top-0 right-0 left-0  shadow-3xl bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/images/logo-vnsky.svg" class="h-12" alt="Flowbite Logo" />
    </a>

    <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/numberpage" class="block py-2 px-3 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chọn số</a>
        </li>
        <li>
          <a href="/packofdata" class="block py-2 px-3 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Gói cước</a>
        </li>
        <li>
          <a href="/rechargepage" class="block py-2 px-3 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nạp tiền</a>
        </li>
      
        <li>
          <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="flex items-center justify-between w-full py-2 px-3 font-bold text-sm text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
            Tiện ích
          <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
            <!-- Dropdown menu -->
            <div id="dropdownHover" class="z-99 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                  <li>
                    <a href="/esimpage" class="block px-4 py-2 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">eSIM</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Đổi/Cấp lại SIM</a>
                  </li>
                  <li>
                    <a href="/prderpage" class="block px-4 py-2 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tra cứu đơn hàng</a>
                  </li>
                </ul>
            </div>
        </li>
        <li>
          <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover2" data-dropdown-trigger="hover" class="flex items-center justify-between w-full py-2 px-3 font-bold text-sm text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
            Hỗ trợ
          <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
            <!-- Dropdown menu -->
            <div id="dropdownHover2" class="z-99 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                  <li>
                    <a href="#" class="block px-4 py-2 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cầu hỏi thường gặp</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Danh sách điểm cung cấp</a>
                  </li>
                  
                </ul>
            </div>
        </li>
        <li>
          <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover3" data-dropdown-trigger="hover" class="flex items-center justify-between w-full py-2 px-3 font-bold text-sm text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Giới thiệu
          <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
            <!-- Dropdown menu -->
            <div id="dropdownHover3" class="z-99 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                  <li>
                    <a href="#" class="block px-4 py-2 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Về VNSKY</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tin tức</a>
                  </li>
                  
                </ul>
            </div>
        </li>
      </ul>

    </div>
    <div class="cart flex justify-center items-center w-[38px] h-[38px] bg-[#c8c8c8] rounded-[50%]">
            <a href="" class="buy-btn text-white hover:text-white"><font-awesome-icon :icon="faCartShopping" /></a>
    </div>
  </div>
</nav>


</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>


<style scoped>
a{
  text-decoration: none;
}
</style>