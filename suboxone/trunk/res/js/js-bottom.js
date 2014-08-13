var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
var downevent = isIOS ? "touchstart" : "mousedown";
var upevent = isIOS ? "touchend" : "mouseup";
var moveevent = isIOS ? "touchmove" : "mousemove";



$(document).ready(function() {
setTimeout(function () {

    //thumbscroller stuff
    var thumbscrollerobject = $('.thumbscroller .thumb');
    var thumbmargin = 8;
    var thumbscrollerholderwidth = $('.thumbscroller_holder').width();

    

    var thumbscrollerwidth = (thumbmargin + 169 )* thumbscrollerobject.length + 100;
    var maxscrolloffset = (thumbscrollerwidth - thumbscrollerholderwidth) * -1;
    $('.thumbscroller').css('width', thumbscrollerwidth + 'px');

    var thumbscroller = new IScroll('.thumbscroller_holder', { scrollX: true, scrollY: false, bounce: false, momentum: true});
    
    var ssholder = $('.sectionselectors');
    for(var i=0; i<5; i++) {
        ssholder.append('<span></span>');
        var newss = ssholder.find('span:last-child');
    }
    ssholder.find('span:first-child').addClass('active');
    //ast.data('ash').data('ss').addClass('active');
    //var sectionselectors = $('.sectionselectors span');

    var thumbscroller_obj = $('.thumbscroller');
    var current_ss = 0;
    var selectss = function () {
        var half_holder_width = thumbscrollerholderwidth / 2;
        var cpos = Math.abs(thumbscroller_obj.position().left) + half_holder_width;
        var new_ss = Math.floor((cpos / (thumbscrollerwidth - half_holder_width)) * 4);
        if(new_ss != current_ss) {
            current_ss = new_ss;
            ssholder.find('span').removeClass('active');
            ssholder.find('span').eq(current_ss).addClass('active');
        }
    }

    $('.thumb').on('click touch', function(){ 

        $(this).find('a').trigger('click');

    });
})
})
   