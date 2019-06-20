/*ALL  JQUERY  CODE  WILL  BE  DOWN  BELOW  INSIDE  READY */
$(document).ready(function () {
  $("#search").click(function (){
    $("#searchForm").slideToggle();
  });

  $('#list').click(function(event){
    //alert("list");
    event.preventDefault();
    $('#products .item').removeClass('col-md-6 col-sm-12 grid');
    $('#products .item').addClass('w-100');
  });

  $('#grid').click(function(event){
    //alert("grid");
    event.preventDefault();
    $('#products .item').removeClass('w-100');
    $('#products .item').addClass('col-md-6 col-sm-12 grid');
  });

  var link_index2 = $("#offerWrapper > div").index();
  $("#offerWrapper > div.offersSlide:not(:first-child)").hide();
  $("#offersList .col").click(function(e){
    e.preventDefault();
    var offersList = $("#offersList div.col"),
        offerContent = $("#offerWrapper  div.offersSlide");
        offerContent.hide();
    offersList.on("click", function(){
      var index = offersList.index(this),
          el = offerContent.get(index);
      $(el).fadeIn();
    });
  })
  $("#offersList .col").click(function(){
    $("#offersList .col.active").removeClass("active");
    $(this).addClass("active");
  })

  $("#clickAnimation li a").click(function(){
    $("#clickAnimation li a.active").removeClass("active");
    $(this).addClass("active")
  })

  // ON SCROLL CHANGES
  if($("#navAnimation").length > 0){
    var taboffSet = $('#navAnimation').offset().top;
  }

  $(window).on('scroll',function() {
    if($(window).scrollTop() > $('#fixedTop').height()){
      $('#fixedTop').removeClass('bg-transparent').addClass('headerSticky');
    }
    else{
      $('#fixedTop').removeClass('headerSticky').addClass('bg-transparent');
    }
    if($('#navAnimation').length > 0){
      if($(window).scrollTop() > taboffSet){
        $('#navAnimation').addClass('stickyTabs');
      }
      else{
        $('#navAnimation').removeClass('stickyTabs');
      }
    }

  })

});//document ready closing

$(document).on('click','#clickAnimation .nav-link', function(event) {
  event.preventDefault();
  var target = "#" + this.getAttribute('data-target');
  $('html, body').animate({
      scrollTop: $(target).offset().top
  }, 1000);
});

function filter() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function matchesFilter() {
  document.getElementById("season").classList.toggle("show");
}

// SLICK  SLIDER
$(document).on('ready', function(){
  
  $('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
       breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.client').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
    nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>',
    responsive: [
      {
       breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
})
if($('.tournamentSlider').length > 0){
  $('.tournamentSlider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrowLeft.svg" width="40"></a>',
    nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrowRight.svg" width="40"></a>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });
}
$(document).ready(function (){
  // OFFERS SLIDER
  if($('.offersAvailable').length > 0){
    $('.offersAvailable').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
        breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
            nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>'
          }
        },
        {
        breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
            nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>'
          }
        }
      ]
      });
  }

  // TESTIMONIAL  SLIDER
  function testiMonialSlider(){
    $('.testimonialSlides').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/testimonials_left_select.png"></a>',
      nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/testimonials_right_select.png"></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }testiMonialSlider();

  if($('.testimonialSlides').length > 0){
    testiMonialSlider();
  }

  //Press Slider
  if($('.press').length > 0){
    $('.pressSlides').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '',
      nextArrow: '',
      responsive: [
        {
          settings: "unslick"
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
            nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>'
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
            nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>'
          }
        }
      ]
      });
  }
  // TEAM SLIDER
  if($('.teamSlider').length > 0){
    $('.teamSlides').slick({
      dots: false,
      infinite: false,
      //variableWidth: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          settings: "unslick"
        },
        {
        breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
            nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>'
          }
        },
        {
        breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
            nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>'
          }
        }
      ]
      }
    );
  }

  // RANKING  SLIDER
  if($('#batsman').length > 0){
    $('.batsmanRanking').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
      nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>',
      responsive: [
        {
          breakpoint: 1025,
          settings: "unslick"
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  if($('#bowler').length > 0){
    $('.bowlerRanking').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
      nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>',
      responsive: [
        {
          breakpoint: 1025,
          settings: "unslick"
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  if($('#all-rounders').length > 0){
    $('.allRounderRanking').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
      nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>',
      responsive: [
        {
          breakpoint: 1025,
          settings: "unslick"
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  if($('#teams').length > 0){
    $('.teamsRanking').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
      nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>',
      responsive: [
        {
          breakpoint: 1025,
          settings: "unslick"
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  if($('.featureVideos').length > 0){
    $('.featureVideoSlider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/testimonials_left_select.png"></a>',
      nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/testimonials_right_select.png"></a>',
      responsive: [
        {
        breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
      });
  }
  $('.clientTestimonials').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<a aria-label="Previous" role="button"><img class="slick-prev mr-3" src="assets/img/arrow_black_left.png"></a>',
    nextArrow: '<a aria-label="Next" role="button"><img class="slick-next" src="assets/img/arrow_black_right.png"></a>',
    responsive: [
      {
        breakpoint: 1025,
        settings: "unslick"
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(window).resize(function() {
    $('.ranking').slick('resize');
  });

  $(window).on('orientationchange', function() {
    $('.ranking').slick('resize');
  });

})
// CUSTOM  DROP  DOWN  BUTTON  FOR  FILTER
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select-filter");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box, then close all select boxes:*/
$(document).ready(function(){
  $(".next.action-button").click(function(){
    $("#progressbar li .popupInfo").hide();
    $("#progressbar li.active:last .popupInfo").show();
    $("#progressbar li.active:last").previousSibling.addClass('abc');
  }) ;

  $(".previous.action-button").click(function(){
    $("#progressbar li .popupInfo").hide();
    $("#progressbar li.active:last .popupInfo").show();
  });
  $('html').click(function(e) {
    $('.drop-down-wrapper').hide();
  });
  $('.drop-down-wrapper').click(function(e){
    e.stopPropagation();
  });
})
//  FOR THE TIME BEING I'M ADDING SCRIPT TO THIS FILE, YOU CAN PLACE IT WHERE YOU WANT
$('.infoComplete').click(function(e) {
  e.preventDefault();
  alert("message");
  $('.getInfo').css({ 'right': '0px', 'left': '', 'padding': '20px' }).animate({
      'width' : '90%'    
  });
});
$('#addPlayerInfo').click(function(e) {
  e.preventDefault();
  alert("Hide");
  $('.getInfo').css({ 'right': '-50px', 'left': '', 'padding': '0' }).animate({
      'width' : '0'
  });
});