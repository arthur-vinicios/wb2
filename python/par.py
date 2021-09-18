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
    try:
       return par(int(numero))
    except:
          return print("informe um numero de 0 a 11")          
sys.exit(main(sys.argv))
