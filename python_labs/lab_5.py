                 #Лабораторна робота №5
    # Дескриптори як механізм управління атрибутами класу
class Descriptor:
    def __init__(self, name, min_value=0, max_value=100000):
        self.name = name
        self.min_value = min_value
        self.max_value = max_value

    def __get__(self, instance, owner):
        # Якщо доступ через клас
        if instance is None:
            return self
        return instance.__dict__.get(self.name)

    def __set__(self, instance, value):
        # Перевірка діапазону
        if self.min_value <= value <= self.max_value:
            instance.__dict__[self.name] = value
        else:
            print(f"Помилка: значення {value} виходить за межі "
                  f"{self.min_value}–{self.max_value}")

    def __delete__(self, instance):
        print(f"Атрибут '{self.name}' був видалений.")
        if self.name in instance.__dict__:
            del instance.__dict__[self.name]

class NonDataDescriptor:
    def __get__(self, instance, owner):
        if instance is None:
            return self
        return instance.__dict__.get("bonus")

    def __set__(self, instance, value):
        # Дозволяється встановити лише один раз
        if "bonus" in instance.__dict__:
            print("Помилка: значення bonus вже встановлено і не може"
                  " бути змінене.")
        else:
            instance.__dict__["bonus"] = value

class Employee:
    salary = Descriptor("salary")
    bonus = NonDataDescriptor()

    def __init__(self, name, salary, bonus):
        self.name = name
        self.salary = salary
        self.bonus = bonus

employee = Employee("Сергій Мироненко", 70000, 7000)

print(employee.salary)

employee.salary = 170000   # помилка — не встановиться

employee.bonus = 10000     # значення встановиться
employee.bonus = 17000     # помилка — вже встановлено

del employee.salary         # Видалення атрибуту
print(employee.salary)

