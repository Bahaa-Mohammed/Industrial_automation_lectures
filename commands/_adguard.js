/*CMD
  command: /adguard
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("*How do you block all applications from accessing the Internet?*\nYou must use an app AdGuard With all its features I cannot explain it here\n1. Download the app from [here](https://t.me/ModdedCentral/50661)\n2. Download the VPN Apps By clicking on the application name you need only one suggested for you to use Orbot or Adguard VPN\n1. [Orbot](https://play.google.com/store/apps/details?id=org.torproject.android)\n2. [Adguard VPN](https://t.me/ModdedCentral/49853)\n3. [ShadowSocks](https://play.google.com/store/apps/details?id=com.github.shadowsocks)\n*How to start it?*\nThis explanation is a little tricky so read it carefully", options);
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/6cfa2fd4d98a23311e202.jpg",
caption: "1. Go to adguard apk click on apps management Select all applications and exclude the PUBG game from being filtered through Adguard"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/aa45e7e7d4bbd7b87e384.jpg",
caption: "2. Go to proxy and add local host for the application you have chosen\nExamples:\n1. Orbot HTTP 127.0.0.1:8118\nOrbot Socks5 127.0.0.1:9050\n2. ShadowSocks Socks5 127.0.0.1:1080\n3. Adguard VPN Socks5 127.0.0.1:Manual from the app himself in option server proxy port"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/3cfe7ae53f5db5f030ffa.jpg",
caption: "4. Go to Filtering Log and disable it"})
Api.sendPhoto({
chat_id: user.telegramid,
photo: "https://telegra.ph/file/def0e3d8a83ea68105eac.jpg",
caption: "5. Disable the proxy inside the VPN orbot or ShadowSocks or Adguard VPN, and so all applications will not work except for the game"})
Bot.sendMessage("6. If you are not able to play the game you should read the part *DNS Server*", options);
