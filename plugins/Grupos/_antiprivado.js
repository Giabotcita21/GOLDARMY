export async function before(m, {isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes("PIEDRA") || m.text.includes("PAPEL") || m.text.includes("TIJERA")) return !0;
  let bot = global.db.data.settings[this.user.jid] || {};

  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(
      `»𝗡𝗢 𝗘𝗦𝗧𝗔 𝗣𝗘𝗥𝗠𝗜𝗧𝗜𝗗𝗢 𝗘𝗦𝗖𝗥𝗜𝗕𝗜𝗥𝗟𝗘 𝗔 𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧, 𝗦𝗘𝗥𝗔𝗦 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢.
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
» 𝗦𝗜 𝗡𝗘𝗖𝗘𝗦𝗜𝗧𝗔𝗦 𝗨𝗡 𝗕𝗢𝗧 𝗢 𝗧𝗜𝗘𝗡𝗘𝗦 𝗔𝗟𝗚𝗨́𝗡 𝗜𝗡𝗖𝗢𝗡𝗩𝗘𝗡𝗜𝗘𝗡𝗧𝗘 𝗖𝗢𝗡𝗧𝗔́𝗖𝗧𝗔𝗧𝗘 𝗖𝗢𝗡 𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥.
𝗬 𝗡𝗢 𝗘𝗦 𝗚𝗥𝗔𝗧𝗜𝗦, 𝗗𝗘𝗕𝗘𝗦 𝗖𝗢𝗠𝗣𝗥𝗔𝗥.
» Wa.me/593993370003`,
      false,
      {mentions: [m.sender]}
    );
    await this.updateBlockStatus(m.chat, "block");
  }
  return !1;
}
