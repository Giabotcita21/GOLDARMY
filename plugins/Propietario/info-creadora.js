var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = 'https://wallpapers.com/images/featured/scream-mz64o06bjspf0jnu.jpg'
const cat = `𝙂𝙊𝙇𝘿 𝘼𝙍𝙈𝙔 𝘽𝙊𝙏 
🥷🏼 https://Wa.me/51990185642


✨ 𝗥𝗘𝗗𝗘 𝗦𝗢𝗖𝗜𝗔𝗟 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 
𝗜𝗚: https://www.instagram.com/goldarmy.fem

🪀 𝗖𝗢𝗠𝗨𝗡𝗜𝗗𝗔𝗗
https://chat.whatsapp.com/BemUlRwdqFY2T28n5FSewA`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler

