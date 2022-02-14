/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: back
CMD*/

Bot.sendMessage(" Hey Sweetheart"+" "+user.first_name+"\nWelcome to My Bot");
var button=[
[{title:"PUBG Mobile", url:"https://discord.com/invite/pubgm"},
{title:"Note", command:"/alert"}]]
Bot.sendInlineKeyboard(button,"*Read*")
let msg = "*If you understand this. Please you can start the bot*☃🌨🎄"
Bot.sendMessage(msg)
Bot.run({ command: "/run" })

var new_user = User.getProperty ("new_user")
if(!new_user){
var adminid = "989174330"
var mention = '<a href="tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'

Api.sendMessage({
chat_id:adminid,
text:mention,
parse_mode:"html"

})

User.setProperty ("new_user",true,"boolean")
}

var new_user = User.getProperty ("new_user")
if(!new_user){
var adminid = "989174330"

Api.sendMessage({
chat_id:adminid,
text:mention,
parse_mode:"html"
})

User.setProperty ("new_user",true,"boolean")
}

