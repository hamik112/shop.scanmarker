var $ = jQuery.noConflict();

$(function()
{
    
    window.dw = getDW();
    
    $(document).delegate('#playvideo', 'click', function()
    {
        var w = 300, h = 168;
        if (window.dw !== false)
        {
            w = (window.dw > 900) ? 900 : window.dw - 20;
            h = w / 1.78;
        }
        $('#video-popup').find('.body').css({'margin-top': '-' + (h/2) + 'px', 'margin-left': '-' + (w/2) + 'px'}).html('<iframe width="'+w+'" height="'+h+'" src="https://www.youtube.com/embed/j4f5Vv5TgBQ?feature=oembed&amp;rel=1&amp;controls=1&amp;showinfo=1&amp;wmode=opaque&amp;autoplay=1&amp;autoplay=1&amp;autoplay=1" frameborder="0" allowfullscreen=""></iframe>');
        $('#video-popup').fadeIn(200);
    });
    
    $(document).delegate('#video-popup', 'click', function()
    {
        if ($(this).find('.body').find('iframe').length > 0)
        {
            $(this).fadeOut(200, function()
            {
                $(this).find('.body').empty();
            });
        }
    });
    
    $(document).delegate('#promo-close', 'click', function()
    {
        $(this).parents('#promo-popup').fadeOut(200);
    });
    
    $(document).delegate('#gallery-choose img', 'click', function()
    {
        if ($(this).hasClass('active')) return;
        var id = $(this).data('img');
        $(this).addClass('active').siblings().removeClass('active');
        
        $('#img-' + id).show().siblings().hide();
    });
    
    
    $(document).delegate('#show-features, #show-features-mob', 'click', function()
    {
        $(this).hide();
        $('#show-features-list').slideToggle();
        $('body,html').animate({
            scrollTop: $('#show-features-list').offset().top
        });
    });
});

function getDW()
{
    var dw = document.getElementsByTagName('main')[0];
    
    if (dw !== null)
    {
        if (dw.getBoundingClientRect().width)
        {
            return dw.getBoundingClientRect().width;
        }
        else
        {
            return dw.offsetWidth;
        }
        
        return false;
    }
    
    return false;
}