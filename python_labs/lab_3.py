                # Лабораторна робота №3
# Використання декоратора property для управління доступом до атрибутів об'єктів
class BankAccount:
    def __init__(self, account_holder, balance=0):
        # Инициализация приватных атрибутов владельца и баланса
        self._account_holder = account_holder
        self._balance = balance

    @property
    def balance(self):
        # Геттер для получения баланса
        return self._balance

    @balance.setter
    def balance(self, amount):
        # Сеттер для изменения баланса только если amount >= 0
        if amount >= 0:
            self._balance = amount
        else:
            print("Ошибка: баланс не может быть отрицательным!")

    def show_account_info(self):
        # Вывод информации о счете
        print(f"Владелец счета: {self._account_holder}")
        print(f"Баланс: {self._balance} грн.")

# Примеры использования
account = BankAccount("Михаил Шишкин", 1000)
# Вызов геттера
print(account.balance)  # 1000

# Изменение баланса через сеттер
account.balance = 500   # Допустимое значение
print(account.balance)  # 500

account.balance = -200  # Недопустимое значение
print(account.balance)  # Баланс останется 500

# Вывод информации о счете
account.show_account_info()
