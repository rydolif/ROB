$(function() {

  $('.problem__text').matchHeight();
  $('.problem__btn').matchHeight();

  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 100,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

   $(".reviews__slider").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $("#cp").text(i + '/' + slick.slideCount);
     // $("#cp").text(currentSlide);
  });

   console.log($(".reviews__slider").slick("getSlick").slideCount);

//----------------------------------tabs----------------------------------
	$('.tab__wrap').hide();
  $('.tab__wrap:first').show();
  $('.tabs li:first').addClass('package__item-active');

  $('.tabs li').click(function(event){
    $('.tabs li').removeClass('package__item-active');
    $(this).addClass('package__item-active');
    $('.tab__wrap').hide();


    var selectTab = $(this).find('a').attr('href');
    $(selectTab).show();
    customHeight();
  });
//------------------------------------------гамбургер----------------------

	$('.hamburger--collapse').click(function() {
    $(this).toggleClass('is-active');
    $('.nav__list').toggleClass('nav__list-active');
  });
//--------------------------------------------preloader----------------------------------
  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });

//-----------------------------------------------------------
	$('input[type="tel"]').mask('+0 (000) 000-00-00');

	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
	   return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
	}, "Введите Ваш телефон");

	$(".header-consultation").validate({
	    messages: {
	      name: "Введите ваше имя",
	      phone: "Введите ваш телефон",
	    },
	    rules: {
	      "phone": {
	        required: true,
	        phoneno: true
	      }
	    },
	    submitHandler: function(form) {
	      var t = {
	        name: jQuery(".header-consultation").find("input[name=name]").val(),
	        phone: jQuery(".header-consultation").find("input[name=phone]").val(),
	        subject: jQuery(".header-consultation").find("input[name=subject]").val()
	      };
	      ajaxSend('.header-consultation', t);
	    }
	});

	$(".form-problem").validate({
	    messages: {
	    	question: "Опишите вашу проблему",
	      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
	    },
	    rules: {
	      "phone": {
	        required: true,
	        phoneno: true
	      }
	    },
	    submitHandler: function(form) {
	      var t = {
	      	question: jQuery(".form-problem").find("textarea[name=question]").val(),
	        name: jQuery(".form-problem").find("input[name=name]").val(),
	        phone: jQuery(".form-problem").find("input[name=phone]").val(),
	        subject: jQuery(".form-problem").find("input[name=subject]").val()
	      };
	      ajaxSend('.form-problem', t);
	    }
	});

	$(".order-lite-form").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-lite-form").find("input[name=name]").val(),
        phone: jQuery(".order-lite-form").find("input[name=phone]").val(),
        subject: jQuery(".order-lite-form").find("input[name=subject]").val()
      };
      ajaxSend('order-lite-form', t);
    }
	});

  $(".callback-form").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".callback-form").find("input[name=name]").val(),
        phone: jQuery(".callback-form").find("input[name=phone]").val(),
        subject: jQuery(".callback-form").find("input[name=subject]").val()
      };
      ajaxSend('.callback-form', t);
    }
  });

  $(".order-optimal-form").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-optimal-form").find("input[name=name]").val(),
        phone: jQuery(".order-optimal-form").find("input[name=phone]").val(),
        subject: jQuery(".order-optimal-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-optimal-form', t);
    }
  });

  $(".order-premium-form").validate({
    messages: {
     name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-premium-form").find("input[name=name]").val(),
        phone: jQuery(".order-premium-form").find("input[name=phone]").val(),
        subject: jQuery(".order-premium-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-premium-form', t);
    }
  });

  $(".order-u-optimal-form").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-u-optimal-form").find("input[name=name]").val(),
        phone: jQuery(".order-u-optimal-form").find("input[name=phone]").val(),
        subject: jQuery(".order-u-optimal-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-u-optimal-form', t);
    }
  });
  
  $(".order-u-premium-form").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-u-premium-form").find("input[name=name]").val(),
        phone: jQuery(".order-u-premium-form").find("input[name=phone]").val(),
        subject: jQuery(".order-u-premium-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-u-premium-form', t);
    }
  });

  $(".order-consultation-form").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-consultation-form").find("input[name=name]").val(),
        phone: jQuery(".order-consultation-form").find("input[name=phone]").val(),
        subject: jQuery(".order-consultation-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-consultation-form', t);
    }
  });

  $(".order-offer-form").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-offer-form").find("input[name=name]").val(),
        phone: jQuery(".order-offer-form").find("input[name=phone]").val(),
        subject: jQuery(".order-offer-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-offer-form', t);
    }
  });

  $(".order-law-form").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-law-form").find("input[name=name]").val(),
        phone: jQuery(".order-law-form").find("input[name=phone]").val(),
        subject: jQuery(".order-law-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-law-form', t);
    }
  });

  $(".order-debt-form").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-debt-form").find("input[name=name]").val(),
        phone: jQuery(".order-debt-form").find("input[name=phone]").val(),
        subject: jQuery(".order-debt-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-debt-form', t);
    }
  });

  $(".order-communal-form").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-communal-form").find("input[name=name]").val(),
        phone: jQuery(".order-communal-form").find("input[name=phone]").val(),
        subject: jQuery(".order-communal-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-communal-form', t);
    }
  });

  $(".order-world-form").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-world-form").find("input[name=name]").val(),
        phone: jQuery(".order-world-form").find("input[name=phone]").val(),
        subject: jQuery(".order-world-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-world-form', t);
    }
  });

  $(".order-fine-form").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-fine-form").find("input[name=name]").val(),
        phone: jQuery(".order-fine-form").find("input[name=phone]").val(),
        subject: jQuery(".order-fine-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-fine-form', t);
    }
  });

  $(".order-fine-form").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-fine-form").find("input[name=name]").val(),
        phone: jQuery(".order-fine-form").find("input[name=phone]").val(),
        subject: jQuery(".order-fine-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-fine-form', t);
    }
  });

  $(".form-work").validate({
    messages: {
      name: "Введите ваше имя",
        phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".form-work").find("input[name=name]").val(),
        phone: jQuery(".form-work").find("input[name=phone]").val(),
        subject: jQuery(".form-work").find("input[name=subject]").val()
      };
      ajaxSend('.form-work', t);
    }
  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }
//---------------------------вдрахунок------------------------------
	var clock;
		var currentDate = new Date();
		var futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);
		var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
		clock = $('.clock').FlipClock(diff, {
			clockFace: 'DailyCounter',
			countdown: true
		});

//-------------------------скорость якоря---------------------------------------
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 'slow', 'swing');
  });

//----------------------------попандер------------------------------------------
  // $('#my_popup-thank').popup();
  $('.modal').popup({transition: 'all 0.3s'});



  // $('#my_popup').popup();
  // $('#my_popup-premium').popup();
  // $('#my_popup-lite').popup();
  // $('#my_popup-optimal').popup();
  // $('#my_popup-u-optimal').popup();
  // $('#my_popup-u-premium').popup();

//------------------------------scroll---------------------------
$('.reviews__contain').jScrollPane();
});

//---------------------------кнопка верх-------------------------------------------

$(window).scroll( function() {
  if ($(this).scrollTop() > $(this).height()) {
    $('.top').addClass('active');
  } else {
    $('.top').removeClass('active');
  }
});

$('.top').click( function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

$(window).resize(function(event) {
  $('.reviews__contain').jScrollPane();
});

$(window).resize(function() {
  customHeight()
});

customHeight();

function customHeight() {
  if ( $(document).width() < 992 ) {
    $('.package__block').matchHeight({byRow: true});
  }
  else {
    $('.package__block').matchHeight({remove:true});
  }
}