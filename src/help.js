const help = (prefix, sender, getLevel,namebot, user, apoia1,  blocked, date, time,nameuser,NomerOwner,id,face,insta ) => {

if ( getLevel === undefined){getLevel ='menos que 0'}
if (nameuser === "Desconhecido.") {nameuser = sender.split('@')[0]}
if (id === "0000AAAA") {
id = "Não possui id"
}
        return `
  ╔═══❖•ೋ° ${namebot} °ೋ•❖═══╗
 ◆➤ᴏʟᴀ́, ᴛᴜᴅᴏ ʙᴇᴍ?

Sᴏᴜ ᴏ ${namebot}, ᴇ ᴘᴏssᴏ sᴇʀ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ ɴᴇsᴛᴀs ᴘʟᴀᴛᴀғᴏʀᴍᴀs.

➤ ɪɴsᴛᴀɢʀᴀᴍ: ${insta}
➤ ғᴀᴄᴇʙᴏᴏᴋ: ${face}
 
─────⊱◈◈◈⊰─────
✅||•ᴜsᴜᴀ́ʀɪᴏs:  ${user.length}
❌||•ᴜsᴜᴀ́ʀɪᴏs ʙʟᴏǫᴜᴇᴀᴅᴏs: ${blocked.length}
💥||•ᴀᴘᴏɪᴀᴅᴏʀᴇs: ${apoia1}
◆➤ Tᴇʟᴇғᴏɴᴇ ᴘᴀʀᴀ ᴄᴏɴᴛᴀᴛᴏ: wa.me/${NomerOwner.split('@')[0]}]
◆➤ Meu id: ${id}
─────⊱◈◈◈⊰─────
ᴏs ᴘʀɪɴᴄɪᴘᴀɪs ᴄᴏᴍᴀɴᴅᴏs sᴇᴍ ${prefix}
↳ ɢʀᴜᴘᴏ ᴅᴏ ʙᴏᴛ
↳ ᴏ ʙᴏᴛ ᴛᴀ ᴏɴ
╔────────────
║ 🤖•|+ᴍᴇɴᴜ|•🤖
║ ↳ ${prefix}ᴍᴇɴᴜᴀᴅᴍɪɴ 
║↝ ᴍᴇɴᴜ sᴏᴍᴇɴᴛᴇ ᴘᴀʀᴀ ᴀᴅᴍs
║ ↳ ${prefix}ᴘᴇʀғɪʟᴍᴇɴᴜ  
║↝ sᴇᴜ ᴘᴇʀғɪʟ 
║ ↳ ${prefix}ɴsғᴡᴍᴇɴᴜ  
║↝ ᴍᴇɴᴜ +18 ᴀɴᴏs
║ ↳ ${prefix}ʟᴇᴠᴇʟᴄᴏᴍ  
║↝ ɪɴғᴏʀᴍᴀᴄ̧ᴏ̃ᴇs sᴏʙʀᴇ ʟᴇᴠᴇʟ 
║  ↳ ${prefix}ᴍᴇɴᴜᴊᴏɢᴏs  
║↝ ᴍᴇɴᴜ ᴅᴇ ᴊᴏɢᴏs 
║  ↳ ${prefix}ᴍᴇɴᴜʙᴏɴᴅᴇ
║↝ᴍᴇɴᴜᴏᴡɴᴇʀ
╚───────────
─────⊱◈◈◈⊰─────
⚠️ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍ ${prefix} ɴᴏ ɪɴɪ́ᴄɪᴏ!⚠️
─────⊱◈◈◈⊰─────
╔────────────
║ ⚒️•|ғᴇʀʀᴀᴍᴇɴᴛᴀs|•⚒️
║  ↳${prefix}sᴛɪᴄᴋᴇʀ  | ¹⁰xᴘ |
║↝ᴠᴏᴄᴇ̂ ᴛᴀᴍʙᴇ́ᴍ ᴘᴏᴅᴇ ᴍᴀʀᴄᴀʀ ᴜᴍᴀ ғᴏᴛᴏ/ɢɪғ
║ ↳${prefix}Depositar | ⁰xᴘ |
║↝Vocẽ doa seu xp para outra pessoa
║  ↳${prefix}ᴍᴇᴜɪᴅ  | ⁷⁰⁰xᴘ |
║↝ᴄᴀsᴏ ᴠᴏᴄᴇ ɴᴀ̃ᴏ sᴀɪʙᴀ sᴇᴜ ɪᴅ ᴜsᴇ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ sᴀʙᴇʀ
║  ↳${prefix}ᴏᴡɴᴇʀ  | ¹²xᴘ |
║↝ ᴇᴅɪᴛᴏʀ
║  ↳${prefix}ʙʟᴏᴄᴋʟɪsᴛ  | ⁰xᴘ |
║↝ ʟɪsᴛᴀ ᴅᴇ ᴄᴏɴᴛᴀᴛᴏs ʙʟᴏǫᴜᴇᴀᴅᴏs
║  ↳${prefix}ᴡᴀ.ᴍᴇ  | ⁴⁰⁰xᴘ |
║↝ᴄʀɪᴀ ʟɪɴᴋ ᴘᴀʀᴀ sᴇᴜ ᴡʜᴀᴛsᴀᴘᴘ 
║  ↳${prefix}ʙᴜɢ  | ¹⁰⁰xᴘ |
║↝ ᴅɪɢɪᴛᴇ ɪɴғᴏʀᴍᴀᴄ̧ᴀ̃ᴏ sᴏʙʀᴇ ᴏ ʙᴜɢ
║  ↳${prefix}ʟᴀɴɢ | 60xᴘ |
║↝  ʟɪɴɢᴜᴀɢᴇᴍ ᴅɪsᴘᴏɴɪ́ᴠᴇʟ ᴘᴀʀᴀ  tts
║  ↳${prefix}Encurta | 60xᴘ |
║↝  encurta seu link
║  ↳${prefix}listadmin | 20xᴘ |
║↝  chama todos os adm do grupo
║  ↳${prefix}daftar | 0xᴘ |
║↝  faz seu registro no bot 
║  ↳${prefix}ping | 60xᴘ |
║↝  informa a velocidade do bot
║  ↳${prefix}ʟevel | 60xᴘ |
║↝  mostra seu level e a quantidade de mensagen que tenha enviado
║  ↳${prefix}contar | 60xᴘ |
║↝  conta quantos carcters tem na menssagem
║  ↳${prefix}imc | 80xᴘ |
║↝  calcula seu indice de massa corporal
║  ↳${prefix}gpid | 60xᴘ |
║↝  mostra o id do grupo
║  ↳${prefix}meuid | 60xᴘ |
║↝  mostra seu id comum no bot
║  ↳${prefix}travei | 60xᴘ |
║↝  o bot fecha o grupo se for adm e avisa os adm 
╚────────────

─────⊱◈◈◈⊰─────
╔────────────
║  📌•|Dirversão|•📌
║  ↳  ${prefix}dog  | 60xᴘ |
║↝ (Manda foto do cachorro!)
║  ↳  ${prefix}bpink | 80xᴘ |
║↝ (Manda foto com fundo roxo e a frese que escreveu!)
║  ↳  ${prefix}frase | ²⁰⁰xᴘ |
║↝ (Esperimente saber o quão profundo estou pensado)
║  ↳  ${prefix}gay @user | ²⁰⁰xᴘ |
║↝ (Veja a % de gay que seu amigo tem)
║  ↳  ${prefix}trans  | ²⁰⁰xᴘ |
║↝ (Sera que ele é trans ?)
║  ↳  ${prefix}burro  | ²⁰⁰xᴘ |
║↝ (eita confirma a burrice do seu amigo)
║  ↳  ${prefix}lolipo  | ²⁰⁰xᴘ |
║↝ (uiui uma loli? )
║  ↳  ${prefix}travequin  | ²⁰⁰xᴘ |
║↝ (Eita que alguem se esconde, veja o quanto? )
║  ↳  ${prefix}yaoipo| ²⁰⁰xᴘ |
║↝ (Olha Alguem ver yaoi e literalmente posso dizer o quanto ele é )
║  ↳  ${prefix}inteligençia | ²⁰⁰xᴘ |
║↝ (Será que ele realmente é o espetalhão?)
║  ↳  ${prefix}gado  | ²⁰⁰xᴘ |
║↝ (olha gosta de gadia saiba o quanto)
║  ↳  ${prefix}nivelgay | ²⁰⁰xᴘ |
║↝ (Será que nesse grupo só tem gay ? vamos descobrir ?)
║  ↳  ${prefix}nivelgado  | ²⁰⁰xᴘ |
║↝ (Eita que nesse grupo todo mundo gadeia e é gadeado )
║  ↳  ${prefix}niveloli  | ²⁰⁰xᴘ |
║↝ (será que todos aqui são loli?)
╚────────────
─────⊱◈◈◈⊰─────
╔────────────
║🔖 ᴅᴏᴡɴʟᴏᴀᴅs 🔖
║  ↳${prefix}ytmp3  | 950xᴘ |
╚────────────
─────⊱◈◈◈⊰─────
╔────────────
║ 🔊•|gravar|•🔊
║  ↳${prefix}ᴛᴛs  | 60xᴘ |
║↝ʟᴇ̂ ɴᴀ ᴠᴏᴢ ᴅᴏ ɢᴏᴏɢʟᴇ ᴏ ǫᴜᴇ  ᴠᴏᴄᴇ  ᴅɪɢɪᴛᴀ
╚────────────
─────⊱◈◈◈⊰─────
╔────────────
║ •|converter|•
║  ↳${prefix}ᴛᴏɪᴍɢ  | 200xᴘ |
║↝ᴄᴏɴᴠᴇʀᴛᴇ ғɪɢᴜʀɪɴʜᴀ ᴇᴍ ɪᴍᴀɢᴇᴍ
║  ↳${prefix}ᴛᴏᴍᴘ3  | 200xᴘ |
║↝ᴄᴏᴍᴀɴᴅᴏ ᴜsᴀᴅᴏ ᴘᴀʀᴀ ʙᴀɪxᴀʀ ᴍᴜ́sɪᴄᴀ
╚────────────
─────⊱◈◈◈⊰─────
╔────────────
║  🎵•|ᴍᴜ́sɪᴄᴀ|•🎵
║  ↳${prefix}ᴘʟᴀʏ  | 100xᴘ |
║↝ (sᴇʟᴇᴄɪᴏɴᴇ ᴏ ɴᴏᴍᴇ ᴅᴀ ᴍᴜ́sɪᴄᴀ Ex: ${prefix}ᴘʟᴀʏ sᴏᴍᴇᴏɴᴇ ʏᴏᴜ ʟᴏᴠᴇᴅ)
║  ↳${prefix}nightcore | ⁵⁰xᴘ |
║  ↳${prefix}slow | 20xᴘ |
║  ↳${prefix}esquilo | 20xᴘ |
║  ↳${prefix}gemuk | 20xᴘ |
║  ↳${prefix}fast | 20xᴘ |
║  ↳${prefix}bass | 20xᴘ |
║  ↳${prefix}estourar | 20xᴘ |
╚────────────
─────⊱◈◈◈⊰─────
╔────────────
║🔖 Grupo 🔖
║  ↳${prefix}ᴏᴡɴᴇʀɢʀᴏᴜᴘ  | 300xᴘ |
║↝ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇᴍᴏɴsᴛʀᴀ ǫᴜᴇᴍ ᴇ́ ᴏ ᴄʀɪᴀᴅᴏʀ ᴅᴏ ɢʀᴜᴘᴏ
╚────────────
─────⊱◈◈◈⊰─────
╔────────────
║  📌•|ᴀɴɪᴍᴇs|•📌
║  ↳  ${prefix}ᴡᴀɪᴛ  | ²⁰⁰xᴘ |
║↝ (ᴄᴏᴍᴀɴᴅᴏ ᴜsᴀᴅᴏ ᴘᴀʀᴀ ᴇɴᴄᴏɴᴛʀᴀʀ ᴀɴɪᴍᴇ ᴘᴇʟᴀ ғᴏᴛᴏ!)
╚────────────
─────⊱◈◈◈⊰─────
╔────────────
║   ⪔ 🤖ᴄᴏᴍᴏ ᴍᴇ ᴀᴅɪᴄɪᴏɴᴀʀ ᴀᴏ sᴇᴜ ɢʀᴜᴘᴏ? 🤖 ⪔ 
║ ↳${prefix}addgp  | 100 xᴘ |
║ ↝Manda o link pro bot entrar 
║ ↳ ᴅɪɢɪᴛᴇ ${prefix}ʀᴇɢʀᴀs_ᴀᴅᴅ       | ⁰xᴘ |
║ ↳ ᴅɪɢɪᴛᴇ ${prefix}ʀᴇɢʀᴀs_ʙᴏɴᴅᴇ  | ⁰xᴘ |
╚────────────
─────⊱◈◈◈⊰─────
╔────────────
║⏳||•ᴘᴀʀᴀ ᴇɴᴛʀᴀʀ ᴇᴍ ɴᴏssᴏs ɢʀᴜᴘᴏ ᴏғɪᴄɪᴀɪs ᴅɪɢɪᴛᴇ ${prefix}ɢᴘᴏғ
║🖥️||•ᴀᴄᴇssᴇ ɴᴏssᴏ sɪᴛᴇ: www.sites.google.com/view/albion-desenvolvedor
╚───────────
─────⊱◈◈◈⊰─────
╔────────────
║[ ɴᴜ́ᴍᴇʀᴏ: wa.me/${NomerOwner.split('@')[0]}]
║[${time}] 
╚───────────
─────⊱◈◈◈⊰─────
───────────────


  `
}

exports.help = help
