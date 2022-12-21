
$(document).ready(function(){
   
    /*menu-bar*/
    $(".lines").on("click",function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $('.nav-menu').removeClass('active');
        }
        else{
            $(this).addClass("active");
            $('.nav-menu').addClass('active');
        } 
    });

    /*toggle button*/
    $('.cb-value').click(function() {
        var mainParent = $(this).parent('.toggle-btn');
        if($(mainParent).find('input.cb-value').is(':checked')) {
            $(mainParent).addClass('active');
            $('.toggler-txt').eq(1).addClass('active');
            $('.toggler-txt').eq(0).removeClass('active');
        } else {
            $(mainParent).removeClass('active');
            $('.toggler-txt').eq(0).addClass('active');
            $('.toggler-txt').eq(1).removeClass('active');
        }
      
        if($('.right-btn').hasClass('active')){
            $('.plan-billed-details').text('*All plans are billed annually');
            $('.only_annual').addClass('visible');
            $('.support').text('Adavanced');
            $('.anually-price').css('display','block');
            $('.monthly-price').css('display','none');
        }else{
            $('.plan-billed-details').html('&nbsp;');
            $('.only_annual').removeClass('visible');
            $('.support').text('Basic');
            $('.anually-price').css('display','none');
            $('.monthly-price').css('display','block');
        }
    });
   
    /*hover effect*/
    setTimeout(function(){
        $('.card:nth-child(4) .price span').text(' Free Forever'); 

        var cards=$('.card').eq(1);
        cards.addClass('active-animate');
        var list=$('.pkgitem-block').eq(1);
        list.addClass('active-list');
    
        $('body').on('mouseover', '.pkgitem-block',function(){
            if(!$(this).hasClass('active-list')){
                $('.pkgitem-block').removeClass('active-list');
                $(this).addClass('active-list');
            }
        });

        $('body').on('mouseover', '.card',function(){
            if(!$(this).hasClass('active-animate')){
                $('.card').removeClass('active-animate');
                $(this).addClass('active-animate');
            }
        });

        /*customslider */
        $('#img1').addClass('image-center');
        $('#img2').addClass('image-top');
        $('#img3').addClass('image-bottom');
        $('.tab-content:first-child').addClass('active');
        $('body').on('click', '.tab-content',function(){
            i =$(this).index();
            $('.tab-content').removeClass('active');
            $(this).addClass('active');
            $(".imagecustom").removeClass('image-center image-top image-bottom ');
            if(i==0){
                $('#img1').addClass('image-center');
                $('#img2').addClass('image-top');
               $('#img3').addClass('image-bottom');
            }else if(i==1){
                $('#img1').addClass('image-bottom');
                $('#img2').addClass('image-center ');
                $('#img3').addClass('image-top');
            }else {
                $('#img1').addClass('image-top ');
                $('#img2').addClass('image-bottom');
                $('#img3').addClass('image-center');
            }
        });
    },100);
   
    /*price-plan*/
    $.getJSON('pricecard.json', function(data) {
        $.each( data.plans, function(i){
            $('.pricing-cards').append('<div class="card">\
            <div class="price-head">\
                <h3>'+ data.plans[i].heading +'</h3>\
                <div class="price  monthly-price">$'+ data.plans[i].price +'<span class="price-text"> /mo</span></div>\
                <div class="price anually-price">$'+ data.plans[i].price2 +'<span class="price-text"> /mo*</span></div>\
            </div>\
            <ul class="plan-detail">\
                <li>Up to <span>' + data.plans[i].views +' Pageviews/mo </span></li>\
                <li>' + data.plans[i].list1 + '</li>\
                <li>' + data.plans[i].list2 + '</li>\
            </ul>\
            <div class="pricebtn-section">\
                <div class="price-btn">\
                    <a href="#" class="btn-txt">Get Started</a>\
                </div>\
                <div class="feature-section">See All Features</div>\
            </div>\
            </div>\
            </div>');
        });

        /*client-slider*/
        $.each(data.slider,function(i){
            $('.client-content').append('<div class="client-info">\
                <div class="clientinfo-block">\
                    <p class="quotes">' + data.slider[i].text + '</p>\
                    <div class="client-detail">\
                        <div class="img-wrapper">\
                            <img src="' +  data.slider[i].img +'" alt="'+ data.slider[i].alt +'"/>\
                        </div>\
                        <div class="client-position">\
                            <h4>' + data.slider[i].name + '</h4>\
                            <div class="post"> ' + data.slider[i].post + '</div>\
                        </div>\
                    </div>\
                </div>\
            </div>')
        });

        /*clientlogo -slider*/
        $.each(data.images,function(i){
            $('.clientlogo-wrapper').append('<div class="logo-wrapper">\
                <div class="image-wrapper">\
                     <img src="' +  data.images[i].image +'" alt="'+ data.images[i].alts +'"/>\
                </div>\
            </div>')
        });


        /*popupplan-types*/
        $.each(data.popup,function(i){
            $('.popupplan-wrapper').append('<div class="plan-desc">\
                <div class="img-wrapper">\
                    <img src="' +  data.popup[i].popuimg +'" alt="'+ data.popup[i].alt +'"/>\
                </div>\
                <div class="popup-desc">\
                    <h4>' + data.popup[i].title + '</h4>\
                    <p> ' + data.popup[i].shortdesc + '</p>\
                </div>\
            </div>')
        });

        /*cusomization-data*/
        $.each(data.customization,function(i){
            $('.customfeature-wrapper').append('<div class="custom-desc">\
                <div class="img-wrapper">\
                    <img src="' +  data.customization[i].image +'" alt="'+ data.customization[i].alt +'"/>\
                </div>\
                <div class="custom-info">\
                    <h4>' + data.customization[i].subhead + '</h4>\
                    <p> ' + data.customization[i].text + '</p>\
                </div>\
            </div>')
        });

        /*targetting-data*/
        $.each(data.targetting,function(i){
            $('.targetfeature-wrapper').append('<div class="targetting-desc">\
                <div class="img-wrapper">\
                    <img src="' +  data.targetting[i].image +'" alt="'+ data.targetting[i].alt +'"/>\
                </div>\
                <div class="targetting-info">\
                    <h4>' + data.targetting[i].subhead + '</h4>\
                    <p> ' + data.targetting[i].text + '</p>\
                </div>\
            </div>')
        });
        
        /*tracking-data*/
        $.each(data.targetting,function(i){
            $('.trackingfeature-wrapper').append('<div class="tracking-desc">\
                <div class="img-wrapper">\
                    <img src="' +  data.tracking[i].image +'" alt="'+ data.tracking[i].alt +'"/>\
                </div>\
                <div class="tracking-info">\
                    <h4>' + data.tracking[i].subhead + '</h4>\
                    <p> ' + data.tracking[i].text + '</p>\
                </div>\
            </div>')
        });

         /*custom-slider*/
         var count=1;
         var c=1;
         $.each(data.tabcontent,function(i){
            $('.custom-wrapper .left-wrapper').append('<div class="tab-content" id=' + count++ + '>\
                <h3>'+ data.tabcontent[i].head + '</h3>\
                <p> '+ data.tabcontent[i].text + '</p>\
        </div>');
        });
        $.each(data.tabcontent,function(i){
            $('.custom-wrapper .right-wrapper').append(' \
                <img class="imagecustom" id=img' + c++ + ' src="' +  data.tabcontent[i].image +'" alt="'+ data.tabcontent[i].alt +'"/>\
            ');
        });
    });


    /*slider script add */
    var getItem = setInterval(function(){
            clearInterval(getItem);
            $('.client-content').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite:true,
                autoplay:true,
                autoplaySpeed:2000,
                responsive:[
                    {
                        breakpoint: 1260,
                        settings: {
                        slidesToShow: 2,
                            slidesToScroll:1,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll:1,
                        }
                    },
                ]
            });

            /*clientlogo-slider*/
            $('.clientlogo-wrapper').slick({
                infinite:true,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay:true,
                autoplaySpeed:2000,
                responsive:[
                    {
                        breakpoint: 1260,
                        settings: {
                        slidesToShow: 4,
                         slidesToScroll:1,
                        }
                    },
                ]
                });
            
            $('.pkgitem-slider').slick({
                slidesToShow: 4,
                infinite:true,
                responsive:[
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll:1,
                            arrows: true,
                            infinite:true,
                        }
                    },
                ]
            });
    },100);
});