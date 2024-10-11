"use strict";

$(document).ready(function () {
  $("#head").load("/root/head.html");
  $("#header").load("/root/header.html", function () {
    afterHeaderCall();
  });
  $("#footer").load("/root/footer.html");
});

function afterHeaderCall() {
  $(document).ready(function () {
    $(".filter-button").click(function () {
      var value = $(this).attr("data-filter"); //alert(value);

      if (value == "all") {
        $(".filter").removeClass("hidden");
        $(".filter").show("1000");
      } else {
        $(".filter").not("." + value).hide("3000");
        $(".filter").filter("." + value).show("3000");
      }
    });
    $(".filter-button").click(function () {
      var $this = $(this);
      $(".filter-button").removeClass("active-12");
      $(this).addClass("active-12");
    });
    $("#nav").children("li").first().children("a").addClass("active-1").next().addClass("is-open").show();
    $("#nav").on("click", "li > a", function () {
      if (!$(this).hasClass("active-1")) {
        $("#nav .is-open").removeClass("is-open").hide();
        $(this).next().toggleClass("is-open").toggle();
        $("#nav").find(".active-1").removeClass("active-1");
        $(this).addClass("active-1");
      } else {
        $("#nav .is-open").removeClass("is-open").hide();
        $(this).removeClass("active-1");
      }
    });
    jQuery("#eye").click(function () {
      if (jQuery(this).hasClass("fa-eye-slash")) {
        jQuery(this).removeClass("fa-eye-slash");
        jQuery(this).addClass("fa-eye");
        jQuery("#password-1").attr("type", "password");
      } else {
        jQuery(this).removeClass("fa-eye");
        jQuery(this).addClass("fa-eye-slash");
        jQuery("#password-1").attr("type", "text");
      }

      $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
        $($.fn.dataTable.tables(true)).css("width", "100%");
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw();
      }); //tabs

      $(".admin-panel").on("click", function () {
        $(".menu-open").slideToggle("open-panel");
        $(".admin-panel").toggleClass("rotateIcon");
      });
      console.log("document ready");
      var labels = document.querySelectorAll(".accordion-item__label");
      var tabs = document.querySelectorAll(".accordion-tab");

      function toggleShow() {
        var target = this;
        var item = target.classList.contains("accordion-tab") ? target : target.parentElement;
        var group = item.dataset.actabGroup;
        var id = item.dataset.actabId;
        tabs.forEach(function (tab) {
          if (tab.dataset.actabGroup === group) {
            if (tab.dataset.actabId === id) {
              tab.classList.add("accordion-active");
            } else {
              tab.classList.remove("accordion-active");
            }
          }
        });
        labels.forEach(function (label) {
          var tabItem = label.parentElement;

          if (tabItem.dataset.actabGroup === group) {
            if (tabItem.dataset.actabId === id) {
              tabItem.classList.add("accordion-active");
            } else {
              tabItem.classList.remove("accordion-active");
            }
          }
        });
      }

      labels.forEach(function (label) {
        label.addEventListener("click", toggleShow);
      });
      tabs.forEach(function (tab) {
        tab.addEventListener("click", toggleShow);
      });
    }); //upload
    //closed tab

    $(".closedIcon-search").hide();
    $(".searchinput").on("click", function () {
      // alert("sagar");
      $(".searchinput").css("border-radius", "40px");
      $(".searchinput").css("width", "320px");
      $(".searchinput").css("border", "1px solid #676767");
      $(".searchButton").hide();
      $(".closedIcon-search").show(); // if ($('.searchinput').css('display') == 'none') {
      // }
      //$(".searchButton").css("border", "1px solid #676767");
    });
    $(".searchinput").on("focusout", function () {
      resetAdvanceSearchOnHeader();
      $(".closedIcon-search").hide();
    });
    $("#searchCloseIconImg").on("click", function () {
      resetAdvanceSearchOnHeader();
    });

    function scroll_to_class(element_class, removed_height) {
      var scroll_to = $(element_class).offset().top - removed_height;

      if ($(window).scrollTop() != scroll_to) {
        $("html, body").stop().animate({
          scrollTop: scroll_to
        }, 0);
      }
    }

    function bar_progress(progress_line_object, direction) {
      var number_of_steps = progress_line_object.data("number-of-steps");
      var now_value = progress_line_object.data("now-value");
      var new_value = 0;

      if (direction == "right") {
        new_value = now_value + 100 / number_of_steps;
      } else if (direction == "left") {
        new_value = now_value - 100 / number_of_steps;
      }

      progress_line_object.attr("style", "width: " + new_value + "%;").data("now-value", new_value);
    }

    $("#top-navbar-1").on("shown.bs.collapse", function () {
      $.backstretch("resize");
    });
    $("#top-navbar-1").on("hidden.bs.collapse", function () {
      $.backstretch("resize");
    });
    $(".f1 fieldset:first").fadeIn("slow"); // next step

    $(".f1 .btn-next").on("click", function () {
      var parent_fieldset = $(this).parents("fieldset");
      var next_step = true; // navigation steps / progress steps

      var current_active_step = $(this).parents(".f1").find(".f1-step.active");
      var progress_line = $(this).parents(".f1").find(".f1-progress-line"); // fields validation

      parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function () {
        if ($(this).val() == "") {
          $(this).addClass("input-error");
          next_step = true;
        } else {
          $(this).removeClass("input-error");
        }
      }); // fields validation

      if (next_step) {
        parent_fieldset.fadeOut(400, function () {
          // change icons
          current_active_step.removeClass("active").addClass("activated").next().addClass("active"); // progress bar

          bar_progress(progress_line, "right"); // show next step

          $(this).next().fadeIn(); // scroll window to beginning of the form

          scroll_to_class($(".f1"), 20);
        });
      }
    }); // previous step

    $(".f1 .btn-previous").on("click", function () {
      var current_active_step = $(this).parents(".f1").find(".f1-step.active");
      var progress_line = $(this).parents(".f1").find(".f1-progress-line");
      $(this).parents("fieldset").fadeOut(400, function () {
        // change icons
        current_active_step.removeClass("active").prev().removeClass("activated").addClass("active"); // progress bar

        bar_progress(progress_line, "left"); // show previous step

        $(this).prev().fadeIn(); // scroll window to beginning of the form

        scroll_to_class($(".f1"), 20);
      });
    });
    $(".change ").on("click ", function () {
      if ($("body ").hasClass("dark ")) {
        $("body ").removeClass("dark "); //$(".change ").text("OFF ");
      } else {
        $("body ").addClass("dark "); // $(".change ").text("ON ");
      }
    });
    $(".menu-icon-mobile ").click(function () {
      $(".hoverdiv").show();
    });
    $(".closed").click(function () {
      $(".hoverdiv").hide();
    });
    $(document).mouseup(function (e) {
      var container = $(".asvanceSearch, .hoverdiv, .search-panel"); // if the target of the click isn't the container nor a descendant of the container

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });

    if ($(window).width() < 1200) {
      //$(".padding-off").removeClass("ten");
      $(".padding-off").removeClass("position-relative");
    } else {
      $(".padding-off").addClass("position-relative");
    }

    $(window).resize(function () {
      if ($(window).width() < 1200) {
        //$(".padding-off").removeClass("ten");
        $(".padding-off").removeClass("position-relative");
      } else {
        $(".padding-off").addClass("position-relative");
      }
    });
    var originalSize = $("h1,h2,li,div,p").css("font-size"); // Increase Font Size

    $(".increase ").click(function () {
      var currentSize = $("h1,h2,li,div,p").css("font-size");
      var currentSize = parseFloat(currentSize) * 1.2;
      $("h2,h2,li,div").css("font-size", currentSize);
      return false;
    }); // Decrease Font Size

    $(".decrease ").click(function () {
      //var currentFontSize = $('div').css('font-size');
      var currentSize = $("h1,h2,li,div,p").css("font-size");
      var currentSize = parseFloat(currentSize) * 0.8;
      $("h1,h2,li,div,p").css("font-size", currentSize);
      return false;
    });
    var cont = document.getElementById("container");

    function changeSizeByBtn(size) {
      // Set value of the parameter as fontSize
      cont.style.fontSize = size + "px"; // <- HERE
    }

    $(".search-panel").css("display", "none");

    function search() {
      $(".crossIconclosed").click(function () {
        $(".search-panel").hide();
      });
      $(".search-panel").slideToggle();
    }

    $(".form-search").hide();
    $(".advance-serach").click(function () {
      $(".form-search").toggle();
      $(".crossIconclosed").click(function () {
        $(".form-search").hide();
      });
    });
    $(".counter").each(function () {
      $(this).prop("Counter", 0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: "swing",
        step: function step(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
    $(".list-grid ").click(function () {
      $(".grid-view").show();
      $(".dashboad-list").hide();
      $(".list-view-show").hide();
    });
    $(".list-grid ").click(function () {
      $(".grid-view").show();
      $(".dashboad-list").hide();
      $(".list-view-show").hide();
    });
    $(".list-dashboard").click(function () {
      $(".dashboad-list").show();
      $(".grid-view").hide();
      $(".list-view-show").hide();
    });
    $(".list-view").click(function () {
      $(".list-view-show").show();
      $(".grid-view").hide();
      $(".dashboad-list").hide();
    });
    $(".dropdown-menu").click(function (event) {
      event.stopPropagation();
    });
    $(".dropdown-menu").click(function (event) {
      event.stopPropagation();
    });
    $("#slider-range").slider({
      // min: 1500,
      // max: 10000,
      range: true,
      min: 2950,
      max: 4000,
      step: 1,
      values: [3000, 6000],
      slide: function slide(event, ui) {
        $("#amount").val("" + ui.values[0]);
        $("#amount1").val("" + ui.values[1]);
      }
    });
    $("#amount").val(" " + $("#slider-range").slider("values", 0));
    $("#amount1").val(" " + $("#slider-range").slider("values", 1));
    $("#slider-range-home").slider({
      // min: 1500,
      // max: 10000,
      range: true,
      min: 2950,
      max: 4000,
      step: 1,
      values: [3000, 6000],
      slide: function slide(event, ui) {
        $("#amount").val("" + ui.values[0]);
        $("#amount1").val("" + ui.values[1]);
      }
    });
    $("#amount12").val(" " + $("#slider-range-home").slider("values", 0));
    $("#amount12").val(" " + $("#slider-range-home").slider("values", 1));
    $("#slider-range-mobile").slider({
      // min: 1500,
      // max: 10000,
      range: true,
      min: 2950,
      max: 4000,
      step: 1,
      values: [3000, 6000],
      slide: function slide(event, ui) {
        $("#amount-mobile").val(" " + ui.values[0]);
        $("#amount-mobile").val("" + ui.values[1]);
      }
    });
    $("#amount13").val(" " + $("#slider-range-mobile").slider("values", 0));
    $("#amount13").val(" " + $("#slider-range-mobile").slider("values", 1));
    /*
    auto complete
    */

    var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
    $("#tags").autocomplete({
      source: availableTags
    });
    $(".button-menu").click(function () {
      $(".menu-document").toggle();
    });
    $("#checkAll").click(function () {
      $(".check").prop("checked", $(this).prop("checked"));
    }); // //script admin site
    // $(".input-group-save").hide();
    // function edit() {
    //     $(".edittext").show();
    //     $(".input-group").hide();
    //     $(".input-group-save").show();
    //     $(".save-heading").show();
    // }
    // $(".edit-text-right").click(function() {
    //     $(this).hide();
    // });
    // $(".cancel-button").click(function() {
    //     $(".edittext").show();
    //     $(".edit-text-right").toggle();
    //     $(".input-group-save").hide();
    // })

    $(".cancel-button").click(function () {
      $(".form-first").show();
      $(".input-group-save").hide();
    });
    $(".edittext-b").click(function () {
      $(".eidtbutton").hide();
      $(".form-first").hide();
      $(".input-group-save").show();
      $(".edit-text-right").show();
    });
    $(".text-right.cancel-button").click(function () {
      $(this).parent(".edit-text-right").hide();
      $(".eidtbutton").show();
    });
    $(".option-click-btn").on("click", function () {
      if ($(this).parent(".options").hasClass("active")) {
        $(this).parent(".options").removeClass("active");
      } else {
        $(".options").removeClass("active");
        $(this).parent(".options").addClass("active");
      }
    });
    $(".save-button").click(function () {
      $(".input-group-save").show();
      $(".form-first").hide();
    }); // Imran's Js start from here

    $(".close-input").on("click", function () {
      $("#search").val("");
      $(".mobile-advanceSearch").removeClass("advance-search-open");
      $(".mobile-advanceSearch").removeClass("active");
      $("body").removeClass("menuActive");
    });
    $(".search-icon span").on("click", function () {
      $(".mobile-advanceSearch").toggleClass("advance-search-open");
    });
    $(".searchButton").click(function () {
      $(".asvanceSearch").slideToggle();
      $(".backdrop-shaddow").toggleClass("show");
    });
    $(".close-icon span").on("click", function () {
      console.log("hi");
      $("nav.megahmenudrop").toggleClass("active");
      $(".backdrop-shaddow").toggleClass("show");
      $("body").toggleClass("menuActive");
    });
    $(".backdrop-shaddow").on("click", function () {
      $("nav.megahmenudrop").removeClass("active");
      $(".backdrop-shaddow").removeClass("show");
      $("body").removeClass("menuActive");
    });
    $(".advance-search form").on("submit", function (e) {
      e.preventDefault();
    }); // Js for mobile devices

    if (window.innerWidth <= 1200) {
      $(".wrap-for-mobile").appendTo(".modes-for-mob");
      $(".expolore-btn, .change-language").appendTo(".top-nav-mob");
      $(".sub-menu-parent h5").on("click", function () {
        $(this).siblings(".meghamenuli").slideToggle(600);
        $(this).parent(".sub-menu-parent").toggleClass("active");
      });
      $(".nav-middle-part").appendTo(".mobile-advanceSearch");
      $("#containerAdvanceSearch").appendTo(".mobile-advanceSearch");
      $(".advanceSearch-btn").on("click", function () {
        $(this).parent().parent().parent().parent(".mobile-advanceSearch").toggleClass("active");
        $("body").toggleClass("menuActive");
      });
      $("#search").on("focus", function () {
        $(".mobile-advanceSearch").removeClass("active");
      });
    }

    $(".has-sub i").on("click", function () {
      $(this).parent().toggleClass("active");
      $(this).siblings("ul").slideToggle(500);
    }); // To close menu when click on nav

    $("header a").click(function () {
      $(".backdrop-shaddow").click();
    }); // ==================================

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var targetElement = document.querySelector(this.getAttribute("href"));
        var headerOffset = document.querySelector("header").offsetHeight;
        var elementPosition = targetElement.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition - 50,
          behavior: "smooth"
        });
      });
    }); // <!-- Initialize Swiper -->

    var swiper = new Swiper(".HomepageSlider", {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
    var swiper = new Swiper(".trendingSwiper", {
      slidesPerView: 4,
      spaceBetween: 35,
      centeredSlides: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      //   pagination: { el: ".swiper-pagination", clickable: true,  },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });
    var swiper = new Swiper(".associated-slider", {
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        1200: {
          slidesPerView: 4
        }
      }
    }); // Register js start form here  =================>

    function validatePassword() {
      var password = document.getElementById("password").value; // Validate length

      var length = document.getElementById("length");

      if (password.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      } // Validate number


      var number = document.getElementById("number");

      if (/\d/.test(password)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      } // Validate special character


      var special = document.getElementById("special");

      if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        special.classList.remove("invalid");
        special.classList.add("valid");
      } else {
        special.classList.remove("valid");
        special.classList.add("invalid");
      } // Validate uppercase letter


      var uppercase = document.getElementById("uppercase");

      if (/[A-Z]/.test(password)) {
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
      } else {
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
      } // Validate lowercase letter


      var lowercase = document.getElementById("lowercase");

      if (/[a-z]/.test(password)) {
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
      } else {
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
      }
    }

    function togglePasswordVisibility() {
      var passwordInput = document.querySelectorAll(".password");
      passwordInput.forEach(function (el) {
        if (el.type === "password") {
          el.type = "text";
        } else {
          el.type = "password";
        }
      });
    }

    new ResizeObserver(function () {
      return scroll.update();
    }).observe(document.querySelector("main"));
    var scroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true
    });
  });
}