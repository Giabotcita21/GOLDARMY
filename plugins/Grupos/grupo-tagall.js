
let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
   
throw false
}
let pesan = args.join` `
let oi = `𝘼𝙉𝙊𝙏𝙀𝙉𝙎𝙀 𝘾𝘼𝙍𝘼𝙅𝙊𝙈𝙄𝙀𝙍𝘿𝘼 ${lenguajeGB['smsAddB5']()} ${pesan}`
let teks = `*╭━* ${lenguajeGB['smstagaa']()} \n\n${oi}\n`
teks += `𝙇𝘼𝙎 𝙋𝙀𝙍𝙍𝘼𝙎: *${participants.length}*\n\n`
for (let mem of participants) {
   
teks += `┃🥷🏼 @${mem.id.split('@')[0]}\n`}
teks += `\n` 
teks += `*╰━* @𝙜𝙤𝙡𝙙𝙖𝙧𝙢𝙮.𝙛𝙚𝙢
▌│█║▌║▌║║▌║▌║▌║█`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
