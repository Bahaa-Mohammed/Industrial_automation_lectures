/*CMD
  command: /flower
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Misa

  <<ANSWER
Send
[suggestion | Idea | Report a bug]
To [Flower](https://t.me/flower)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Sorry. Bot have not admin now");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "Message from: " + user_link +
     "\n" +
      message +
     "\n/reply" + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendMessage("*The message has been sent\nThank you for your time🌹 \n I wish you a good day*", {reply_to_message_id: request.message_id } );
