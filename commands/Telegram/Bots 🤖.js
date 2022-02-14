/*CMD
  command: Bots 🤖
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Telegram

  <<ANSWER
Various bots:
@Siarobot
@FunctionsRobot
is a multi plugins bots.
@imguploaderbot
This can send Direct link for Images!
@CorsaBot
Make Instant View from any article
@ReadmeBot
Get article text from link. Just send him a link and get article text. No ads, no trash.
@SpamBot
The official Spam Info Bot by Telegram. Helps users with limited accounts regain the full functionality.
@ForwardsCoverBot
Cover forwards from your sent messages
@VoiceEffectsBot
🇬🇧Voice Changer, inline audiomemes
@TTSBot
@TextTSBot
@UrbanDictionaryBot
Text to voice
@ControllerBot
Awesome bot for channel owners that helps you to create rich posts, view stats and more.
@QuizBot
Create a quiz with several multiple choice questions and test your friends.
@TeURLbot
With me you can shorten links, create and read QrCodes and get static links bit.ly
@vTelegraphBot
an attempt to create a better @Telegraph
@CustomFontsBot
Custom fonts for your messages!
@imageToText_bot
@OCRthis_bot
Get text from images
@mp3toolsbot
convert any mp3 into voice message, add/edit mp3 tags, cut mp3 based on start and end points in seconds, add album art.
@ip_tools_bot
🤖 IP Tools Bot
👉 Powerful tools
👉 Improve your network
👉 Get ip information in a second
@vs96bot
Fake Bank Card - Visa Card
@ttsavebot
Simple telegram bot to download videos from TikTok without watermark. Also works in inline mode.
@torrentsearcher_bot
@TorrentSearchRoBot
Search Torrents from Telegram!
@android_helper_bot
xda Magisk Root Tools
@iLyricsBot
Fetches lyrics from various sources and also provides YouTube, SoundCloud & Spotify links.
@WRButtons_bot
@Glass_Btnbot
@ChannelButtonsBot
This bot can create buttons for reactions, comments, links and more in your Telegram channel.
@IFTTT
Link your Telegram groups or channels to more than 360 other services.
@DiscussionGroupBot
I automatically remove all forwarded posts from your linked channel so the group doesn't get filled with channel posts!
@RRemindersBot
@do_itBot
Hello! I'm @RRemindersBot and i'm here to remind you
@BNoteBot
🇬🇧 - Save notes and send to all with inline mode or set reminders.
@socks5_bot
Free proxy is real
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("*Creating Bot:*\n@BotFather\nBotFather is the one bot to rule them all. Use it to create new bot accounts and manage yourexisting bots.\n@MenuBuilderBot\nhelps you to create your own bots with menu.\n@Manybot\n🔥Manybot lets you create your own bots. Send messages, create custom commands and menus.\n@LimitatiBot\n🇬🇧🇮🇹Chat without using your private chat! Start it and enjoy a whole set of opportunities for your channel and more\n@nashrabot\nAwesome bot for channels & advertising list owners helps you create rich posts, podcasting to many channels, and more.\n@uubot\nThe messaging bot between you and your channel's, group's, or blocked subscribers", {reply_to_message_id: request.message_id } );

Bot.sendMessage("*YouTube Bot:*\n@Gozilla_bot\nBot for downloading video and audio from online services and social networks.\n@newurl_uploaderbot\nSend me any YouTube links and I'll upload any quality you pick\n@utubebot\nI am the Best Video Downloader with MP3 Conversion support. To search videos use @utubebot inline mode.\n@LyBot\nConvenient bot for finding music in YouTube Music.", {reply_to_message_id: request.message_id } );
Bot.sendMessage("App Story:\n@apkdl_bot\nDownload latest version of any free android apps and games..", {reply_to_message_id: request.message_id } );
Bot.sendMessage("Upload:\n@UploadsRobot\n@Uloadit_bot\n@UptoTGbot\n@driveuploadbot\n@gduploadbot", {reply_to_message_id: request.message_id } );
Bot.sendMessage("*Game*\n@xoBot\nTic-Tac-Toe bot with singleplayer, multiplayer, 14 languages support and stats!", {reply_to_message_id: request.message_id } );
Bot.sendMessage("*Translate:*\n@YTranslateBot\n@grouptranslator_bot\n@transw_bot", {reply_to_message_id: request.message_id } );
Bot.sendMessage("Emails:\n@EmailGuardBot\nThis bot assign to you a new email and forward all incoming email to Telegram. You may also send email from Telegram\n@etlgr_bot\nAssign an email address to any Telegram chat: send and receive emails.\n@GmailBot\nWith this bot you can get new emails and reply to them without leaving Telegram.", {reply_to_message_id: request.message_id } );
Bot.sendInlineKeyboard([ [{title: "Bots List Channel", url: "https://t.me/botlist" }, {title: "Bots List Bot", url: "https://t.me/BotListBot"} ],
[{title: "Bots List Chat Group", url: "https://t.me/BotListChat" }]], "There is a lot of bots here also you can request any bot you want from the group.") 
