      #Лабораторна робота №8
#Наслідування та поліморфізм у Python
# 1. Створення базового класу Analyzer

class Analyzer:
    def __init__(self, name, level):
        self.name = name
        self._level = level  # protected

    def analyze(self, event):
        return "Базовий аналіз події"

    def get_level(self):
        return self._level

    def __str__(self):
        return f"Модуль: {self.name}, критичність: {self._level}"

# 2. Створення підкласів з різними алгоритмами
class SignatureAnalyzer(Analyzer):
    def analyze(self, event):
        return f"[{self.name}] Сигнатурний аналіз: перевірка збігів для '{event}'"

class HeuristicAnalyzer(Analyzer):
    def analyze(self, event):
        base = super().analyze(event)
        return f"{base} + евристичний аналіз '{event}'"

class AIMLAnalyzer(Analyzer):
    def __init__(self, name, level, model_version):
        super().__init__(name, level)
        self.__model_version = model_version  # private

    def update_model(self, version):
        self.__model_version = version

    def analyze(self, event):
        return f"[AI] Оцінка події '{event}' моделлю v{self.__model_version}"

# 3. Створення класу EventLog, що наслідує list

class EventLog(list):
    def __init__(self):
        super().__init__()
        self.__count = 0  # private counter

    def append(self, event):
        self.__count += 1
        super().append(event)

    def get_count(self):
        return self.__count

# 4. Функція поліморфізму

def run_analysis(analyzers, event):
    for a in analyzers:
        print(a.analyze(event))





# 5. Використання isinstance та issubclass

if __name__ == "__main__":

    # Створення аналізаторів

    s = SignatureAnalyzer("SigMod1", 4)
    h = HeuristicAnalyzer("HeurMod", 3)
    ai = AIMLAnalyzer("AI_Mod", 5, "1.0")

    # Створення журналу подій
    log = EventLog()
    log.append("Login failure")
    log.append("Suspicious IP")

    # Поліморфізм
    print("\n= РЕЗУЛЬТАТ ПОЛІМОРФНОГО АНАЛІЗУ =")
    run_analysis([s, h, ai], "Unauthorized access")

    # Перевірки
    print("\n= Перевірки =")
    print("issubclass(AIMLAnalyzer, Analyzer):", issubclass(AIMLAnalyzer, Analyzer))
    print("isinstance(HeuristicAnalyzer('H1', 3), Analyzer):",
          isinstance(HeuristicAnalyzer("H1", 3), Analyzer))

    # Перевіримо лічильник
    print("\nКількість записів у журналі подій:", log.get_count())
