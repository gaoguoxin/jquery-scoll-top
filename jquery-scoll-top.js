(function($,window,document,undefined){
  $.fn.scollTop = function(options){
    var defaults = {
      scrollDuration:2000,
      scrollTop:400
    }

    opt = $.extend({},defaults,options)

    return this.each(function(){

      $(this).click(function(event){
        $("html, body").animate({scrollTop: 0}, opt.scrollDuration);
        event.preventDefault();  
      });

      // element must have such attributes 
      //data-position="fixed"
      //data-bottom="20px"
      //data-left="20px"
      $(this).css($(this).data());

      $(this).hide();// hide the link default;
      var link = $(this);

      $(window).scroll(function(){
        if ($(window).scrollTop() > opt.scrollTop) {
          link.fadeIn();
        }else{
          link.hide();
        };
      });
    })
  }
}(jQuery,window,document));