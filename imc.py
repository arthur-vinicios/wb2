import sys

def imcs(peso, altura):
      imc = peso / (altura ** 2)
          
      if imc <18.5:
       m = "voce está abaixo do peso nomal "
      elif  18.5 <= imc < 25:
         m = "PARABENS você está na faixa de peso normal "
      elif 25 <= imc <30:
         m = "você esta em sobre peso "
      elif 30 <= imc < 40:
         m = "você esta em obsidade"
      elif imc >= 40:
         m =  "Você está em obsidade morbida cuidado " 
      return print("seu imc é {:.2f} ao saber disso indentificamos que {}".format(imc,m))
def main(argv):
    altura = argv[1]
    peso = argv[2]
    return imcs(float(peso),float(altura))
    

sys.exit(main(sys.argv))

   
