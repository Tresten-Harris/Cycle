def fizz_buzz(num):
    if (num % 3 == 0):
            print("fizz") 
    elif (num % 5 == 0):
        print("buzz")
    elif(num % 3 and num % 5):
        print("fizzbuzz")
    else:
        print("not fizz or buzz")


    fizz_buzz(3)
    fizz_buzz(5)
    fizz_buzz(30)
    fizz_buzz(10)