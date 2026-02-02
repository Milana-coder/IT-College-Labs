class SecureData:
    def __init__(self, public_data, protected_data, private_data):
        self.public_data = public_data
        self.protected_data = protected_data
        self.private_data = private_data
    def __getattr__(self, name):
        pass
    def __setattr__(self,name,value):
        pass
data = SecureData ("публичное", "защищенное", "частное")
print(data.public_data)
print(data.protected_data)
print(data.private_data)

data.public_data = "новое публичное"
data.public_data = "новое защищенное"
data.protected_data = "новое частное"
del data._public_data
del data._private_data






