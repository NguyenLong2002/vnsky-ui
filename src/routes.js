import HomePage from "./components/HomePage.vue";
import NumberPage from "./components/page/NumberPage.vue"
import PackOfData from "./components/page/PackOfData.vue";
import RechargePage from "./components/page/RechargePage.vue";
import EsimPage from "./components/page/EsimPage.vue";
import OrderPage from "./components/page/OrderPage.vue";
import ImageSlider from "./components/layout/ImageSlider.vue"
export const routes = [
    {path:'/', name: 'homepage', component:HomePage},
    {path:'/NumberPage',name:'numberpage',component: NumberPage },
    {path:'/PackOfData',name:'packOfdata',component: PackOfData },
    {path:'/RechargePage',name:'rechargepage',component: RechargePage },
    {path:'/EsimPage',name:'esimpage',component: EsimPage },
    {path:'/OrderPage',name:'orderpage',component: OrderPage },
    {path:'/ImageSlider',name:'imageslider',component: ImageSlider },
]