 // import Swiper JS
 import Swiper, { Pagination } from 'swiper';
 // import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';

 import './slider.css';

 import render from './slider.art';
 import  getData from 'api/getData.js';

 const sliderLayout=document.getElementById('index-slider');
 const url='https://www.imooc.com/api/mall-wepApp/index/slider'

 getData(url).then(data=>{
  // console.log(data);
  sliderLayout.innerHTML=render({
    items:data
  })
 }).then(()=>{
// init Swiper:
  const swiper = new Swiper('.swiper', {
  loop: true,
  // configure Swiper to use modules
  modules: [Pagination],
  pagination: {
      el: '.swiper-pagination',
    },
  
});
 })

  