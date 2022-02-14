/*CMD
  command: GFX Tools
  help: 
  need_reply: 
  auto_retry_time: 
  folder: PUBG
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("GFX Tool is a third party application which helps players unlock full HD graphics, 60 fps and other graphic settings for PUBG Mobile. The tool is available for android as well as iO", {reply_to_message_id: request.message_id } );
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://lh3.googleusercontent.com/y92AHoWL5CljSh4iHEaw1vBFNzAhOVsVixSVuF2bDuvdiCP-RO4KHFvfRdL-Pm6Bq4I",
caption: "GFX Tools"})

Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/6fd873996c086bf34f832.jpg",
caption: "*Resolution:* default or 1024x576\n*FPS:* 40 only\n*Anti-aliasing:* 2X\n*Graphics API:* Open GL Only because Vulkan Not working",parse_mode:"markdown"})

var button=[
[{title:"GFX Tools", url:"https://play.google.com/store/apps/details?id=eu.tsoml.graphicssettings"},]]
Bot.sendInlineKeyboard(button,"Note: there's no paid version or ad-free one")
