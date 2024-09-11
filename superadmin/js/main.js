$(function () {
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();

    var docViewBottom = docViewTop + window.innerHeight;
    console.log(docViewBottom);

    var el = $(elem);
    var elemTop = el.offset().top;
    var elemBottom = elemTop + el.height();
    var elemDisplayNotNone = el.css("display") !== "none";

    //var $window = $(window);

    return (
      elemBottom <= docViewBottom && elemTop >= docViewTop && elemDisplayNotNone
    );
  }

  //detect mobile screen size an create a var

  // conditional  to hide responsive Menu name or button on >900px screens

  $(".sliderContent").on("scroll", function () {
    //  alert("sdfsa");
    if (isScrolledIntoView(".slide1")) {
      $(".sliderTitle").html("");

      $(".rvHeadline").show();

      $(".roatate").css({
        transform: "translate(4%, -3%) scale(1)",
      });
      $(".slide1").css({
        opacity: "1",
      });
      // $(".slide2").css({
      //   opacity: "0",
      // });
      $(".slide3").css({
        opacity: "0",
      });
      $(".slide4").css({
        opacity: "0",
      });
      $(".in-con1").css({
        transform: "translateY(0rem)",
        transition: "transform 2s ease-in 1s",
      });
    } else if (isScrolledIntoView(".slide2")) {
      $(".rvHeadline").hide();
      $(".slide2").toggleClass("fade-in-image");
      $(".sliderTitle").html("");
      // $(".sliderTitle").html(
      //   `<h2 class="txtWhite what-we-offer ft-ProximaLt fs-50 slide-text-heading">What We Offer:</h2>`
      // );
      // $(".slide2 > .con2").removeClass("in-con");

      $(".roatate").css({
        transform: "translate(10%, 1%) scale(0.88)",
      });
      // $(".slide1").css({
      //   opacity: "0",
      // });
      // $(".slide2").css({
      //   opacity: "1",
      // });
      // $(".slide3").css({
      //   opacity: "0",
      // });
      // $(".slide4").css({
      //   opacity: "0",
      // });
      // $(".slide2 > .con2").removeClass("in-con");

      $(".slide2-h2").css({
        opacity: "1",
        transition: "all 1.3s ease",
      });

      $(".con2").css({
        transform: "translateY(0rem)",
        opacity: "1",
        transition: "all 1.3s ease",
      });
    } else if (isScrolledIntoView(".slide3")) {
      $(".rvHeadline").hide();
      $(".sliderTitle").html("");
      $(".slide3").toggleClass("fade-in-image");
      // $(".sliderTitle").html(
      //   `<h2 class="txtWhite ft-ProximaLt fs-50">Why Choose RockVault?</h2>`
      // );
      $(".roatate").css({
        transform: "translate(16%, 6%) scale(0.72)",
      });
      $(".slide1").css({
        opacity: "0",
      });
      $(".slide2").css({
        opacity: "0",
      });
      $(".slide3").css({
        opacity: "1",
      });
      $(".slide4").css({
        opacity: "0",
      });
      $(".copyright").css({
        bottom: "-6rem",
      });
      $(".con2").css({
        opacity: "0",
        transition: "all .2s",
      });
    } else if (isScrolledIntoView(".slide4")) {
      $(".rvHeadline").hide();
      $(".sliderTitle").html("");
      $(".slide4").toggleClass("fade-in-image");
      // $(".sliderTitle").html(
      //   `<h2 class="txtWhite ft-ProximaLt fs-50">Contact for product demo</h2>`
      // );
      $(".roatate").css({
        transform: "translate(4%, -3%) scale(1)",
      });
      $(".slide1").css({
        opacity: "0",
      });
      $(".slide2").css({
        opacity: "0",
      });
      $(".slide3").css({
        opacity: "0",
      });
      $(".slide4").css({
        opacity: "1",
      });
      $(".copyright").css({
        bottom: "0",
        transition: "bottom 1s ease 1s",
      });
    }
  });
});
