$(document).ready(function() {

  var $remote_client,
  $user_id = "getfeedback:f7hw27xrn9zyz3sd";

  $(".login").click(function() {
    $(this).toggleClass('logout');
    if (this.text == 'Login') {
      $(this).text('Logout')
      // call connect
      vline = new vlineApp()
      } else {
      $(this).text('Login')
      // vline disconnect
      vline.client_.logout();
    }
  });
  $(".call").click(function(){
    // Make a call
    return vline.session_.getPerson($user_id)
        .done(function(person) {
          $remote_client = person;
          vline.session_.startMedia($user_id);
        })
  })
});

// .done(
//         $('#video').append('<p>You are logged in now!</p>')
//     )