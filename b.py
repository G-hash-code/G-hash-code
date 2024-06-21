import random
import os, shutil
rand = random.randint(0,6)
guess= int(input('Guess The Number : '))
if guess == rand:
  print('Congratulations You won !')