App.support = App.cable.subscriptions.create("SupportChannel", {
    connected: function (message) {
    },

    disconnected: function () {
      // Called when the subscription has been terminated by the server
    },

    received: function (message) {
      // Called when there's incoming data on the websocket for this channel
      console.log(message);
      if (message['message'] === 'add') addHeart();
    },

    add: function (message) {
      return this.perform('add', {message: message});
    }
  });