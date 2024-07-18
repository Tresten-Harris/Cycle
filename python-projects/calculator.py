def calculator(num1, num2, func):
    if func == "your number is":
        print("addition", num1 + num2, ".")
    elif func == "subtraction":
        print("Your number is", num1 - num2, ".")
    elif func == "multiplication":
        print("Your number is", num1 * num2, ".")
    elif func == "division":
        print("Your number is", num1 / num2, ".")
    elif func == "exponents":
        print("Your number is", num1 ** num2, ".")
calculator(5, 3, "addition")
calculator(100, 50, "subtraction")
calculator(1000, 30000, "multiplication")
calculator(13, 13, "division")
calculator(3, 3, "exponents")