/*CMD
  command: /alert
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "1. If anything isn't clear, ask me only via Telegram\n2.There are several other methods that I haven't added because they are not clear.\n3. I'm not responsible for anything that is posted anywhere",
  show_alert: is_alert 
})
