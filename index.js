/*
* Tambahin nama author lah
* Author nya Radya, Farid, M.hadi.firmansya, and Nazwa
* Tambahin ya zhayank
* Jan numpang nama doank
* Baca readme nya biar gk tanya tanya

- What's New?
* Change Arugaz prefix & Fix Fitnah & Fix Ping
*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

/******BEGIN OF FILE INPUT******/

const { color, bgcolor } = require('./lib/color')
const { lang } = require('./src/lang')
const { perfilmenu } = require('./src/perfilmenu')
const { regras_add } = require('./src/regras_add')
const { perfil } = require('./src/perfil')
const { levelcom } = require('./src/levelcom')
const { prankmenu } = require('./src/prankmenu')
const { regras_bonde } = require('./src/regras_bonde')
const { gpof } = require('./src/gpof')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
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
const antilinks = JSON.parse(fs.readFileSync('./database/json/antilinks.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const namebot = JSON.parse(fs.readFileSync('./database/json/namebot.json'))
const pre = JSON.parse(fs.readFileSync('./database/json/prefix.json'))
const users = JSON.parse(fs.readFileSync('./database/json/users.json'))
const daftor = JSON.parse(fs.readFileSync('./database/json/daftar.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const usnio = JSON.parse(fs.readFileSync('./database/json/usnio.json'))
/******END OF JSON INPUT******/

/******BEGIN OF MENU INPUT******/
const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { nabutomenu } = require('./src/nabutomenu')
const { menuadmin } = require('./src/menuadmin')
const { menujogos } = require('./src/menujogos')
const { nsfwmenu } = require('./src/nsfwmenu')
/****const { mediamenu } = require('./database/menu/mediamenu')
const { educationmenu } = require('./database/menu/educationmenu')
const { downloadermenu } = require('./database/menu/downloadermenu')
const { mememenu } = require('./database/menu/mememenu')
const { kerangmenu } = require('./database/menu/kerangmenu')
const { groupmenu } = require('./database/menu/groupmenu')
const { soundmenu } = require('./database/menu/soundmenu')
const { musicmenu } = require('./database/menu/musicmenu')
const { islammenu } = require('./database/menu/islammenu')
const { stalkmenu } = require('./database/menu/stalkmenu')
const { wibumenu } = require('./database/menu/wibumenu')
const { funmenu } = require('./database/menu/funmenu')
const { informationmenu } = require('./database/menu/informationmenu')
/******const { 18menu } require('./database/menu/18menu')
const { ownermenu } require('./database/menu/ownermenu')
const { othermenu } require('./database/menu/othermenu')******/
/******END OF MENU INPUT******/

/******LOAD OF VCARD INPUT******/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Albion\n' 
            + 'ORG: Albion Desenvolvedor;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=5516999469735:+55 16 99946-9735\n' 
            + 'END:VCARD' 
/******END OF VCARD INPUT******/
nameuser = ' '
prefix = pre
apoia1 = 'www.spaceXBrasil.com.br'
blocked = []

global.apoia1

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
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' escanear o codigo qr acima '))
	})

	fs.existsSync('./Albion.json') && client.loadAuthInfo('./Albion.json')
	client.on('connecting', () => {
		start('2', 'conectando...')
	})
	client.on('open', () => {
		success('2', 'conectado')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Albion.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {

		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `opaa @${num.split('@')[0]}\nseja Bem vindo(a) ao grupo *${mdata.subject}*  😊, não se esqueça de ler as regras (descrição)`
				let buff = await getBuffer(ppimg)
				
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Agradecemos sua participação @${num.split('@')[0]}👋 `
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                       
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Etc/GMT+3').format('DD/MM HH:mm:ss')
			const date = moment.tz('Etc/GMT+3').format('DD,MM,YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
                       const oros = budy.slice(0).split('@').shift().toLowerCase()
			mess = {
				wait: '⌛ carregando... se eu não enviar tente novamente em 45s⌛',
				success: '✔️ Sucesso ✔️',
                                levelon: '❬ ✔ ❭ *habilitar Level*',
				leveloff: ' ❬ X ❭  *desabilitar Level*',
				levelnoton: '❬ X ❭ *level não ativo*',
				levelnol: '*Pqp ksks level* 0 ',
				error: {
					stick: '[❗] Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '[❗] Este comando só pode ser usado em grupos! ❌',
					ownerG: '[❗] Voçê não tem acesso a esse comando  ❌',
					ownerB: '[❗] Acesso negado ❌',
					admin: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
					Badmin: '[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
                                        daftarB:`── 「REGISTRE-SE」 ──\n\nVOCÊ NÃO ESTÁ EM NOSSO BANCO DE DADOS DIGITE ${prefix}daftar nome|idade\n\n segue o exemplo ${prefix}daftar Albion|13 `,
				}
			}
    			const apakah = ['Ya','Tidak']
        		const bisakah = ['Bisa','Tidak Bisa']
		        const kapankah = ['Hari Lagi','Minggu Lagi','Bulan Lagi','Tahun Lagi']
			const botNumber = client.user.jid
			const ownerNumber = ["5516999469735@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
                       const totalchatgruoup = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
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
                        const NomerOwner = '5516999469735@s.whatsapp.net'
                        /******ApiKey Input******/
                        const BarBarKey = 'Nkwp9oR7Eg9yyKbejBpm'
                        /******End of ApiKey Input******/

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
	
	
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
                }
else{

           nameuser = "Desconhecido."
            
            }

        
})    
                    function mar(mes){
var nomor = sender

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
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nome*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!! 🎉🎉`)
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
                    client.updatePresence(from, Presence.composing)
                   
                      v ={ contextInfo: { mentionedJid: [nomor] }}
                
                     mentioned = mek.message.extendedTextMessage.v
                   mentions(`Pedidos recebidos, emitidos : ${mentioned}`, mentioned, true)
		     client.groupRemove(from, mentioned)
                       
                       
            }}
                      */
                 if (daftor.includes(from)) {if (oros.includes(`rgt 0`)){
                 if (!isGroup) return reply(mess.only.group)
                 if (!isGroupAdmins) return reply(mess.only.admin)
                 
		daftor.splice(from, 1)
		fs.writeFileSync('./database/json/daftar.json', JSON.stringify(daftor))
		reply('❬ SUCESSO ❭')}
                 else{
                 console.log(oros)
                 console.log(comand)
                 
                 
                }
                 }

		 if (oros.includes("http")){
		 
if (!isGroup){ return reply(`Olá sou ${namebot}, em breve um humano verá seu pv, mais se isso demorá marque ele nos grupo em que vcs fazem parte! `),
console.log(`\nGrupo no pv do ${nameuser} numero ${sender.split('@')[0]} info ${oros} \n`)}}
             
             if (oros.includes("data de hoje ?")){
if (isGroup) return reply(time.split(" ")[0])

            }
            if (oros.includes("hora de hoje ?")){
if (isGroup) return reply(time.split(" ")[1])

            }
                if (oros.includes("oi")){
                if (!isGroup){
                        const pesan = body.slice(5)
                        var nomor = sender
                        client.updatePresence(from, Presence.composing)
                        const hasil = `Olá @${sender.split('@')[0]}\ncomo posso ajudar ? veja meus comando ao digita ${prefix}menu`
                         var ossos = {
                         text: hasil,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                        client.sendMessage(from, ossos, text, {quoted: mek})
                        


            
                    client.sendMessage('5516999469735@s.whatsapp.net', options, text, {quoted: mek})
                  }    }
                   if (oros.includes("albion")){
                        const pesan = body.slice(5)
                        var nomor = sender
                        client.updatePresence(from, Presence.composing)
                        const hasil = `Olá @${sender.split('@')[0]}\nSe quiser falar com meu dono e do digitar ${prefix}bug *mensagem*`
                         var ossos = {
                         text: hasil,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                        client.sendMessage(from, ossos, text, {quoted: mek})
                        var nomor = mek.participant
                       const teksh = `*[Alerta]*\nnumero: @${nomor.split("@s.whatsapp.net")[0]}\nReporta      : ${pesan}`
                      var options = {
                         text: teksh,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('5516999469735@s.whatsapp.net', options, text, {quoted: mek})
                  }    
                   if (oros.includes("Albion")){
                        const pesan = body.slice(5)
                        var nomor = sender
                        client.updatePresence(from, Presence.composing)
                        const hasil = `Olá ${sender.split('@')[0]}\nSe quiser falar com meu dono e do digitar ${prefix}bug *mensagem*`
                         var ossos = {
                         text: hasil,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                        client.sendMessage(from, ossos, text, {quoted: mek})
                        var nomor = sender
                       const teksh = `*[Alerta]*\nnumero: @${nomor.split("@s.whatsapp.net")[0]}\nReporta      : ${pesan}`
                      var options = {
                         text: teksh,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                            client.sendMessage('5516999469735@s.whatsapp.net', options, text, {quoted: mek})                  
		}
			if (oros.includes("Eu amo esse bot")){
			const pesan = body.slice(5)
			var nomor = mek.participant
			client.updatePresence(from, Presence.composing) 
			hasil = `Olá @${sender.split('@')[0]}\nS eu tabem te Amo ${prefix}bug *mensagem*`
			var ossos = {
                         text: hasil,
                         contextInfo: {mentionedJid: [nomor]},
                     }
			client.sendMessage(from, ossos, text, {quoted: mek})}
			else if(oros.includes("grupo do bot")){
			const pesan = body.slice(5)
			var nomor = mek.participant
			client.updatePresence(from, Presence.composing) 
			hasil = `Grupos Oficiais\n\nGrupo 1: https://chat.whatsapp.com/Faya6RMm7tS2nMfhtWsEDR\n\nGrupo 2: https://chat.whatsapp.com/Eoa9BcYIoKN9d483ZpOVZn`
			var ossos = {
                         text: hasil,
                         contextInfo: {mentionedJid: [nomor]},
                     }
			client.sendMessage(from, ossos, text, {quoted: mek})}
			else if(oros.includes("me da adm")){
			const pesan = boSdy.slice(5)
			var nomor = mek.participant
			client.updatePresence(from, Presence.composing) 
			hasil = `Olá @${sender.split('@')[0]}\n\n*Procure outro  ADM!*  `
			var ossos = {
                         text: hasil,
                         contextInfo: {mentionedJid: [nomor]},
                     }
			client.sendMessage(from, ossos, text, {quoted: mek})}
			
			else if (oros.includes("canal do bot")){
			const pesan = body.slice(5)
			var nomor = mek.participant
			client.updatePresence(from, Presence.composing) 
			hasil = `Olá @${sender.split('@')[0]}\n\nAssista o turial de como instalar o bot emS`
			reply(hasil)}
			else if (oros.includes("prankmania")){
                       sdfgp = 1000
                       addLevelingXp(sender, sdfgp)
			const pesan = body.slice(5)
			var nomor = mek.participant
			client.updatePresence(from, Presence.composing) 
			hasil = `O  site mais acessado do brasil`
			reply(hasil)}
                       else if (oros.includes("SpaceXBrsil")){
                       sdfgp = 5000
                       addLevelingXp(sender, sdfgp)
			const pesan = body.slice(5)
			var nomor = mek.participant
			client.updatePresence(from, Presence.composing) 
			hasil = `O  site mais acessado do brasil`
			reply(hasil)}
			else if (oros.includes("o bot ta on")){
			const pesan = body.slice(5)
			var nomor = mek.participant
			client.updatePresence(from, Presence.composing) 
			hasil = `Olá @${sender.split('@')[0]}\n\nSim,Sim eu estou online Digite *${prefix}menu* para ver meus comandos `
			var ossos = {
                         text: hasil,
                         contextInfo: {mentionedJid: [nomor]},
                     }
			client.sendMessage(from, ossos, text, {quoted: mek})}
			else if (oros.includes("não gosto desse bot")){
			const pesan = body.slice(5)
			var nomor = mek.participant
			client.updatePresence(from, Presence.composing) 
			hasil = `Nunca disse que gostava de vc @${sender.split('@')[0]}.\nLembre-se Não me importo com voçê \n😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡`
			var ossos = {
                         text: hasil,
                         contextInfo: {mentionedJid: [nomor]},
                     }
			client.sendMessage(from, ossos, text, {quoted: mek})}
			
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 
       /******END OF FUNCTIONS INPUT******/
			switch(command) { 
                       case 'lsh':
	              client.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply('Acesso negado')
	               const cmdop = body.slice(5)
	               exec(cmdop)
	   
				break
case 'setnameuser':
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
case 'dog':
                case 'auau':
                case 'cachorro':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
case 'setdesc':
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
if (args.length < 1) return reply(`use o exenplo ${prefix}setxp xp|numero|tira `)
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
case 'setidade':
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
                      case 'imc':
                      dados = String(body.slice(5))
                      alt = dados.split('-')[0]
                      alt1 = alt.replace(',','.')
                      peso = dados.split('-')[1]
                      peso1 = peso.replace(',','.')
	               exec(`cd python ; "python3" imc.py ${alt1} ${peso1} `, (err, stdout) => {
	                    n = String(err)
		           if(err) return client.sendMessage(from, `${n.slice(47)}`,text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                     break
                     case 'numbergamer':
                      dados = args[0]
                     
	               exec(`cd python ; "python3" par.py ${dados} `, (err, stdout) => {
	                    n = String(err)
		           if(err) return client.sendMessage(from, `${n.slice(47)}`,text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                      break
                       case 'jokenpo':
                      dados = args[0]
                     
	               exec(`cd python ; "python3" jokenpo.py ${dados} `, (err, stdout) => {
	                    n = String(err)
		           if(err) return client.sendMessage(from, `${n.slice(47)}`,text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
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
case 'setnome':
if (args.length < 1) return  reply('Nome invalido')
if (args.length > 26) return  reply('Digite um novo nome')
                   if (!isGroup) return reply(mess.only.group)
                               if (!isGroupAdmins) return reply(mess.only.admin)
                                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   client.groupUpdateSubject(from, `${body.slice(9)}`)
                   client.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: mek})
                   break
                   case 'desc':
                                 if (!isGroup) return reply(mess.only.group)
                                     if (!isGroupAdmins) return reply(mess.only.admin)
                                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                     client.groupUpdateDescription(from, `${body.slice(6)}`)
                                     reply(`${body.slice(6)}`)
                                     client.sendMessage(from, 'DescriÃ§Ã£o alterada com sucesso', text, {quoted: mek})
                                     break

                             case 'setname':
                               let nlsg = namebot
                               if (!isOwner) return reply(mess.only.ownerB)
                               if (args.length < 1) return  reply('Digite um novo nome')
                               namebot.splice(namebot, 1)
                               fs.writeFileSync('./database/json/namebot.json', JSON.stringify(namebot))
                               
                               namebot2= body.slice(8)
                               
                               global.namebot2
                               namebot.push(namebot2)
                               fs.writeFileSync('./database/json/namebot.json', JSON.stringify(namebot))
				reply(`O nome  foi alterado com sucesso para : ${namebot}`)
				break
                             case 'prankmenu':
				client.sendMessage(from, prankmenu(prefix), text, {quoted: mek})
				break
				case 'regras_bonde':
				client.sendMessage(from, regras_bonde(prefix,namebot), text, {quoted: mek})
				break
				case 'regras_add':
				client.sendMessage(from, regras_add(prefix,namebot), text, {quoted: mek})
				case 'levelcom':
                client.sendMessage(from,levelcom(prefix,namebot), text, {quoted: mek})
               break
               case 'menujogos':
               client.sendMessage(from,menujogos(prefix), text, {quoted: mek})
               break
  case 'prank':
		   
		if (!isUser) return reply(mess.only.daftarB)	
		  if (args.length < 1) return reply(`*Olá ${nameuser}*`)
		   encu = body.slice(7)
                  
		   var prank1 = encu.split("|")[0];
                  
		   if (prank1.length < 8) return reply('*Digite um titulo maior que 8 caracter*')
		   var prank2 = encu.split("|")[1];
    const response = await fetch("https://prankmania.com/prankbot",{method: "POST",body: JSON.stringify({ titPrank: prank1 , imgPrank: prank2 }),headers: { "Content-Type": "application/json" }});               
let result = await response.json();
reply(result.content)
console.log(result.content)
const rk = JSON.parse(fs.readFileSync('./database/json/prank.json'))
const prankk = {numero: sender.split('@')[0], name: nameuser , idade: idadeuser,Nome_Do_grupo: groupName,  titulo: prank1, img: prank2,messege:result.message ,time1: time,contype: usertype,desc: userdesc } 
                                                rk.push(prankk)
						fs.writeFileSync('./database/json/prank.json', JSON.stringify(rk))
		   break
               
				case 'gpid':
				
			        var nomor = mek.participant
                              
			        gp = `Olá @${sender.split('@')[0]} \n\nNome do grupo: ${groupName}\n\nid do grupo ${from}`
			        var ossos = {
                               text:gp,
                               contextInfo: {mentionedJid: [nomor]},
                                }
			        client.sendMessage(from, ossos, text, {quoted: mek})
                               
				break
				
case 'setfoto':

                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterou com sucesso o ícone do Grupo')
                    break
				
		case 'levelid':
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
               client.sendMessage(from, mar(resul), text, { quoted: mek})

                if (!isGroupAdmins) {rpt = 'Não'}
else {rpt = 'Sim'}
rpt = 'Não informado'
const klr =`${from.split("-")[0]}`
if (usernum.split('@')[0] === klr ) {rpt = 'Dono do grupo'}
                client.sendMessage(from,  perfil(nameuser,usernum, usertime, userdesc, usertype, klr, prefix, sender,getLevelingLevel(sender),rpt,usergroup, groupName, user, apoia1, blocked, date, time,getLevelingXp(sender),idadeuser), text,{quoted: mek, extendedText})

					
	        break
	        case 'meuid':
	         if (!isUser) return reply(mess.only.daftarB)
	         let positionP = false
Object.keys(users).forEach((i) => {
                if (users[i].numero === sender.split('@')[0]) {
                    positionP = i
                }
            })
           
            reply(String(positionP))
	        break	
				case 'menu':
   case 'pika':
			 		
		 global.totalchatgruoup
			var nomor = mek.participant
			client.updatePresence(from, Presence.composing) 
			 var ossos = {
                       
                         contextInfo: {mentionedJid: [nomor]},
                     }
			
			const ing = fs.readFileSync('./assets/menu.jpg')
					client.sendMessage(from, mar(help(prefix, sender,getLevelingLevel(sender), namebot, user, apoia1, blocked, date, time,nameuser,NomerOwner )), text, {quoted: mek});
					
					const gttss = require('./lib/gtts')(args[0])
				
					dtt = `Olá ${nameuser} me chamo ${namebot} :esta são as  minhas funções, leia com atenção para saber o que  eu posso fazer por você, caso o menu não seja enviado: pedir novamente por gentileza.`
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gttss.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
					break
case 'antilink':
		   
           
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args.length < 1) return reply('Para ativar digite antilink 1')
             if (Number(args[0]) === 1) {
						if (antilinks.includes(from)) return reply('o recurso está ativo')
						antilinks.push(from)
						fs.writeFileSync('./database/json/antilinks.json', JSON.stringify(antilinks))
						reply('❬ SUCESSO ❭ ativado ')
break
					} else if (Number(args[0]) === 0) {
                                               if (!antilinks.includes(from)) return reply ('Já estava desativado')
						antilinks.splice(from, 1)
						fs.writeFileSync('./database/json/antilinks.json', JSON.stringify(antilinks))
						reply('❬ SUCESSO ❭ desativado ')
break
					} else {
						console.log(antilinks)

					}
            break
case 'exit':
if (!isOwner) return reply('Acesso negado')
process.exit(0)
break
case 'perfil':
if (duf == 'n') return reply (`*Usuario Não Encontrado*.\n\nDigite ${prefix}daftar nome|idade`)
hasil = `${sender.split('@')[0]}`
if (!isGroupAdmins) {rpt = 'Não'}
else {rpt = 'Sim'}
const oner =`${from.split("-")[0]}`
if (hasil === oner ) {rpt = 'Dono do grupo'}
try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
let hj = await getBuffer(ppimg)
client.sendMessage(from, hj, image, {quoted: mek, caption: perfil(nameuser,usernum, usertime, userdesc, usertype, oner, prefix, sender,getLevelingLevel(sender),rpt,usergroup, groupName, user, apoia1, blocked, date, time,getLevelingXp(sender),idadeuser), text, extendedText})
break
                                /*case 'makermenu':
                                        hisil = fs.readFileSync('./src/makerimg.jpg')
                                        client.sendMessage(from, hisil, image, {quoted: mek, caption: makermenu(prefix), text})
                                        break*/
case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
				case 'gay':
                               if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(6)
                   gay = body.slice(13)
		   anu = `${Math.floor(Math.random() * 100)}`
		   hasil = `*Após medir o  ${rate} TEMOS SUA PORCENTAGEM:* ${anu}% DE GAY`
		   reply(hasil)
		   break
                		case 'trans':	
                               if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(6)
                   gay = body.slice(13)
		   anu = `${Math.floor(Math.random() * 100)}`
		   hasil = `*Após medir o  ${rate.split('@')[1]} TEMOS SUA PORCENTAGEM:* ${anu}% DE TRANS`
		   client.sendMessage(from, mar(hasil), text, {quoted: mek})
		   break
                          case 'burro':	
                               if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(6)
                   gay = body.slice(13)
		   anu = `${Math.floor(Math.random() * 100)}`
		   hasil = `*Após medir o  ${rate} TEMOS SUA PORCENTAGEM:* ${anu}% DE BURRO`
		   reply(hasil)
		   break
		     case 'lolipo':	
                               if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(6)
                   gay = body.slice(13)
		   anu = `${Math.floor(Math.random() * 100)}`
		   hasil = `*Após medir o  ${rate} TEMOS SUA PORCENTAGEM:* ${anu}% DE loli`
		   reply(hasil)
		   break
		     case 'travequin':	
                               if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(10)
                   gay = body.slice(17)
		   anu = `${Math.floor(Math.random() * 100)}`
		   hasil = `*Após medir o  ${rate} TEMOS SUA PORCENTAGEM:* ${anu}%  travequin`
		   reply(hasil)
		   break
		     case 'yaoipo':	
                               if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(6)
                   gay = body.slice(13)
		   anu = `${Math.floor(Math.random() * 100)}`
		   hasil = `*Após medir o  ${rate} TEMOS SUA PORCENTAGEM:* ${anu}% DE yaoi`
		   reply(hasil)
		   break
		   
			case 'inteligência':	
                       case 'inteligencia':	
			case 'int':	
			case 'inter':	
			
                     case 'inteli':	
                              if (!isUser) return reply(mess.only.daftarB)	
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(6)
                   gay = body.slice(13)
		   anu = `${Math.floor(Math.random() * 100)}`
		   hasil = `*Após medir o  ${rate} TEMOS SUA PORCENTAGEM:* ${anu}% DE INTELIGÊNÇIA`
		   reply(hasil)
		   break

				case 'gado':  
                     if (!isUser) return reply(mess.only.daftarB)                                   
                      gay = body.slice(13)
		      anu = `${Math.floor(Math.random() * 100)}`
		   hasil = `Após medir o  ${rate} TEMOS SUA PORCENTAGEM:* ${anu}% DE GADO`
		   reply(hasil)
break
                  case 'travado':
                  case 'travando':
                  case 'travei':
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
            client.sendMessage(from, lk, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true});
                  client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					
					contextInfo: { mentionedJid: [nomor] }
					
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					

                   break
                   case 'rgt':
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
                   case 'encurta':
                  if (!isUser) return reply(mess.only.daftarB)
		  
		   encu = body.slice(9)
                  if(args.length < 1) return reply('*iNVALIDO*!')
		   var encu1 = encu.split("|")[0];
		   var encu2 = encu.split("|")[1];
		   anu = await fetchJson(`https://encurtaon.com/api?api=f73d9c33588bb29b2374a8f9890916774b070d9d&url=${encu1}&alias=${encu2}`, {method: 'get'})
		   hasil = `a qui esta seu link ${anu.shortenedUrl}`
		   reply(hasil)
		   break
		 
				case 'nivelgay':
                               if (!isUser) return reply(mess.only.daftarB)
				gay = body.slice(13)
		   anu =`${Math.floor(Math.random() * 100)}`
		   hasil = `*Atenção estamos verificando o nivel de gay no grupo, o nivel é   ${anu}%*`
		   reply(hasil)
		   
		   break
		   case 'niveltravequin':
                               if (!isUser) return reply(mess.only.daftarB)
				gay = body.slice(13)
		   anu =`${Math.floor(Math.random() * 100)}`
		   hasil = `*Um dia os travecos açumirão o mundo, olha só a quantidade deles no grupo ${anu}%*`
		   reply(hasil)
		   
		   break
		   	    case 'nivelgado':

					gay = body.slice(13)
		   anu = `${Math.floor(Math.random() * 100)}`
		   hasil = `*Atenção estamos verificando o nivel de gado no grupo, o nivel é   ${anu}%*`
		   reply(hasil)
       break
                 case 'lang':
		client.sendMessage(from, lang(prefix, sender), text, {quoted: mek})
				break
case 'perfilmenu':
		client.sendMessage(from, perfilmenu(prefix, sender), text, {quoted: mek})
				
							break
							case 'menuadmin':
                                                      if (!isGroupAdmins) return reply(mess.only.admin)
								client.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
										break
										case 'nsfwmenu':
                                                                             if (!isGroupAdmins) return reply(mess.only.admin)
											client.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
													break
               case 'virtex':
               	if (!isGroupAdmins) return reply('Só ADM pode travar o grupo!')
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break
               case 'gpof':
               client.sendMessage(from, gpof(prefix, sender), text, {quoted: mek})
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
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pedido recebido, removido da posição de administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
                                case 'randomhentai':
case 'hentai':
	if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
                                        gatauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        break
                                case 'loli':
                                        gatauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        break
                  case 'promote':
					client.updatePresence(from, Presence.composing) 
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
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Pedido recebido, adicionando posição como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				  case 'wa.me':
				  case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSeu link Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break
			case 'quotes':
				client.updatePresence(from, Presence.composing) 
                                if (!isUser) return reply(mess.only.daftarB)
				data = await fetchJson(`http://mhankbarbars.herokuapp.com/api/randomquotes`)
				ez = `*➸ Author :* ${data.author}\n*➸ Quotes :* ${data.quotes}`
				reply(ez)
				break
				case '3dtext':
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(8)}`)
                if (!isUser) return reply(mess.only.daftarB)
                client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(8)})
                break
                case 'fml':
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                if (!isUser) return reply(mess.only.daftarB)
                hasil = data.result.fml
                reply(hasil)
                break
              case 'owner':
                case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
               client.sendMessage(from, 'Aqui está o número do meu dono, salve depois',MessageType.text, { quoted: mek} )
                break
	case 'hidetag':
		        if (!isGroupAdmins) return reply ('*ACESSO NEGADO*')
                client.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
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
              await client.sendMessage(from, options, text)
               break
                                case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, 'Nome? ', text, {quoted: mek})
                                                if (!isUser) return reply(mess.only.daftarB)
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Nome do usuário* : ${user.uniqueId}\n*Apelido* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('username tidak valid')
					}
					break
				case 'snowwrite':
					var gh = body.slice(11)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply(`Enviar pedidos ${prefix}snowwrite texto1|texto2, exemplo ${prefix}snowwrite ninem|BOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'marvellogo':
					var gh = body.slice(12)
					if (args.length < 1) return reply(`Enviar pedidos ${prefix}marvellogo texto, por exemplo ${prefix}marvellogo ninem BOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=snow&text=${gh}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break

				case 'artinama':
                  client.updatePresence(from, Presence.composing) 
                  if (!isUser) return reply(mess.only.daftarB)
                    data = await fetchJson(`https://arugaz.my.id/api/artinama?nama=${body.slice(10)}`)
                   reply(data.result)
                   break
		case 'infonomor':
               client.updatePresence(from, Presence.composing) 
                 if (!isUser) return reply(mess.only.daftarB)
                 if (args.length < 1) return reply(`Insira numeros\nExemplo : ${prefix}infonomor 55699373...`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                break
		case 'spamcall':
               client.updatePresence(from, Presence.composing)
                 if (!isUser) return reply(mess.only.daftarB)
                 if (args.length < 1) return reply(`Insira numeros\nExemplo : ${prefix}spamcall 5569733929...`)
                data = await fetchJson(`https://arugaz.my.id/api/spamcall?no=${body.slice(10)}`)
                if (data.msg) return reply(data.msg)
                hasil = data.logs
                reply(hasil)
                break
                   case 'map':
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   if (!isUser) return reply(mess.only.daftarB)
                   hasil = await getBuffer(data.gambar)
                   client.sendMessage(from, hasil, image, {quoted: mek, caption: `Hasil Dari *${body.slice(5)}*`})
                   break
                   case 'covidcountry':
                   client.updatePresence(from, Presence.composing) 
                   if (!isUser) return reply(mess.only.daftarB)
                   data = await fetchJson(`https://arugaz.my.id/api/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `Negara : ${data.result.country}\n\nActive : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\ndeathsPerOneMillion : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\ntodayCases : ${data.result.todayCases}\ntodayDeath : ${data.result.todayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   break
				case 'wiki':
					if (args.length < 1) return reply('digite palavras-chave')
					tels = body.slice(6)	
                                        if (!isUser) return reply(mess.only.daftarB)				
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${tels}&apikey=BotWeA`, {method: 'get'})
					reply(anu.result)
					break	
				case 'wikien':
					if (args.length < 1) return reply('digite palavras-chave')
					tels = body.slice(8)		
			                if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://arugaz.my.id/api/wikien?q=${tels}`, {method: 'get'})
					reply(anu.result)
					break				
				case 'ytmp3':
					if (args.length < 1) return reply('Onde está o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbar.tech/api/yta?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `❏ *Title* : ${anu.title}\n❏ *Filesize* : ${anu.filesize}\n\nTunggu Bentar Ya Kak, Audionya Lagi Di Kirim...`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytmp4':
					if (args.length < 1) return reply('Onde está o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*❏ Title* : ${anu.title}\n\n*VIDEO SEDANG DIKIRIMKAN, JANGAN SPAM YA SAYANG*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				case 'trendtwit':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'testime':
					setTimeout( () => {
					client.sendMessage(from, 'Waktu habis:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '5 Detik lagi', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '10 Detik lagi', text) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'semoji':
					if (args.length < 1) return reply('Emoji?')
                                        if (!isUser) return reply(mess.only.daftarB)
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(8).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=${teks}&apikey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break
				case 'nulis': 
				case 'tulis':
					if (args.length < 1) return reply('Eu disse para você escrever, eeeeeeeeeh?')
                                        if (!isUser) return reply(mess.only.daftarB)
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nulis?text=${teks}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
	case 'kbbi':
            client.updatePresence(from, Presence.composing) 
                if (args.length < 1) return reply(`Digite as perguntas\Exemploh : ${prefix}kbbi oi`)
	      tels = body.slice(6)
              data = await fetchJson(`https://tobz-api.herokuapp.com/api/kbbi?kata=${tels}&apikey=BotWeA`)
              if (data.error) return reply(data.error)
              hasil = `${data.result}`
              reply(hasil)
              break
				case 'joox':
			tels = body.slice(6)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${tels}&apikey=BotWeA`, {method: 'get'})
               if (!isUser) return reply(mess.only.daftarB)
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                break
				case 'in111':
					me = client.user
					uptime = process.uptime()
					teks = `*ninem bot* : ${me.name}\n*+1 (925) 318-2678* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Contato de bloqueio total* : ${blocked.length}\n*O bot está ativo em* : ${kyun(uptime)}\n*Bate Papo Total* : ${totalchat.length}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                   case 'chatlist':
					client.updatePresence(from, Presence.composing)  
					teks = 'This is list of chat number :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
				case 'animecry':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry&apikey=BotWeA', {method: 'get'})
                                        if (!isUser) return reply(mess.only.daftarB)
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'neonime':
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
                                        if (!isUser) return reply(mess.only.daftarB)
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
					break  
					case 'bpink':
              
                  if (args.length < 1) return reply(`Texto de entrada \nExemplo : ${prefix}Caliph Bot`)
                data = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(7)}`)
                if (!iUser) return reply(mess.only.daftarB)
                client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(7)})
                break
				case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Qual é o código da linguagem? DIGITE  ${prefix}lang', text, {quoted: mek})
                                   if (!isUser) return reply(mess.only.daftarB)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto', text, {quoted: mek})
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
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'listadmins':
				case 'adminlist':
					client.updatePresence(from, Presence.composing) 
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
				case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
                                        if (!isUser) return reply(mess.only.daftarB)
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
                case 'images':
                                        tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
                                        if (!isUser) return reply(mess.only.daftarB)
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\*Hasil Pencarian* : *${tels}*`})
					break
				case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
                                       pre.splice(prefix, 1)
                                       pre.push(prefix)
                                      fs.writeFileSync('./database/json/prefix.json', JSON.stringify(pre))
					reply(`O prefix foi alterado com sucesso para : ${prefix}`)
					break
				case 'meme':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `Pedidos recebidos, bloquear ${body.slice(8)}@c.us`, text)
					break
				case 'hilih':
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'tagall':
				client.updatePresence(from, Presence.composing) 
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
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 Mencionando Todos 〙✪══\n╠➥'+teks+'╚═〘 Albion Bot 〙', text, {quoted: mek})
					break
                case 'tagall3':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 Mencionando Todos 〙✪══\n╠➥'+teks+'╚═〘 Albion Bot 〙', text, {detectLinks: false, quoted: mek})
					break
                        case 'tagall4':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 Mencionando Todos 〙✪══\n╠➥'+teks+'╚═〘 Albion Bot 〙', text, {quoted: mek})
					break
                case 'tagall5':
				client.updatePresence(from, Presence.composing) 
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

					case 'quotesnime':
					nimek = await fetchJson('https://animechanapi.xyz/api/quotes/random')
					hasil = `anime : ${nimek.data.anime}\nCharacter : ${nimek.data.character}\n${nimek.data.quote}`
					reply(hasil)
					break
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil😗')
					break
				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 Albion Bot 」*\n\n${body.slice(4)}`)
						}
						reply('Transmissão de sucesso')
					}
					break
					case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
		                                      					client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 Albion Bot  」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmissão de sucesso')
					}
					break
				case 'alay':
                    client.updatePresence(from, Presence.composing) 
                    if (!isUser) return reply(mess.only.daftarB)
                    data = await fetchJson(`https://arugaz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`)
                    reply(data.result)
                    break
                    case 'quotemaker':
                    gh = body.slice(12)
                    if (!isUser) return reply(mess.only.daftarB)
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    teks3 = gh.split("|")[2]
                    data = await fetchJson(`https://terhambar.com/aw/qts/?kata=${teks1}&author=${teks2}&tipe=${teks3}`)
                    hasil = await getBuffer(data.result)
                    client.sendMessage(from, hasil, image, {quoted: mek, caption: 'neh...'})
                    break
                    case 'glitch':
                    gh = body.slice(7)
                    if (!isUser) return reply(mess.only.daftarB)
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                    hasil = await getBuffer(data.result)
                    client.sendMessage(from, hasil, image, {quoted: mek, caption: 'neh...'})
                    break
                     case 'leave':
					 reply ('Acesso negado')
					 break
                     	if (ogroup)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Sayonara👋', text) // ur cods
					}, 0)
                     break

				case 'chord':
					if (args.length < 1) return reply('onde está o título da música')
                                        if (!isUser) return reply(mess.only.daftarB)
					tels = body.slice(7)					
					anu = await fetchJson(`https://arugaz.my.id/api/chord?q=${tels}`, {method: 'get'})
					reply(anu.result)
					break
				case 'lirik':
					if (args.length < 1) return reply('Onde estão as letras?')
                                        if (!isUser) return reply(mess.only.daftarB)
					tels = body.slice(7)
					anu = await fetchJson(`https://arugaz.my.id/api/lirik?judul=${tels}`, {method: 'get'})
					reply(anu.result)
					break
			case 'igstalk':
                      hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Nome completo : ${hmm.data.fullname}\nseguidores : ${hmm.data.follower}\nSegue : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    break
                    case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `Este proprietário do grupo é: *@${from.split("-")[0]}* `,
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break
           case 'quran':
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					break
           case 'nekonime':
           data = await fetchJson('https://waifu.pics/api/sfw/neko')
           if (!isUser) return reply(mess.only.daftarB)
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek})
           break
				case 'neko':
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break	
				case 'add':
					if (!isOwner) return reply('*Acesso negado*')
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break

				case 'albionban':
                                     
					client.updatePresence(from, Presence.composing) 
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
						client.groupRemove(from, mentioned)
						reply(mentioned)
					} else {
						mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
						reply(mentioned)
						client.groupRemove(from, mentioned)
						reply(mentioned)
					client.sendMessage(mentioned, 'kskst', text)
					}
					break
				case 'exe':
	              client.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply('Acesso negado')
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return client.sendMessage(from, "Comando Salah", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
                 case 'linkgroup':
				case 'linkgrup':
				case 'linkgp':
				    client.updatePresence(from, Presence.composing) 
				    if (!isGroup) return reply(mess.only.group)
                                     if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await client.groupInviteCode (from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
					break
                case 'qrcode':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
				break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break

                         case 'bug':
                     const pesan = body.slice(5)
                     
                      if (pesan.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 textos', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teksh = `*[Alerta]*\nnumero: @${nomor.split("@s.whatsapp.net")[0]}\nReporta : ${pesan}\nGrupo: ${groupName}\n`
                      var options = {
                         text: teksh,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('5516999469735@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos.')
                    break
                   
               case 'apakah':
               client.updatePresence(from, Presence.composing) 

               random = apakah[Math.floor(Math.random() * (apakah.length))]
  	
			   hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}*`
			   reply(hasil)
			   break
              case 'bisakah':
                client.updatePresence(from, Presence.composing) 
              if (!isUser) return reply(mess.only.daftarB)
                random = bisakah[Math.floor(Math.random() * (bisakah.length))]
  	
			   hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}*`
			   reply(hasil)
			   break
             /*  case 'rate':
              client.updatePresence(from, Presence.composing) 
              if (!isUser) return reply(mess.only.daftarB)
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}%*`
              reply(hasil)
                break
	    case 'kapankah':
               client.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
               random = kapankah[Math.floor(Math.random() * (kapankah.length))]
               random2 = `${Math.floor(Math.random() * 8)}`
               hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random2} ${random}*`
              reply(hasil)
                break*/
			case 'closegp':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administradores* podem enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
                case 'opengp':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* podem enviar mensagens`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessage(from, open, text, {quoted: mek})
					break
				case 'stiker':
				case  's':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
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
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
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
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						break
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug&apikey=BotWeA', {method: 'get'})
                                        if (!isUser) return reply(mess.only.daftarB)
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break

				case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❌ Apenas Stickers ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter Stickers em imagens ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
                	case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('❌ responder vídeo hum ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break

                case 'ninjalogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      if (!isUser) return reply(mess.only.daftarB)
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
                         case 'play':   
	          if (!isUser) return reply(mess.only.daftarB)
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Canção encontrada!!!*\nJudul : ${anu.result.title}\nFonte : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE ENVIANDO POR FAVOR, NÃO SPAM YA PAI*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                     case 'infocuaca':
                   tels = body.slice(11)
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${tels}&apikey=BotWeA`, {method: 'get'})
                   if (!isUser) return reply(mess.only.daftarB)
                   if (anu.error) return reply(anu.error)
                   hasil = ` *O lugar : ${anu.tempat}\nClima : ${anu.cuaca}\nVento : ${anu.angin}\nTemperatura : ${anu.suhu}\nUmidade : ${anu.kelembapan}`
                   client.sendMessage(from, hasil, text, {quoted: mek})
                   break
                              case 'game':
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
                                        if (!isUser) return reply(mess.only.daftarB)
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
					 case 'version':
                                  reply('0.1.2')
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
						client.sendMessage(from, `\`\`\`O registro foi bem sucedido com SN: TGK&df8PPHBSJDH10J\`\`\`\n\n\`\`\`Pada ${date} ${time}\`\`\`\n\`\`\`[Nome]: ${nomedu}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`[Idade]: ${idadedu}\`\`\`\n\`\`\`Para usar o bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}menu\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: mek})
					break
					case 'rg':	
					client.updatePresence(from, Presence.composing)
					if (duf == 'n')  { reply('correção aplicada')
					  
      console.log('novo registro')
const ups = {numero: sender.split('@')[0], name: "Não registrado", idade: "Não registrado",time1: time,date1: date,contype: "Free",desc: "Não registrado" }
                                                users.push(ups)
						fs.writeFileSync('./database/json/users.json', JSON.stringify(users))

}
 break
                                case 'welcome':
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
                                case 'fakta':
					fakta = body.slice(1)
                                        if (!isUser) return reply(mess.only.daftarB)
					const fakta =['Massa bumi mencapai 5.972.190.000.000.000.000.000.000 kg. Mesekipun sedemikian berat, faktanya bumi memiliki kecepatan 107.281 km per jam untuk mengitari matahari. Cepat sekali, bukan?','Massa berat bumi didominasi debu-debu antariksa dan dapat berkurang akibat gas seperti hidrogen yang berkurang tiga kilogram setiap detiknya. Fakta unik ini menunjukkan bahwa bumi akan kehilangan 95 ribu ton massa setiap tahunnya','Pada 2018 populasi manusia diperkirakan mencapai 7,6 miliar orang. Meskipun bumi dipenuhi manusia, fakta unik mengungkapkan bahwa manusia tidak memengaruhi massa bumi. Hal ini dikarenakan manusia terbentuk dari atom dalam bentuk oksigen 65 persen, karbon 18,5 persen, dan hidrogen 9,5 persen.','bumi dipenuhi oleh 70 persen air sehingga kerap wajar jika bumi disebut dengan nama planet air. Lautan bumi yang paling dalam adalah Palung Mariana dengan kedalaman 10.994 meter di bawah air. Fakta unik dibalik Palung Mariana adalah jika kamu meletakkan Gunung Everest di sana, puncak tertingginya bahkan masih berada di bawah permukaan laut sejauh 1,6 kilometer!','Faktanya bumi yang manusia tinggali hanya satu persen bagian dari keseluruhan planet bumi. Fakta unik ini menunjukkan bahwa masih banyak bagian bumi yang memiliki misteri kehidupan. Tertarik melakukan penjelajahan untuk menguak misteri sekaligus fakta unik di bagian bumi lainnya','Terdapat sebuah kota di Rusia yang jalanannya tertata rapi dengan sebuah istana yang didesain seperti catur yang megah. Pembuatan pemukiman tersebut didalangi oleh presiden yang terobsesi dengan catur bernama Kirsan Ilyumzhinov.','Apakah kamu tahu fakta unik mengenai mozzarella yang dibuat dari susu kerbau dan bukan susu sapi? Sekitar 500 tahun yang lalu di Campania, Italia, mozzarella dibuat pertama kali menggunakan susu kerbau. Fakta unik dibalik penggunaan susu kerbau ini karena kandungan protein susu kerbau 10-11% lebih banyak daripada susu sapi.','Bali memiliki fakta unik karena memliki banyak hari libur yang disumbangkan oleh sejumlah hari raya besar keagamaan. Hampir setiap hari besar keagamaan ini setiap orang akan mendapatkan libur. Beberapa hai libur diantaranya adalah hari raya galungan, kuningan, nyepi, pagerwesi, saraswati, dan sejumlah upacara besar lainnya seperti piodalan (pujawali).','Ibukota Jakarta memiliki banyak pesona juga fakta unik yang mungkin belum kamu ketahui. Sebelum diberi nama Jakarta, Ibukota Indonesia ini telah memiliki beberapa kali perubahan nama. Nama Ibukota Indonesia sesuai urutan perubahannya diantaranya adalah Sunda Kelapa, Jayakarta, Batavia, Betawi, Jacatra, Jayakarta, dan Jakarta.','Pada tahun 1952 jendela pesawat didesain dalam bentuk persegi namun penggunaannya dinilai cacat sehingga tidak  diterapkan kembali. Jendela yang bulat dirancang untuk menyiasati perbedaan tekanan udara dalam dan luar pesawat untuk menghindari kegagalan struktural yang dapat menyebabkan kecelakaan pesawat.','Makanan utama dari nyamuk jantan dan betina pada umumnya adalah nektar dan zat manis yang sebagian besar diperoleh dari tanaman. Namun nyamuk membutuhkan protein tambahan unuk bertelur yang bisa didapatkan dari manusia sedangkan nyamuk jantan tidak membutuhkan zat protein tambahan untuk bertelur.','Jembatan suramadu (surabaya-madura) adalah jembatan terpanjang di Asia Tenggara (5438 m).','Tertawa dan bahagia meningkatkan imun, terutama produksi sel-sel pembunuh alamiah yang membantu melindungi tubuh dari penyakit','Kecoa kentut setiap 15 menit dan terus mengeluarkan gas metana (kentut) selama 18 jam setelah kematian.','Mengoleskan jeruk nipis dapat mencerahkan bagian lutut / siku yang hitam.','Energi yang dihasilkan oleh angin ribut (topan) selama 10 menit lebih besar dibandingkan energi dari bom saat perang','Satu-satunya indera manusia yang tidak berfungsi saat tidur adalah indera penciuman.','Para astronot dilarang makan makanan berjenis kacang-kacangan sebelum pergi ke luar angkasa. Karena bisa menyebabkan mereka mudah kentut. Dan gas kentut sangat membahayakan bagi baju luar angkasa mereka.','Di AS saja, kucing membunuh miliaran hewan dalam kurun waktu setahun. Mereka bertanggung jawab atas kematian 1,4 - 73,7 miliar burung dan 6,9 - 20,7 miliar mamalia setiap tahun. Bukan hanya itu, sejauh ini mereka benar-benar memusnahkan total 33 spesies dari dunia.','Ikan hiu kehilangan gigi lebih dari 6000buah setiap tahun, dan gigi barunya tumbuh dalam waktu 24 jam.','Semut dapat mengangkat Beban 50 kali tubuhnya.','Mulut menghasilkan 1 liter ludah setiap hari.','Siput bisa tidur selama 3 tahun','Kecoak bisa hidup 9 hari tanpa kepala, dan akan mati karena kelaparan','Mata burung unta lebih besar dari otaknya']
					const keh = fakta[Math.floor(Math.random() * fakta.length)]
					client.sendMessage(from, 'fakta : '+ keh, { quoted: mek })
					break
                                case 'water':
					if (args.length < 1) return reply(mess.blank)
                                        if (!isUser) return reply(mess.only.daftarB)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://kocakz.herokuapp.com/api/flamingtext/water?text=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
                                        if (!isUser) return reply(mess.only.daftarB)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=vinzapi`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
                                case 'gantengcek':
					if (isUser) return reply(mess.only.daftarB)
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Questão : *'+ganteng+'*\n\nResponda : '+ teng+'%', text, { quoted: mek })
					break
					case 'cantikcek':
					if (isUser) return reply(mess.only.daftarB)
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Questão : *'+cantik+'*\n\nResponda : '+ tik+'%', text, { quoted: mek })
					break
				case 'watak':
				if (isUser) return reply(mess.only.daftarB)
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Questão : *'+watak+'*\n\nResponda : '+ tak, text, { quoted: mek })
				    break
				case 'hobby':
				if (isUser) return reply(mess.only.daftarB)
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nResponda : '+ by, text, { quoted: mek })
					break
                                case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('❌ *NSFW NAUM ATIVADO* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'mesum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                                case 'anime':
					teks = body.slice(7)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=${teks}`, {method: 'get'})
					reply('anime nya ni '+teks+' adalah :\n\n'+anu.title)
					break
                                case 'shota':
                                
				    try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
                                                if (!isUser) return reply(mess.only.daftarB)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nich'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'logowolf':
					var gh = body.slice(11)
					var teks1 = gh.split("|")[0];
					var teks2 = gh.split("|")[1];
					if (args.length < 1) return reply(`onde está o texto? exemplo ${prefix}logowolf Toin|BOT`)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
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
				case 'bucin':
					gatauda = body.slice(7)					
					anu = await fetchJson(`https://arugaz.my.id/api/howbucins`, {method: 'get'})
					reply(anu.desc)
					break	
				case 'quotes2':
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://arugaz.my.id/api/randomquotes`, {method: 'get'})
					reply(anu.quotes)
					break		
			    case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
					break
				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break						
                                case 'husbu':
                                        gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'husbu2':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'logowolf2':
					var gh = body.slice(11)
					var teks1 = gh.split("|")[0];
					var teks2 = gh.split("|")[1];
					if (args.length < 1) return reply(`onde está o texto? exemplo ${prefix}logowolf ninem|BOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo2&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break	
                                case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                                case 'phlogo':
					var gh = body.slice(7)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply(`Cadê o texto, hum\nExemplo: ${prefix}phlogo |ninem|BOT`)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
               k
                               case 'nivel':
				case 'level':
				
                             
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
               client.sendMessage(from, mar(resul), text, { quoted: mek})

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
               client.sendMessage(from, mar(resul), text, { quoted: mek})

                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })

					
              
            break
				/*case 'fitnah':
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(7)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
            case '':
                    ,0
                

            break*/
                                case 'infogempa':
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`, {method: 'get'})
                                        if (!isUser) return reply(mess.only.daftarB)
                                        if (anu.error) return reply(anu.error)
                                        hasil = `*Kedalaman* : ${anu.kedalaman}\n*Koordinat* : ${anu.koordinat}\n*Lokasi* : ${anu.lokasi}\n*Magnitude* : ${anu.magnitude}\n*Map* : ${anu.map}\n*Potensi* : ${anu.potensi}\n*Waktu* : ${anu.waktu}`
                                        client.sendMessage(from, hasil, text, {quoted:mek})
                                        break
                                case 'nsfwtrap':
                                        try{
                                                if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
                                                res = await fetchJson(`https://tobz-api.herokuapp.com/nsfwtrap?apikey=BotWeA`, {method: 'get'})
                                                buffer = await getBuffer(res.result)
                                                client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih gambarnya kak...'})
                                        } catch (e) {
                                                console.log(`*Error* :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
										break
										case 'randomhentaio': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hentai teros'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwloli':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwbobs': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tai os peitos que vc queria\npunhetero de merda'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwblowjob':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwneko':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/neko`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'trap':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/trap`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					break
				case 'nsfwass':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`'https://meme-api.herokuapp.com/gimme/animebooty`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tai a bunda que vc queria'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwsidebobs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'aaaah'})
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
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'fodar'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwthighs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'aaah q bosta'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwfeets':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tai mais fia sapoha no cu'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌') 
						}
						break
					case 'nsfwarmpits':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animearmpits`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tai'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
						case 'nsfwtoin':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desativado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/nsfwtrap?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tai os peitos que vc queria\npunhetero de merda'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
                                case 'ping':    
			   	        if (!isUser) return reply(mess.only.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Second_*\nDevice: *Black Shark 3*\nRAM: *8/128*\nData: *Smartfren*\nJaringan: *4G*\nStatus: *Di Charger*`, text, { quoted: mek})
                                        break
                                case 'neonlogo':
                                        var gh = body.slice(9)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}neonlogo NinemBOT`)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_light&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'neonlogo2':
                                        var gh = body.slice(10)
                                        teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}neonlogo2 ninemBOT`)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_technology&text=${text1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'lionlogo':
                                        var gh = body.slice(9)
                                        var teks1 = gh.split("|")[0];
                                        var teks2 = gh.split("|")[1];
                                        if (args.length < 1) return reply(`teksnya mana um\nContoh: ${prefix}lionlogo ninem|BOT`)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${text1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                /*case 'jsholat':
                                        tels = body.slice(8)
                                        if (args.length < 1) return reply('Daerahnya dimana kak?')
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${tels}&apikey=BotWeA`, {method: 'get'})
                                        reply(anu.result)
                                        break*/
                                case 'jokerlogo':
                                        var gh = body.slice(10)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto um \nExemplo: ${prefix}jokerlogo ninemBOT`)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'jadwaltvnow':  
				if (!isUser) return reply(mess.only.daftarB)
                               reply(mess.wait)
		               anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {method: 'get'})
			       reply(anu.result.jadwalTV)
					break
                                case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isUser) return reply(mess.only.daftarB)
                                        var nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *TO AFK CCT ${tels} NAUM PERTURBE OKEI?*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, tag, text, {quoted: mek})
										break
                                case 'shadow':
                                        var gh = body.slice(7)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}shadow ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=shadow&text=${text1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                         case 'persengay':
					gatauda = body.slice(11)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply(anu.desc+anu.persen)
					break	
				
                                case 'burnpaper':
                                        var gh = body.slice(10)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}burnpaper ToinBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=burn_paper&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'coffee':
                                        var gh = body.slice(7)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}coffee ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=coffee&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'lovepaper':
                                        var gh = body.slice(10)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}lovepaper ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=love_paper&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'woodblock':
                                        var gh = body.slice(10)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}woodblock ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wood_block&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'qowheart':
                                        var gh = body.slice(9)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}qowheart ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=quote_on_wood_heart&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'mutgrass':
                                        var gh = body.slice(9)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}mutgrass ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=message_under_the_grass&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'undergocean':
                                        var gh = body.slice(12)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}undergocean ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=underwater_ocean&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'woodenboards':
                                        var gh = body.slice(13)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}woodenboards ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wooden_boards&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'wolfmetal':
                                        var gh = body.slice(10)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}wolfmetal ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wolf_metal&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'metalictglow':
                                        var gh = body.slice(14)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}metalictglow ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=metalic_text_glow&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case '8bit':
                                        var gh = body.slice(5)
                                        var teks1 = gh.split("|")[0];
                                        var teks2 = gh.split("|")[1];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}8bit ninem|BOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Eh...'})
                                        break
                                case 'randomkpop':
                                        gatauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kpopnya kak...'})
                                        break
                                case 'fml2':
                                        getauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        data = await fetchJson(`https://tobz-api.herokuapp.com/randomfmylife?apikey=BotWeA`, {method: 'get'})
                                        hasil = `*Fuck My Life*\n${data.result}`
                                        reply(hasil)
                                        break
                                case 'tiktok':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'ttp':
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                                case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Pronto Senor')
					break
				case 'simi':
					if (args.length < 1) return reply('Onde está o texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
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
				case 'clone':
					if (!isonwer ) return reply ('COMANDO BLOQUEADO POR MAL USO')
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('A tag alvo que você deseja clonar')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
                                /*case 'magernulis':
                                        var gh = body.slice(11)
                                        var teks7 = gh.split("|")[0];
                                        var teks2 = gh.split("|")[1];
                                        var teks3 = gh.split("|")[2];
                                        if (args.length < 1) return reply('teks, nama, kelas nya mana kak?\nContoh: ${prefix}magernulis teks|nama|kelas\nContoh pemakaian: ${prefix}magernulis NazwaCanss|Nazwa|10C')
                                        if (!isUser) return reply(mess.only.daftarB)
                                        anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/joki-nulis?text=${teks7}&nama=${teks2}&kelas=${teks3}&apiKey=administrator`, {method: 'get'})
                                        buffer = await getBuffer(anu.result.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak...'})
                                        break*/
                                case 'pubglogo':
                                        var gh = body.slice(9)
                                        var teks1 = gh.split("|")[0];
                                        var teks2 = gh.split("|")[1];
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}pubglogo ninem|BOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih logonya kak...'})
                                        break
                                case 'herrypotter':
                                case 'harrypotter':
                                        var gh = body.slice(12)
                                        if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}harrypotter ninemBOT`)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${gh}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak gambarnya...'})
                                        break
			 	case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                        if (!isUser) return reply(mess.only.daftarB)
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
		      				})
					} else {
						reply('Mi mama senor?')
					}
					break
				default:
							if (isCmd && oros != command) {
				let se = sender.split('@')[0]
				if (!isGroup){ klo = "*PV*"}
				else{
				 klo = `Grupo: *${groupName}*`
				}
				console.log(`\n\x1b[1;31mError\x1b[1;37m ${klo} nome: ${nameuser} numero: https://wa.me/${sender.split('@')[0]} comando ${command} \n`)
                  reply(`\n                        *❌ Error detectado ❌*

${klo}

Usuário: *${nameuser}*

Olá *${nameuser}* o comando que digitou *${command}*
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
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
