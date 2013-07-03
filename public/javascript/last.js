function vlineApp() {
  this.client_ = vline.Client.create({
    "serviceId": "getfeedback",
    "ui": false,
    "uiVideoPanel": "#video"
  });

  this.client_
      .login('getfeedback', window.PROFILE, window.AUTH_TOKEN)
      .done(this.init_, this);
}

vlineApp.prototype.init_ = function(session) {
  this.session_ = session;
};