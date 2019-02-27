class SupportChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "support_channel"
    ActionCable.server.broadcast 'support_channel', message: 'connected.'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def add(message)
    ActionCable.server.broadcast 'support_channel', message: message
  end
end
