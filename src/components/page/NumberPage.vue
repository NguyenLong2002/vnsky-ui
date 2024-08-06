
<template >
   <div class="bg-[#f9fafb] py-20">
        <div class="md:w-3/4 md:mx-auto pt-12">
            <ul class="flex md:my-5 items-center ">
                <div class="relative">
                    <li class=" px-6 py-2 rounded-3xl text-white bg-primary mr-10">1. Chọn số</li>
                    <span class="absolute md:w-10 md:h-[1px] top-2/4 right-0 bg-gray-500"></span>
                </div>
                <div class="relative">
                    <li class="relative px-5 py-1 rounded-3xl text-white bg-gray-500 mr-10 text-[0.7rem]">2. Chọn gói cước</li>
                    <span class="absolute md:w-10 md:h-[1px] top-2/4 right-0 bg-gray-500"></span>
                </div>
                <div class="relative">
                    <li class="relative px-5 py-1 rounded-3xl text-white bg-gray-500 mr-10 text-[0.7rem]">3. Nhập thông tin</li>
                    <span class="absolute md:w-10 md:h-[1px] top-2/4 right-0 bg-gray-500"></span>
                </div>
                <div class="relative">
                    <li class="relative px-5 py-1 rounded-3xl text-white bg-gray-500 mr-10 text-[0.7rem]">4. Đơn hàng & thanh toán</li>
                    <span class="absolute md:w-10 md:h-[1px] top-2/4 right-0 bg-gray-500"></span>
                </div>
                    <li class="relative px-5 py-1 rounded-3xl text-white bg-gray-500 mr-10 text-[0.7rem]">5. Hoàn thành</li>
                   
            </ul>
    
            <h1 class="font-bold text-4xl mt-10">Chọn ngay số điện thoại yêu thích</h1>
            <div class="flex mt-4 ">
                <span>Loại SIM:</span>
                    <ul class="flex md:justify-center md:items-center">
                        <li class="md:mx-8 flex md:justify-center md:items-center">
                            <input type="radio"><span class="ml-2">eSIM</span>
                        </li>
                        <li class="flex md:justify-center md:items-center">  
                            <input type="radio"><span class="ml-2">SIM vật lý</span>
                        </li>
                    </ul>
            </div>
    
            <span class="text-[0.8rem]">Lưu ý: eSIM chỉ sử dụng được trên thiết bị có hỗ trợ trong <a class="text-primary" href="">danh sách</a></span>
            
            <form class="w-full md:mt-4 bg-primary md:p-3 rounded-md ">
                <div class="flex">
                    <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm md:w-60 md:justify-between font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-md hover:bg-gray-200 focus:ring-4  focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">Tất cả danh mục số <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg></button>
                    <div id="dropdown" class="z-99 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tất cả danh mục số</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sim lộc phát</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sim ngũ quý giữa</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sim ông địa</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sim đảo ba</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sim đảo hai</button>
                            </li>
                        </ul>
                    </div>
                    <div class="relative w-full flex">
                        <input type="search" id="search-dropdown" class="block p-2.5 md:w-60 z-20 text-sm text-gray-900 bg-gray-50 rounded-e-md border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Nhập *68, 68*, *8*8*" required />
            
                        <div class="md:flex md:items-center ml-2 md:p-2 bg-white rounded-md">
                            <span class=" mr-2 text-primary">Loại trừ:</span>
                            <ul class="flex text-redColor">
                                <li v-for="(number, index) in numbers" :key="index" class="flex items-center mr-1">
                                    <div @click="chooseNumber(index)" :class="{ 'selected': isSelected(index) }" class="w-6 h-6 flex items-center justify-center rounded-full border-2 border-redColor cursor-pointer">{{ number }}</div>
                                </li>
                            </ul>
                        </div>
            
                        <button type="submit" class="absolute top-0 right-11 end-0 p-2.5 text-sm font-medium h-full md:w-40 text-white bg-pinkColor rounded-3xl  hover:bg-[#dc3f86] transition-all duration-300 ">
                            <span class="text-[1rem] font-bold">TÌM KIẾM</span>
                        </button>
                    </div>
                </div>
            </form>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
                <table class="w-full text-left rtl:text-right text-gray-500">
                    <thead class=" text-gray-800  bg-gray-200 " style="font-size: medium;">
                        <tr>
                            <th scope="col" class="px-6 py-3 ">
                                Số điện thoại
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Loại số
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Giá tiền
                            </th>
                            <th scope="col" class="px-6 py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in phoneInfoArray" :key="index" class="bg-white border-b shadow-3xl text-gray-800">
                            <td scope="row" class="px-6 py-6 text-4xl text-pinkColor font-bold">
                                {{ item.phoneNumber }}
                            </td>
                            <td class="px-6 py-6 ">
                                <span class="border border-primary px-1 rounded-md">{{ item.type }}</span>
                            </td>
                            <td class="px-6 py-6 text-2xl text-pinkColor font-bold ">
                                {{ item.price }}
                            </td>
                            <td class="px-6 py-6 text-right ">
                                <a href="#" class="font-bold text-pinkColor px-16 py-2  rounded-xl border-2 border-pinkColor hover:text-white hover:bg-pinkColor hover:shadow-3xl transition-color duration-200 ease-in-out ">MUA NGAY</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex justify-end mt-10">
                <nav aria-label="Page navigation ">
                    <ul class="flex items-center -space-x-px h-10 text-base">
                        <li>
                            <a href="#" class="flex items-center justify-center mx-1 px-4 h-10 ms-0 leading-tight text-white bg-gray-200 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                                <span class="sr-only">Previous</span>
                                <svg class="w-3 h-3 rtl:rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                            </a>
                        </li>

                        <li>
                        <a href="#" class="flex items-center justify-center px-3 mx-1 rounded-e-lg h-10  leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
                        </li>
                        <li>
                        <a href="#" class="flex items-center justify-center px-3 mx-1 rounded-lg h-10  leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                        </li>
                        <li>
                        <a href="#" class="flex items-center justify-center px-3 mx-1 rounded-lg h-10  leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">3</a>
                        </li>
                        <li>
                        <a href="#" class="flex items-center justify-center px-3 mx-1 rounded-lg h-10  leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
                        </li>
                        <li>
                        <a href="#" class="flex items-center justify-center px-3 mx-1 rounded-lg h-10  leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
                        </li>
                        <li>
                        <a href="#" class="flex items-center justify-center px-3 mx-1 rounded-s-lg h-10  leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">...</a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center justify-center px-4 mx-1 h-10 leading-tight text-white bg-gray-200 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700" >
                                <span class="sr-only">Next</span>
                                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
   </div>
</template>


<script>
export default {
  data() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const selectedNumbers = [];
    const phoneInfoArray= [] ;
    return {
        numbers,
        phoneInfoArray,
        selectedNumbers,
    };
  },
  mounted() {
    this.randomPhoneInfo();
  },
  methods: {
    randomPhoneNumber() {
      let phoneNumber = '0'; 
      for (let i = 0; i < 9; i++) {
        phoneNumber += Math.floor(Math.random() * 10); 
      }
      return phoneNumber;
    },

    randomPhoneInfo() {
      const numberOfPhones = 10; // Số lượng số điện thoại muốn tạo
      for (let i = 0; i < numberOfPhones; i++) {
        const phoneNumber = this.randomPhoneNumber();
        const type= 'Trả trước'; 
        const price = '50.000 đ';

        this.phoneInfoArray.push({ phoneNumber, type, price });
      }
    },

    chooseNumber(index) {
      if (this.selectedNumbers === undefined) {
        this.selectedNumbers = [];
      }
      if (this.selectedNumbers.includes(index)) {
        this.selectedNumbers = this.selectedNumbers.filter(num => num !== index);
      } else {
        this.selectedNumbers.push(index);
      }
    },
    isSelected(index) {
      if (this.selectedNumbers === undefined) {
        this.selectedNumbers = [];
      }
      return this.selectedNumbers.includes(index);
    }
  
}
};
</script>
<style scoped>
.selected {
  background-color: #d3196d;
  color: white;
}
</style>