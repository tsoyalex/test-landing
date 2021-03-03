$(document).ready(function() {
  var w = $(window).width();
  brandsSlider()
  tabs()
  faq()
  flip()
  scrollto()
  mainMenuMobile() 
  mainMenuMobileAdd()
  $(window).resize(function() {    
      mainMenuMobileAdd()  
  });
  if (w<=767) {
    oneDayClock()
  }   
  if($('.input-field').length){
    $(document).on('focusout', '.input-field', function() {
      if ($.trim($(this).val()) != '') {
        $(this).parent().addClass('full');
      }
      else {
        $(this).parent().removeClass('full');
      }
    }); 
  } 
  $(window).scroll(function(){
    if (w>767) {
      if($('.statistics-par').length){
        var container = $('.statistics-head');  
        var title = $('.statistics-par');       
        paralax(container,title)
      };    
      if($('.delivery-par').length){
        var container = $('.delivery-head');  
        var title = $('.delivery-par');       
        paralax(container,title)
      }; 
      if($('.business-speed-par').length){
        var container = $('.business-speed-head');  
        var title = $('.business-speed-par');       
        paralax(container,title)
      };
      if($('.one-day-par').length){
        var container = $('.one-day');  
        var title = $('.one-day-par');       
        paralax(container,title)
      };
      if($('.control-par').length){
        var container = $('.control-head');  
        var title = $('.control-par');       
        paralax(container,title)
      };
      if($('.faq-par').length){
        var container = $('.faq-head');  
        var title = $('.faq-par');       
        paralax(container,title)
      };
      if($('.europe-par').length){
        var container = $('.europe-head');  
        var title = $('.europe-par');       
        paralax(container,title)
      };
    }
  });
});

var paralax = function(container,title) { 
  var winHeight = $(window).height();                     // высота экрана
  var st = $(this).scrollTop();                           // текущая позиция скролла
  var offset = container.offset();                        // узнаем позицию блока в документе отностительно всей страницы
  var offsetHeight = container.outerHeight();             // узнаем высоту блока
  var boxtHeightBot = offset.top + offsetHeight;          // узнаем нижнию позицию блока отностительно всей страницы, что бы знать когнда закончить паралакс
  var pageBot = offset.top - winHeight;                   // координаты нижней части экрана 
   //  console.log('-------------------------');
   //  console.log('высота окна ' + winHeight);
   //  console.log('позиция скрола  ' + st);
   //  console.log('высота блока ' + offsetHeight);
   //  console.log('верх блока ' + offset.top);
   //  console.log('низ блока ' + boxtHeightBot);
   //  console.log('низ страниці ' + pageBot);
  var stmod = st - offset.top;                            // от значение текущего скрола отнимаем отступ к блоку от начала страницы
      stmod  = stmod + winHeight/2;
  if (($(window).scrollTop() >= pageBot) && ($(window).scrollTop() < boxtHeightBot) ){     
    title.css({
      'transform' : "translate(-50%, " + -stmod/6 + "px)"
    })     
  }
  else{
    title.css({
      'transform' : "translate(-50%, 0)"
    })        
  }
};

var brandsSlider = function() {
  $('.js-brands-list').slick({
    dots: false,
    arrows:false,    
    slidesToShow: 1,
    variableWidth: true,
    draggable:true,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}

var flip = function() {
  $('.js-flip-click').on('click', function(){
     $(this).parents('.js-statistics-item').toggleClass('is-flipped'); 
  }); 
}

var tabs = function() {
  $('.js-faq-switcher').on('click', '.js-faq-switcher-item:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.js-faq-switcher').find('.js-faq-switcher-tab').removeClass('active').eq($(this).index()).addClass('active');
  });
}  

var faq = function() {
  $(".js-faq-accord-list-item > .js-faq-accord-list-item-title").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.js-faq-accord-list-item-text').slideUp(200);
    }else{            
      $(this).addClass("active");
      $(this).siblings('.js-faq-accord-list-item-text').slideDown(200);
    }
  });
}

var mainMenuMobileAdd = function() {
  var w = $(window).width();
  if (w<1100) {
    $('.js-header-menu').addClass('header-menu_mobile');
    $('.js-header-info').addClass('header-info_mobile');
    $('.js-header-mobile-menu-button').show();
    $('.js-header').each(function(){
      $(this).find('.js-header-mobile-menu-box').prepend($(this).find('.js-header-info'));
      $(this).find('.js-header-mobile-menu-box').prepend($(this).find('.js-header-menu'));      
    });
  }
  else {
    $('.js-header-menu').removeClass('header-menu_mobile');
    $('.js-header-info').removeClass('header-info_mobile');
    $('.js-header-mobile-menu-button').hide();    
    $('.js-header').each(function(){    
      $(this).find('.js-header-inset').append($(this).find('.js-header-menu'));  
      $(this).find('.js-header-inset').append($(this).find('.js-header-info'));    
  });
  }
}

var mainMenuMobile = function() {
  $('.js-header-mobile-menu-button, .js-header-mask, .js-header-mobile-menu-button, .header-menu-item i').on('click', function(){
    if($('.js-header-mobile-menu-button').hasClass('close')){ 
      $('.js-header-mobile-menu-button').removeClass('close');
      $('.js-header-mask').hide();
      $('.js-header-mobile-menu-box').animate({
        right : "-100%"
      }, {
        duration: 300,
        specialEasing:{
          width: "easeInQuad",     
        }
      });
    }
    else{ 
      $('.js-header-mobile-menu-button').addClass('close');
      $('.js-header-mask').show();
      $('.js-header-mobile-menu-box').animate({
        right : "0px"
      }, {
        duration: 300,
        specialEasing:{
          width: "easeInQuad",        
        }
      }); 
    }     
  });
}

var oneDayClock = function() {
  $('.js-one-day').each(function(){
    $(this).find('.container-fluid').prepend($(this).find('.js-one-day-clock'));      
  });
}

var scrollto = function() { 
    $(".scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 60}, 800);
            return false;
    }); 
}
