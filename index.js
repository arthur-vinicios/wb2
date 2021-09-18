
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

/******BEGIN OF FILE INPUT******/
const axio = require('axios')
const { color, bgcolor } = require('./lib/color')
const { lang } = require('./src/lang')
const { menuadmin } = require('./src/menuadmin')
const { nsfwmenu } = require('./src/nsfwmenu')
const { perfilmenu } = require('./src/perfilmenu')
const { regras_add } = require('./src/regras_add')
const { perfil } = require('./src/perfil')
const { ms } = require('./src/ms')
const { levelcom } = require('./src/levelcom')
const { menujogos } = require('./src/menujogos')
const { regras_bonde } = require('./src/regras_bonde')
const { gpof } = require('./src/gpof')
const { negara } = require('./src/kodenegara')

const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
/******END OF FILE INPUT******/

/******BEGIN OF NPM PACKAGE INPUT******/
const fs = require('fs')
const moment = require('moment-timezone')
const { prank } = require('./src/esr')
const { exec } = require('child_process')

const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
/******END OF NPM PACKAGE INPUT******/

/******BEGIN OF JSON INPUT******/

try{
global.youprofile = JSON.parse(fs.readFileSync('./database/json/YouProfile.json'))
global.antilinks = JSON.parse(fs.readFileSync('./database/json/antilinks.json'))

global.userban = JSON.parse(fs.readFileSync('./database/json/userban.json'))

global.welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))

global.nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))

global.samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))

global.user = JSON.parse(fs.readFileSync('./database/json/user.json'))

global._leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))

global.bdn = JSON.parse(fs.readFileSync('./database/json/bdn.json'))

global.daftor = JSON.parse(fs.readFileSync('./database/json/daftar.json'))

global._level = JSON.parse(fs.readFileSync('./database/json/level.json'))

global.usnio = JSON.parse(fs.readFileSync('./database/json/usnio.json'))

global.at = JSON.parse(fs.readFileSync('./database/json/at.json'))

}catch (e){
console.log(`error detectado ${e}`)

}
/******END OF JSON INPUT******/

/******BEGIN OF MENU INPUT******/
const { help } = require('./src/help')

const  bnd = `
⊰🖤⊱┈──╌▪︎ ☠️ ▪︎╌──┈⊰🖤⊱
      ʙᴇᴍ ᴠɪɴᴅᴏ (ᴀ)!
⊰🖤⊱┈──╌▪︎ ☠️ ▪︎╌──┈⊰🖤⊱

▪︎ ᴀᴘʀᴇsᴇɴᴛᴇ sᴇ:    
☠️⃤|▪︎ғᴏᴛᴏ:
🖤⃤|▪︎ɴᴏᴍᴇ:
☠️⃤|▪︎ɪᴅᴀᴅᴇ:
🖤⃤|▪︎sɪɢɴᴏ:
☠️⃤|▪︎ᴏɴᴅᴇ ᴍᴏʀᴀ:
🖤⃤|▪︎ʀᴇʟᴀᴄɪᴏɴᴀᴍᴇɴᴛᴏ:
☠️⃤|▪︎ɪɴsᴛᴀɢʀᴀᴍ:
🖤⃤|▪︎ᴘᴇʀsᴏɴᴀʟɪᴅᴀᴅᴇ:
☠️⃤|▪︎ᴏʀɪᴇɴᴛᴀᴄ̧ᴀ̃ᴏ sᴇxᴜᴀʟ:
(ʜᴇᴛᴇʀᴏ, ɢᴀʏ, ʙɪ, ʟᴇ́sʙɪᴄᴀ...)

☠️ ᴏʙs: 
• ᴘʀᴏɪʙɪᴅᴏ ʟɪɴᴋ.
• "ʙᴠ" sɪɢɴɪғɪᴄᴀ ʙᴇᴍ ᴠɪɴᴅᴏ(ᴀ)!
• sᴇᴊᴀ ʀᴇᴄɪ́ᴘʀᴏᴄᴏ(ᴀ) sᴇᴍᴘʀᴇ! 🖤
 `
const { ownermenu } = require('./src/ownermenu')


/******LOAD OF VCARD INPUT******/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Albion\n' 
            + 'ORG: Albion Desenvolvedor;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=5516999469735:+55 16 99946-9735\n' 
            + 'END:VCARD' 
/******END OF VCARD INPUT******/

prefix = youprofile.Prefix
global.apoia1 = 'https://albion-desenvolvedor.herokuapp.com'
blocked = []
global.namebot = youprofile.Botname
global.nameuser = "Não está no banco de dados"
apoia1

/******BEGIN OF FUNCTIONS INPUT******/
	                  
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }
 const removexp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp -= amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }
        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 0, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
        const users = JSON.parse(fs.readFileSync('./database/json/users.json'))
const versionn = 1.62
	const albion = new WAConnection()
	albion.logger.level = 'warn'
	g = 0
	console.log("\n")
	axio.get(`https://raw.githubusercontent.com/arthur-vinicios/wb/main/som%20/at.json`).then(v =>{
  try{

  if (versionn === Number(v.data.Version)) {
  return g = 0} 
   if (Number(v.data.Version) > versionn){
   const fl = {vesion: v.data.Version, linkd: v.data.linkd, msg: v.data.Msg, link: v.data.link}
      at.push(fl)
	fs.writeFileSync('./database/json/at.json', JSON.stringify(at))
return g = 1
   }
                 return g = 0
   }catch (e) {
                 
   const fl = {vesion: v.data.Version, linkd: v.data.linkd, msg: v.data.Msg, link: v.data.link}
      at.push(fl)
	fs.writeFileSync('./database/json/at.json', JSON.stringify(at))
  
 return g = 1, process.exit(0)
  
   }
   }).catch (v => {console.log(v)
   return g = 0
   
   })
        console.log(banner.string)
	albion.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' escanear o codigo qr acima '))
	})

	fs.existsSync('./Albion.json') && albion.loadAuthInfo('./Albion.json')
	albion.on('connecting', () => {
		start('2', 'conectando...')
	})
	albion.on('open', () => {
		success('2', 'conectado')
	})
	await albion.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Albion.json', JSON.stringify(albion.base64EncodedAuthInfo(), null, '\t'))

	albion.on('group-participants-update', async (anu) => {
          
          
		
		try {
			const mdata = await albion.groupMetadata(anu.jid)
		
    var adrev = anu.action
    if(banAlbon.includes(mdata.id)){
    const dban = axio.get().then(b => {} 
    
    ).catch(
    )
    
    
    }
			if (bdn.includes(mdata.id)){
			
			
			if (adrev == 'add') {
num = anu.participants[0]

albion.sendMessage(mdata.id,String(bnd), MessageType.text )
			} else if (adrev == 'remove') {
num = anu.participants[0]
try {
ppimg = await albion.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `Agradecemos sua participação @${num.split('@')[0]}👋 `
let buff = await getBuffer(ppimg)
albion.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
			}else{
			if (adrev == 'add') {
num = anu.participants[0]
try {
ppimg = await albion.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `Olá @${num.split('@')[0]}\nseja bem vindo ao grupo *${mdata.subject}*.\nEu sou o chat-bot ${namebot}, caso queria saber mais digite\n \n ${prefix}menu`
let buff = await getBuffer(ppimg)
albion.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (adrev == 'remove') {
num = anu.participants[0]
try {
ppimg = await albion.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `Até mais  @${num.split('@')[0]} quem sabe possa voltar`
let buff = await getBuffer(ppimg)
albion.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
			
			}
			} catch (e) {
			console.log('Error : %s', color(anu, 'red'))
		}
	})

		albion.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	albion.on('chat-update', async (mek) => {
		try {

  
   if (!mek.hasNewMessage) return
   mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			console.log(MessageType)
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			console.log(String(sticker))
			const time = moment.tz('Etc/GMT+3').format('DD/MM HH:mm:ss')
			const date = moment.tz('Etc/GMT+3').format('DD,MM,YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			 command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
  const oros = budy.slice(0).split('@').shift().toLowerCase()
			mess = {
wait: '⌛ carregando... se eu não enviar tente novamente em 10s⌛',
success: '✔️ Sucesso ✔️',
           levelon: '❬ ✔ ❭ *habilitar Level*',
leveloff: ' ❬ X ❭  *desabilitar Level*',
levelnoton: '❬ X ❭ *level não ativo*',
levelnol: '*Pqp ksks level* 0 ',
error: {
stick: '[❗] Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
Iv: '❌ Link inválido ❌',
NotXp: '❌  ❌'

},
only: {
group: '[❗] Este comando só pode ser usado em grupos! ❌',
groupn: '[❗] Este comando só pode ser usado no pv! ❌',
ownerG: '[❗] Voçê não tem acesso a esse comando  ❌',
ownerB: '[❗] Acesso negado ❌',
admin: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: '[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
                   daftarB:`── 「REGISTRE-SE」 ──\n\nVOCÊ NÃO ESTÁ EM NOSSO BANCO DE DADOS DIGITE\n\n ${prefix}daftar Nome|Idade\n\n Segue o exemplo ${prefix}daftar ${namebot}|${time.split("/")[0]} `,
}
			}
    			
			const botNumber = albion.user.jid
			const ownerNumber = youprofile.Owner// replace this with your number
			const nomorOwner = [ownerNumber]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const totalchat = await albion.chats.all()
			const groupMetadata = isGroup ? await albion.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
    const isUser = user.includes(sender)
    const isLevelingOn = isGroup ? _leveling.includes(from) : true
    const NomerOwner = youprofile.Owner
   /******ApiKey Input******/
   
   /******End of ApiKey Input******/
   
			
			const reply = (teks) => {
albion.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
albion.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? albion.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : albion.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
 }
 if (userban.includes(sender)){
 console.log(userban)
 if (oros.includes(prefix)){
 reply("Usuario bloqueado (A)")
 return
}
 }
 

 if (daftor.includes(from)) {if (oros.includes(`rgt 0`)){
                 if (!isGroup) return reply(mess.only.group)
                 if (!isGroupAdmins) return reply(mess.only.admin)
                 
		daftor.splice(from, 1)
		fs.writeFileSync('./database/json/daftar.json', JSON.stringify(daftor))
		reply('❬ SUCESSO ❭')}
                 else{
                 console.log("\n============================================================")
                 console.log(`\n\n[❗]  Grupo ${groupName} está usando RGT \n\n`)
                 console.log(`Grupo: ${groupName}\nUltima mensagem: ${oros}`)
                 console.log(`\n\n[❗]  Grupo ${groupName} está usando RGT \n\n`) 
                 console.log("============================================================\n")
                 return 
                 
                 
                }
                 }	
 duf = 'n'
let position = false
Object.keys(users).forEach((i) => {
                if (users[i].numero === sender.split('@')[0]) {
                    position = i
} 

if (position !== false) {
 duf = 'sim'
                nameuser = users[position].name
                idadeuser = users[position].idade
                usernum = users[position].numero
                usertime = users[position].time1
                userdate = date
                userdesc = users[position].desc
                usertype = users[position].contype
                usergroup= users[position].Nome_do_grupo
              console.log(nameuser)
                }
else{

           nameuser = "Não está no banco de dados"
   
            
            }

        
})   

                    function mar(mes, num){
var nomor = num

    var ossos = {
    text: mes,
    contextInfo: {mentionedJid: [nomor]},
}
return ossos
} 
           
	       //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
          
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel))
               
                const getLevel = getLevelingLevel(sender)
global.getLevel
                addLevelingXp(sender, amountXp)
                
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nome*: ${nameuser}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        } 


	

    
   
          
  /*     if (oros.includes("http")){ 

if (!isGroup) return reply('Depos eu olho')

                if(antilinks.includes(from)){
if (isGroupAdmins) return reply('Você não sera removido pq tu é adm')
                 var nomor = mek.participant
                 reply(nomor)
                    albion.updatePresence(from, Presence.composing)
                   
 v ={ contextInfo: { mentionedJid: [nomor] }}
                
mentioned = mek.message.extendedTextMessage.v
                   mentions(`Pedidos recebidos, emitidos : ${mentioned}`, mentioned, true)
		     albion.groupRemove(from, mentioned)
  
  
            }}
 */
 
 if (g === 1 ){
 g = 0
   console.log(`\n[${at[0].msg}]\n`)
			albion.sendMessage(ownerNumber,`*[Atenção]*\nPossui uma nova versão *${at[0].vesion}*\nAtualize pelo link: \n${at[0].link}\n[Video Explicativo]\nlink ${at[0].linkd}`,text)
			
			}
		 if (oros.includes("wa.me" || "https")){
		 
if (!isGroup){ return reply(`Olá sou ${namebot}\nEm breve um humano verá seu pv\nMais se isso demorá use o comando ${prefix}addgp [link] `),
console.log(`\nGrupo no pv do ${nameuser} numero ${sender.split('@')[0]} info ${oros} \n`)}}
             
      
                if (oros.includes("oi" || "ola" || "olá")){
                if (!isGroup){
   const pesan = body.slice(5)
   var nomor = sender
   albion.updatePresence(from, Presence.composing)
   const hasil = `Olá @${sender.split('@')[0]}\ncomo posso ajudar ? veja meus comando ao digita ${prefix}menu`
    var ossos = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}                
   reply(ossos)
   
  
                  }    }
                   if (oros.includes(youprofile.Botname)){
   const pesan = body.slice(5)
   var nomor = sender
   albion.updatePresence(from, Presence.composing)
   const hasil = `Olá @${sender.split('@')[0]}\nSe quiser falar com meu dono e só digitar ${prefix}bug *mensagem*`
    var ossos = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}
   albion.sendMessage(from, ossos, text, {quoted: mek})
   var options = {
    text: Não_se_inport,
    contextInfo: {mentionedJid: [nomor]},
}
                    albion.sendMessage('5516999469735@s.whatsapp.net', options, text, {quoted: mek})
                  }    
                    if (oros.includes("idiota" || "tmnc" || "puta" || "rapariga" || "bot desgraçado" || "bot ruin")){
                    if (!userban.includes(sender)){
                    userban.push(sender)
	            fs.writeFileSync('./database/json/userban.json', JSON.stringify(userban))
		    reply('❬ SUCESSO ❭ VOCE FOI BLOQUEADO (A) ')
                   
                    }}
			
			
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
console.log(`\n\n`) 
       /******END OF FUNCTIONS INPUT******/
       
			switch(command) { 
			

case "addgp":
//comando para enviar o link pra owner
tira = 100
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))   
if (args.length < 1) return reply(`Use o exenplo ${prefix}addgp link do grupo `)
if (!isUser) return reply(mess.only.daftarB)	
if (!oros.includes("https")){
reply("Este link não serve tente outro, varias tentativas gera ban!")
break
}
const peusan = body.slice(6)
			var nomor = mek.participant
			albion.updatePresence(from, Presence.composing) 
			hasil = `
			*[Novo Grupo]*
			Numero: @${sender.split('@')[0]}
			todas mensagems \n
			${peusan}\n`
			var ofssos = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}
			albion.sendMessage(NomerOwner, ofssos, text, {quoted: mek})
	break	
case "setban":
//comando para banir ou desbanir usuario se vc for adm
tira = 700
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))   
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`use o exenplo ${prefix}setban @user|1 [Desbanir] ou 2 [Banir] {Você pode ser banido se usar errado}`)
u= body.slice(7)
user_ = u.split("|")[0] 
a = u.split("|")[1]
user = user_.split("@")[1] + "@s.whatsapp.net"
console.log(user)
if (a === "1"){
if (!userban.includes(user)) return reply ('Esse usuraio já estava desbloqueado')
userban.splice(user,1)
fs.writeFileSync('./database/json/userban.json', JSON.stringify(userban))
}
else if (a === "2"){
if (userban.includes(user)) return reply ('Esse Usuario já esta bloqueado')
userban.push(user)
fs.writeFileSync('./database/json/userban.json', JSON.stringify(userban))
}
else {
reply("Voçê foi bloqueado por mal uso")
userban.push(sender)
fs.writeFileSync('./database/json/userban.json', JSON.stringify(userban))
}

break	

	case "ownermenu":
	if(!isOwner) return reply() 
	albion.sendMessage(from,ownermenu(prefix), text, {quoted: mek})	
//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
tira = 20
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await albion.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
albion.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'sl':
tira = 20
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await albion.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
albion.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
tira = 20
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await albion.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
albion.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
tira = 20
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await albion.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
albion.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
tira = 20
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await albion.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
albion.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':   
tira = 20
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))               
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await albion.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
albion.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
         
case 'estourar': 
tira = 20
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))    
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await albion.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=50 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
albion.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break			
case 'contar':
tira = 5
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
if (args.length == 0) return reply( '0 caracteres, pois obviamente não há texto😀')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break
case "dog":
reply("Dog morreu")
break	
case 'imc':
tira = 80
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
 dados = String(body.slice(5))
 alt = dados.split('-')[0]
 alt1 = alt.replace(',','.')
 peso = dados.split('-')[1]
 peso1 = peso.replace(',','.')
	               exec(`cd python ; "python3" imc.py ${alt1} ${peso1} `, (err, stdout) => {
	                    n = String(err)
		           if(err) return albion.sendMessage(from, `${n.slice(47)}`,text, { quoted: mek })
		           if (stdout) {
			       albion.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
break
 case 'gpid':
 tira = 100
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 

			        var nomor = mek.participant
         
			        gp = `Olá @${sender.split('@')[0]} \n\nNome do grupo: ${groupName}\n\nid do grupo ${from}`
			        var ossos = {
          text:gp,
          contextInfo: {mentionedJid: [nomor]},
           }
			        albion.sendMessage(from, ossos, text, {quoted: mek})
          
break
case 'meuid':
tira = 1000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
	         if (!isUser) return reply(mess.only.daftarB)
	         if (isGroup) return reply(mess.only.groupn)
	         let positionP = false
Object.keys(users).forEach((i) => {
                if (users[i].numero === sender.split('@')[0]) {
                    positionP = i
                }
            })
           
            reply(String(positionP))
	        break                    
case 'travado':
                  case 'travando':
                  case 'travei':
                  tira = 60
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
                   if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
teks = `Lista admin do grupo*${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
	no += 1
	teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
lk= fs.readFileSync('./assets/travei.mp3');
            albion.sendMessage(from, lk, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true});
                  albion.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant

contextInfo: { mentionedJid: [nomor] }

albion.groupSettingChange (from, GroupSettingChange.messageSend, true);


                   break
case 'rgt':
tira = 100
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
                    if (!isUser) return reply(mess.only.daftarB)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (Number(args[0]) === 1) {
	if (daftor.includes(from)) return reply('Registro já estava bloqueado')
	daftor.push(from)
	fs.writeFileSync('./database/json/daftar.json', JSON.stringify(daftor))
	reply('❬ SUCESSO ❭ O Registro foi Bloqueado neste grupo ')
break
} else if (Number(args[0]) === 0) {
     if (!daftor.includes(from)) return reply('o registro continua ativo')
	daftor.splice(from, 1)
	fs.writeFileSync('./database/json/daftar.json', JSON.stringify(daftor))
	reply('❬ SUCESSO ❭Registro desbloqueado ')}
break			
			
			
case 'nivel':
case 'level':
	tira = 10
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 			
        
          if (!isUser) return reply(mess.only.daftarB)
n = ' '
if (nameuser === "Desconhecido.") {nameuser = sender.split('@')[0]
n = ' @'}
          
if (args.length < 1) {
const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                const mejkll = userXp / 500
                mejk = String(mejkll)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                const rnfgh = 5000 * Math.pow(2, userLevel)
                
                   var hjlko = (rnfgh - userXp) / 500
                  
                   var bnn = String(hjlko)
                  
                resul = `◪ *LEVEL*\n  ├─ ❏ *Nome* :${n}${nameuser}\n  ├─ ❏ *User XP* : ${userXp}\n  ├─ ❏ *Levelcom* : ${usertype}\n  ├─ ❏ *Mensagen* : ${mejk.split('.')[0]}\n  ├─ ❏ *Falta* : ${bnn.split('.')[0]} *Mensagens*\n  └─ ❏ *User Level* : ${userLevel}`
               albion.sendMessage(from, mar(resul), text, { quoted: mek})

                .catch(async (err) => {
   console.error(err)
   await reply(`Error!\n${err}`)
                    })
break
}
 if (!isGroupAdmins) return reply(mess.only.admin)
if (Number(args[0]) === 1) {
	if (_leveling.includes(from)) return reply('o recurso está ativo')
	_leveling.push(from)
	fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
	reply('❬ SUCESSO ❭ ativado ')
break
} else if (Number(args[0]) === 0) {
     if (!_leveling) return reply ('Já estava desativado')
	_leveling.splice(from, 1)
	fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
	reply('❬ SUCESSO ❭ desativado ')
break
} else {
	console.log(nameuser)

}
                  var hjk =  body.slice(8)

 if (!isGroupAdmins) return reply(mess.only.admin)        

var hjkl= hjk.split("|")[0];
                  let positionyu = false
                  sem = hjkl+'@s.whatsapp.net'
Object.keys(users).forEach((i) => {
                if (users[i].numero === sem.split('@')[0]) {
                    positionyu = i
} 

if (positionyu !== false) {
 duf = 'sim'
                nameuser = users[positionyu].name
                idadeuser = users[positionyu].idade
                usernum = users[positionyu].numero
                usertime = users[positionyu].time1
                userdate = date
                userdesc = users[positionyu].desc
                usertype = users[positionyu].contype
                usergroup= users[positionyu].Nome_do_grupo
                }})
        
        
               const userLevel = getLevelingLevel(sem);
                const userXp = getLevelingXp(sem);
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                const mejkl = userXp / 500
                mejklll = String(mejkl)
                 const rnfgh = 5000 * Math.pow(2, userLevel)
                console.log(rnfgh)
                console.log(userXp - rnfgh)
                   var hjlko = (rnfgh - userXp) / 500
                   console.log(hjlko)
                   var bnn = String(hjlko)
                  reply(`${bnn.split('.')[0]}`)
                resul = `◪ *LEVEL*\n  ├─ ❏ *Nome* :${n}${nameuser}\n  ├─ ❏ *User XP* : ${userXp}\n  ├─ ❏ *Levelcom* : ${usertype}\n  ├─ ❏ *Mensagen* : ${mejklll.split('.')[0]}\n  ├─ ❏ *Falta* : ${bnn.split('.')[0]} *Mensagens*\n  └─ ❏ *User Level* : ${userLevel}`
               albion.sendMessage(from, mar(resul), text, { quoted: mek})

                .catch(async (err) => {
   console.error(err)
   await reply(`Error!\n${err}`)
                    })


              
            break
            case 'ping':  
            tira = 2
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))   
			   	        if (!isUser) return reply(mess.only.userB)
                   const timestamp = speed();
                   const latensi = speed() - timestamp
                   albion.updatePresence(from, Presence.composing) 
        uptime = process.uptime()
                   albion.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Second_*\n`, text, { quoted: mek})
                   break
                   case 'wait':
                   tira = 80
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                   if (!isUser) return reply(mess.only.daftarB)
	reply(mess.wait)
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	media = await albion.downloadMediaMessage(encmedia)
	await wait(media).then(res => {
		albion.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
	}).catch(err => {
		reply(err)
		      })
} else {
	reply('Mi mama senor?')
}
break
case 'clone':
if (!isonwer ) return reply ('COMANDO BLOQUEADO POR MAL USO')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('A tag alvo que você deseja clonar')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
	pp = await albion.getProfilePicture(id)
	buffer = await getBuffer(pp)
	albion.updateProfilePicture(botNumber, buffer)
	mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
	reply('Gagal om')
}
break
case 'clearall':
if (!isOwner) return reply('Kamu siapa?')
anu = await albion.chats.all()
albion.setMaxListeners(25)
for (let _ of anu) {
	albion.deleteChat(_.jid)
}
reply('Pronto Senor')
break
case 'nsfwarmpits':
	try {
		if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
		res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animearmpits`, {method: 'get'})
		buffer = await getBuffer(res.url)
		albion.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tai'})
	} catch (e) {
		console.log(`Error :`, color(e,'red'))
		reply('❌ *ERROR* ❌')
	}
	break	
	
	case 'nsfwahegao':
	try {
		if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
		res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
		buffer = await getBuffer(res.url)
		albion.sendMessage(from, buffer, image, {quoted: mek, caption: 'fodar'})
	} catch (e) {
		console.log(`Error :`, color(e,'red'))
		reply('❌ *ERROR* ❌')
	}
	break
	 case 'delete':
case 'del':
if (!isGroup)return reply(mess.only.group)
                   if (!isUser) return reply(mess.only.daftarB)
if (!isGroupAdmins)return reply(mess.only.admin)
albion.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case "porn":
if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
try{
res = await fetchJson(`https://meme-api.herokuapp.com/gimme/porn`, {method: 'get'})
console.log(res)
buff = await getBuffer(res.url)
title = await res.title.split(" ")[1]
if(res.url.includes(".gif")){
albion.sendMessage(from, buff, video, {mimetype: 'video/gif', filename: `${res.title}.gif`, quoted: mek , caption: title})
}else{
albion.sendMessage(from, res.url, text, {quoted: mek })
}

}catch(e){
reply("Error")
console.log(e)
}
break
case "porngay":
if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
try{
res = await fetchJson(`https://meme-api.herokuapp.com/gimme/gayporn`, {method: 'get'}).catch(v => {
console.log(v)

}


)
console.log(res)
buff = await getBuffer(res.url)
title = await res.title.split(" ")[1]

if(res.url.includes(".gif")){
albion.sendMessage(from, buff, video, {mimetype: 'video/gif', filename: `${res.title}.gif`, quoted: mek , caption: title})
}else{
albion.sendMessage(from, res.url, text, {quoted: mek })
}
}catch(e){
reply("Error")
console.log(e)
}
break
case 'simi':
					if (args.length < 1) return reply('Onde está o texto?')
					teks = body.slice(5)
					anu = await simih(teks) 
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativado')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativando o modo simi com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
case "pornlesbian" :
if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
try{
res = await fetchJson(`https://meme-api.herokuapp.com/gimme/lesbians`, {method: 'get'})
console.log(res)
buff = await getBuffer(res.url)
title = await res.title.split(" ")[1]
if(res.url.includes(".gif")){
albion.sendMessage(from, buff, video, {mimetype: 'video/gif', filename: `${res.title}.gif`, quoted: mek , caption: title})
}else{
albion.sendMessage(from, buff, image,{ quoted: mek , caption: title})
}
}catch(e){
reply("Error")
console.log(e)
}
break
case 'nsfw':
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('digite 1 para ativar')
if (Number(args[0]) === 1) {
	if (isNsfw) return reply('o recurso está ativo')
	nsfw.push(from)
	fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
	reply('❬ SUCESSO ❭ ativado o recurso nsfw neste grupo')
} else if (Number(args[0]) === 0) {
	nsfw.splice(from, 1)
	fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
	reply('❬ SUCESSO ❭ desativado o recurso nsfw neste grupo')
} else {
	reply('digite 1 para ativar, 0 para desativar o recurso')
}
break			
			case 'welcome':
			tira = 300
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
if (!isGroup) return reply(mess.only.group)
                   if (!isUser) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('digite 1 para ativar')
if (Number(args[0]) === 1) {
	if (isWelkom) return reply('o recurso está ativo')
	welkom.push(from)
	fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
	reply('❬ SUCESSO ❭ ativado o recurso de boas-vindas neste grupo')
} else if (Number(args[0]) === 0) {
     if (!welkom.includes(from)) return reply ('Já estava desativado')
	welkom.splice(from, 1)
	fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
	reply('❬ SUCESSO ❭ desativado o recurso de boas-vindas neste grupo')
} else {
	reply('digite 1 para ativar, 0 para desativar o recurso')
}
                   break
              case 'daftar':
             case 'register':
           if (daftor.includes(from)) return reply('*Função Bloqueada*\n\npeça pra um adm Desbloquear')

	
if (isUser) return reply('você já está registrado')			
if (args.length < 1) return reply(`Parâmetro incorreto \nCommand : ${prefix}daftar nome|idade\nContoh : ${prefix}daftar Albio|23`)
var reg = body.slice(8)
var nomedu= reg.split("|")[0];
var idadedu = reg.split("|")[1];
	user.push(sender)
  
    const ups = {numero: sender.split('@')[0], name:nomedu , idade:idadedu,Nome_do_grupo: groupName ,time1: time,contype: "0",desc: "Não registrado" }
      users.push(ups)
	fs.writeFileSync('./database/json/users.json', JSON.stringify(users))
	fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
	albion.sendMessage(from, `\`\`\`O registro foi bem sucedido com SN: TGK&df8PPHBSJDH10J\`\`\`\n\n\`\`\`Pada ${date} ${time}\`\`\`\n\`\`\`[Nome]: ${nomedu}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`[Idade]: ${idadedu}\`\`\`\n\`\`\`Para usar o bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}menu\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: mek})
break
     case 'play':   
     tira = 100
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
	          if (!isUser) return reply(mess.only.daftarB)
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Canção encontrada!!!*\nTitulo : ${anu.result.title}\nFonte : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE ENVIANDO POR FAVOR, NÃO SPAM YA PAI*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                albion.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                albion.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
case 'tomp3':
tira = 200
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
                	albion.updatePresence(from, Presence.composing) 
   if (!isUser) return reply(mess.only.daftarB)
if (!isQuotedVideo) return reply('❌ responder vídeo hum ❌')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await albion.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
	buffer = fs.readFileSync(ran)
	albion.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
	fs.unlinkSync(ran)
})
break                
  case 'toimg':
  tira = 200
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
    albion.updatePresence(from, Presence.composing)
               if (!isUser) return reply(mess.only.daftarB)
if (!isQuotedSticker) return reply('❌ Apenas Stickers ❌')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await albion.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return reply('❌ Falha ao converter Stickers em imagens ❌')
	buffer = fs.readFileSync(ran)
	albion.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
	fs.unlinkSync(ran)
})
break              
case 'closegp':
tira = 60
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
albion.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administradores* podem enviar mensagens`,
contextInfo: { mentionedJid: [nomor] }
}
albion.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break
                case 'opengp':
                case 'bukagc':
                tira = 50
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
albion.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* podem enviar mensagens`,
contextInfo: { mentionedJid: [sender] }
}
albion.groupSettingChange (from, GroupSettingChange.messageSend, false)
albion.sendMessage(from, open, text, {quoted: mek})
break
case 'stiker':
case  's':
case 'sticker':
case 'stickergif':
case 'stikergif':
tira = 60
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	const media = await albion.downloadAndSaveMediaMessage(encmedia)
      if (!isUser) return reply(mess.only.daftarB)
	ran = getRandom('.webp')
	await ffmpeg(`./${media}`)
		.input(media)
		.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
		})
		.on('error', function (err) {
			console.log(`Error : ${err}`)
			fs.unlinkSync(media)
			reply(mess.error.stick)
		})
		.on('end', function () {
			console.log('Finish')
			albion.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
			fs.unlinkSync(media)
			fs.unlinkSync(ran)
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(ran)
	} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	const media = await albion.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.webp')
	reply(mess.wait)
	await ffmpeg(`./${media}`)
		.inputFormat(media.split('.')[1])
		.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
		})
		.on('error', function (err) {
			console.log(`Error : ${err}`)
			fs.unlinkSync(media)
			tipe = media.endsWith('.mp4') ? 'video' : 'gif'
			reply(`❌ Falhou, no momento da conversão ${tipe} para o sticker`)
		})
		.on('end', function () {
			console.log('Finish')
			buff = fs.readFileSync(ran)
			albion.sendMessage(from, buff, sticker)
			fs.unlinkSync(media)
			fs.unlinkSync(ran)
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(ran)
	}
	break	
case 'bug':
tira = 5000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
const pesan = body.slice(5)

 if (pesan.length > 300) return albion.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 textos', msgType.text, {quoted: mek})
   var nomor = mek.participant
  const teksh = `*[Alerta]*\nnumero: @${nomor.split("@s.whatsapp.net")[0]}\nReporta : ${pesan}\nGrupo: ${groupName}\n`
 var options = {
    text: teksh,
    contextInfo: {mentionedJid: [nomor]},
}
                    albion.sendMessage('5516999469735@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos.')
                    break
 case 'linkgroup':
case 'linkgrup':
case 'linkgp':
tira = 20
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
    albion.updatePresence(from, Presence.composing) 
    if (!isGroup) return reply(mess.only.group)
                if (!isUser) return reply(mess.only.daftarB)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await albion.groupInviteCode (from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
albion.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
break                   
case 'add':
tira = 4000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
if (!isOwner) return reply('*Acesso negado*')
albion.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Use o código do país')
try {
	num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
	albion.groupAdd(from, [num])
} catch (e) {
	console.log('Error :', e)
	reply('Falha ao adicionar destino, talvez porque é privado')
}
break
case 'albionban':
tira = 4000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
                
albion.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
reply(mentioned)
if (mentioned.length > 1) {
	teks = 'Pedidos recebidos, emitidos :\n'
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	reply(mentioned)
	albion.groupRemove(from, mentioned)
	reply(mentioned)
} else {
	mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
	reply(mentioned)
	albion.groupRemove(from, mentioned)
	reply(mentioned)
albion.sendMessage(mentioned, 'kskst', text)
}
break
case 'exe':
	              albion.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply('Acesso negado')
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return albion.sendMessage(from, "Comando Salah", text, { quoted: mek })
		           if (stdout) {
			       albion.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
case 'bc':
albion.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply('.......')
anu = await albion.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	buff = await albion.downloadMediaMessage(encmedia)
	for (let _ of anu) {
		albion.sendMessage(_.jid, buff, image, {caption: `*「 Albion Chat-bot 」*\n\n${body.slice(4)}`})
	}
	reply('')
} else {
	for (let _ of anu) {
		sendMess(_.jid, `*「 Albion Chat-Bot 」*\n\n${body.slice(4)}`)
	}
	reply('Transmissão de sucesso')
}
break
case 'bcgc':
albion.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply('.......')
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	buff = await albion.downloadMediaMessage(encmedia)
	for (let _ of groupMembers) {
		                 albion.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
	}
	reply('')
} else {
	for (let _ of groupMembers) {
		sendMess(_.jid, `*「 Albion Bot  」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
	}
	reply('Grupo de transmissão de sucesso')
}
break                
  case 'tagall':
  tira = 2000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
albion.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
                   if (!isUser) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `  \nTotal : ${groupMembers.length}\n`
for (let mem of groupMembers) {
	teks += `╠➥ @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
}
mentions('╔══✪〘 Mencionando Todos 〙✪══\n╠➥'+teks+'╚═〘  '+apoia1+' 〙', members_id, true)
break
                case 'tagall2':
                tira = 2000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
albion.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
	teks += `╠➥ ${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
}
albion.sendMessage(from, '╔══✪〘 Mencionando Todos 〙✪══\n╠➥'+teks+'╚═〘 Albion Bot 〙', text, {quoted: mek})
break
                case 'tagall3':
                tira = 2000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
albion.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
	teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
}
albion.sendMessage(from, '╔══✪〘 Mencionando Todos 〙✪══\n╠➥'+teks+'╚═〘 Albion Bot 〙', text, {detectLinks: false, quoted: mek})
break
   case 'tagall4':
   tira = 2000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
albion.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
	teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
	members_id.push(mem.jid)
}
albion.sendMessage(from, '╔══✪〘 Mencionando Todos 〙✪══\n╠➥'+teks+'╚═〘 Albion Bot 〙', text, {quoted: mek})
break
                case 'tagall5':
                tira = 2000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
albion.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
	teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
	members_id.push(mem.jid)
}
reply('╔══✪〘 Mencionando Todos 〙✪══\n╠➥'+teks+'╚═〘 Albion Bot 〙')
break

case 'setprefix': //manuten

albion.updatePresence(from, Presence.composing) 
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)

                  youprofile.Prefix = args[0]
                 
                 fs.writeFileSync('./database/json/YouProfile.json', JSON.stringify(youprofile))
reply(`O prefix foi alterado com sucesso para : ${args[0][0]}`)
process.exit(0)
break
case 'insta': //manuten

albion.updatePresence(from, Presence.composing) 
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)

                  youprofile.insta = args[0]
                 
                 fs.writeFileSync('./database/json/YouProfile.json', JSON.stringify(youprofile))

process.exit(0)
break
case 'face': //manuten

albion.updatePresence(from, Presence.composing) 
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)

                  youprofile.face = args[0]
                 
                 fs.writeFileSync('./database/json/YouProfile.json', JSON.stringify(youprofile))

process.exit(0)
break
case 'albionid': //manuten

albion.updatePresence(from, Presence.composing) 
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)

                  youprofile.AlbionID = args[0]
                 
                 fs.writeFileSync('./database/json/YouProfile.json', JSON.stringify(youprofile))
reply(`O prefix foi alterado com sucesso para : ${args[0][0]}`)
process.exit(0)
break

case 'listadmins':
case 'adminlist':
tira = 200
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
albion.updatePresence(from, Presence.composing) 
                   if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
teks = `Lista admin do grupo*${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
	no += 1
	teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'tts':
tira = 60
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 
   albion.updatePresence(from, Presence.recording) 
   if (args.length < 1) return albion.sendMessage(from, 'Qual é o código da linguagem? DIGITE  ${prefix}lang', text, {quoted: mek})
              if (!isUser) return reply(mess.only.daftarB)
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return albion.sendMessage(from, 'Cadê o texto', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? reply('Textnya kebanyakan om')
: gtts.save(ranm, dtt, function() {
	exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
		fs.unlinkSync(ranm)
		buff = fs.readFileSync(rano)
		if (err) return reply('Gagal om:(')
		albion.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
		fs.unlinkSync(rano)
	})
})
break
case 'bpink':
tira = 80
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))               
                  if (args.length < 1) return reply(`Texto de entrada \nExemplo : ${prefix}Caliph Bot`)
                data = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(7)}`)
                if (!isUser) return reply(mess.only.daftarB)
                albion.sendMessage(from, data, image, {quoted: mek, caption: body.slice(7)})
                break
case 'blocklist':
tira = 300
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira)) 

teks = 'This is list of blocked number :\n'
for (let block of blocked) {
	teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
albion.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
break
case 'hidetag':
tira = 5000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
		        if (!isGroupAdmins) return reply ('*ACESSO NEGADO*')
                albion.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await albion.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await albion.sendMessage(from, options, text)
               break 
 case 'frase':
                data = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
                if (!isUser) return reply(mess.only.daftarB)
                hasil = data.Frase
                reply(String(hasil))
                break
              case 'owner':
                case 'creator':
                tira = 12
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))   
                  albion.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
               albion.sendMessage(from, 'Aqui está o número do meu dono, salve depois',MessageType.text, { quoted: mek} )
                break    
 case 'ownergrup':
  case 'ownergroup':
               albion.updatePresence(from, Presence.composing) 
              options = {
          text: `Este proprietário do grupo é: *@${from.split("-")[0]}* `,
          contextInfo: { mentionedJid: [from] }
           }
           albion.sendMessage(from, options, text, { quoted: mek } )
break    
case 'version':
reply('0.1.62')    
break  
case 'lang':
albion.sendMessage(from, lang(prefix, sender), text, {quoted: mek})
break               
 case 'perfilmenu':
albion.sendMessage(from, perfilmenu(prefix, sender), text, {quoted: mek})
break
case 'menuadmin':
 if (!isGroupAdmins) return reply(mess.only.admin)
albion.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
break
case 'nsfwmenu':
if (!isGroupAdmins) return reply(mess.only.admin)
albion.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
break              
case 'encurta':
tira = 60
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))   
                  if (!isUser) return reply(mess.only.daftarB)
		  
		   encu = body.slice(9)
                  if(args.length < 1) return reply('*iNVALIDO*!')
		   var encu1 = encu.split("|")[0];
		   var encu2 = encu.split("|")[1];
		   anu = await fetchJson(`https://encurtaon.com/api?api=f73d9c33588bb29b2374a8f9890916774b070d9d&url=${encu1}&alias=${encu2}`, {method: 'get'})
		   hasil = `a qui esta seu link ${anu.shortenedUrl}`
		   reply(hasil)
		   break   
		       case 'promote':
albion.updatePresence(from, Presence.composing) 
                   if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A tag alvo que você deseja promover!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
	teks = 'Pedido recebido, adicionando posição como administrador :\n'
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	albion.groupMakeAdmin(from, mentioned)
} else {
	mentions(`Pedido recebido, adicionando posição como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
	albion.groupMakeAdmin(from, mentioned)
}
break
case 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝐓𝐚𝐠 𝐭𝐚𝐫𝐠𝐞𝐭 𝐲𝐚𝐧𝐠 𝐦𝐚𝐮 𝐝𝐢 𝐭𝐮𝐫𝐮𝐧𝐤𝐚𝐧 𝐚𝐝𝐦𝐢𝐧')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
	teks = ''
	for (let _ of mentioned) {
		teks += `Pedido recebido, removido da posição de administrador :\n`
		teks += `@_.split('@')[0]`
	}
	mentions(teks, mentioned, true)
	albion.groupDemoteAdmin(from, mentioned)
} else {
	mentions(`Pedido recebido, removido da posição de administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
	albion.groupDemoteAdmin(from, mentioned)
}
break
  case 'wa.me':
  case 'wame':
  dfg = body.slice(5)
if (args.length == 1)  {
   u = String(args)
                    
                    
                    
  albion.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nlink  do seu amigo: *https://wa.me/${u.split('@')[1]}
          \nsegundo link do seu amigo:*https://api.whatsapp.com/send?phone=${u.split('@')[1]}* \n\nSeu link Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    albion.sendMessage(from, options, text, { quoted: mek } )
    break
}

                    
  albion.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSeu link Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    albion.sendMessage(from, options, text, { quoted: mek } )

break            
               
 
case 'nivelgay':
tira = 60
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))     
          if (!isUser) return reply(mess.only.daftarB)
gay = body.slice(13)
		   anu =`${Math.floor(Math.random() * 100)}`
		   hasil = `*Atenção estamos verificando o nivel de gay no grupo, o nivel é   ${anu}%*`
		   reply(hasil)
		   
		   break
case 'niveloli':
tira = 60
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))     
          if (!isUser) return reply(mess.only.daftarB)
gay = body.slice(13)
		   anu =`${Math.floor(Math.random() * 100)}`
		   hasil = `*Atenção estamos verificando o nivel de loli no grupo, o nivel é   ${anu}%*`
		   reply(hasil)
		   
		   break
		   
		   	    case 'nivelgado':
tira = 60
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))     
gay = body.slice(13)
		   anu = `${Math.floor(Math.random() * 100)}`
		   hasil = `*Atenção estamos verificando o nivel de gado no grupo, o nivel é   ${anu}%*`
		   reply(hasil)
       break
       case 'gpof':
       
               albion.sendMessage(from, gpof(prefix, sender), text, {quoted: mek})
               break
case 'setinfo':
                    if (!isUser) return reply(mess.only.daftarB)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    dfg = body.slice(8)
                    adduseriklo = dfg.split('/')[0]
                    adduserio = adduseriklo.split('@')[1]
                   
                    ret = dfg.split('/')[1]
                    if (Number(ret) === 1) {
	if (usnio.includes(adduserio)) return reply('usuario existente')
	usnio.push(adduserio)
	fs.writeFileSync('./database/json/usnio.json', JSON.stringify(usnio))
	reply('❬ SUCESSO ❭ adcionado ')
break
} else if (Number(ret) === 0) {
     if (!usnio.includes(adduserio)) return reply('esté usuario não existe no banco de dados')
	usnio.splice(adduserio, 1)
	fs.writeFileSync('./database/json/usnio.json', JSON.stringify(usnio))
	reply('❬ SUCESSO ❭ removido')}
break	               
 case 'gay':
 tira = 200
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))    
          if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
rate = body.slice(4).split("@")[1]
           
		   anu = `${Math.floor(Math.random() * 100)}`
		   
		   hasil = `*Após medir o  @${rate} TEMOS SUA PORCENTAGEM:* ${anu}% *DE GAY*`
		   var nomor = rate + "@s.whatsapp.net"

    var ospd = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}
		   albion.sendMessage(from, ospd, text, {quoted: mek})
		   break
 case 'gado':
 tira = 204
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))    
          if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
rate = body.slice(4).split("@")[1]
           
		   anu = `${Math.floor(Math.random() * 100)}`
		   
		   hasil = `*Após medir o  @${rate} TEMOS SUA PORCENTAGEM:* ${anu}% *DE GADO*`
		   var nomor = rate + "@s.whatsapp.net"

    var ospd = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}
		   albion.sendMessage(from, ospd, text, {quoted: mek})
		   break
 case 'trans':
 tira = 200
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))    
          if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
rate = body.slice(4).split("@")[1]
           
		   anu = `${Math.floor(Math.random() * 100)}`
		   
		   hasil = `*Após medir o  @${rate} TEMOS SUA PORCENTAGEM:* ${anu}% *DE trans*`
		   var nomor = rate + "@s.whatsapp.net"

    var ospd = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}
		   albion.sendMessage(from, ospd, text, {quoted: mek})
		   break 
		case 'travequin':
 tira = 86
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))    
          if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
rate = body.slice(4).split("@")[1]
           
		   anu = `${Math.floor(Math.random() * 100)}`
		   
		   hasil = `*Após medir o  @${rate} TEMOS SUA PORCENTAGEM:* ${anu}% *DE traveco*`
		   var nomor = rate + "@s.whatsapp.net"

    var ospd = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}
		   albion.sendMessage(from, ospd, text, {quoted: mek})
		   break
 case 'burro':
 tira = 34
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))    
          if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
rate = body.slice(4).split("@")[1]
           
		   anu = `${Math.floor(Math.random() * 100)}`
		   
		   hasil = `*Após medir o  @${rate} TEMOS SUA PORCENTAGEM:* ${anu}% *DE burrice*`
		   var nomor = rate + "@s.whatsapp.net"

    var ospd = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}
		   albion.sendMessage(from, ospd, text, {quoted: mek})
		   break
 case 'lolipo':
 tira = 44
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))    
          if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
rate = body.slice(4).split("@")[1]
           
		   anu = `${Math.floor(Math.random() * 100)}`
		   
		   hasil = `*Após medir o  @${rate} TEMOS SUA PORCENTAGEM:* ${anu}% *DE loli*`
		   var nomor = rate + "@s.whatsapp.net"

    var ospd = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}
		   albion.sendMessage(from, ospd, text, {quoted: mek})
		   break
     
 case 'yaoipo':
 tira = 94
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))    
          if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
rate = body.slice(4).split("@")[1]
           
		   anu = `${Math.floor(Math.random() * 100)}`
		   
		   hasil = `*Após medir o  @${rate} TEMOS SUA PORCENTAGEM:* ${anu}% *DE assistir yaoi*`
		   var nomor = rate + "@s.whatsapp.net"

    var ospd = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}
		   albion.sendMessage(from, ospd, text, {quoted: mek})
		   break
 case 'inteligência':	
case 'inteligencia':		
case 'inteli':
 tira = 255
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))    
          if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
rate = body.slice(4).split("@")[1]
           
		   anu = `${Math.floor(Math.random() * 100)}`
		   
		   hasil = `*Após medir o  @${rate} TEMOS SUA PORCENTAGEM:* ${anu}% *DE inteligência*`
		   var nomor = rate + "@s.whatsapp.net"

    var ospd = {
    text: hasil,
    contextInfo: {mentionedJid: [nomor]},
}
		   albion.sendMessage(from, ospd, text, {quoted: mek})
		   break

 case 'exit':
if (!isOwner) return reply('Acesso negado')
process.exit(0)
break              
case 'setnameuser':
tira = 1000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))    
let srt = args[0]
senderj = sender.split('@')[0]

let position = false
Object.keys(users).forEach((i) => {
                if (users[i].numero === sender.split('@')[0]) {
                    position = i
                }
            })
            if (position !== false) {
                nameuser =users[position].name
              console.log(nameuser)
                users[position].name =''
                users[position].name += srt
                
                fs.writeFileSync('./database/json/users.json', JSON.stringify(users))
            }
break               
  case 'setdesc':
tira = 1000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))  
let srf = body.slice(8)
let position1 = false
Object.keys(users).forEach((i) => {
                if (users[i].numero === sender.split('@')[0]) {
                    position1 = i
                }
            })
            if (position1 !== false) {
                nameuser =users[position1].desc
              console.log(nameuser)
                users[position1].desc =''
                users[position1].desc += srf
                
                fs.writeFileSync('./database/json/users.json', JSON.stringify(users))
            }
break
case 'setxp':

if(!isOwner)  return reply(mess.only.ownerB)
let srlf = body.slice(7)
if (args.length < 1) return reply(`use o exenplo ${prefix}setxp xp-numero-tira `)
let arff1 = srlf.split("-")[0]// xp+add
let arff2 = srlf.split("-")[1]; // sender
let arff22 = arff2.split("@")[1]
let ar = arff22+='@s.whatsapp.net'
arf3 = srlf.split("-")[2]; // tiraxp
addLevelingXp(ar, Number(arff1))
removexp(ar,Number(arf3))
const currentLevel = getLevelingLevel(ar)
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
               
              
                if (requiredXp <= getLevelingXp(ar)) {
                    addLevelingLevel(ar, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nome*: ${nameuser}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!! 🎉🎉`)
                }
break
case "depositar":
case "depósitar":
case "deposita":
case "deposito":
case "transferir":
case "transferi":
try{
if (args.length < 2) return reply(`use o exenplo ${prefix}depositar xp-numero `)
userXddp = getLevelingXp(sender)
tira = args[0]
num = args[1].split("@")[1]
num = num + '@s.whatsapp.net'
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
addLevelingXp(num, Number(tira))
b = getLevelingXp(num)
hasil = (`Foi Depositado ${tira}XP para @${num.split("@")[0]} pelo @${sender.split("@")[0]}`)


    var ospd = {
    text: hasil,
    contextInfo: {mentionedJid: [num, sender]},
}
albion.sendMessage(from,ospd,text,  { quoted: mek })
}catch(e){
reply("Dados invalidos")
console.log("ERROR NO COMANDO DEPOSITAR")
console.log(e)
}

case 'setidade':
tira = 1000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
let srytf = args[0]
let position45 = false
Object.keys(users).forEach((i) => {
                if (users[i].numero === sender.split('@')[0]) {
                    position45 = i
                }
            })
            if (position45 !== false) {
                nameuser =users[position45].idade
              console.log(nameuser)
                users[position45].idade =''
                users[position45].idade += srytf
                
                fs.writeFileSync('./database/json/users.json', JSON.stringify(users))
            }
break
 
case 'numbergamer':
tira = 500
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
try{
 dados = Number(args[0])
}catch{
return reply("Informe um numero")
break
}
if (dados > 3 || dados < 0) return reply("informe um numero maior 0 e menor que 3")
	               exec(`cd python ; "python3" par.py ${dados} `, (err, stdout) => {
	                    n = String(err)
		           if(err) return albion.sendMessage(from, `${n.slice(47)}`,text, { quoted: mek })
		           if (stdout) {
		           if (stdout.includes("PARABÉNS! Você ganhou!")){
		           console.log(121)
		           reply(`${stdout} e ganhou 5.000`)
		           addLevelingXp(sender, 5000)
		           
		           }else{
		           console.log("Alguem perdeu 500")
		           albion.sendMessage(from, stdout, text, { quoted: mek })
		           }
			      
		           }
	           })
 break
  case 'jokenpo':
  tira = 500
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
dados = Number(args[0])
console.log(dados)




if (dados > 3 || dados < 0 || dados == NaN) return reply("informe um numero maior 0 e menor que 3")
	               exec(`cd python ; "python3" jokenpo.py ${dados} `, (err, stdout) => {
	                    n = String(err)
		           if(err) return albion.sendMessage(from, `${n.slice(47)}`,text, { quoted: mek })
		           if (stdout) {
			       if (stdout.includes("Jogador venceu")){
		           console.log(121)
		           reply(`${stdout} e ganhou 5.950`)
		           addLevelingXp(sender, 5950)
		        
		           }else{
		           console.log("Alguem perdeu 500")
		           albion.sendMessage(from, stdout, text, { quoted: mek })
		           }
			       
		           }
	           })
 break
case 'settype':
if(!isOwner)  return reply(mess.only.ownerB)
if (args.length < 1) return reply(`use o exenplo ${prefix}settype @user/type `)
let s48f = body.slice(9)
var slrfytf= s48f.split("/")[0];
var slrytf = s48f.split("/")[1];
var uio= slrfytf.split("@")[1];
let position454 = false
Object.keys(users).forEach((i) => {
                if (users[i].numero === uio.split('@')[0]) {
                    position454 = i
                }
            })
            if (position454 !== false) {
                nnnn =users[position454].contype
              console.log(nnnn)
                users[position454].contype =''
                users[position454].contype = slrytf
                
                fs.writeFileSync('./database/json/users.json', JSON.stringify(users))
            }
break
case 'setgroupname':
tira = 45
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
if (args.length < 1) return  reply('Nome invalido')
if (args.length > 26) return  reply('Digite um novo nome')
                   if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   albion.groupUpdateSubject(from, `${body.slice(13)}`)
                   albion.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: mek})
                   break
                   case 'setgroupdesc':
tira = 45
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))                   
            if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                albion.groupUpdateDescription(from, `${body.slice(13)}`)
                
                albion.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: mek})
                break

        case 'setname':
         

albion.updatePresence(from, Presence.composing) 
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)

                  youprofile.Botname = args[0]
                 
                 fs.writeFileSync('./database/json/YouProfile.json', JSON.stringify(youprofile))

process.exit(0)
break
       

case 'regras_bonde':
albion.sendMessage(from, regras_bonde(prefix,namebot), text, {quoted: mek})
break
case 'regras_add':
albion.sendMessage(from, regras_add(prefix,namebot), text, {quoted: mek})
break
case 'levelcom':
                albion.sendMessage(from,levelcom(prefix,namebot), text, {quoted: mek})
               break
               case 'menujogos':
               albion.sendMessage(from,menujogos(prefix), text, {quoted: mek})
               break
 

case 'setgroupfoto':
tira = 45
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))

                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    media = await albion.downloadAndSaveMediaMessage(encmedia)
                    await albion.updateProfilePicture (from, media)
                    reply('Alterou com sucesso o ícone do Grupo')
                    break

		case 'levelid':
		tira = 2000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
	        if (!isUser) return reply(mess.only.daftarB)
	if (!usnio.includes(sender.split('@')[0])) return reply('*ACESSO NEGADO*')
                  var hjk =  body.slice(8)



var hjklhjk = Number(hjk);
                  let pos= false
                  vbank = Number(user.length) - 1
                  
               if ( vbank <  hjklhjk) return reply(`Este id ${hjklhjk} não existe no banco de dados`)
 try{
Object.keys(users).forEach((i) => {
pos  = hjklhjk
sem = 0

   
              



 
                nameuser = users[pos].name
                
               
                idadeuser = users[pos].idade
                usernum = users[pos].numero
                usertime = users[pos].time1
                userdate = date
                userdesc = users[pos].desc
                usertype = users[pos].contype
                usergroup= users[pos].Nome_do_grupo
                sem = usernum+'@s.whatsapp.net'
              
                })
                   } catch (e) {
			reply(`Digite um id não uma letra. caso o error persistir fale com wa.me/${String(ownerNumber).split('@')[0]}`)
		}   
                n = ' '
                
if (nameuser === "Desconhecido.") {nameuser = sender.split('@')[0]
n = ' @'} 
               const userLevelg = getLevelingLevel(sem);
                const userXpg = getLevelingXp(sem);
                if (userLevelg === undefined && userXpg === undefined) return reply(mess.levelnol)
                const mejkld = userXpg / 500
                mejklllg = String(mejkld)
                 const rnfghg= 5000 * Math.pow(2, userLevelg)
                console.log(rnfghg)
                console.log(userXpg - rnfghg)
                   var hjlkog = (rnfghg - userXpg) / 500
                   
                   var bnn = String(hjlkog)
                  reply(`${bnn.split('.')[0]}`)
                resul = `◪ *LEVEL*\n  ├─ ❏ *Nome* :${n}${nameuser}\n  ├─ ❏ *User XP* : ${userXpg}\n  ├─ ❏ *Levelcom* : ${usertype}\n  ├─ ❏ *Mensagen* : ${mejklllg.split('.')[0]}\n  ├─ ❏ *Falta* : ${bnn.split('.')[0]} *Mensagens*\n  └─ ❏ *User Level* : ${userLevelg}`
               albion.sendMessage(from, mar(resul), text, { quoted: mek})

                if (!isGroupAdmins) {rpt = 'Não'}
else {rpt = 'Sim'}
rpt = 'Não informado'
const klr =`${from.split("-")[0]}`
if (usernum.split('@')[0] === klr ) {rpt = 'Dono do grupo'}
                albion.sendMessage(from,  perfil(nameuser,usernum, usertime, userdesc, usertype, klr, prefix, sem,userLevelg,rpt,usergroup, groupName, user, apoia1, blocked, date, time,getLevelingXp(sem),idadeuser), text,{quoted: mek, extendedText})


	        break
	        
case 'menu':
case 'pika':
const ing = fs.readFileSync('./assets/menu.jpg')
albion.sendMessage(from, mar(help(prefix, sender,getLevelingLevel(sender), namebot, user, apoia1, blocked, date, time,nameuser,NomerOwner,youprofile.AlbionID,youprofile.face,youprofile.insta )), text, {quoted: mek});

const gttss = require('./lib/gtts')(args[0])

dtt = `Olá ${nameuser} me chamo ${namebot} :esta são as  minhas funções, caso queira mais funções baixe nosso app no site, leia com atenção para saber o que  eu posso fazer por você, caso o menu não seja enviado: pedir novamente por gentileza.`
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? reply('Textnya kebanyakan om')
: gttss.save(ranm, dtt, function() {
	exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
		fs.unlinkSync(ranm)
		buff = fs.readFileSync(rano)
		if (err) return reply(' ')
		albion.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
		fs.unlinkSync(rano)
	})
})

break   
               		
 case 'welcome_bv':
 case 'bmbv':
tira = 7000
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
                    if (!isUser) return reply(mess.only.daftarB)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (Number(args[0]) === 1) {
	if (bdn.includes(from)) return reply('Bem vindo ao meu bonde já esta ativo')
	bdn.push(from)
	fs.writeFileSync('./database/json/bdn.json', JSON.stringify(bdn))
	reply('Agora o bem vindo para bonde está ativo')
break
} else if (Number(args[0]) === 0) {
     if (!bdn.includes(from)) return reply('o registro continua ativo')
	bdn.splice(from, 1)
	fs.writeFileSync('./database/json/bdn.json', JSON.stringify(bdn))
	reply('Agora o bem vindo para bonde está Desativado')}
break

case 'perfil':
tira = 700
userXddp = getLevelingXp(sender)
if (tira >= userXddp ) return reply ('Voçê não possui xp sufciente para isso!')
removexp(sender,Number(tira))
if (duf == 'n') return reply (`*Usuario Não Encontrado*.\n\nDigite ${prefix}daftar nome|idade`)
hasil = `${sender.split('@')[0]}`
if (!isGroupAdmins) {rpt = 'Não'}
else {rpt = 'Sim'}
const oner =`${from.split("-")[0]}`
if (hasil === oner ) {rpt = 'Dono do grupo'}
try {
ppimg = await albion.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let hj = await getBuffer(ppimg)
albion.sendMessage(from, hj, image, {quoted: mek, caption: perfil(nameuser,usernum, usertime, userdesc, usertype, oner, prefix, sender,getLevelingLevel(sender),rpt,usergroup, groupName, user, apoia1, blocked, date, time,getLevelingXp(sender),idadeuser), text, extendedText})
break               		
default:
		if (isCmd && oros != command) {
let se = sender.split('@')[0]
exec("cd database/json; rm at.json ; echo []>>at.json")
g = 0
if (!isGroup){ klo = "*PV*"}
else{
 klo = `Grupo: *${groupName}*`
}
console.log(`\n\x1b[1;31mError\x1b[1;37m ${klo} nome: ${nameuser} numero: ${sender.split('@')[0]} comando ${command} \n`)
                  reply(`\n   *❌ Error detectado ❌*

${klo}

Usuário: *${nameuser}*

Olá *${nameuser}* o comando que você digitou *${command}*,
Não é reconhecido como um comando interno ou externo digite *${prefix}menu* para saber mais
Caso o *${command}*  ESTIVER no menu por  favor reporta imediatamente através do comando *${prefix}bug* para que corrigimos o quanto antes.`)
	
                  }
if (isGroup && isSimi && budy != undefined) {
	console.log(budy)
	muehe = await simih(budy)
	console.log(muehe)
	reply(muehe)
} else {
	console.log(color('[WARN]','red'), 'Comando Não Registrado', color(sender.split('@')[0]))
	
	console.log(`\n\n`)
}
      }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
			console.log(`\n\n`)
		}
	})
}
starts().catch(e => {
console.log(`${e}`)
})
