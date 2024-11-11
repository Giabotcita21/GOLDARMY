import uploadFile from '../../lib/uploadFile.js'
import uploadImage from '../../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '⚠️️ *_Responde a una imagen/video._*'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`𝑷𝑬𝑺𝑶 𝑫𝑬𝑳 𝑨𝑹𝑪𝑯𝑰𝑽𝑶  📁\n${media.length} Byte(s) 

⭐ ${isTele ? '𝑺𝑰𝑵 𝑭𝑬𝑪𝑯𝑨 𝑫𝑬 𝑪𝑨𝑫𝑼𝑪𝑰𝑫𝑨𝑫' : '(Desconocido)'} 
🌎 𝖫𝖨𝖭𝖪:\n${link}
  `)
}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = ['upload', 'tourl']

export default handler
