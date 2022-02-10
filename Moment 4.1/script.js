
$(document).ready(function () {    
        $("img").animate({left: '+=300px'}, 15000).animate({top: '+=300px'}, 15000).animate({left: '-=300px'}, 15000).animate({top: '-=300px'}, 15000);
        
        $("img").dblclick(function() {
            $(this).stop(true);
        })
})

