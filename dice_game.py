import random

def roll_dice():
    return random.randint(1, 6)

def play_game():
    print("Welcome to the Dice Game!")
    target_number = random.randint(10, 20)
    print(f"Your target number is: {target_number}")
    attempts = 3

    for attempt in range(attempts):
        input("Press Enter to roll the dice...")
        result = roll_dice()
        print(f"You rolled a {result}")

        if result == target_number:
            print("Congratulations! You hit the target number!")
            return
        else:
            difference = abs(result - target_number)
            
            print(f"Sorry, you missed the target number by {difference}.")
    
    print(f"Out of attempts. The target number was {target_number}. Better luck next time!")

if __name__ == "__main__":
    play_game()
