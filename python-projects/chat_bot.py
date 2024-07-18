def chat_bot():
    print("Welcome User!")
    response = input("What can I help you with?"/n)
    if(response == "calculator"):

        func = input("What's being calculated?"/n)
        num1 = int(input("First number, please.")/n)
        num2 = int(input("Second number?")/n)

    if func == "add":
        print num1 + num2
    elif func == "sub":
        print num1 - num2
    elif func == "mul":
        print num1 * num2
    elif func == "div":
        print num1 / num2
    elif func == "exp":
        print num1 ** num2
