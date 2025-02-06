(function ($) {
  $(document).ready(function () {
    /*     $("*").click(function () {
      $("*").hide(1000);
    }); */

    $("button.jq-one").click(function () {
      $("p:first").toggle(500);
    });

    $("li i,span:first").click(function () {
      $("ul a:first-child").slideToggle(500);
    });

    $("ul a:nth-child(2)").click(function () {
      $("ul a:nth-child(3)").toggle(500);
    });

    /* $("[href]").on("click", function () {
      $("a[target='_blank']").slideToggle(500);
      $("a[target!='_blank']").slideToggle(500);
    }); */

    $(".logo").on("click", function () {
      $(":button").fadeToggle(500);
    });

    $("tr:even").on("click", function () {
      $(".main-footer-area, .review-section-area").fadeOut(700);
    });

    $("tr:odd").on("click", function () {
      $(".main-footer-area, .review-section-area").fadeIn(700);
    });

    $("#for-dbclick").on("dblclick", function () {
      $(this).css("background-color", "red");
      $(this).css("color", "black");
    });
    $("#for-dbclick").on("click", function () {
      var img = $("#image-anime img");
      img.animate({ height: "300px", opacity: "0.4" }, "slow");
      img.animate({ width: "300px", opacity: "0.8" }, "slow");
      img.animate({ height: "100px", opacity: "0.4" }, "slow");
      img.animate({ width: "100px", opacity: "0.8" }, "slow");
    });

    $("#pay-first").on("mouseenter", function () {
      alert("Pay First Or Leave");
    });

    $("#if-you-dont").on("mouseleave", function () {
      alert("Follow or you will be banned");
    });

    /* $("#mouse-down").on("mousedown", function () {
      alert("don't steal my image");
    }); */

    $("#mouse-up").on("mouseup", function () {
      alert("You are banned");
    });

    $("#mouse-hover").hover(
      function () {
        alert("wanna meet Donald Trump?");
      },
      function () {
        alert("He is too busy with his hair");
      }
    );

    $("input").focus(function () {
      $(this).css("background-color", "#cccccc");
    });

    $("input").blur(function () {
      $(this).css("background-color", "#ffffff");
    });

    $("#makketing").on({
      mouseenter: function () {
        $(this).css("color", "purple");
      },
      mouseleave: function () {
        $(this).css("color", "lightblue");
      },
      click: function () {
        $(this).css("color", "red");
      },
    });

    $(".btn-fun").on("click", function () {
      $("#first-to").fadeToggle("slow");
      $("#second-to").fadeToggle(2000);
      $("#third-to").fadeToggle(2500);
    });

    $("#first-to").mouseenter(function () {
      alert("Aho Vatija Aho!!");
    });

    $("#second-to").click(function () {
      $(".images-fun").animate({ bottom: "150px" });
      /* $("#third-to").animate({
        width: "400px",
      });
      $(this).animate({
        width: "400px",
      });
      $("#first-to").animate({
        width: "600px",
        height: "350px",
      }); */

      $("#third-to").animate({
        width: "toggle",
      });
      $(this).animate({
        width: "toggle",
      });
      $("#first-to").animate({
        width: "700px",
        height: "350px",
      });
    });
    $("#myForm").on("click", function () {
      $("#subbmit").hide("slow", function () {
        alert("Magar Chokh Bondho Korte Parba Na!");
      });
    });

    $("#btn-3").click(function () {
      $(this)
        .animate({ left: "200px" }, 1000)
        .css("background", "blue")
        .fadeOut("slow");
    });

    $("#subbmit").click(function () {
      alert("Value: " + $("").val());
    });

    /* $("#btn-1").click(function () {
      $("#btn-2").text("Hello world!");
    }); */
    $("#btn-1").click(function () {
      $("#btn-2").html("<b>Hello world!</b>");
    });

    $("#codii").click(function () {
      $("#cl-fn").attr({
        href: "https://www.notsomething.com",
        title: "there is nothng in here",
      });
    });
    $("#p-p").append("jQuery append.");
    $("#p-p").prepend("This is jQuery Prepend.");

    $("#be-af").after("Temporary Logo");

    $("#be-af").before("Logo may change later");

    $("#btn-2").on("click", function () {
      $("#btn-1").remove();
    });

    $("strong").remove("#remov");

    /* $("button.bg-color").on("click", function () {
      $(".title-paragraph").addClass("bg-color-black");
    }); */
    $("button.bg-color").on("click", function () {
      $(".title-paragraph").toggleClass("bg-color-black");
    });
    /* $("p").css({ "background-color": "yellow", "font-size": "200%" }); */
    $("#btn-4").on("click", function () {
      $(".for-training-js-container").width(1200).height(1000);
    });
	
	/*$("#madness").on("click", function(){
		$(this).fadeToggle(1000)
	})*/
	
	$("#btn-one").on("click", function(){
		$(this).siblings().css("background-color", "yellow");
	});
	
	$("#btn-two").click(function() {
	$(this).parent().css("background-color", "lightblue");
	});
	
	/*$(".js-contents2").click(function() {
	$(this).children().css("color", "lightgreen");
	});*/
	
	$("#btn-four").click(function() {
	$(this).css("background-color", "orange");
	$(this).siblings().css("background-color", "red");
	$(this).parent().css("border", "2px solid red");
	});
  });
  
	var jq = $.noConflict();
	jq(document).ready(function(){
	jq(".bg-color2").click(function(){
    jq(".title-paragraph2").text("jQuery is still working! nice thing but... can I do this with Vue.js? No... -crys without sound-");
	});
  });
})(jQuery);
