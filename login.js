$(document).ready(function () {
  var loginUsername;
  var loginPassword;
  var account = [loginUsername, loginPassword];

  $('#login-button').on('click', function () {
    var loginUsernameEntry = $("#login-email").val();
    var loginPasswordEntry = $("#login-password").val();
    console.log("Current Username " + account[0]);
    console.log("Current Password " + account[1]);

    const body = {
      username: loginUsernameEntry,
      password: loginPasswordEntry
    };

    $.ajax({
      type: "POST",
      url: "https://www.fulek.com/data/api/user/login",
      data: JSON.stringify(body),
      contentType: "application/json",
      success: function (data) {
        const tokenObj = data.token; 
        const tokenString = JSON.stringify(tokenObj);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("Username", data.data.username);
        console.log("Logged In");
        setTimeout(() => {
          window.location.replace("index.html");
        }, 1000);
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log("Login Failed");
        const errorMessage = "Login failed. Please check your credentials.";
        $("#error-message").text(errorMessage);
      }
    });
  });

  $('#create-button').on('click', function () {
    var createPasswordEntry = $("#create-password").val();
    var createEmailEntry = $("#create-email").val();

    var createPasswordValid = false;
    var createEmailValid = false;

    var createPasswordObject = $("#create-password");
    var createEmailObject = $("#create-email");
    var validate = /^\s*[a-zA-Z0-9,\s]+\s*$/;
    var validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!validate.test(createPasswordEntry) || createPasswordEntry.length === 0) {
      $(createPasswordObject).addClass("error");
      $(createPasswordObject).val("No special characters or spaces.");
    } else {
      createPasswordValid = true;
      var createPassword = $(createPasswordObject).val();
    }

    if (!validateEmail.test(createEmailEntry)) {
      $(createEmailObject).addClass("error");
      $(createEmailObject).val("Enter a valid email");
    } else {
      createEmailValid = true;
      console.log("Account Email " + createEmailObject.val());
      var createEmail = createEmailObject.val();
    }

    $(createPasswordObject).on('click', function () {
      $(this).val("");
      $(this).removeClass("error");
    });

    $(createEmailObject).on('click', function () {
      $(this).val("");
      $(this).removeClass("error");
    });

    account = [createEmail, createPassword];
    console.log("Account Email " + account[0]);
    console.log("Account Password " + account[1]);

    const body = {
      username: account[0],
      password: account[1]
    };

    $.ajax({
      type: "POST",
      url: "https://www.fulek.com/data/api/user/register",
      data: JSON.stringify(body),
      contentType: "application/json",
      success: function (data) {
        console.log(data);
      }
    });

    if (createPasswordValid && createEmailValid) {
      $('form').animate({
        height: "toggle",
        opacity: "toggle"
      }, "fast");
    }
  });

  $('.message a').on('click', function () {
    $('form').animate({
      height: "toggle",
      opacity: "toggle"
    }, "fast");
  });
});