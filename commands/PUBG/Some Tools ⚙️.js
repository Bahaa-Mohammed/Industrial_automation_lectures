/*CMD
  command: Some Tools ⚙️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: PUBG
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("*Discovered ways to improve a game PUBG:*\n1. Use 3G or 4G bandwidth and do not use a network WIFI\n2. Turn off one of the SIM cards because it causes a sharp rise in the response PING\n3. Use fast DNS and please try more than one server.\nPlease see section DNS Server\nAnd playing without it is much better because it causes a delay in response as well\n4. Using UDP protocol instead of TCP to speed up data transmission more quickly. The information is in a section UDP Protocol")
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/b2e53f9c4b125ff50ae8b.jpg",
caption: "5. Also, please go to the battery settings. There is a sleep mode option.\nCheck all the apps you don't use"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/11748508298cad8be1476.jpg",
caption: "6. Also, there is a data saver mode. Deselect all applications except the important ones only"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/ad0a2b251a892bb349947.jpg",
caption: "7. Ensure that the word error does not appear in the application.\nEnsure that the following options are enabled in the developer options. To ensure that all installed applications do not contain any bug\n- Always down notifications\n- View the media channel\n- Show invalid channel notice"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/aca223140ae6828cffc1a.jpg",
caption: "8. disable Force 4x MSAA* from developer options\nenable HW overlays because it's slow dawn your phone\nWithout a hardware overlay every application that is displaying things on the screen will share video memory and will have to constantly check for collision and clipping to render a proper image, this can cost a lot of processing power. With a hardware overlay each application gets its own portion of video memory, getting rid of the need to check for collision and clipping.."})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/8064f98ff158835a46a1f.jpg",
caption: "9. From the developer options, set the number of background processes on 4"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/7d79fc07c8586945e465a.jpg",
caption: "10. There are also two sections in the developer options\nThe first is:\nRunning services:\nwhich are permanent servers that consume the CPU\nBackground check:\nwhich is the apps that run in RAM"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/ac03a649536cb05fc24d0.jpg",
caption: "11. If you have a phone that has this option\nDial the code *#9900# and select the option shown in the image, then choose low not high It configures how many logs the phone stores for debug reasons if you choice high Your phone starts writing more logs than usual"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/9f993c84e791cb8dc58bd.jpg",
caption: "12. Download adguard and block some apps from internet to completely turn the internet source into the game Please Check command /adguard fot more info"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/059322c6d4bfb8fee902c.jpg",
caption: "13. enable Auto-adjust graphics (automatially lowers settings if FPS fluctuates too much)\ndisable Anti-aliasin (Effective immediately. Makes the texture smooth but increases battery consumption.)"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/803d29b10090a693666e3.jpg",
caption: "14. disable Death Replay feature"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/7a371f10e451cee0f2e53.jpg",
caption: "15. use the Greenify program to disable applications before entering the game"})
var button=[
{title:"Greenify Apk", url:"https://t.me/Prosmart/17362"}]
Bot.sendInlineKeyboard(button,"Use this before anything")

