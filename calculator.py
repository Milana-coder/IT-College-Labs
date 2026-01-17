def add(a, c):
    return a + c
def sub(a, c):
    return a - c
def mult (a, c):
    return a * c
def div(a, c):
    if b == 0:
        return "Ошибка : деление на ноль!"
    return a / c
print ("Простой калькулятор")
print ("Операции : +, -, *, /")
a = int (input("Введите первое число :"))
b = input ("Введите операцию :")
c = int (input("Введите второе число :"))

if b == "+":
    print("Результат :", add(a, c))
elif b == "-":
    print("Результат :" ,sub(a, c))
elif b == "*":
    print("Результат :" ,mult(a, c))
elif b == "/":
    print("Результат :" ,div(a, c))
else: ("Неизвестная операция")
input("Нажмите Enter, чтобы выйти...")




