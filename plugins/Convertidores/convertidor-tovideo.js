import {webp2mp4} from '../../lib/webp2mp4.js';
import {ffmpeg} from '../../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*[❗𝑰𝑵𝑭𝑶❗] 𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑨 𝑨 𝑼𝑵 𝑺𝑻𝑰𝑪𝑲𝑬𝑹 𝑸𝑼𝑬 𝑫𝑬𝑺𝑬𝑬 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑹 𝑬𝑵 𝑽𝑰𝑫𝑬𝑶 𝑪𝑶𝑵 𝑬𝑳 𝑪𝑶𝑴𝑨𝑵𝑫𝑶. ${usedPrefix + command}*`;
  const mime = m.quoted.mimetype || '';
  if (!/webp/.test(mime)) throw `*[❗𝑰𝑵𝑭𝑶❗] 𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑨 𝑨 𝑼𝑵 𝑺𝑻𝑰𝑪𝑲𝑬𝑹 𝑸𝑼𝑬 𝑫𝑬𝑺𝑬𝑬 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑹 𝑬𝑵 𝑽𝑰𝑫𝑬𝑶 𝑪𝑶𝑵 𝑬𝑳 𝑪𝑶𝑴𝑨𝑵𝑫𝑶. ${usedPrefix + command}*`;
  const media = await m.quoted.download();
  let out = Buffer.alloc(0);
  if (/webp/.test(mime)) {
    out = await webp2mp4(media);
  } else if (/audio/.test(mime)) {
    out = await ffmpeg(media, [
      '-filter_complex', 'color',
      '-pix_fmt', 'yuv420p',
      '-crf', '51',
      '-c:a', 'copy',
      '-shortest',
    ], 'mp3', 'mp4');
  }
  await conn.sendFile(m.chat, out, 'error.mp4', '*DONE*', m, 0, {thumbnail: out});
};
handler.help = ['tovideo'];
handler.tags = ['sticker'];
handler.command = ['tovideo', 'tomp4', 'mp4', 'togif'];
export default handler;
