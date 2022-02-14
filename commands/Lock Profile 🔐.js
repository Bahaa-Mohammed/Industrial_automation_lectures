/*CMD
  command: Lock Profile 🔐
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options = { disable_notification: true, reply_to_message_id: request.message_id };
Bot.sendMessage("*How to activate the personal account lock feature on Facebook:*\nBut please be careful when creating a new account that you cannot treat like an old account. There are restrictions that must be observed\n1. Including adding all your information on the same day.\n2. Like a lot of pages and add a lot of friends at once.\n3. Change the password or email address after creating the account, without waiting 24 hours.\n4. It is preferable to use a temporary email because it is possible to quickly disable the account or request an identity\nThere is more, too", options);
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/8bf17caf751f7e1efa5ff.jpg",
caption: "Lock Profile"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/809e49b7f6eab6712e001.jpg",
caption: "*1. First:*\nYou will need to tweak a browser called UC that uses the modified Handler interface download it from [here](http://hc1.checker.in/file2link/documents/file_242666.apk/UCmini10.4.2_Handler4.0.0_Dzebb_handler.apk)",parse_mode:"markdown"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/0083f521ed888a137bf3f.jpg",
caption: "*2. Second:*\nYou need an application called App Cloner to modify the browser and change a number of features of the browser you can download premium version from [here](http://s1.rexdl.com/android/app/App-Cloner-v2.3.3-Full-www.ReXdl.com.apk)",parse_mode:"markdown"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/0937e2ab4e1cb0064ea84.jpg",
caption: "*•Well now we start explaining the method:*\nPlease click on the option specified in the image, which is Identify & tracking options",parse_mode:"markdown"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/b192422e628b2d525d378.jpg",
caption: "A. click on specify what appears in this pic"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/edabc56d42c395ac442b6.jpg",
caption: "Click on the 'Privacy Options' option"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/181c9a831862ba976b0dd.jpg",
caption: "B. choosing 'Spoof Location', change the country to the state of India\nFake time zone Choose India time"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/f44c45e24c0dfe6dde2a1.jpg",
caption: "C. Click on the Android Version option, then start adjusting your phone's properties to prevent Facebook from tracking your phone data that is saved on its servers"})
Api.sendPhoto({ photo: "https://telegra.ph/file/9693f4cb20a59fc340de6.jpg"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/fa9561aca1880f43470a7.jpg",
caption: "D. Click on the Build Props option\nAnd make changes here like spoof another phone type, processor, and fingerprint"})
Api.sendPhoto({ photo: "https://telegra.ph/file/9291a09178e7841188660.jpg"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/86d1c7379baea8a257d76.jpg",
caption: "E. Click on the clone button\nNow we install the application and then open it"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/20063a6c9fcd26962f7b2.jpg"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/403bffd1b3228a08328d6.jpg",
caption: "Now install the application and then open it\nIt will show us a lot of options\nThe most important thing here is to change the browser user-agent and use an Indian IP\n[User-Agent](https://developers.whatismybrowser.com/useragents/explore/?utm_source=whatismybrowsercom&utm_medium=internal&utm_campaign=breadcrumbs) & [IP Hindi](http://lmgtfy.com/?q=india+proxy+list)",parse_mode:"markdown"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/92963320be4c4b73743f7.jpg",
caption: "But be careful, activate the speed mode first if it is not enabled, otherwise, the browser will pass your phone information to Facebook",parse_mode:"markdown"})

Api.sendVideo({ video:"https://t.me/infinity_stones_Bot/6" , caption:"How to activate the Facebook account lock feature\nIt will be very difficult in the first stages, so I hope that the idea reaches you the file info [here](http://hc1.checker.in/file2link/documents/file_243296.txt/UCInfo.txt)",parse_mode:"markdown"})
