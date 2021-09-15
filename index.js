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

var input = $(".validate-input .input");

$(".validate-form").on("submit", function () {
  var check = true;

  for (var i = 0; i < input.length; i++) {
    if (validate(input[i]) == false) {
      showValidate(input[i]);
      check = false;
    }
  }

  const inputs = document.querySelector(".contact-form");

  if (check) {
    console.log("Check");
    Email.send({
      Host: "smtp.gmail.com",
      Username: "22usyk08@gmail.com",
      Password: "mvamknkaowvqlpzs",
      To: "22usyk08@gmail.com",
      From: inputs.elements["email"].value,
      Subject: "PORTFOLIO EMAIL",
      Body:
        inputs.elements["message"].value +
        "<br>Client name: <strong>" +
        inputs.elements["name"].value +
        "</strong>",
    }).then((message) => alert(message));
  }

  return false;
});

$(".validate-form .input").each(function () {
  $(this).focus(function () {
    hideValidate(this);
  });
});

function validate(input) {
  if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
    if (
      $(input)
        .val()
        .trim()
        .match(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null
    ) {
      return false;
    }
  } else {
    if ($(input).val().trim() == "") {
      return false;
    }
  }
}

function showValidate(input) {
  var thisAlert = $(input).parent();

  $(thisAlert).addClass("alert-validate");
}

function hideValidate(input) {
  var thisAlert = $(input).parent();

  $(thisAlert).removeClass("alert-validate");
}

// e172fbad-be47-4646-84cf-6e52ad5dacdf
