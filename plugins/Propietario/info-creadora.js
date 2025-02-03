var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = 'https://wallpapers.com/images/featured/scream-mz64o06bjspf0jnu.jpg'
const cat = `𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗗𝗘 𝗦𝗘𝗕𝗫𝗦 𝗕𝗢𝗧
🥷🏼 https://Wa.me/593990990112


✨ 𝗥𝗘𝗗𝗘 𝗦𝗢𝗖𝗜𝗔𝗟 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 
𝗜𝗚: https://www.instagram.com/sebxs_official0

𝗧𝗞: https://www.tiktok.com/@sebas.mvp_official0

🪀 𝗖𝗢𝗠𝗨𝗡𝗜𝗗𝗔𝗗
https://chat.whatsapp.com/BemUlRwdqFY2T28n5FSewA`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler

