$(document).ready(function () {
    var isSearchMobileVisible = false;
  
    // Bắt sự kiện click vào biểu tượng mở thanh tìm kiếm
    $('.icon-mobile').click(function () {
      toggleSearchMobile();
    });
  
    // Bắt sự kiện click ra ngoài document để đóng thanh tìm kiếm
    $(document).click(function (e) {
      if (isSearchMobileVisible && !$(e.target).closest('.search-mobile').length && !$(e.target).closest('.icon-mobile').length) {
        closeSearchMobile();
      }
    });
  
    // Bắt sự kiện khi vuốt trên thiết bị di động
    $(document).on('touchstart', function (e) {
      touchStartX = e.originalEvent.touches[0].pageX;
    });
  
    $(document).on('touchmove', function (e) {
      var touchEndX = e.originalEvent.touches[0].pageX;
      if ($('.search-mobile').is(":visible") && ($(window).width() < 767)) {
        if (touchEndX > touchStartX && !isSearchMobileVisible) {
          // Nếu vuốt từ trái sang phải và search-mobile chưa hiển thị, hiển thị search-mobile
          openSearchMobile();
        } else if (touchEndX < touchStartX && isSearchMobileVisible) {
          // Nếu vuốt từ phải sang trái và search-mobile đang hiển thị, ẩn search-mobile
          closeSearchMobile();
        }
      }
    });
  
    // Hàm mở hoặc đóng thanh tìm kiếm mobile
    function toggleSearchMobile() {
      if (isSearchMobileVisible) {
        closeSearchMobile();
      } else {
        openSearchMobile();
      }
    }
  
    // Hàm mở thanh tìm kiếm mobile
    function openSearchMobile() {
      $('.search-mobile').css('left', '0');
      $('.overlay').css('left', '0');
      isSearchMobileVisible = true;
    }
  
    // Hàm đóng thanh tìm kiếm mobile
    function closeSearchMobile() {
      $('.search-mobile').css('left', '-100%');
      $('.overlay').css('left', '-100%');
      isSearchMobileVisible = false;
    }
  
    // Tự động đóng thanh tìm kiếm khi thiết bị có kích thước lớn hơn 767px
    $(window).resize(function () {
      if ($(window).width() >= 767) {
        closeSearchMobile();
      }
    });
  
  });
  