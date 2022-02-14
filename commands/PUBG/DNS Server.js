/*CMD
  command: DNS Server
  help: 
  need_reply: 
  auto_retry_time: 
  folder: PUBG
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options = { disable_notification: true, reply_to_message_id: request.message_id };
Bot.sendMessage("‌‌‎It requires no Apps, but you need to be on the <u>version 9 or up</u>\nFirst, go to\nSettings &gt; Network &amp; Internet &gt; Advanced.\nIn there, you will see an option for PrivateDNS, which should be Off by default.\nSwitch it from Off to <b>Private DNSprovider hostname</b> and specify the DNSprovider you want to use.\nThere is a lot from DNS Server Choice the best <a href='https://telegra.ph/file/cf3bcf2ec9b46e5af31fe.jpg'>All DNS-Over-TLS For OS 9 or 10:</a>\n#DNS #PUBG\n1. one.one.one.one.one\n2. dns-unfiltered.adguard.com\n3. family-filter-dns.cleanbrowsing.org\n4. adult-filter-dns.cleanbrowsing.org\n5. securityfilter-dns.cleanbrowsing.org\n6. dns10.quad9.net\n7. dns11.quad9.net\n8. dns.switch.ch\n9. dns.comss.one\n10. dns.east.comss.one\n11. private.canadianshield.cira.ca.com\n12. protected.canadianshield.cira.ca.com\n13. family.canadianshield.cira.ca.com\n14. fi.dot.dns.snopyta.org\n15. odvr.nic.cz\n16. dns.alidns.com\n17. dns.cfiec.net\n18. dot.360.cn\n19. public.dns.iij.jp\n20. dns.pub\n21. dot.tiar.app\n22. jp.tiar.app\n23. dns.oszx.co\n24. dns.pumplex.com\n25. dot1.applied-privacy.net\n26. dns.decloudus.com\n27. resolver-eu.lelux.fi\n28. dnsforge.de\n29. kaitain.restena.lu\n30. dns.digitale-gesellschaft.ch\n31. dnsovertls1.sinodun.com\n32. getdnsapi.net\n33. anycast.censurfridns.dk\n34. unicast.censurfridns.dk\n35. ns2.dnsprivacy.at\n36. dot.securedns.eu\n37. dnsovertls3.sinodun.com\n38. dnsovertls2.sinodun.com\n39. dns.bitgeek.in\n40. dns-tls.bitwiseshift.net\n41. dns.larsdebruin.net\n42. privacydns.go6lab.si\n43. tls-dns-u.odvr.dns-oarc.net\n44. dnsotls.lab.nic.cl\n45. dot.centraleu.pi-dns.com\n46. dot.northeu.pi-dns.com\n47. dot.eastas.pi-dns.com\n48. dot.westus.pi-dns.com\n49. doh.dnslify.com\n50. dot.seby.io\nPleas Read This <a href='https://kb.adguard.com/en/general/dns-providers'>All DNS Server List</a>\nDNS Test:\nhttps://play.google.com/store/apps/details?id=com.catinthebox.dnsspeedtest\nYou can test dns by using this app from Play Story\nBut you need dns in format number not DNS-Over-TLS get them from here <a href='https://kb.adguard.com/en/general/dns-providers'>Number DNS</a>\nPleas Read This [All DNS Server List](https://kb.adguard.com/en/general/dns-providers)", options);

Api.sendPhoto({ photo: "https://t.me/PubgMobileGlobalVersion/14"})

var button=[
{title:"DNS Test", url:"https://play.google.com/store/apps/details?id=com.catinthebox.dnsspeedtest"}]
Bot.sendInlineKeyboard(button,"You can test dns by using this app from Play Story\nBut you need dns in format number not DNS-Over-TLS get them from here [Number DNS](https://kb.adguard.com/en/general/dns-providers)\nadd number of dns to the app then test him\nsee photo")

Api.sendPhoto({ photo: "https://t.me/PubgMobileGlobalVersion/16"})
