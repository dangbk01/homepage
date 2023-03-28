

/* Slider Handling Covid-19 */
$('.carousel-item', '.show-neighbors02').each(function(){
  var next = $(this).next();
  if (! next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
}).each(function(){
  var prev = $(this).prev();
  if (! prev.length) {
    prev = $(this).siblings(':last');
  }
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});


/* hide prev control */
var myCarousel   = $('#myCarousel02');
var itemFirst    = myCarousel.find('.carousel-inner-02 > .carousel-item:first-child');
var itemLast     = myCarousel.find('.carousel-inner-02 > .carousel-item:last-child');
var controlLeft  = myCarousel.find('a.carousel-control-prev');
var controlRight = myCarousel.find('a.carousel-control-next');

hideControl();

myCarousel.on('slid.bs.carousel', function() {
  hideControl(); 
});
myCarousel.on('slide.bs.carousel', function() {
  showControl(); 
});

function hideControl() {
  if ( itemFirst.hasClass('active') ) {
    controlLeft.css('display', 'none');
  }

}

function showControl() {
  if ( itemFirst.hasClass('active') ) {
    controlLeft.css('display', 'flex');
  }
  if ( itemLast.hasClass('active') ) {
    controlRight.css('display', 'flex');
  }
}

/* End Handling Covid-19 */


/* Slider Ground Services */
$('.carousel-item', '.show-neighbors').each(function(){
  var next = $(this).next();
  if (! next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
}).each(function(){
  var prev = $(this).prev();
  if (! prev.length) {
    prev = $(this).siblings(':last');
  }
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});


/* hide prev control */
var myCarousel   = $('#myCarousel');
var itemFirst    = myCarousel.find('.carousel-inner > .carousel-item:first-child');
var itemLast     = myCarousel.find('.carousel-inner > .carousel-item:last-child');
var controlLeft  = myCarousel.find('a.carousel-control-prev');
var controlRight = myCarousel.find('a.carousel-control-next');

hideControl();

myCarousel.on('slid.bs.carousel', function() {
  hideControl(); 
});
myCarousel.on('slide.bs.carousel', function() {
  showControl(); 
});

function hideControl() {
  if ( itemFirst.hasClass('active') ) {
    controlLeft.css('display', 'none');
  }

}

function showControl() {
  if ( itemFirst.hasClass('active') ) {
    controlLeft.css('display', 'flex');
  }
  if ( itemLast.hasClass('active') ) {
    controlRight.css('display', 'flex');
  }
}

/* End Slider Ground Services */