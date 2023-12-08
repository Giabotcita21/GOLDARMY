// TheMystic-Bot-MD@BrunoSobrino - descargas.js
// Creditos de los tags a @darlyn1234 y diseño a @ALBERTO9883
import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `_*< DESCARGAS - SPOTIFY />*_\n\n*[ ℹ️ ] Hace falta el título de la canción de Spotify.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} Good Feeling - Flo Rida_`;
  try {
    const res = await fetch(global.API('ApiEmpire', '/api/spotifysearch?text=' + text))
    const data = await res.json()
    const linkDL = data.spty.resultado[0].link;
    const musics = await fetch(global.API('ApiEmpire', '/api/spotifydl?text=' + linkDL))
    const music = await conn.getFile(musics.url)
    const infos = await fetch(global.API('ApiEmpire', '/api/spotifyinfo?text=' + linkDL))
    
    
    
    let spotifyi = ` _*< DESCARGAS - SPOTIFY />*_\n\n`
        spotifyi += ` ▢ *Título:* ${spty.title}\n\n`
        spotifyi += ` ▢ *Artista:* ${spty.artist}\n\n`
        spotifyi += ` ▢ *Álbum:* ${spty.album}\n\n`                 
        spotifyi += ` ▢ *Publicado:* ${spty.year}\n\n`   
        spotifyi += `*[ ℹ️ ] Se está enviando el audio. espere...*`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '_*< DESCARGAS - SPOTIFY />*_\n\n[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*';
  }
};
handler.command = /^(spotify|music)$/i;
export default handler;
