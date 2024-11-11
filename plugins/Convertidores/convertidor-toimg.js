import {webp2png} from '../../lib/webp2mp4.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const notStickerMessage = `*[❗𝑰𝑵𝑭𝑶❗]  𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑨 𝑨𝑳 𝑺𝑻𝑰𝑪𝑲𝑬𝑹 𝑸𝑼𝑬 𝑫𝑬𝑺𝑬𝑬 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑹 𝑬𝑵 𝑰𝑴𝑨𝑮𝑬𝑵 𝑪𝑶𝑵 𝑬𝑳 𝑪𝑶𝑴𝑨𝑵𝑫𝑶. ${usedPrefix + command}*`;
  if (!m.quoted) throw notStickerMessage;
  const q = m.quoted || m;
  const mime = q.mediaType || '';
  if (!/sticker/.test(mime)) throw notStickerMessage;
  const media = await q.download();
  const out = await webp2png(media).catch((_) => null) || Buffer.alloc(0);
  await conn.sendFile(m.chat, out, 'error.png', null, m);
};
handler.help = ['toimg (reply)'];
handler.tags = ['sticker'];
handler.command = ['toimg', 'jpg', 'img'];
export default handler;
