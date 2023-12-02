import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd,DD [de] MMMM [del] YYYY│[Hora:]HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `
¡Hola! ⭐ @${m.sender.split("@")[0]}

\`\`\`${horarioFecha}\`\`\`
 
┃𝗗𝗘𝗦𝗔𝗥𝗥𝗢𝗟𝗟𝗔𝗗𝗢𝗥:
┃👤 Wa.me/593958918542
╰━━━━━━━⋆★⋆━━━━━━━─

╭━━━[ 𝗚𝗨𝗜𝗔 𝗘𝗕𝗚 💻 ]━⬣
┃ 𝐴𝑞𝑢𝑖́ 𝑡𝑖𝑒𝑛𝑒𝑠 𝑢𝑛 𝑎𝑚𝑝𝑙𝑖𝑜 𝑢𝑠𝑜  
┃ 𝑑𝑒 𝐸𝑙𝑖𝑡𝑒 𝐵𝑜𝑡 𝐺𝑙𝑜𝑏𝑎𝑙.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🖥️➺ .𝘨𝘶𝘪𝘢
┃🖥️➺ .𝘨𝘶𝘪𝘢2
┃🖥️➺ .𝘢𝘺𝘶𝘥𝘢 𝙩𝙚𝙭𝙩𝙤
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗠𝗘𝗡𝗨 𝗘𝗕𝗚 🌎]━⬣
┃ ¡𝑆𝑢𝑚𝑒́𝑟𝑔𝑒𝑡𝑒 𝑒𝑛 𝑒𝑠𝑡𝑎 𝑎𝑣𝑒𝑛𝑡𝑢𝑟𝑎 
┃ 𝑑𝑒𝑙 𝑚𝑒𝑛𝑢 𝑑𝑒 𝐸𝑙𝑖𝑡𝑒 𝐵𝑜𝑡 𝐺𝑙𝑜𝑏𝑎𝑙.!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💫➺ .𝘮𝘦𝘯𝘶𝘢𝘯𝘪𝘮𝘦𝘴
┃💫➺ .𝘮𝘦𝘯𝘶𝘫𝘶𝘦𝘨𝘰𝘴
┃💫➺ .𝘮𝘦𝘯𝘶𝘢𝘶𝘥𝘪𝘰𝘴
┃💫➺ .𝘮𝘦𝘯𝘶𝘭𝘰𝘨𝘰𝘴
┃💫➺ .𝘮𝘦𝘯𝘶𝘪𝘮𝘨
┃💫➺ .𝘮𝘦𝘯𝘶𝘩𝘰𝘵
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗧𝗜𝗞 𝗧𝗢𝗞 ⛱️ ]━⬣
┃ 𝘋𝘪𝘴𝘧𝘳𝘶𝘵𝘢 𝘦𝘭 𝘤𝘢𝘵𝘢́𝘭𝘰𝘨𝘰
┃ 𝘥𝘦 𝘵𝘪𝘬 𝘵𝘰𝘬.📷 📹
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⛱️➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘳𝘢𝘯𝘥𝘰𝘮
┃⛱️➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘧𝘳𝘢𝘴𝘦𝘴
┃⛱️➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘮𝘶𝘴𝘪𝘤
┃⛱️➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘷𝘢𝘭𝘭𝘦
┃⛱️➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘩𝘰𝘵
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗚𝗜𝗙 𝗗𝗜𝗡𝗔𝗠𝗜𝗖 😈 ]━⬣
┃ 𝘙𝘦𝘢𝘭𝘪𝘻𝘢 𝘢𝘤𝘤𝘪𝘰𝘯𝘦𝘴 𝘤𝘰𝘯 𝘨𝘪𝘧𝘴.
┃ 𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘢𝘯𝘥𝘰 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔥➺ .𝘱𝘦𝘯𝘦𝘵𝘳𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘨𝘰𝘭𝘱𝘦𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘢𝘣𝘳𝘢𝘻𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘤𝘰𝘨𝘦𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘣𝘦𝘴𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘧𝘰𝘭𝘭𝘢𝘳 𝙩𝙖𝙜
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗣𝗔𝗥𝗘𝗝𝗔𝗦 👩🏻‍❤️‍👨🏻]━⬣
┃ ¡𝐷𝑒𝑐𝑙𝑎́𝑟𝑎𝑡𝑒 𝑐𝑜𝑛 𝑎𝑙𝑔𝑢𝑖𝑒𝑛
┃ 𝑝𝑎𝑟𝑎 𝑞𝑢𝑒 𝑠𝑒𝑎𝑛 𝑝𝑎𝑟𝑒𝑗𝑎𝑠!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💌➺ .𝘭𝘪𝘴𝘵𝘢𝘱𝘢𝘳𝘦𝘫𝘢𝘴
┃💌➺ .𝘮𝘪𝘱𝘢𝘳𝘦𝘫𝘢
┃💌➺ .𝘱𝘢𝘳𝘦𝘫𝘢 𝙩𝙖𝙜
┃💌➺ .𝘢𝘤𝘦𝘱𝘵𝘢𝘳 𝙩𝙖𝙜
┃💌➺ .𝘳𝘦𝘤𝘩𝘢𝘻𝘢𝘳 𝙩𝙖𝙜
┃💌➺ .𝘵𝘦𝘳𝘮𝘪𝘯𝘢𝘳 𝙩𝙖𝙜
┃💌➺ .𝘢𝘮𝘰𝘳 𝙩𝙖𝙜
┃💌➺ .𝘵𝘰𝘱𝘱𝘢𝘳𝘦𝘫𝘢𝘴
┃💌➺ .𝘢𝘮𝘪𝘴𝘵𝘢𝘥
┃💌➺ .𝘧𝘰𝘳𝘮𝘢𝘳𝘱𝘢𝘳𝘦𝘫𝘢
┃💌➺ .𝘱𝘢𝘳
┃💌➺ .𝘭𝘰𝘷𝘦 𝙩𝙖𝙜
┃💌➺ .𝘦𝘯𝘢𝘮𝘰𝘳𝘢𝘳 𝙩𝙖𝙜
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗙𝗥𝗘𝗘 𝗙𝗜𝗥𝗘 🎮]━⬣
┃ ¡𝐽𝑢𝑒𝑔𝑎 𝑓𝑟𝑒𝑒 𝑓𝑖𝑟𝑒 𝑐𝑜𝑛 𝑡𝑢𝑠 𝑎𝑚𝑖𝑔𝑜𝑠!
┃───────────────
┃🇧🇷➺ .4𝘷𝘴4
┃🇧🇷➺ .4𝘷𝘴4𝘪𝘯𝘵𝘦𝘳𝘯𝘰
┃🇧🇷➺ .6𝘷𝘴6
┃🇧🇷➺ .6𝘷𝘴6𝘪𝘯𝘵𝘦𝘳𝘯𝘰
┃🇧🇷➺ .8𝘷𝘴8
┃🇻🇳➺ .12𝘷𝘴12
┃🇻🇳➺ .16𝘷𝘴16
┃🇻🇳➺ .20𝘷𝘴20
┃🇦🇶➺ .𝘴𝘤𝘳𝘪𝘮
┃🇦🇶➺ .𝘴𝘤𝘳𝘪𝘮𝘥𝘶𝘰
┃🇦🇶➺ .𝘤𝘶𝘢𝘥𝘳𝘪𝘭𝘢𝘵𝘦𝘳𝘰
┃🗼➺ .𝘣𝘦𝘳𝘮𝘶𝘥𝘢
┃🏝️➺ .𝘱𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
┃🏜️➺ .𝘬𝘢𝘭𝘢𝘩𝘢𝘳𝘪
┃🏗️➺ .𝘯𝘦𝘹𝘵𝘦𝘳𝘳𝘢
┃🏞️➺ .𝘢𝘭𝘱𝘦𝘴
┃🎯➺ .𝘤𝘰𝘮𝘣𝘰𝘥𝘦
┃🎯➺ .𝘤𝘰𝘮𝘣𝘰𝘣𝘳
┃📆➺ .𝘢𝘨𝘦𝘯𝘥𝘢
┃📆➺ .𝘢𝘨𝘦𝘯𝘥𝘢𝘴𝘦𝘮𝘢𝘯𝘢𝘭
┃🏆➺ .𝘱𝘰𝘥𝘪𝘰𝘤𝘶𝘢𝘥𝘳𝘪
┃🏆➺ .𝘷𝘦𝘴𝘵𝘪𝘮𝘦𝘯𝘤𝘶𝘢𝘥𝘳𝘪
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘶𝘢𝘥𝘳𝘪
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘭𝘬
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
┃🎲➺ .𝘤𝘭𝘢𝘴𝘪𝘧𝘪𝘤𝘢𝘵𝘰𝘳𝘪𝘢
┃🎲➺ .𝘥𝘶𝘦𝘭𝘰
┃🎲➺ .𝘥𝘶𝘰
┃🎲➺ .𝘤𝘰𝘮𝘱𝘦
┃💥➺ .𝘱𝘷𝘱𝘮1014 𝙩𝙖𝙜
┃💥➺ .𝘱𝘷𝘱𝘴𝘮𝘨 𝙩𝙖𝙜
┃🥇➺ .𝘵𝘰𝘱𝘫𝘶𝘨𝘢𝘥𝘰𝘳𝘦𝘴
┃🏅➺ .𝘵𝘰𝘱𝘪𝘯𝘵𝘦𝘨𝘳𝘢𝘯𝘵𝘦𝘴
┃🥉➺ .𝘵𝘰𝘱𝘣𝘪𝘯𝘢𝘳𝘪𝘰𝘴
┃👹➺ .𝘵𝘰𝘱𝘮1014
┃👹➺ .𝘵𝘰𝘱𝘶𝘮𝘱
┃👹➺ .𝘵𝘰𝘱𝘤𝘰𝘮𝘱𝘦
┃👹➺ .𝘵𝘰𝘱𝘮𝘢𝘱𝘢
┃🐥➺ .𝘮𝘢𝘯𝘤𝘢 𝙩𝙖𝙜
┃🐥➺ .𝘮𝘢𝘯𝘤𝘰 𝙩𝙖𝙜
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗖𝗔𝗥𝗧𝗔𝗦 💍 ]━⬣
┃ ¡𝐷𝑒𝑑𝑖𝑐𝑎𝑙𝑒 𝑢𝑛 𝑚𝑒𝑛𝑠𝑎𝑗𝑒
┃  𝑎 𝑒𝑠𝑎 𝑝𝑒𝑟𝑠𝑜𝑛𝑎 𝑒𝑠𝑝𝑒𝑐𝑖𝑎𝑙!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💍➺ .𝘢𝘯𝘪𝘮𝘰 𝙩𝙖𝙜
┃💍➺ .𝘤𝘢𝘳𝘵𝘢 𝙩𝙖𝙜
┃💍➺ .𝘤𝘢𝘳𝘵𝘢2 𝙩𝙖𝙜
┃💍➺ .𝘤𝘢𝘳𝘵𝘢3 𝙩𝙖𝙜
┃💍➺ .𝘤𝘰𝘯𝘧𝘦𝘴𝘪𝘰𝘯 𝙩𝙖𝙜
┃💍➺ .𝘣𝘶𝘦𝘯𝘰𝘴𝘥𝘪𝘢𝘴 𝙩𝙖𝙜
┃💍➺ .𝘣𝘶𝘦𝘯𝘢𝘴𝘵𝘢𝘳𝘥𝘦𝘴 𝙩𝙖𝙜
┃💍➺ .𝘣𝘶𝘦𝘯𝘢𝘴𝘯𝘰𝘤𝘩𝘦𝘴 𝙩𝙖𝙜
┃💍➺ .𝘣𝘶𝘦𝘯𝘢𝘮𝘢𝘥𝘳𝘶𝘨𝘢𝘥𝘢 𝙩𝙖𝙜
┃💍➺ .𝘱𝘦𝘳𝘷𝘦𝘳𝘵𝘪𝘥𝘰 𝙩𝙖𝙜
┃💍➺ .𝘱𝘦𝘳𝘷𝘦𝘳𝘵𝘪𝘥𝘢 𝙩𝙖𝙜
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗜𝗠𝗚. 𝗘́𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 🌻 ]━⬣
┃ 𝐶𝑒𝑛𝑡𝑟𝑜 𝑑𝑒 𝑚𝑒𝑛𝑢 𝑑𝑒
┃ 𝐼𝑚𝑎́𝑔𝑒𝑛𝑒𝑠 𝐸𝑙𝑖𝑡𝑒𝐵𝑜𝑡𝐺𝑙𝑜𝑏𝑎𝑙🔰
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌻➺ .𝘪𝘮𝘨𝘤𝘰𝘳𝘢𝘻𝘰𝘯 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘯𝘢𝘷𝘪𝘥𝘢𝘥 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘤𝘢𝘳𝘵𝘢 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘳𝘦𝘵𝘳𝘰 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘳𝘦𝘵𝘳𝘰2 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘱𝘢𝘳𝘦𝘫𝘢 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘥𝘣𝘻 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘷𝘪𝘥𝘳𝘪𝘰 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘤𝘢𝘭𝘭𝘦 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘳𝘢𝘧𝘪𝘵𝘪2 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪3 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪4 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪5 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪6 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪7 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪8 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘭𝘰𝘨𝘰𝘯𝘦𝘰𝘯 𝙩𝙚𝙭𝙩𝙤
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗦𝗢𝗥𝗧𝗘𝗢𝗦 🎉 ]━⬣
┃ 𝐻𝑎𝑧 𝑢𝑛 𝑠𝑜𝑟𝑡𝑒𝑜 𝑦 𝑒𝑙𝑖𝑚𝑖𝑛𝑎
┃ 𝑖𝑛𝑎𝑐𝑡𝑖𝑣𝑜𝑠 𝑑𝑒 𝑡𝑢 𝑔𝑟𝑢𝑝𝑜.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰 𝙩𝙚𝙭𝙩𝙤
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰2 𝙩𝙚𝙭𝙩𝙤
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰3 𝙩𝙚𝙭𝙩𝙤
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰4 𝙩𝙚𝙭𝙩𝙤
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰5 𝙩𝙚𝙭𝙩𝙤
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰6 𝙩𝙚𝙭𝙩𝙤
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗙𝗥𝗔𝗦𝗘𝗦 𝗬 𝗧𝗘𝗫𝗧𝗢𝗦 🥀 ]━⬣
┃ 𝘘𝘶𝘪𝘦𝘯 𝘯𝘰 𝘢𝘳𝘳𝘪𝘦𝘴𝘨𝘢 𝘱𝘪𝘦𝘳𝘥𝘦.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🥀➺ .𝘩𝘪𝘴𝘵𝘰𝘳𝘪𝘢𝘳𝘰𝘮𝘢𝘯𝘵𝘪𝘤𝘢
┃🥀➺ .𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘥𝘢𝘥 𝙩𝙖𝙜
┃🥀➺ .𝘤𝘰𝘯𝘴𝘦𝘫𝘰
┃🥀➺ .𝘧𝘳𝘢𝘴𝘦
┃🥀➺ .𝘱𝘪𝘳𝘰𝘱𝘰
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦  🚀]━⬣
┃ 𝘋𝘪𝘴𝘧𝘳𝘶𝘵𝘢 𝘦𝘭 𝘤𝘰𝘯𝘵𝘦𝘯𝘪𝘥𝘰 
┃ 𝘥𝘦 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴 𝘥𝘦 𝘌𝘉𝘎.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🚀➺ .𝘤𝘰𝘷𝘦𝘳 | 𝙘𝙖𝙣𝙘𝙞𝙤́𝙣 
 `.trim()
    
const vi = ['https://telegra.ph/file/e87e6297f01c3141fafa9.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(Menudo)$/i
handler.register = false
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
