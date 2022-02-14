/*CMD
  command: Method Facebook 🎲
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options = { disable_notification: true, reply_to_message_id: request.message_id };
Bot.sendMessage("*Methods on Facebook:*", options);
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/35e3243b72c60d03a8fb0.jpg",
caption: "1. *Blank Comments:*\nCopy and paste blank character from this [file](http://hc1.checker.in/file2link/documents/file_242723.txt/blank.txt)",parse_mode:"markdown"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/16c43d32a5120ffef9cb3.jpg",
caption: "2. *Two-factor authentication:*\nSometimes referred to as two-step verificationordual-factor authentication, is a security process in which users provide two different authentication factors to verify themselves. This process is done to better protect both the user's credentials and the resources the user can access.\n*Note:* you will not need to wait for a message from the company to access your account also you don't need number for enable this\nYou can download from [here](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)",parse_mode:"markdown"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://blog.kamens.us/2018/03/03/why-you-should-turn-off-ads-with-your-social-actions-on-facebook/",
caption: "3. *Ad Preferences:*\n You can prevent your comments, likes, and interactions that you make on the Facebook platform from being shown to your friends\nto enable this go to settings >> Ad Preferences >> Ads that include your social actions >> no one",parse_mode:"markdown"})
let optionss = { disable_notification: true, reply_to_message_id: request.message_id };
