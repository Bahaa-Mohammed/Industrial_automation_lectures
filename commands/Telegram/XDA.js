/*CMD
  command: XDA
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Telegram
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options = { disable_notification: true, reply_to_message_id: request.message_id };
Bot.sendMessage("[xda Group Hub](https://t.me/xdadevelopershub]\n[XDA News Channel](https://t.me/xdanews)\n1. [Google Device Discussion](https://t.me/joinchat/GobKO059P187L04_lROAjA)\n2. [Huawei/Honor Device Discussion](https://t.me/joinchat/GobKO0yVKYAHOOON_KuXIw)\n3. [HTC Device Discussion](https://t.me/joinchat/GobKO0BtfvCQLqQ6SAqreg)\n4. [LG Device Discussion](https://t.me/joinchat/GobKO1HUnWgyZcjQ8iIkRA)\n5. [Motorola Device Discussion](https://t.me/joinchat/GobKO0fPbFnKzIzUq8QD2A)\n6. [Nokia Device Discussion](https://t.me/joinchat/GobKO08UpiE7HUWxr_yc2A)\n7. [OnePlus Device Discussion](https://t.me/joinchat/GobKO0WAM7JznxHXgKkCiw)\n8. [Samsung Device Discussion](https://t.me/joinchat/GobKO1MO9T7g7iY2y1-oLg)\n9. [Sony Device Discussion](https://t.me/joinchat/GobKO0fZhvNzc__RcJuGzQ)\n10. [Xiaomi Device Discussion](https://t.me/joinchat/GobKO0U4FbdHaLpM1mddkA)\n11. [Realme Device Discussion](https://t.me/joinchat/GobKO1b8S_BrnHRZ3N_Scw)", options);

var button=[
[{title:"Group Hub", url:"https://t.me/xdadevelopershub"},
{title:"XDA News Channel", url:"https://t.me/xdanews"}],
[{title:"Google Device Discussion", url:"https://t.me/joinchat/GobKO059P187L04_lROAjA"},
{title:"Huawei/Honor Device Discussion", url:"https://t.me/joinchat/GobKO0yVKYAHOOON_KuXIw"}],
[{title:"HTC Device Discussion", url:"https://t.me/joinchat/GobKO0BtfvCQLqQ6SAqreg"},
{title:"LG Device Discussion", url:"https://t.me/joinchat/GobKO1HUnWgyZcjQ8iIkRA"}],
[{title:"Motorola Device Discussion", url:"https://t.me/joinchat/GobKO0fPbFnKzIzUq8QD2A"},
{title:"Nokia Device Discussion", url:"https://t.me/joinchat/GobKO08UpiE7HUWxr_yc2A"}],
[{title:"OnePlus Device Discussion", url:"https://t.me/joinchat/GobKO0WAM7JznxHXgKkCiw"},
{title:"Samsung Device Discussion", url:"https://t.me/joinchat/GobKO1MO9T7g7iY2y1-oLg"}],
[{title:"Sony Device Discussion", url:"https://t.me/joinchat/GobKO0fZhvNzc__RcJuGzQ"},
{title:"Xiaomi Device Discussion", url:"https://t.me/joinchat/GobKO1MO9T7g7iY2y1-oLg"}],
[{title:"Realme Device Discussion", url:"https://t.me/joinchat/GobKO1b8S_BrnHRZ3N_Scw"}]
]
Bot.sendInlineKeyboard(button,"*XDA Group*")
