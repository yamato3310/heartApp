App.support = App.cable.subscriptions.create("SupportChannel", {
    connected: function (message) {
      console.log(message);
    },

    disconnected: function () {
      // Called when the subscription has been terminated by the server
    },

    received: function (message) {
      console.log(message);
      // Called when there's incoming data on the websocket for this channel
      if (message['message'] === 'add') addHeart();
    },

    add: function (message) {
      return this.perform('add', {message: message});
    }
  });