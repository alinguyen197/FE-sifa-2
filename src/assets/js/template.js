if ($(window).width() <= 500) {
    var inforwer = document.getElementById("infor-wer");
    var inforwer2 = document.getElementById("infor-wer2");
    inforwer.classList.add('toggle-info');
    inforwer2.classList.add('toggle-info');
    $("#infor-wer").on("click", function () {
        // $("#search-guide").css("display", "block");
        $("#infor-wer .nav-left.menu").toggle('slow');
    });
    $("#infor-wer2").on("click", function () {
        // $("#search-guide").css("display", "block");
        $("#infor-wer2 .nav-left.menu").toggle('slow');
    });
}

window.onscroll = function () {
    // myFunction()
};

var menu = $("header .menu-top-fuild");
var scrollTop = menu.offsetTop;

// var FilterScroll = document.getElementById("box-filter-product");
// var FilterScrollTop = FilterScroll.offsetTop + 700;
var nHeightFS = $('#footer-contact').innerHeight() + 5750;
var h = window.innerHeight;


function myFunction() {
    if (window.pageYOffset > scrollTop) {
        $("#fix-menu-top").addClass('affix');
        // $("#nav-right").addClass('nav-right-scroll');
    } else {
        $("#fix-menu-top").removeClass('affix');
        // $("#nav-right").removeClass('nav-right-scroll');
    }
    console.log(window.pageYOffset)
    console.log(scrollTop)
    // if (window.pageYOffset > FilterScrollTop && window.pageYOffset < nHeightFS) {
    //     $(".box-filter-product .fil-all").addClass('filter-scroll-top');
    //     $('.filter-scroll-top').css('height', h - 200);
    //     $('.filter-scroll-top').css('overflow-y', 'scroll');
    // } else {
    //     $(".box-filter-product .fil-all").removeClass('filter-scroll-top');
    // }
    //
    //
    // if (window.pageYOffset > cartScrollTop && window.pageYOffset < ProductSameScroll) {
    //     $('#form-add-cart').addClass('cartscrollTop');
    // } else {
    //     $('#form-add-cart').remove('cartscrollTop');
    // }
}

$('.c-btn_like').click(function () {
    var id = $(this).attr('data-id');

    var alert_infoLike = $('#info_alertLike').val();
    arr_alertLike = alert_infoLike ? JSON.parse(alert_infoLike) : [];

    $.ajax({
        url: "index.php?module=product&view=product&task=ajax_add_like&raw=1",
        data: {
            product_id: id
        },
        dataType: "text",
        success: function (result) {
            if (result == 1) {
                $('.c-like' + id).removeClass('active');
                // var data_like = $('.c-amount_like').attr('data-like')
                // $('.c-amount_like').html('(' + (parseInt(data_like) - 1) + ')')
                // $('.c-amount_like').attr('data-like', parseInt(data_like) - 1)
                close(arr_alertLike[3], 'success');
            } else if (result == 2) {
                $('.c-like' + id).addClass('active');
                // var data_like = $('.c-amount_like').attr('data-like')
                // $('.c-amount_like').html('(' + (parseInt(data_like) + 1) + ')')
                // $('.c-amount_like').attr('data-like', parseInt(data_like) + 1)
                close(arr_alertLike[2], 'success');
            } else if (result == 3) {
                close(arr_alertLike[1], 'warning');
            } else {
                close(arr_alertLike[0], 'warning');
                return false;
            }
        }
    });
})

function save_post(id) {
    // var alert_info = $('#alert_info').val();
    // alert_info = alert_info ? JSON.parse(alert_info) : [];


    var name_id1 = $('.c-btn_heart');

}
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img[data-src]"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback
        let active = false;

        const lazyLoad = function() {
            if (active === false) {
                active = true;

                setTimeout(function() {
                    lazyImages.forEach(function(lazyImage) {
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazy");

                            lazyImages = lazyImages.filter(function(image) {
                                return image !== lazyImage;
                            });

                            if (lazyImages.length === 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    });

                    active = false;
                }, 200);
            }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }
});








