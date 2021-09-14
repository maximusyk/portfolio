const burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 4: 15 },
  angle: 45,
  count: 8,
  children: {
    shape: "line",
    radius: 2,
    scale: 1,
    stroke: "#D36F44",
    strokeDasharray: "100%",
    strokeDashoffset: { "-100%": "100%" },
    duration: 400,
    easing: "quad.out",
  },
});

document.addEventListener("click", function (e) {
  burst.tune({ x: e.pageX, y: e.pageY }).replay();
});

$(".project-item")
  .on("mouseover", function (e) {
    $(this).children(".item-text-title").css({ opacity: 1 });
  })
  .on("mouseout", function (e) {
    $(this).children(".item-text-title").css({ opacity: 0 });
  })
  .on("mousemove", function (e) {
    var translateX =
      ((e.pageX - $(this).offset().left) / $(this).width()) * 100;
    var translateY =
      ((e.pageY - $(this).offset().top) / $(this).height()) * 100;

    $(".item-image img").css({
      "transform-origin": translateX + "% " + translateY + "%",
    });
  });

// $("body").click(function (e) {
//   $(".project-item").removeClass("clicked");
// });

$(".item-text-title").click(function (e) {
  const clickedIndex = $(this).closest(".project-item").index();
  $(".project-item").removeClass("clicked");

  $(this).closest(".project-item").toggleClass("clicked");
  if (clickedIndex - 3 >= 0) {
    $(`.project-item:eq(${clickedIndex - 3})`).toggleClass("clicked");
  }
  if (clickedIndex - 6 >= 0) {
    $(`.project-item:eq(${clickedIndex - 6})`).toggleClass("clicked");
  }
});
