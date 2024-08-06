

<template>
    <div class="mt-20 bg-primary mb-80">
        <div class="w-3/4 mx-auto flex">
            <div class="w-1/2 flex flex-col items-center justify-center">
                <h2 class="text-white text-3xl font-semibold mt-20">Tra cứu đơn hàng</h2>
                <input class="w-full border-none rounded-xl px-8 py-3 mt-12 font-medium " type="text" placeholder="Mã vận đơn...">
                <button type="button" class="bg-[#005aaa] text-white font-bold px-16 py-3 rounded-xl mt-6 mb-8">Tra cứu</button>
                <p class="hidden text-white text-mg my-2 -mt-6">Mã đơn hàng không chính xác, vui lòng thử lại</p>
            </div>
            <div class="w-1/2 relative">      
                <div class="absolute top-20 left-5">
                    <img src="../../assets/images/order_img.png" alt="" >
                </div>
            </div>
        </div>
    </div>
</template>