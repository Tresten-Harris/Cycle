def main():
    atm = ATM(1000, 2424) # Initialize ATM object with initial balance and PIN

    while True:
        print("Welcome to the ATM machine.")
        pin = int(input("Please enter your PIN: "))

        if pin != atm.pin:
            print("Incorrect PIN. Please try again.")
            continue

        print("\nMenu:")
        print("1. Check Balance")
        print("2. Withdraw")
        print("3. Deposit")
        print("4. Change PIN")
        print("5. Exit")

        option = int(input("\nEnter your choice: "))

        if option == 1:
            print("Current balance:", atm.check_balance())

        elif option == 2:
            amount = float(input("Enter the amount to withdraw: "))
            print(atm.withdraw(amount))

        elif option == 3:
            amount = float(input("Enter the amount to deposit: "))
            print(atm.deposit(amount))

        elif option == 4:
            new_pin = int(input("Enter your new PIN: "))
            print(atm.change_pin(new_pin))

        elif option == 5:
            print("Thank you for using the ATM machine.")
            break

        else:

              print("Invalid option. Please try again.")


if __name__ == "__main__":
    main()