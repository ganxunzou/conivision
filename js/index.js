/**

 * Created by li on 2015/8/3.

 */

//判断当前设备是否是pc端
var checkUserAgentInfo = function(){
  function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
   for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
           break;
       }
   }
   return flag;
  }


  var pcflag = IsPC()
  
  if(pcflag == false){
      var str=window.location.href;
      var pattern = "/index.html";
      str = str.replace(new RegExp(pattern), "");
      window.location.href= str+ '/m/index.html'
  }
}

checkUserAgentInfo();

window.onload = function(){
              
  //点击回到顶部
  var oTop = document.getElementById("to_top");
  oTop.onclick = function(){

      document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  //全屏轮播
  var newSlideSize = function slideSize(){
      var w = Math.ceil($(".swiper-container").width()/3/*--调整高度---*/);
      $(".swiper-container,.swiper-wrapper,.swiper-slide").height(w);
  };

  newSlideSize();

  $(window).resize(function(){
      newSlideSize();
  });

  var mySwiper = new Swiper('.swiper-container',{
      pagination: '.pagination',
      loop:true,
      autoplay:4000,
      paginationClickable: true,
      onSlideChangeStart: function(){
          //回调函数
      }

  });

  //导航栏点击跳转
  $('.gigamenu li').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
  })



};