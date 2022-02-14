/*CMD
  command: /t
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendMediaGroup({
media: [
{type: "photo", 
media: "https://telegra.ph/file/bcad58ec0a9624a4ed457.jpg",
caption: "caption u want here",
parse_mode: "HTML"},
{type: "video", 
media:"https://t.me/Video_ra/85741"}
  ]
})
