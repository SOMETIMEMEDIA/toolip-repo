var slide = 1;
var oferta = 1;
var kolor_czcionki = '#0097cb';
var social_color = 'blue';
var ofertyZmienianieActive=true;

$(document).ready(function() 
{
    setInterval(function(){
        karuzela(slide+1);
        
        
            
    },15000);
    
    setInterval(function(){
        if(ofertyZmienianieActive) zmienOferte(oferta+1);
        
        
            
    },3000);
    
    
    
    
    $('#slider_arrow_right').click(function(){
       
       karuzela(slide+1); 
    
    });
    
    $('#slider_arrow_left').click(function(){
       
       karuzela(slide-1); 
    
    });
    
    $('#slider_button_red').click(function(){
       
       karuzela(2); 
    
    });
    
    $('#slider_button_green').click(function(){
       
       karuzela(3); 
    
    });
    
    $('#slider_button_blue').click(function(){
       
       karuzela(1); 
    
    });
    
    $('.nav_button').mouseenter(function(){
        $(this).css('color', kolor_czcionki);
       $(this).attr('class', 'text_color nav_button');
        
    
    });
    
    $('.nav_button').mouseleave(function(){
        $(this).css('color', '#fff');
       $(this).attr('class', 'nav_button');
        
    
    });
    
    $('.box_nav').mouseenter(function(){
        $(this).css('color', kolor_czcionki);
       $(this).attr('class', 'text_color box_nav');
       $('.box_nav:hover .right_menu_arrow2').attr('src', 'img/small_'+social_color+'_arrow.png');
        
    
    });
    
    $('.box_nav').mouseleave(function(){
        $(this).css('color', '#fff');
        $(this).css('background', kolor_czcionki);
        $(this).attr('class', 'bg_color box_nav');
        $('.right_menu_arrow2').attr('src', 'img/small_white_arrow.png');
        
    
    });
    
    $('#slider_arrow_left').mouseenter(function(){
        
       $(this).attr('src', 'img/slider_arrow_left_'+social_color+'.png');
        
    
    });
    
    $('#slider_arrow_left').mouseleave(function(){
        
        $(this).attr('src', 'img/slider_arrow_left.png');
        
    
    });
    
    $('#slider_arrow_right').mouseenter(function(){
        
       $(this).attr('src', 'img/slider_arrow_right_'+social_color+'.png');
        
    
    });
    
    $('#slider_arrow_right').mouseleave(function(){
        
        $(this).attr('src', 'img/slider_arrow_right.png');
        
    
    });
    
    
    $('.oferty_box_left').click(function(){
        ofertyZmienianieActive = false;
        zmienOferte(oferta-1); 
    
    });
    
    $('.oferty_box_right').click(function(){
        ofertyZmienianieActive = false;
        zmienOferte(oferta+1); 
    
    });
    
    
    $('#target').submit(function() {
      if($('input[name=iKlauzula]').is(':checked'))
      {
          
      }
      else
      {
          alert('Aby zaaplikować konieczne jest wyrażenie zgody na przetwarzanie danych osobowych.');
          return false;
      }
      
    });
    
    
    
});

function zmienOferte(nastepna_oferta)
{
    var maxLiczbaOfert = 5;


    if(nastepna_oferta > maxLiczbaOfert)
    {
        nastepna_oferta = 1;
    }
        
    if(nastepna_oferta < 1)
    {
        nastepna_oferta = maxLiczbaOfert;
    }
    
    $('#oferty_box'+oferta).css('display','none');
    
    $('#oferty_box'+nastepna_oferta).css('display','block');
    
    $('.oferty_box_licznik').html(nastepna_oferta+'/' + maxLiczbaOfert);
    
    
    oferta = nastepna_oferta;
    
    
}

function karuzela(nastepny_slide)
{
    if($('.slider_img').is(':animated'))
    {
        //alert('1');
    }
    else
    {
        
    
        if(nastepny_slide > 3)
        {
            nastepny_slide = 1;
        }
        
        if(nastepny_slide < 1)
        {
            nastepny_slide = 3;
        }
    
        if(nastepny_slide == 3)
        {
            var kolor = '#0c9f58';
            kolor_czcionki = '#0c9f58';
            var logo = 'logo_green.png';
            var arrow = 'arrow_green.png';
            social_color = 'green';
           
            $('.slider_button').css('background', '#fff');
            $('#slider_button_green').css('background', '#0c9f58');
        }
        else if(nastepny_slide == 1)
        {
            var kolor = '#0097cb';
            kolor_czcionki = '#0097cb';
            var logo = 'logo_blue.png';
            var arrow = 'arrow_blue.png';
            social_color = 'blue';
            $('.slider_button').css('background', '#fff');
            $('#slider_button_blue').css('background', '#0097cb');
        }
        else if(nastepny_slide == 2)
        {
            var kolor = '#d2232a';
            kolor_czcionki = '#d2232a';
            var logo = 'logo_red.png';
            var arrow = 'arrow_red.png';
            social_color = 'red';
            $('.slider_button').css('background', '#fff');
            $('#slider_button_red').css('background', '#d2232a');
        }
    
    
        
        $('.bg_color').stop().animate({backgroundColor:kolor}, 2000, function() {
                        //$('.bg_color').css('background',kolor);
                        $('#logo').attr('src', 'img/'+logo);
                        $('.fb_icon').attr('src', 'img/fb_'+social_color+'.png');
                        $('.gp_icon').attr('src', 'img/gp_'+social_color+'.png');
                        $('.tw_icon').attr('src', 'img/tw_'+social_color+'.png');
                        $('.yt_icon').attr('src', 'img/yt_'+social_color+'.png');
                        $('.gl_icon').attr('src', 'img/logo_goldenline_'+social_color+'.png');
                        $('.ld_icon').attr('src', 'img/logo_linkedin_'+social_color+'.png');
                        $('.box_nav:hover .right_menu_arrow2').attr('src', 'img/small_'+social_color+'_arrow.png');
                        $('#slider_arrow_left:hover').attr('src', 'img/slider_arrow_left_'+social_color+'.png');
                        $('#slider_arrow_right:hover').attr('src', 'img/slider_arrow_right_'+social_color+'.png');
                    }); 
        $('.text_color, .job-offer-description p, .job-offer-description ul li, .job-offer-description div, .job-offer-description').stop().animate({color:kolor}, 2000, function() {
                        //$('.text_color').css('color',kolor);
                        //$('#footer').css('borderColor',kolor);
                    });
        
        $('#footer').stop().animate({borderColor:kolor}, 2000, function() {
                        //$('.text_color').css('color',kolor);
                        //$('#footer').css('borderColor',kolor);
                    }); 
        
        $('#slider'+slide).stop().fadeOut(1000, function() {
                        $('#logo').attr('src', 'img/'+logo);
                        $('.fb_icon').attr('src', 'img/fb_'+social_color+'.png');
                        $('.gp_icon').attr('src', 'img/gp_'+social_color+'.png');
                        $('.tw_icon').attr('src', 'img/tw_'+social_color+'.png');
                        $('.yt_icon').attr('src', 'img/yt_'+social_color+'.png');
                        $('.gl_icon').attr('src', 'img/logo_goldenline_'+social_color+'.png');
                        $('.ld_icon').attr('src', 'img/logo_linkedin_'+social_color+'.png');
                        $('.box_nav:hover .right_menu_arrow2').attr('src', 'img/small_'+social_color+'_arrow.png');
                        $('.main_arrow').attr('src', 'img/'+arrow);
                        $('#slider_arrow_left:hover').attr('src', 'img/slider_arrow_left_'+social_color+'.png');
                        $('#slider_arrow_right:hover').attr('src', 'img/slider_arrow_right_'+social_color+'.png');
                        
                        $('#slider'+nastepny_slide).stop().fadeIn(1000, function() {
                        //$('.text_color').css('color',kolor);
                        //$('#footer').css('borderColor',kolor);
                        }); 
                    }); 
                
        slide = nastepny_slide;
    }
}



    



    function closeCookie()
    {
        setCookie("polityka_ciasteczek",1,356);
        document.getElementById("cookies_alert").style.display="none";
    }
    
    function setCookie(c_name,value,exdays)
    {
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value;
    }
    
    function getCookie(c_name)
    {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1)
          {
            c_start = c_value.indexOf(c_name + "=");
          }
        if (c_start == -1)
          {
            c_value = null;
          }
        else
          {
              c_start = c_value.indexOf("=", c_start) + 1;
              var c_end = c_value.indexOf(";", c_start);
              if (c_end == -1)
                {
                    c_end = c_value.length;
                }
                c_value = unescape(c_value.substring(c_start,c_end));
        }
        return c_value;
    }
