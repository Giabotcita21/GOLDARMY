import {toDataURL} from 'qrcode';
const handler = async (m, {text, conn}) => {
  if (!text) throw `*[❗𝑰𝑵𝑭𝑶❗] 𝑰𝑵𝑮𝑹𝑬𝑺𝑬 𝑬𝑳 𝑻𝑬𝑿𝑻𝑶 𝑸𝑼𝑬 𝑸𝑼𝑰𝑬𝑹𝑨 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑹 𝑬𝑵 𝑪𝑶𝑫𝑰𝑮𝑶 𝑸𝑹*`;
  conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), {scale: 8}), 'qrcode.png', '¯\\_(ツ)_/¯', m);
};
handler.help = ['', 'code'].map((v) => 'qr' + v + ' <teks>');
handler.tags = ['tools'];
handler.command = /^to(qr)?$/i;
export default handler;
