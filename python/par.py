from random import randint
import sys
def par(numero):
    computador = randint(0,11)
    if numero == computador:
       m = 'PARABÉNS! Você ganhou!' 
            
    else:
       m = 'VOCÊ PERDEU!'
    return print(f"Você jogou {numero} e o computador jogou {computador} {m}")
def main(argv):   
    numero = argv[1]
    return par(int(numero))
           
sys.exit(main(sys.argv))
