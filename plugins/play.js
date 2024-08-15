let handler = async(m, { user, isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner || user)) {
global.dfail('Admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝗔𝗩𝗜𝗦𝗢!! ${pesan}`
let teks = `${oi}\n`
teks += `𝐀𝐏𝐀𝐑𝐓𝐈𝐑 𝐃𝐄𝐋 𝐃𝐈𝐀 17 𝗗𝗘 𝗔𝗚𝗢𝗦𝗧𝗢 𝐄𝐋 𝐒𝐓𝐀𝐅𝐅 𝐃𝐄 𝐄𝐋𝐈𝐓𝐄 𝐁𝐎𝐓 𝐆𝐋𝐎𝐁𝐀𝐋 𝐑𝐄𝐀𝐋𝐈𝐙𝐀𝐑𝐀́ 𝐔𝐍𝐀 𝐀𝐂𝐓𝐔𝐀𝐋𝐈𝐙𝐀𝐂𝐈𝐎́𝐍 𝐃𝐄 𝐂𝐎́𝐃𝐈𝐆𝐎 (𝐉𝐒).
𝐏𝐎𝐑 𝐋𝐎 𝐓𝐀𝐍𝐓𝐎 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎; 
.𝐏𝐋𝐀𝐘 
.𝐋𝐎𝐆𝐎𝐒 

𝐘 𝐁𝐀𝐒𝐄𝐒 𝐄𝐒𝐓𝐀𝐍 𝐒𝐈𝐍 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐑.

𝐄𝐒𝐏𝐄𝐑𝐀𝐌𝐎𝐒 𝐒𝐔 𝐏𝐀𝐂𝐈𝐄𝐍𝐂𝐈𝐀.

𝐀𝐓𝐓: 𝐒𝐓𝐀𝐅𝐅 𝐄𝐁𝐆`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(play)$/i
export default handler
