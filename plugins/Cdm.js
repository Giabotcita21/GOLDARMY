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
★ 𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍 ★
┊➺ 👤 .𝘩𝘰𝘳𝘢𝘳𝘪𝘰
┊➺ 👤 .𝘴𝘪𝘮𝘪 𝘵𝘦𝘹𝘵𝘰
┊➺ 👤 .𝘣𝘰𝘵 𝘵𝘦𝘹𝘵𝘰
┊➺ 👤 .𝘪𝘢 𝘵𝘦𝘹𝘵𝘰
┊➺ 👤 .𝘪𝘢𝘷𝘰𝘻 𝘵𝘦𝘹𝘵𝘰
┊➺ 👤 .𝘺𝘵𝘴 𝘵𝘦𝘹𝘵𝘰
┊➺ 👤 .𝘨𝘰𝘰𝘨𝘭𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 👤 .𝘸𝘪𝘬𝘪𝘱𝘦𝘥𝘪𝘢 𝘵𝘦𝘹𝘵𝘰
┊➺ 👤 .𝘵𝘳𝘢𝘥𝘶𝘤𝘪𝘳 𝘵𝘦𝘹𝘵𝘰
┊➺ 👤 .𝘤𝘭𝘪𝘮𝘢 𝘵𝘶𝘤𝘪𝘶𝘥𝘢𝘥

★ 𝘾𝙍𝙀𝘼𝙍 𝙇𝙊𝙂𝙊𝙎 ★
┊➺ 🔰 .𝘭𝘰𝘨𝘰
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘤𝘰𝘳𝘢𝘻𝘰𝘯
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘤𝘩𝘳𝘪𝘴𝘵𝘮𝘢𝘴
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘱𝘢𝘳𝘦𝘫𝘢
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘨𝘭𝘪𝘵𝘤𝘩
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘴𝘢𝘥
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘨𝘢𝘮𝘪𝘯𝘨
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘴𝘰𝘭𝘪𝘵𝘢𝘳𝘪𝘰
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘥𝘳𝘢𝘨𝘰𝘯𝘣𝘢𝘭𝘭
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘯𝘦𝘰𝘯
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘨𝘢𝘵𝘪𝘵𝘰
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘤𝘩𝘪𝘤𝘢𝘨𝘢𝘮𝘦𝘳
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘢𝘳𝘮𝘺
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘯𝘢𝘳𝘶𝘵𝘰
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘧𝘶𝘵𝘶𝘳𝘪𝘴𝘵𝘢
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘯𝘶𝘣𝘦
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘢𝘯𝘨𝘦𝘭
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘮𝘶𝘳𝘤𝘪𝘦𝘭𝘢𝘨𝘰
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘤𝘪𝘦𝘭𝘰
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘨𝘳𝘢𝘧𝘧𝘪𝘵𝘪3𝘥
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘮𝘢𝘵𝘳𝘪𝘹
┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘩𝘰𝘳𝘳𝘰𝘳

★ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 ★
┊➺ 🔎 .𝘪𝘮𝘢𝘨𝘦𝘯 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔎 .𝘧𝘢𝘤𝘦𝘣𝘰𝘰𝘬 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 🔎 .𝘮𝘦𝘥𝘪𝘢𝘧𝘪𝘳𝘦 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 🔎 .𝘱𝘭𝘢𝘺 𝘯𝘰𝘮𝘣𝘳𝘦 𝘰 𝘦𝘯𝘭𝘢𝘤𝘦

★ 𝙂𝙍𝙐𝙋𝙊 ~ 𝘼𝘿𝙈𝙄𝙉𝙎 ★
┊➺ 💻 .𝘥𝘦𝘭
┊➺ 💻 .𝘯𝘰𝘵𝘪𝘧𝘪𝘤𝘢𝘳 𝘵𝘦𝘹𝘵𝘰
┊➺ 💻 .𝘴𝘢𝘤𝘢𝘳 @𝘵𝘢𝘨
┊➺ 💻 .𝘪𝘯𝘷𝘪𝘵𝘢𝘳 𝘯𝘶́𝘮𝘦𝘳𝘰
┊➺ 💻 .𝘥𝘢𝘳𝘢𝘥𝘮𝘪𝘯 @𝘵𝘢𝘨
┊➺ 💻 .𝘲𝘶𝘪𝘵𝘢𝘳𝘢𝘥𝘮𝘪𝘯 @𝘵𝘢𝘨
┊➺ 💻 .𝘱𝘳𝘰𝘩𝘪𝘣𝘪𝘳 @𝘵𝘢𝘨
┊➺ 💻 .𝘥𝘦𝘴𝘱𝘳𝘰𝘩𝘪𝘣𝘪𝘳 @𝘵𝘢𝘨
┊➺ 💻 .𝘦𝘥𝘪𝘵𝘢𝘳𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 💻 .𝘦𝘥𝘪𝘵𝘢𝘳𝘣𝘺𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 💻 .𝘤𝘢𝘮𝘣𝘪𝘢𝘳𝘥𝘦𝘴𝘤 𝘵𝘦𝘹𝘵𝘰
┊➺ 💻 .𝘤𝘢𝘮𝘣𝘪𝘢𝘳𝘯𝘰𝘮𝘣𝘳𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 💻 .𝘤𝘢𝘮𝘣𝘪𝘢𝘳𝘱𝘱 𝘪𝘮𝘢𝘨𝘦𝘯
┊➺ 💻 .𝘯𝘶𝘦𝘷𝘰𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💻 .𝘨𝘳𝘶𝘱𝘰 𝘢𝘣𝘳𝘪𝘳
┊➺ 💻 .𝘨𝘳𝘶𝘱𝘰 𝘤𝘦𝘳𝘳𝘢𝘳
┊➺ 💻 .𝘪𝘯𝘷𝘰𝘤𝘢𝘳
${readMore}

★ 𝙈𝙄𝙉𝙄𝙅𝙐𝙀𝙂𝙊𝙎 ★
┊➺ 🎲 .𝘬𝘪𝘴𝘴 @𝘵𝘢𝘨
┊➺ 🎲 .𝘮𝘪𝘮𝘰𝘴 @𝘵𝘢𝘨
┊➺ 🎲 .𝘣𝘰𝘧𝘦𝘵𝘢𝘥𝘢 @𝘵𝘢𝘨
┊➺ 🎲 .𝘱𝘪𝘳𝘰𝘱𝘰 @𝘵𝘢𝘨
┊➺ 🎲 .𝘢𝘮𝘰𝘳 @𝘵𝘢𝘨 𝘰 𝘵𝘦𝘹𝘵𝘰
┊➺ 🎲 .𝘱𝘰𝘳𝘤𝘦𝘯𝘵𝘢𝘫𝘦𝘢𝘮𝘰𝘳 @𝘵𝘢𝘨
┊➺ 🎲 .𝘧𝘰𝘭𝘭𝘢𝘳 @𝘵𝘢𝘨
┊➺ 🎲 .𝘧𝘰𝘳𝘮𝘢𝘳𝘱𝘢𝘳𝘦𝘫𝘢
┊➺ 🎲 .𝘷𝘦𝘳𝘥𝘢𝘥
┊➺ 🎲 .𝘳𝘦𝘵𝘰
┊➺ 🎲 .𝘴𝘰𝘱𝘢
┊➺ 🎲 .𝘴𝘶𝘦𝘳𝘵𝘦 𝘤𝘢𝘳𝘢|𝘤𝘳𝘶𝘻
┊➺ 🎲 .𝘨𝘢𝘺 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘨𝘢𝘺𝟤 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘪𝘯𝘴𝘢𝘯𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘴𝘢𝘪𝘤𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘮𝘢𝘯𝘤𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘮𝘢𝘯𝘤𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘱𝘢𝘫𝘦𝘳𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘱𝘢𝘫𝘦𝘳𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘱𝘶𝘵𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘱𝘶𝘵𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘳𝘢𝘵𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
┊➺ 🎲 .𝘵𝘰𝘱 𝘵𝘦𝘹𝘵𝘰
┊➺ 🎲 .𝘵𝘰𝘱𝘨𝘢𝘺𝘴
┊➺ 🎲 .𝘵𝘰𝘱𝘰𝘵𝘢𝘬𝘶𝘴
┊➺ 🎲 .𝘵𝘰𝘱𝘱𝘢𝘫𝘦𝘳@𝘴
┊➺ 🎲 .𝘵𝘰𝘱𝘱𝘶𝘵@𝘴
┊➺ 🎲 .𝘵𝘰𝘱𝘪𝘯𝘵𝘦𝘨𝘳𝘢𝘯𝘵𝘦𝘴

★ 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) ★
┊➺ 🔐 .𝘢𝘥𝘥𝘱𝘳𝘦𝘮𝘪𝘶𝘮
┊➺ 🔐 .𝘥𝘦𝘭𝘱𝘳𝘦𝘮𝘪𝘶𝘮
┊➺ 🔐 .𝘭𝘪𝘴𝘵𝘢𝘱𝘳𝘦𝘮𝘪𝘶𝘮
┊➺ 🔐 .𝘳𝘦𝘴𝘱𝘢𝘭𝘥𝘰
┊➺ 🔐 .𝘣𝘢𝘯𝘶𝘴𝘶𝘢𝘳𝘪𝘰 @𝘵𝘢𝘨
┊➺ 🔐 .𝘥𝘦𝘴𝘣𝘢𝘯𝘶𝘴𝘶𝘢𝘳𝘪𝘰 @𝘵𝘢𝘨
┊➺ 🔐 .𝘵𝘦𝘯𝘦𝘳𝘱𝘰𝘥𝘦𝘳
┊➺ 🔐 .𝘯𝘶𝘦𝘷𝘢𝘣𝘪𝘰𝘣𝘰𝘵 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘯𝘶𝘦𝘷𝘰𝘯𝘰𝘮𝘣𝘳𝘦𝘣𝘰𝘵 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘯𝘶𝘦𝘷𝘢𝘧𝘰𝘵𝘰𝘣𝘰𝘵 𝘪𝘮𝘢𝘨𝘦𝘯
┊➺ 🔐 .𝘢𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘳
┊➺ 🔐 .𝘣𝘢𝘯𝘦𝘢𝘳𝘤𝘩𝘢𝘵
┊➺ 🔐 .𝘥𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘳𝘤𝘩𝘢𝘵
┊➺ 🔐 .𝘴𝘢𝘭𝘪𝘳
┊➺ 🔐 .𝘣𝘭𝘰𝘲𝘶𝘦𝘢𝘳 @𝘵𝘢𝘨
┊➺ 🔐 .𝘥𝘦𝘴𝘣𝘭𝘰𝘲𝘶𝘦𝘢𝘳 @𝘵𝘢𝘨
┊➺ 🔐 .𝘰𝘣𝘵𝘦𝘯𝘦𝘳𝘤𝘰𝘥𝘪𝘨𝘰 𝘯𝘰𝘮𝘣𝘳𝘦 𝘥𝘦 𝘢𝘳𝘤𝘩𝘪𝘷𝘰
┊➺ 🔐 .𝘣𝘰𝘳𝘳𝘢𝘳𝘥𝘢𝘵𝘰𝘴 𝘯𝘶́𝘮𝘦𝘳𝘰
┊➺ 🔐 .𝘶𝘯𝘦𝘵𝘦 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 🔐 .𝘣𝘤𝘴𝘶𝘣𝘣𝘰𝘵 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘣𝘤𝘤 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘣𝘤𝘨𝘤 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘣𝘤 𝘵𝘦𝘹𝘵𝘰
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

 `.trim()
    
const vi = ['https://telegra.ph/file/23207af77c896e20d4fb4.mp4']

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

handler.command = /^(menu)$/i
handler.register = false
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
