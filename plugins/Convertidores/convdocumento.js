let handler = async (m, { conn, text, usedPrefix, command }) => {
    const q = m.quoted || m

    let mime = (q.msg || q).mimetype || ''

    if (!m.quoted)
        throw `𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒆𝒍 𝑽𝒊𝒅𝒆𝒐 𝒐 𝑨𝒖𝒅𝒊𝒐 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒂 𝒅𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒐..`

    if (!text) throw `𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒄𝒐𝒍𝒐𝒄𝒂𝒓 𝒂𝒍 𝒅𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒐.`
    if (!/audio|video/.test(mime)) throw `𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂𝒍 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒂𝒖𝒅𝒊𝒐 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒂 𝒅𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒐.`

    let media = await q.download?.()

    if (!media) throw '𝑬𝒓𝒓𝒐𝒓 𝒂𝒍 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 𝒎𝒆𝒅𝒊𝒐.'

    m.reply(`${wait}`)

    if (/video/.test(mime)) {

        return conn.sendMessage(m.chat, { document: media, mimetype: 'video/mp4', fileName: `${text}.mp4` }, { quoted: m })
    } else if (/audio/.test(mime)) {
        return conn.sendMessage(m.chat, { document: media, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: m })
    }
}

handler.help = ['convdocumento <audio/video>']
handler.tags = ['tools']
handler.command = ['documento']

export default handler
