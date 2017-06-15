// logo hover 后border-bottom 向上移动的效果
$(function(){
  $('.logo').mouseover(function() {
    $('.logo .logo-a').stop().animate({'padding-bottom':10 + 'px'});
  })
  $('.logo').mouseleave(function() {
    $('.logo .logo-a').stop().animate({'padding-bottom':14   + 'px'});
  })
})
// nav hover 后 border-bottom向上移动的效果
$(function(){
  $('.nav ul li a').hover(function() {
    $(this).stop().animate({'padding-bottom':14+ 'px'});
  }, function() {
    $(this).stop().animate({'padding-bottom':20   + 'px'});
  });
})
// input 框hover后的添加shadow的效果
$(function(){

  $('.inp-search').mouseover(function() {
    var sta=false;
      $(this).addClass('inp-shadow').css('color', ' #4178be');
  })
  $('.inp-search').mouseleave(function(){
    $(this).removeClass('inp-shadow').css('color', 'black');
  })
  $('.inp-search-p').mousemove(function(event) {
    sta=true;
    $(this).addClass('inp-shadow').css('color', ' #4178be');
    $('.inp-search').removeClass('inp-shadow');
  })
  $('.inp-search-p').mouseleave(function(){
    $(this).removeClass('inp-shadow').css('color', 'black');
  })
})
//header 上icoonfont hover后的border-bottom的效果；
$(function(){
  $('.header-icon a').hover(function() {
    $(this).stop().animate({'padding-bottom':10 + 'px'});
  }, function() {
    $(this).stop().animate({'padding-bottom':14 + 'px'});
  });
})
//hide-header slideup slidedown 的效果；
$(function(){
  var sta=false;
  if(!sta){
    $('.nav ul li:nth-child(1)').mouseover(function(event) {
    $('.hide-header').stop().slideDown();
    })
    $('.nav ul li:nth-child(1)').mouseleave(function(event) {
      $('.hide-header').stop().slideUp();
    })
  }
  sta=true ;
   $('.nav ul li:nth-child(1)').hover(function() {
     $('.hide-header').stop().slideDown(1000);
   }, function() {
     $('.hide-header').stop().slideUp(1000);
   })
   $('.hide-header').hover(function() {
     $(this).stop().slideDown(1000);
   }, function() {
     $(this).stop().slideUp(1000);
   })
})
// hideheader选择导航的效果。
$(function(){
  $('.content-list-son').eq(0).fadeIn().siblings().fadeOut();
  $('.hide-header-nav p').mouseover(function(event) {
    var index=$(this).index();
    $('.content-list-son').eq(index).stop().fadeIn().siblings().fadeOut();
  })
})
//hide-header 判断鼠标滚动的方向
$(function(){
  var m=$(window).scrollTop();
  $(window).scroll(function(){
    var n=$(this).scrollTop();
    if (n-m>0) {//鼠标下滑
      $('.header').slideUp(0);
      $('.hide-header').css({'top':0 + 'px'});
    }else{//鼠标上滑
      $('.header').slideDown(0);
      $('.hide-header').css({'top':50 + 'px'});
    }
    m=n;
  })

})
//hide-aside 点击出现和消失效果 冒泡事件的阻止
$(function(){
  $('.header-icon p:nth-child(2)').click(function() {
    $('.hide-shade').css({'display':'block'});
    $('body').css({height: '100%',overflowY: 'hidden'})
    $('.hide-aside').stop().animate({'right': 0 + 'px'},500)
  })
  $('.hide-shade').click(function() {
    $(this).css({'display':'none'});
    $('body').css({height: 'auto',overflowY: 'auto'})
    $('.hide-aside').stop().animate({'right':-400 + 'px'},500)
  })
  $('hide-aside').click(function() {
    $('hide-shade').css({'display':'block'});
    $('.hide-aside').stop().animate({'right':-400 + 'px'},500)
  });
  $('.hide-aside').click(function(event) {
    event.stopPropagation()
        })
  })
//hide-aside点击同一个事件出现两种不同的效果
$(function(){
   var sta=false;
   $('.aside-nav-click1 a').click(function() {
    if (!sta) {
      $('.hide-aside .aside-ul-click1 li').slideUp(500);
      $('.aside-nav-click1 a span:last-child').show().siblings().hide();
      sta=true;
    }else{
      $('.hide-aside .aside-ul-click1 li').slideDown(500);
      $('.aside-nav-click1 a span:first-child').show().siblings().hide();
      sta=false;
      }
   })
  })
$(function(){
   var sta=false;
   $('.aside-nav-click2 a').click(function() {
    if (!sta) {
      $('.hide-aside .aside-ul-click2 li').slideUp(500);
      $('.aside-nav-click2 a span:last-child').show().siblings().hide();
      sta=true;
    }else{
      $('.hide-aside .aside-ul-click2 li').slideDown(500);
      $('.aside-nav-click2 a span:first-child').show().siblings().hide();
      sta=false;
      }
   })
  })
$(function(){
   var sta=false;
   $('.aside-nav-click3 a').click(function() {
    if (!sta) {
      $('.hide-aside .aside-ul-click3 li').slideUp(500);
      $('.aside-nav-click3 a span:last-child').show().siblings().hide();
      sta=true;
    }else{
      $('.hide-aside .aside-ul-click3 li').slideDown(500);
      $('.aside-nav-click3 a span:first-child').show().siblings().hide();
      sta=false;
      }
   })
 })
//点击右上的关闭hide-shade的效果；
$(function(){
  $('.iconfont-click').click(function() {
   $('.hide-shade').css({'display':'none'});
   $('body').css({height: 'auto',overflowY: 'auto'})
  })
})