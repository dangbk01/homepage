var touchStartX;
var isBarMobileVisible = false;
var isMobileWidth = false; // Biến để kiểm tra có phải kích thước mobile không

$(document).ready(function () {
    // Bắt sự kiện khi click bên ngoài thanh search để đóng nếu đã mở
    $('.icon-mobile-bar').click(function () {
        openBarMobile();
    });
    $(document).click(function (e) {
        if (isBarMobileVisible && !$(e.target).closest('.bar-mobile').length && !$(e.target).closest('.icon-mobile-bar').length) {
            closeBarMobile();
        }
    });

    // Bắt sự kiện khi vuốt trên thiết bị di động
    $(document).on('touchstart', function (e) {
        touchStartX = e.originalEvent.touches[0].pageX; // Lấy vị trí pageX khi bắt đầu vuốt
    });

    $(document).on('touchmove', function (e) {
        var touchEndX = e.originalEvent.touches[0].pageX; // Lấy vị trí pageX khi kết thúc vuốt

        // Kiểm tra nếu thanh visible và màn hình dưới 767px
        if ($('.bar-mobile').is(":visible") && isMobileWidth) {
            if (touchEndX < touchStartX && !isBarMobileVisible) {
                // Nếu vuốt từ trái sang phải và bar-mobile chưa hiển thị, hiển thị bar-mobile
                openBarMobile();
            } else if (touchEndX > touchStartX && isBarMobileVisible) {
                // Nếu vuốt từ phải sang trái và bar-mobile đang hiển thị, ẩn bar-mobile
                closeBarMobile();
            }
        }
    });

    // Sự kiện resize để kiểm tra và đóng bar-mobile khi đổi kích thước màn hình
    $(window).resize(function () {
        checkMobileWidth();
        // Nếu đang hiển thị bar-mobile và kích thước màn hình lớn hơn hoặc bằng 767px
        if (isBarMobileVisible && !isMobileWidth) {
            closeBarMobile();
        }
    });

    // Sự kiện orientationchange để kiểm tra khi xoay màn hình
    $(window).on('orientationchange', function () {
        checkMobileWidth();
        if (!isMobileWidth) {
            closeBarMobile();
        }
    });

    // Kiểm tra kích thước màn hình khi trang được load ban đầu
    checkMobileWidth();
});

// Hàm kiểm tra kích thước màn hình để xác định liệu có phải mobile hay không
function checkMobileWidth() {
    if ($(window).width() < 767) {
        isMobileWidth = true;
    } else {
        isMobileWidth = false;
        closeBarMobile(); // Đóng search mobile nếu không phải mobile width
    }
}

// Hàm mở thanh search mobile
function openBarMobile() {
    $('.bar-mobile').css('right', '0');
    $('.overlay1').css('left', '0');
    isBarMobileVisible = true;
}

// Hàm đóng thanh search mobile
function closeBarMobile() {
    $('.bar-mobile').css('right', '-100%');
    $('.overlay1').css('left', '-100%');
    isBarMobileVisible = false;
}
