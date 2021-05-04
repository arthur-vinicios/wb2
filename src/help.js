const help = (prefix, sender, getLevel,namebot, user, apoia1,  blocked, date, time) => {

if ( getLevel === undefined){getLevel ='menos que 0'}
        return `
════ •『 *${namebot}* 』• ════

  ◆➤ Olá, tudo bem?  @${sender.split('@')[0]} seu nivel é *${getLevel}*


  ◆ ⪔ 😈Perfil😈⪔ ◆

  *Nome:* ${namebot}

  *Prefixo do baby bot:* ◆${prefix}◆

  *Usuàrio:* ${user.length}

  *Usuàrio Bloqueados :* ${blocked.length}

  *Apoiadores:* ${apoia1}

*╔═══❖•ೋ° °ೋ•❖═══╗*

  🔰 *Os Principaiscomando sem ${prefix}*
  ↳ ${namebot}
  ↳ grupo do bot
  ↳ o bot ta on
  ↳ Bot
  ↳ regras_add

──────⊱◈◈◈⊰──────

*🔰 +Menu*
  ↳ ${prefix}menuadmin
 ↝ *(menu somente para adms)*

  ↳ ${prefix}perfilmenu
 ↝ *(Seu perfil)*

  ↳ ${prefix}nsfwmenu
 ↝ *(menu +18 anos)*

──────⊱◈◈◈⊰──────

🔰 *Comando com ${prefix} no inicio!*

──────⊱◈◈◈⊰──────

 *◆Diverção◆*

 ◆➤ ${prefix}simi
    ↝ *(Fala com a simi)*

 ◆➤ ${prefix}gay @user
    ↝ *(fala o quanto ele é gay)*

 ◆➤ ${prefix}gado @user
    ↝ *(fala o quanto ele(a) é gado)*

 ◆➤ ${prefix}nivelgay
    ↝ *(fala a % de gay do grupo)*

 ◆➤ ${prefix}nivelgado
    ↝ *(fala a % de gado no grupo)*

──────⊱◈◈◈⊰──────

 *◆Ferramentas◆*

 ◆➤ ${prefix}sticker
    ↝ *(você tanbém pode marcar uma foto/gif)*

 ◆➤ ${prefix}toimg
    ↝ *(converte figurinha em imagem)*

 ◆➤ ${prefix}tomp3
    ↝ *(comando usado para baixar musica)*

 ◆➤ ${prefix}owner
    ↝ *(Editor)*

 ◆➤ ${prefix}blocklist
    ↝ *(lista de contatos bloqueados)*

 ◆➤${prefix}wa.me { ◆ Cria link para seu WhatsApp }

 ◆➤ ${prefix}bug
    ↝ *(digite informação sobre o bug)*

──────⊱◈◈◈⊰──────

*◆Grupos◆*

 ◆➤ ${prefix}ownergroup
      (este comando mostra quem é da porra toda)

 ◆+18 HENTAI
  ↝ *(Apenas nos grupos)*

 ◆➤ ${prefix}randomhentai
    ↝ *(nsfw deve tar ativo)*

 ◆➤ ${prefix}hentai
    ↝ *(nsfw deve tar ativo)*

 ◆➤ ${prefix}randomhentaio
    ↝ *(nsfw deve tar ativo)*

──────⊱◈◈◈⊰──────

*◆Midia◆*

 ◆➤ ${prefix}randomk

 ◆➤ ${prefix}ytsearch

──────⊱◈◈◈⊰──────

*◆Downloads◆*

 ◆➤ ${prefix}images

 ◆➤ ${prefix}ytmp4

 ◆➤ ${prefix}tiktok

 ◆➤ ${prefix}joox

──────⊱◈◈◈⊰──────

*◆Som◆*

 ◆➤ ${prefix}play
    ↝ *(selecione o nome da musica Ex: &play semeone you loved)*

 ◆➤ ${prefix}tts
    ↝ *(le na voz do google oq vc digita)*

 ◆➤ ${prefix}lang
    ↝ *(liguagem diponivel para ${prefix}tts lang texto)*

──────⊱◈◈◈⊰──────

*◆Musica◆*

 ◆➤ ${prefix}lirik

 ◆➤ ${prefix}chord

──────⊱◈◈◈⊰──────

*◆Stalker◆*

 ◆➤ ${prefix}tiktokstalk

 ◆➤ ${prefix}igstalk

──────⊱◈◈◈⊰──────

*◆Animes◆*

 ◆➤ ${prefix}waifu

 ◆➤ ${prefix}randomanime

 ◆➤ ${prefix}wait
    ↝ *(comando usado para encontrar anime pela foto!)*

 ◆➤ ${prefix}nekonime

──────⊱◈◈◈⊰──────

*◆ ⪔ 🤖Como me adiciona ao seu grupo 🤖 ⪔ ◆*
   ↳ Digite ${prefix}regras_add
    ↳ Digite ${prefix}regras_bondes-
──────⊱◈◈◈⊰──────

   [ Numero: https://wa.me/+5517996611342 ]

──────⊱◈◈◈⊰──────

   time: _${time}_
  `
}

exports.help = help
