<script setup>
import { faChevronRight, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
<template>
  <footer class="bg-gray-200 w-full pt-[50px]">
    <div class="container-footer py-14">
      <div class="footer-up md:flex md:justify-between md:flex-wrap w-3/4 mx-auto mb-[50px]">
        <div class="logo max-xl:mb-5 max-xl:mr-3 cursor-pointer w-[50%]">
          <img src="@/assets/images/logo-vnsky.svg" alt="" class="w-96" />
        </div>

        <div class="w-[50%] md:flex md:justify-around">
          <div class="contact max-xl:mb-5 max-xl:mr-3 ">
            <h5 class="font-bold">Kết nối với VNSKY</h5>
            <ul class="list-link flex flex-wrap w-[200px] mt-5">
              <li class="mr-[15px] mb-[15px]">
                <a href="#">
                  <img
                    src="@/assets/images/FB_img.svg"
                    alt=""
                    class="w-[30px]"
                  />
                </a>
              </li>
              <li class="mr-[15px] mb-[15px]">
                <a href="#">
                  <img
                    src="@/assets/images/InTa_img.svg"
                    alt=""
                    class="w-[30px]"
                  />
                </a>
              </li>
              <li class="mr-[15px] mb-[15px]">
                <a href="#">
                  <img
                    src="@/assets/images/youtobe_img.svg"
                    alt=""
                    class="w-[30px]"
                  />
                </a>
              </li>
              <li class="mr-[15px] mb-[15px]">
                <a href="#">
                  <img src="@/assets/images/zalo_img.webp" alt="" class="w-[30px]" />
                </a>
              </li>
              <li class="mr-[15px] mb-[15px]">
                <a href="#">
                  <img
                    src="@/assets/images/tiktok_img.svg"
                    alt=""
                    class="w-[30px]"
                  />
                </a>
              </li>
              <li class="mr-[15px] mb-[15px]">
                <a href="#">
                  <img
                    src="@/assets/images/lazada_img.svg"
                    alt=""
                    class="w-[30px]"
                  />
                </a>
              </li>
              <li class="mr-[15px] mb-[15px]">
                <a href="#">
                  <img
                    src="@/assets/images/shopee_img.svg"
                    alt=""
                    class="w-[30px]"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="download">
            <h5 class="font-bold">Tải ứng dụng</h5>
            <div class="flex mt-5">
              <img
                src="@/assets/images/appStoreImg.svg"
                alt=""
                class="w-[104px] mr-2"
              />
              <img src="@/assets/images/googlePlayImg.svg" alt="" class="w-[104px]" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-under md:flex md:justify-between md:flex-wrap w-3/4 mx-auto">
        <div class="introduce max-xl:mb-5 max-xl:mr-3">
          <h5 class="font-bold">Giới thiệu</h5>
          <ul>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Về VNSKY
              </a>
            </li>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Tin tức
              </a>
            </li>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Tải xuống logo VNSKY
              </a>
            </li>
            <li>
              <a href="#" ><span class="text-primary"><FontAwesomeIcon :icon="faPhoneVolume" /> 1900 5222</span> (1000đ/Phút)</a>
            </li>
          </ul>
        </div>

        <div class="support max-xl:mb-5 max-xl:mr-3">
          <h5 class="font-bold">Trung tâm hỗ trợ</h5>
          <ul>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Chất lượng dịch vụ
              </a>
            </li>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Câu hỏi thường gặp
              </a>
            </li>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Chính sách bảo mật thông tin
              </a>
            </li>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Chính sách vẩn chuyển
              </a>
            </li>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Điều kiện giao dịch chung
              </a>
            </li>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Chính sách bảo vệ dữ liệu cá nhân
              </a>
            </li>
          </ul>
        </div>

        <div class="utilities max-xl:mb-5">
          <h5 class="font-bold">
            Tiện ích
          </h5>
          <ul>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> eSIM
              </a>
            </li>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Mua SIM
              </a>
            </li>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Nạp tiền
              </a>
            </li>
            <li class="">
              <a href="#">
                <FontAwesomeIcon :icon="faChevronRight" /> Tra cứu đơn hàng
              </a>
            </li>
          </ul>
        </div>

        <div class="payment">
          <h5 class="font-bold">
            Phương thức thanh toán
          </h5>
          <div class="flex flex-wrap max-w-60">
            <img src="@/assets/images/vnpay_img.svg" alt="" class="w-[104px] mr-3">
            <img src="@/assets/images/visa_img.svg" alt="" class="w-[58px] mr-3">
            <img src="@/assets/images/mastercard_img.svg" alt="" class="w-[50px] mr-3">
          </div>
          <div class="certify">
            <img src="@/assets/images/dathongbao_img.png" alt="" class="w-[168px] mt-5">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<style scoped>
a{
  text-decoration: none;
}
</style>