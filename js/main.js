//search
$(".btn_search").click(function () {
    $(".search").fadeIn();
});

$(".search_close").click(function () {
    $(".search").fadeOut();
})

//mgnb
$(".btn_ham").click(function () {
    $(".mgnb_wrap").animate({ "right": "0" });
    $(".dim").fadeIn();
})
$(".mgnb_close").click(function () {
    $(".mgnb_wrap").animate({ "right": "-100%" });
    $(".dim").fadeOut();
})


//visual
const visual_list = new Swiper(".visual_list", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

//depth2
$(".gnb>li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
})

//info
const info_list = new Swiper(".info_list", {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        1024: { slidesPerView: 3, },
        700: { slidesPerView: 2, },
    },
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

//brand_txt
const brand_txt_list = new Swiper(".brand_txt_list", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
})
//brand_img

const brand_img_list = new Swiper(".brand_img_list", {
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
    },
})

brand_txt_list.controller.control = brand_img_list
brand_img_list.controller.control = brand_txt_list

//gallery

$(".gallery ul li").click(
    function () {
        $(this).addClass("active").siblings().removeClass("active");
    }
)