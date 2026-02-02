# Лабораторная работа №6
# 1. Создание класса Multiplier
class Multiplier:
    def __call__(self, a, b):
        return a * b

# 2. Класс-декоратор Logger
class Logger:
    def __init__(self, func):
        # Сохранение функции
        self.func = func

    def __call__(self, *args, **kwargs):
        # Вызов функции
        print(f"Вызов функции {self.func.__name__} с аргументами {args}")
        result = self.func(*args, **kwargs)
        print(f"Результат: {result}")
        return result

#3. Ф-ция для сумирования чисел
@Logger
def add (a,b):
#Возврат суммы двух чисел
    return a+b

mult = Multiplier()
result = mult(3,5)
print(result)
result_add = add(10, 20)

# Проверка работы Multiplier та Logger
print("Результат умножения:", result)
print("Результат суммы:", result_add)

