/*CMD
  command: Unlink Account 🔗
  help: 
  need_reply: false
  auto_retry_time: 
  folder: PUBG
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options = { parse_mode:"markdown", reply_to_message_id: request.message_id };
Bot.sendMessage("*Unlink Gmail Account PUBG:*\n1. Link Any account Facebook, Twitter\n2. After 21 days unlink existing gmail id\n*Note: *It will take 7 days for unlink (don't login using gmail in this period)\n_Then link new gmail_\n*Note:*_you cant send unlink application if Facebook, Twitter isn't linked for atleast 21 days_\n3. and after sending unlink application it takes 7 days to unlink [⁭⁭](https://telegra.ph/file/2a0fc0d329903897df63f.jpg)", options);
