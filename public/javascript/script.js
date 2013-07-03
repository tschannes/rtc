
// app constructor
function MyApp() {
  $client = vline.Client.create({
        'serviceId': 'getfeedback'
      });
      $client.login('getfeedback').done(function(session) {
        $session = session;
        var user = session.nh.ef + ":" + session.mb;
        console.log(user);
        });
        // $client.on('recv:im', this.onMessage_, this);
        $client.on('add:mediaSession', onMediaSession, this);

  function onMediaSession(event) {
    var mediaSession = event.target;
    if (mediaSession.isIncoming()) {
      this.calls_.push(new MyCall(this, mediaSession));
    }
  }
}

// initiate a call
MyApp.prototype.call = function(userId) {
 this.session_.getPerson(userId).
    done(function(person) {
      this.calls_.push(new MyCall(this, person.startMedia()));
      person.release();
    }, this);
};

// constructor of two-party call controller
function MyCall(app, mediaSession) {

  mediaSession.
    on('enterState:pending', onEnterPending).
    on('exitState:pending', app.hideModal, app).
    on('enterState:incoming', onEnterIncoming).
    on('exitState:incoming', app.hideNotification, app).
    on('enterState:outgoing', onEnterOutgoing).
    on('exitState:outgoing', app.hideMessage, app).
    on('enterState:connecting', onEnterConnecting).
    on('exitState:connecting', app.hideMessage, app).
    on('enterState:active', onEnterActive).
    on('exitState:active', app.hideCallUi, app);

  function onEnterPending() {
    app.showModal("Click 'allow' to start call ^^^");
  }
  function onEnterIncoming() {
    app.showNotification(
      'Incoming call from ' + mediaSession.getDisplayName() + '...',
      mediaSession.getThumbnailUrl());
  }
  function onEnterOutgoing() {
    app.showMessage(
     'Calling ' + mediaSession.getDisplayName() + '...',
      mediaSession.getThumbnailUrl());
  }
  function onEnterConnecting() {
    app.showMessage('Connecting...');
  }
  function onEnterActive() {
    app.showCallUi(mediaSession);
  }
};

// end the call
MyCall.prototype.end = function() {
  this.mediaSession_.stop();
};