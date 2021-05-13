 const menujogos =(prefix) => {
 
 return `
                        JOGOS MENU
                        
       *NUMBERGAMER* 
                       
  (O CHAT-BOT VAI PENSAR EM UM NÚMERO DE 0 A 11
ELE JÁ PENSOU
VOÇÊ SABE QUAL FOI O NUMERO PENSADO PELO BOT ? ENTÃO TENTE ADVINHA USADO ${prefix}numbergamer
 EXEMPLO ${prefix}NUMBERGAMER 1 )
                      
  ↳ ${prefix}NUMBERGAMER NUMERO
  
  
  *JOKENPO*
  
  [0] Pedra
  [1] Papel
  [2] Tesoura
  (O BOT VAI JOGAR PEDRA PAPEL OU TESOURA TENTE GANHAR DELE DIGITE
${prefix}JOKENPO 0 OU 1 OU 2 PARA PEDRA,PAPEL OU TESOURA)
  
  ↳ ${prefix}JOKENPO

 `
}

exports.menujogos = menujogos
