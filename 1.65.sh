#!/usr/bin/bash
cd $HOME
apt-get install figlet
figlet Albion 1.65
if [[ ! -d "old-wb2" ]]
then
if [[ -d "wb2" ]]
then
ls
cd $HOME


mv wb2 old-wb2
apr-get install git
git clone https://github.com/arthur-vinicios/wb2.git
cd wb2
unzip Albion.zip
clear
cd  $HOME/wb2/database/json ; rm -rf *.json
cd $HOME/old-wb2/database/json ; cp -r *.* $HOME/wb2/database/json 
cd $HOME/old-wb2/ ;  cp -r Albion.json $HOME/wb2
figlet Albion 1.65
else
   setterm -foreground red
   echo  
   echo
   clear
   echo "Infelizmente não é possível fazer backup ou atualizar o que não existe!!."
   echo
   echo
   setterm -foreground default
fi
else
  setterm -foreground green
  echo
  echo "Infelizmente Não é possivel, atualizar devido uma versão antiga existente, delete a pasta old-wb2 ou mova pra outro destino,
Reinicie o processo e tudo estar atualizado em breve."
  
  setterm -foreground default
  echo
fi
