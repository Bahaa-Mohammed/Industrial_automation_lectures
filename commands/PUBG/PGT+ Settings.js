/*CMD
  command: PGT+ Settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: PUBG

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Gfx tool is the application that tweaks with your game’s host file and unlocks the extreme frame rate. Frame rate or FPS is the abbreviation of Frames per Second.\nFor example, if your device supports 30fps, that means your device can render 30 images in one second. For better and lag-free gameplay, you must need higher fps. But most of the low-end device doesn’t support high fps settings, especially 2-3GB phones.\nThat’s why we are using the Pro GFX & Optimizer apk to unlock 60fps of our device. Along with 60fps, there are several other options like color format, potato graphics, and many others, which make it better than other gfx tools.\nIf you are searching for any best pubg gfx tool that improves game graphics and texture without banning your account", {reply_to_message_id: request.message_id } );

Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://t.me/infinity_stones_Bot/26",
caption: "*Game variant:* choice Global",parse_mode:"markdown"})


