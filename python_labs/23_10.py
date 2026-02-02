from venv import logger

class Logger:
    _instance = None
    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            return cls._instance
        def __init__(self):
            if not hasattr(self, 'logs'):
                self.logs = []

                def log(self, message):
                    pass

                Logger1=Logger()
                Logger2=Logger()

                Logger1.log = log ("Система запущена")
                Logger2.log = log ("Ошибка соединения")

                Logger1.show_logs()
                print(Logger1 is Logger2)