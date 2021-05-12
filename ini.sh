NKM=0
while :
do
NKM=$(($NKM+1))
rm -rf *.ogg 
rm -rf *.mp3
rm -rf *.mp4 
rm -rf *.webp
clear
echo SYSTEM INI VERSÃO 1.0
echo 
setterm -foreground red
echo 
echo 
echo  ...................
echo
echo   "Reiniciando PELA  $NKM VEZ"
echo 
echo  ...................
echo 
echo
echo
echo
echo
echo
echo
setterm -foreground default

node index.js

done
