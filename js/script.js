window.onload = function () {
  // Lấy thẻ input checkbox
  var checkbox = document.getElementById('checkbox2');

  // Đặt thuộc tính checked cho checkbox khi trang được tải
  checkbox.checked = true;
};
var updateIntervalTop; // Biến lưu trữ interval
// Hàm cập nhật top cho #overlay-moreinfo
function updateOverlayTop() {
  var tableOffset = $("#table-container .my-table thead").offset();
  $("#overlay-moreinfo").css("top", tableOffset.top);
}
// Hàm kiểm tra kích thước màn hình để xác định liệu có phải mobile hay không
$(document).ready(function () {
  //type in header
  $('.choose').click(function () {
    $('.choose').removeClass('active');
    $(this).addClass('active');
  });
  //flight in header
  $('.choose-flight').click(function () {
    $('.choose-flight').removeClass('active-flight');
    $(this).addClass('active-flight');
  });
  //Open calendar
  // Khởi tạo jQuery UI Datepicker
  $("#datetimepicker").kendoDateTimePicker({
    adaptiveMode: "auto",
    componentType: "modern",
    timeFormat: "HH:mm",
    format: "dd MMM yyyy HH:mm",
    start: "year",
    interval: 15,
    value: new Date()
  });
  $("#datetimepicker1").kendoDateTimePicker({
    adaptiveMode: "auto",
    componentType: "modern",
    timeFormat: "HH:mm",
    format: "dd MMM yyyy HH:mm",
    start: "year",
    interval: 15,
    value: new Date()
  });
});
//điều chỉnh width cho cột bằng jquery
$(document).ready(function () {
  // Hàm tính toán và gán giá trị left cho các cột sticky-col
  function adjustStickyColumns() {
    $('th.sticky-col').each(function (index) {
      var leftValue = 0;
      for (var i = 0; i < index; i++) {
        leftValue += $(this).prevAll('.sticky-col').eq(i).outerWidth();
      }
      $(this).css('left', leftValue);
    });
    $('tbody tr').each(function () {
      var $stickyCols = $(this).find('.td-sticky-col');
      $stickyCols.each(function (index) {
        var leftValue = 0;
        for (var i = 0; i < index; i++) {
          leftValue += $stickyCols.eq(i).outerWidth();
        }
        $(this).css('left', leftValue);
      });
    });
  }
  // Gọi hàm adjustStickyColumns khi tài liệu được tải
  adjustStickyColumns();
  // Điều chỉnh lại giá trị left khi cửa sổ thay đổi kích thước
  $(window).on('resize', function () {
    $('th.sticky-col').css('left', '');
    $('td.td-sticky-col').css('left', '');
    adjustStickyColumns();
  });
});
//Thay đổi màu khi scrolled
$(document).ready(function () {
  // Bắt sự kiện scroll của table-container
  $('.table-container').scroll(function () {
    // Lấy giá trị scrollLeft của table-container
    var scrollLeft = $(this).scrollLeft();

    // Kiểm tra và thêm hoặc xoá lớp 'scrolled' để điều chỉnh màu sắc của các cột
    if (scrollLeft > 0) {
      $('.table-container').addClass('scrolled');
    } else {
      $('.table-container').removeClass('scrolled');
    }
  });
});
//khi chọn thì bỏ chọn hình ở header
$(document).ready(function () {
  // Mặc định khi load trang, lớp choose-flight đầu tiên được chọn
  $('.choose-flight:first').addClass('active-flight');

  // Xử lý sự kiện khi click vào các phần tử choose-flight
  $('.choose-flight').click(function () {
    // Loại bỏ lớp active-flight từ tất cả các phần tử choose-flight
    $('.choose-flight').removeClass('active-flight');

    // Thêm lớp active-flight cho phần tử được click
    $(this).addClass('active-flight');
  });
});
$(document).ready(function () {
  $('.choose-flight').click(function () {
    // Đặt cho tất cả các choose-flight mặc định là hình 1 hiển thị và hình 2 ẩn
    $('.choose-flight').removeClass('active-flight');
    $('.choose-flight img.img1').show();
    $('.choose-flight img.img2').hide();

    // Chỉ chọn cho lớp được click
    $(this).addClass('active-flight');
    $(this).find('img.img1').hide();
    $(this).find('img.img2').show();
  });
});
// Màu sắc nhấp nháy tới 1 điều kiện cho trước
$(document).ready(function () {
  setInterval(function () {
    $('tbody td').each(function () {
      // Kiểm tra nội dung của ô nháy 3 lần 
      if ($(this).text().trim() === 'Active1') {
        let colors = ['#0A3A22', '#1A365E', '#871924'];
        let index = 0;
        setInterval(function () {
          $(this).css('background-color', colors[index]);
          $(this).css('color', '#FFFFFF');
          index = (index + 1) % colors.length;
        }.bind(this), 1500);
      }
    });
  }, 1000);
});
//Flipswich cho desktop
$(document).ready(function () {
  var currentTimeElement = $("#currentTime");
  var flipswitch1 = $("#fs1");

  // Hàm để cập nhật thời gian hiện tại
  function updateCurrentTime() {
    var now;
    if (flipswitch1.prop("checked")) {
      now = new Date().toLocaleTimeString(undefined, { hour12: false });
      currentTimeElement.text(now);
    }
    else {
      now = new Date().toUTCString();
      var timeParts = now.split(' ')[4].split(':');
      var hours = timeParts[0];
      var minutes = timeParts[1];
      var seconds = timeParts[2];
      var timeString = hours + ":" + minutes + ":" + seconds;
      currentTimeElement.text(timeString);
    }
  }
  setInterval(updateCurrentTime, 1000);
  updateCurrentTime();
  flipswitch1.change(updateCurrentTime);
});
$(document).ready(function () {
  $("#table-container .my-table tbody").on("click", "tr", function () {
    if (!$("#overlay-moreinfo").is(":visible")) {
      openOverlay();
    }
    $('.icon-close-overlayinfo').click(function () {
      closeOverlay();
    });
  });

  // Hàm mở overlay
  function openOverlay() {
    var tableOffset = $("#table-container .my-table thead").offset();
    $("#overlay-moreinfo").css(
      {
        display: "block",
        top: tableOffset.top,
      }
    ).animate({
      right: "0"
    }, {
      duration: 1000,
      easing: "easeOutCubic"
    });

  }
  // Hàm đóng overlay
  function closeOverlay() {
    $("#overlay-moreinfo").animate({
      right: "-100%"
    }, {
      duration: 1000,
      easing: "easeInOutCubic",
      complete: function () {
        $(this).css("display", "none");
      }
    });
  }
});

$(document).ready(function () {
  $('#checkbox2').change(function () {
    var filterIcon = $('.icon');
    filterIcon.toggle(this.checked);
  });
});
//menu
var currentMenu;
var menuLinks = document.querySelectorAll('.menu-link');
function clickMenuHandler() {
  if (currentMenu) {
    currentMenu.classList.remove('menu-active');
  }
  this.classList.add('menu-active');
  currentMenu = this;
}
for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', clickMenuHandler);
}
//////////////////
//Top 
$(document).ready(function () {
  var header1Height = $('.header1').outerHeight();
  var header2Height = $('.header-mobile').outerHeight();
  var header3Height = $('.header2').outerHeight();
  var tableContainerHeight = $('#table-container').outerHeight();
  var totalHeaderHeight = header1Height + header2Height;
  var totalHeaderHeight1 = header1Height + header3Height;
  $('#bar-mobile').css('top', (totalHeaderHeight + 10) + 'px');
  $('.search-mobile').css('top', (totalHeaderHeight + 10) + 'px');
  $('.search').css('top', (totalHeaderHeight1 + 40) + 'px');
  $('.overlay-moreinfo').css('height', tableContainerHeight + 'px');
});
//resize
$(window).resize(function () {
  var header1Height = $('.header1').outerHeight();
  var header2Height = $('.header-mobile').outerHeight();
  var header3Height = $('.header2').outerHeight();
  var tableContainerHeight = $('#table-container').outerHeight();
  var totalHeaderHeight = header1Height + header2Height;
  var totalHeaderHeight1 = header1Height + header3Height;
  $('#bar-mobile').css('top', (totalHeaderHeight + 10) + 'px');
  $('.search-mobile').css('top', (totalHeaderHeight + 10) + 'px');
  $('.search').css('top', (totalHeaderHeight1 + 40) + 'px');
  $('.overlay-moreinfo').css('height', (tableContainerHeight - 10) + 'px');
});
//Hiển thi8j ngày hiện tại
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var formattedDate = day + '/' + month + '/' + year;
$('#current-date').text(formattedDate);


//
$(document).ready(function () {
  // Hàm để cập nhật chiều rộng của header1
  function updateHeaderWidth() {
    var tableWidth = $('.mytable-mobile').width();
    if ($(window).width() < 767) {
      $('.header1, .header-mobile').css('width', tableWidth + 'px');
    }
    else {
      $('.header1, .header-mobile').css('width', '100%');
    }
  }

  // Gọi hàm cập nhật khi trang được load ban đầu
  updateHeaderWidth();

  // Gọi hàm cập nhật khi cửa sổ trình duyệt thay đổi kích thước
  $(window).resize(function () {
    updateHeaderWidth();
  });
  $('.bdr-info').hover(
    function () {
      $(this).addClass('flash');
    },
    function () {
      $(this).removeClass('flash');
    }
  );
});


