$(".change ").on("click ", function() {
    if ($("body ").hasClass("dark ")) {
        $("body ").removeClass("dark ");
        //$(".change ").text("OFF ");
    } else {
        $("body ").addClass("dark ");
        // $(".change ").text("ON ");
    }
});

$(".Bookmarks").on("click", function() {

    $(".Bookmarks-div").show();
})

$(".menuicon-toggle").on("click", function() {

    $(".megahmenudrop").show();

});

$(".Bookmarks").on("click", function() {

    $(".Bookmarks-div").show();
})

//$(".offcanvas.offcanvas-end").css("visibility", "hidden");
// $(".btn-close").hide();
// $(".togglemenu").on("click", function() {

//     $(".offcanvas-end").toggleClass("canvas-toggle");

//     $(".btn-close").show();
// });
// $(".btn-close").on("click", function() {
//     $(".btn-close").hide();
//     $(".offcanvas-end").toggleClass("canvas-toggle");



// });
// $(".overlay").click(function() {

//     $(".overlay").toggleClass("modal-backdrop-menu");

// })


// function closedicon() {
//     $(".searchButton").show();

//     // alert("sagar");
// }


$(".closedIcon-search").hide();
$(".searchinput").on("click", function() {
    // alert("sagar");
    $(".searchinput").css("border-radius", "40px");
    $(".searchinput").css("width", "320px");
    $(".searchinput").css("border", "1px solid #676767");
    $(".searchButton").hide();
    $(".closedIcon-search").show();

    // if ($('.searchinput').css('display') == 'none') {


    // }
    //$(".searchButton").css("border", "1px solid #676767");
})


$(".searchinput").on("focusout", function() {
    resetAdvanceSearchOnHeader();

    $(".closedIcon-search").hide();

});

function resetAdvanceSearchOnHeader() {
    $(".searchinput").removeAttr("style");
    $("#aAdvanceSearch").removeAttr("style");
    $("#containerAdvanceSearch").removeAttr("style");
    $("#aAdvanceSearch").focus();
}

$("#searchCloseIconImg").on("click", function() {
    resetAdvanceSearchOnHeader();
});

$(".searchButton ").click(function() {
    $(".asvanceSearch").slideToggle();

})

$(".menu-icon-mobile ").click(function() {


    $(".hoverdiv").show();

})
$(".closed").click(function() {

    $(".hoverdiv").hide();
});


$(document).mouseup(function(e) {
    var container = $(".asvanceSearch, .hoverdiv, .search-panel, .Bookmarks-div, .megahmenudrop");

    // if the target of the click isn't the container nor a descendant of the container
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
$(window).resize(function() {
    if ($(window).width() < 1200) {
        //$(".padding-off").removeClass("ten");
        $(".padding-off").removeClass("position-relative");
    } else {

        $(".padding-off").addClass("position-relative");

    }

});
//watch window resize
// $(window).on('resize', function() {
//     resize()
// });

// $(".clickbutton").click(function() {

//     $(".togglediv").toggleClass("activediv");
// })

// $(document).ready(function() {
//     var originalSize = $('h1,h2,li,div,p').css('font-size');

//     $(".increase ").click(function() {
//         var currentSize = $('h1,h2,li,div,p').css('font-size');
//         var currentSize = parseFloat(currentSize) * 1.2;
//         $('h2,h2,li,div').css('font-size', currentSize);

//         return false;
//     });

//     // Decrease Font Size
//     $(".decrease ").click(function() {
//         //var currentFontSize = $('div').css('font-size');
//         var currentSize = $('h1,h2,li,div,p').css('font-size');
//         var currentSize = parseFloat(currentSize) * 0.8;
//         $('h1,h2,li,div,p').css('font-size', currentSize);

//         return false;
//     });



// });

var cont = document.getElementById("container");

function changeSizeByBtn(size) {
    // Set value of the parameter as fontSize
    cont.style.fontSize = size + "px"; // <- HERE
}

$(".search-panel").css('display', 'none');

function search() {

    $(".crossIconclosed").click(function() {
        $(".search-panel").hide();

    });




    $(".search-panel").slideToggle();
}


$(".form-search").hide();
$(".advance-serach-active").click(function() {

    $(".form-search").toggle();
    $(".crossIconclosed").click(function() {

        $(".form-search").hide();

    });
});

$(document).ready(function() {
    $(".slider ").bxSlider({
        auto: true
            // mode: 'fade'
    });


});
$(document).ready(function() {
    $('.slider1').bxSlider({
        slideWidth: 460,
        minSlides: 2,
        maxSlides: 4,
        auto: true,
        slideMargin: 0
    });
});


$(document).ready(function() {

    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});


$(".list-grid ").click(function() {

    $(".grid-view").show();
    $(".dashboad-list").hide();
    $(".list-view-show").hide();

})

$(".list-dashboard").click(function() {
    $(".dashboad-list").show();
    $(".grid-view").hide();
    $(".list-view-show").hide();



});

$(".list-view").click(function() {

    $(".list-view-show").show();
    $(".grid-view").hide();
    $(".dashboad-list").hide();


})

$(".dropdown-menu").click(function(event) {
    event.stopPropagation();
});

$(function() {
    $("#slider-range").slider({
        // min: 1500,
        // max: 10000,
        range: true,
        min: 2950,
        max: 4000,
        step: 1,
        values: [3000, 6000],
        slide: function(event, ui) {
            $("#amount").val("" + ui.values[0]);
            $("#amount1").val("" + ui.values[1]);

        }

    });
    $("#amount").val(
        " " + $("#slider-range").slider("values", 0));

    $("#amount1").val(
        " " + $("#slider-range").slider("values", 1));
});
$(function() {
    $("#slider-range-home").slider({
        // min: 1500,
        // max: 10000,
        range: true,
        min: 2950,
        max: 4000,
        step: 1,
        values: [3000, 6000],
        slide: function(event, ui) {
            $("#amount").val("" + ui.values[0]);
            $("#amount1").val("" + ui.values[1]);

        }

    });
    $("#amount12").val(
        " " + $("#slider-range-home").slider("values", 0));

    $("#amount12").val(
        " " + $("#slider-range-home").slider("values", 1));
});



$(function() {
    $("#slider-range-mobile").slider({
        // min: 1500,
        // max: 10000,
        range: true,
        min: 2950,
        max: 4000,
        step: 1,
        values: [3000, 6000],
        slide: function(event, ui) {
            $("#amount-mobile").val(" " + ui.values[0]);
            $("#amount-mobile").val("" + ui.values[1]);

        }

    });
    $("#amount13").val(
        " " + $("#slider-range-mobile").slider("values", 0));

    $("#amount13").val(
        " " + $("#slider-range-mobile").slider("values", 1));
});
/*
auto complete
*/



$(function() {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});




$(".button-menu").click(function() {

    $(".menu-document").toggle();
})


$("#checkAll").click(function() {
    $(".check").prop('checked', $(this).prop('checked'));
});


//data table

//dropzone


// var myDropzone = new Dropzone("#kt_dropzonejs_example_1", {
//     url: "https://keenthemes.com/scripts/void.php", // Set the url for your upload script location
//     paramName: "file", // The name that will be used to transfer the file
//     maxFiles: 10,
//     maxFilesize: 10, // MB
//     addRemoveLinks: true,
//     accept: function(file, done) {
//         if (file.name == "wow.jpg") {
//             done("Naha, you don't.");
//         } else {
//             done();
//         }
//     }
// });