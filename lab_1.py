class Person:
    def __init__(self, name, age, address):
        # Инициализация атрибутов
        self.name = name
        self.age = age
        self.address = address

    def introduce(self):
        # Выведение информации об обьекте
        print(f"Привет, меня зовут {self.name}, мне {self.age} лет, я живу в {self.address}.")

    def __del__(self):
        # Сообщение об удаленных обьектах
        print(f"Об'єкт {self.name} выдалено.")

# Створення кількох об'єктів класу Person
p1 = Person("Мила", 20, "Киеве")
p2 = Person("Тим", 25, "Харькове")
p3 = Person("Мария", 30, "Одессе")

# Вызов метода introduce для каждого обьекта
p1.introduce()
p2.introduce()
p3.introduce()

# Выдаление одного из обьектов
del p2

#  Чтобы увидеть работу финализатора - можно принудительно вызвать сбор мусора
import gc
gc.collect()

