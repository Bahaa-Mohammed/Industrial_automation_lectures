/*CMD
  command: UDP Protocol
  help: 
  need_reply: 
  auto_retry_time: 
  folder: PUBG
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options = { disable_notification: true, reply_to_message_id: request.message_id };
Bot.sendMessage("UDP(User Datagram Protocol)\nis a communicationsprotocolthat is primarily used for establishing low-latency and loss-tolerating connections between applications on the internet. It speeds up transmissions by enabling the transfer of data before an agreement is provided by the receiving party.", options);
Api.sendPhoto({ photo: "https://telegra.ph/file/d21e186f519d4e993a2b6.jpg"})
Api.sendPhoto({ photo: "https://telegra.ph/file/70729f47a57d8f3093da7.jpg"})
var button=[
[{title:"Information", url:"https://telegra.ph/TCP-vs-UDP-Whats-the-Difference-05-12"},
{title:"UDP Features", url:"https://telegra.ph/Login-05-12"}],
[{title:"Netguard Pro", url:"https://t.me/ModdedCentral/43872"}]]
Bot.sendInlineKeyboard(button,"*UDP VS TCP Protocol*")
