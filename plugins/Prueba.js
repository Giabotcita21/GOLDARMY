
let war = '2'
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : true
        else who = m.chat
        if (!who) return
        if (!(who in global.db.data.users)) return
        let warn = global.db.data.users[who].warn
let user = global.db.data.users[who]
        if (warn < war) {
            global.db.data.users[who].warn += 1
m.reply(`advertido 1/2${user.warn}`)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ eliminando `)
            await time(1000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = /^(adv)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
}
