from datetime import datetime
class Logger:
    _instance = None   # хранит единственный экземпляр класса

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Logger, cls).__new__(cls)
            cls._instance.logs = []  # создаём список логов только один раз
        return cls._instance

    def log(self, message):
        """Добавляет сообщение с меткой времени в список логов."""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.logs.append(f"[{timestamp}] {message}")

    def show_logs(self):
        """Выводит все сохранённые логи."""
        print("\n".join(self.logs))
# --- Проверка работы ---
logger1 = Logger()
logger2 = Logger()

logger1.log("Запуск программы")
logger2.log("Ошибка соединения с сервером")
logger1.log("Программа успешно завершена")

# Вывести все логи
logger1.show_logs()

# Проверить, что оба экземпляра — это один и тот же объект
print(logger1 is logger2)  # True
