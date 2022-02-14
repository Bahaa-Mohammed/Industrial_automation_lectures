/*CMD
  command: Download PUBG Mobile
  help: 
  need_reply: 
  auto_retry_time: 
  folder: PUBG
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendDocument({
document: "https://t.me/infinity_stones_Bot/24",
caption:"PUBGMOBILE Global 1.5.0 \nIf you playing PUBG in VMOS download this version it's not need obb file"
});

Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/ab1ac7def076d6bd47ab4.jpg",
caption: "Update"})

var button=[
[{title:"Official Website Global", url:"https://www.pubgmobile.com/en-US/home.shtml"},{title:"Change Log", url:"https://www.pubgmobile.com/webplat/info/news_version3/35372/60662/60663/60724/60725/60765/m22521/202105/889275.shtml"}]]
Bot.sendInlineKeyboard(button,"PUBG Mobile Website")
