import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙋𝘼𝙍𝘼 𝙌𝙐𝙀 𝙀𝙇 𝙏𝙀𝙓𝙏𝙊 𝙎𝙀 𝘾𝙊𝙉𝙑𝙄𝙀𝙍𝙏𝘼 𝙀𝙉 𝙎𝙏𝙄𝘾𝙆𝙀𝙍\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command}* Nuevo Sticker\n\n𝙒𝙍𝙄𝙏𝙀 𝙎𝙊 𝙏𝙃𝙀 𝙏𝙀𝙓𝙏 𝘽𝙀𝘾𝙊𝙈𝙀𝙎 𝘼 𝙎𝙏𝙄𝘾𝙆𝙀𝙍\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command}* New Sticker*`
let teks = encodeURI(text)

if (command == 'attp') {
let stiker = await sticker(null,`https://api.erdwpe.com/api/maker/attp?text=${teks}`,global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })}

if (command == 'ttp') {
let stiker = await sticker(null,`https://api.erdwpe.com/api/maker/ttp?text=${teks}`,global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })}
}
handler.command = handler.help = ['ttp', 'attp']
handler.tags = ['sticker']
export default handler
