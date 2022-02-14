/*CMD
  command: /pubg
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/Black_Peral/27",
  caption:  "PUBG MOBILE Global 1.1.0 from official website no need obb file you can download it from this channel\nhttps://t.me/Black_Peral/27"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/Black_Peral/42",
  caption:  "PUBG MOBILE Korean Version 1.1.0 from this channel\nhttps://t.me/Black_Peral/42"})

