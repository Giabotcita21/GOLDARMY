/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

let handler = async (m, {conn}) => {
  if (!m.quoted) throw `*[❗𝑰𝑵𝑭𝑶 ❗] 𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑨 𝑨 𝑼𝑵 𝑨𝑼𝑫𝑰𝑶 𝑸𝑼𝑬 𝑫𝑬𝑺𝑬𝑬 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑹 𝑬𝑵 𝑮𝑰𝑭 𝑪𝑶𝑵 𝑨𝑼𝑫𝑰𝑶.*`;
  const q = m.quoted || m;
  let mime = (q.msg || q).mimetype || "";
  if (!/(mp4)/.test(mime)) throw `*[❗] 𝑬𝑳 𝑻𝑰𝑷𝑶 𝑫𝑬 𝑨𝑹𝑪𝑯𝑰𝑽𝑶 ${mime} 𝑵𝑶 𝑬𝑺 𝑪𝑶𝑹𝑹𝑬𝑪𝑻𝑶, 𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑨 𝑨 𝑼𝑵 𝑽𝑰𝑫𝑬𝑶 𝑸𝑼𝑬 𝑫𝑬𝑺𝑬𝑬 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑹 𝑬𝑵 𝑮𝑰𝑭 𝑪𝑶𝑵 𝑨𝑼𝑫𝑰𝑶.*`;
  m.reply(global.wait);
  let media = await q.download();
  conn.sendMessage(
    m.chat,
    {video: media, gifPlayback: true, caption: "*𝑨𝑸𝑼𝑰 𝑬𝑺𝑻𝑨 𝑺𝑼 𝑮𝑰𝑭 𝑪𝑶𝑵 𝑨𝑼𝑫𝑰𝑶, 𝑨𝑳 𝑴𝑶𝑴𝑬𝑵𝑻𝑶 𝑫𝑬 𝑨𝑩𝑹𝑰𝑹𝑳𝑶 𝑺𝑬 𝑹𝑬𝑷𝑹𝑶𝑫𝑼𝑪𝑬 𝑪𝑶𝑵 𝑨𝑼𝑫𝑰𝑶.*"},
    {quoted: m}
  );
};
handler.command = ["togif"];
export default handler;
