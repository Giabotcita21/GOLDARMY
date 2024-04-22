/*import fg from 'api-dylux'
import { tiktokdl } from '@bochilteam/scraper'

var handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) throw `*🛑INGRESE EL ENLACE DE TIKTOK PARA DESCARGAR SU VIDEO*\n\n❕ *EJEMPLO*:\n${usedPrefix + command} https://vm.tiktok.com/ZMjbonqPu/`
if (!args[0].match(/tiktok/gi)) throw `*⚠️ 𝚅𝙴𝚁𝙸𝙵𝙸𝚀𝚄𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝚂𝙴𝙰 𝙲𝙾𝚁𝚁𝙴𝚃𝙾*`

//m.react('❗')

const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitt}`, edit: key})
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `${waittt}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitttt}`, edit: key})

try {
let p = await fg.tiktok(args[0])
let te = `𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 𝗚𝗟𝗢𝗕𝗔𝗟 \n\n🪪 *NOMBRE:* ${p.nickname}
👤 *USUARIO:* ${p.unique_id}
💻 *DURACIÓN:* ${p.duration}
📄 *DESCRIPCIÓN:* ${p.description}`
conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
//m.react('⚠️')
} catch {
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) throw '*⚠️ ERROR AL DESACARGAR EL VÍDEO*'
conn.sendFile(m.chat, url, 'fb.mp4', `• 🧃 *Nombre:* ${nickname}\n• 📄 *Descripción:* ${description}`, m)
m.react(done)
} catch {
m.reply(`*⚠️ ERROR AL DESCARGAR EL VÍDEO*`)
}}
    
}
handler.help = ['tiktok']
handler.tags = ['descargas']
handler.command = /^(tiktok|tt|ttdl|tiktokdl|tiktokd)$/i
handler.diamond = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))*/



import fg from 'api-dylux' 
import axios from 'axios'
import cheerio from 'cheerio'
import { tiktok } from "@xct007/frieren-scraper";
let generateWAMessageFromContent = (await import(global.baileys)).default
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `*🛑INGRESE EL ENLACE DE TIKTOK PARA DESCARGAR SU VIDEO*\n\n❕ *EJEMPLO*:\n${usedPrefix + command} https://vm.tiktok.com/ZMjbonqPu/`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}${mid.smsTikTok3}`, fkontak,  m)  
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}${mid.smsTikTok4}`, fkontak,  m) 
try {
const dataF = await tiktok.v1(args[0])
conn.sendFile(m.chat, dataF.play, 'tiktok.mp4', `⛱️ ${mid.user}\n*${nickname}*\n${description ? '\n⛱️ ${mid.smsYT14}\n*${description}*' : ''}\n${wm}`.trim(), m) 
} catch (e1) {
try {
const tTiktok = await tiktokdlF(args[0])
conn.sendFile(m.chat, tTiktok.video, 'tiktok.mp4', `⛱️ ${mid.user}\n*${nickname}*\n${description ? '\n⛱️ ${mid.smsYT14}\n*${description}*' : ''}\n${wm}`.trim(), m) 
} catch (e2) {
try {
let p = await fg.tiktok(args[0]) 
conn.sendFile(m.chat, p.nowm, 'tiktok.mp4', `⛱️ ${mid.user}\n*${nickname}*\n${description ? '\n⛱️ ${mid.smsYT14}\n*${description}*' : ''}\n${wm}`.trim(), m)
} catch (e3) {
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
conn.sendFile(m.chat, url, 'tiktok.mp4', `⛱️ ${mid.user}\n*${nickname}*\n${description ? `\n⛱️ ${mid.smsYT14}\n*${description}*` : ''}\n${wm}`.trim(), m)
handler.limit = 2
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = false
}}}}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
//handler.limit = 2
export default handler

async function tiktokdlF(url) {
if (!/tiktok/.test(url)) return 'Enlace incorrecto';
const gettoken = await axios.get("https://tikdown.org/id");
const $ = cheerio.load(gettoken.data);
const token = $("#download-form > input[type=hidden]:nth-child(2)").attr( "value" );
const param = { url: url, _token: token };
const { data } = await axios.request("https://tikdown.org/getAjax?", { method: "post", data: new URLSearchParams(Object.entries(param)), headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36" }, });
var getdata = cheerio.load(data.html);
if (data.status) {
return { status: true, thumbnail: getdata("img").attr("src"), video: getdata("div.download-links > div:nth-child(1) > a").attr("href"), audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"), }} else
return { status: false }}
