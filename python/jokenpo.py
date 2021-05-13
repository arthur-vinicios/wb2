from random import randint
from time import sleep
import sys
""" 
[0] Pedra
[1] Papel
[2] Tesoura

"""
def joken(numero):
	lista = ("Pedra", "Papel", "Tesoura")
	computador = randint(0,2)
	perguntar = numero
	if computador == 0:
	   if perguntar == 0:
	     n = "Empate!"
	   elif perguntar == 1:
	     n = "Jogador perdeu"
	   elif perguntar == 2:
	     n = "Computador venceu"
	   else:
	     n = "Operacao invalida"

	elif computador == 1:
	   if perguntar == 0:
	     n = "Computador perdeu"
	   elif perguntar == 1:
	     n = "Empate!"
	   elif perguntar == 2:
	     n = "Jogador venceu"
	   else:
	     n = "Operacao invalida"
	elif computador == 2:
	   if perguntar == 0:
	     n = "Jogador venceu"
	   elif perguntar == 1:
	     n = "Computador venceu"
	   elif perguntar == 2:
	     n = "Empate!"
	   else:
	     n = "Operacao invalida"
	else:
	   n = "Operacao invalida"   
        
	return print("O computador escolheu: {} e o jogador escolheu {} o resultado foi {} ".format(lista[computador],lista[perguntar],n))

def main(argv):
    numero = argv[1]
    return joken(int(numero))
           
sys.exit(main(sys.argv))
