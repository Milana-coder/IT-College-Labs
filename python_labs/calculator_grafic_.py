import tkinter as tk

# Твои функции
def add(a, c):
    return a + c

def sub(a, c):
    return a - c

def mult(a, c):
    return a * c

def div(a, c):
    if c == 0:
        return "Ошибка: деление на ноль!"
    return a / c

# Функция обработки нажатия кнопок
def click(event):
    text = event.widget.cget("text")
    if text == "=":
        try:
            # Разбираем выражение вида "3+5"
            expr = entry.get()
            if "+" in expr:
                x, y = map(float, expr.split("+"))
                result = add(x, y)
            elif "-" in expr:
                x, y = map(float, expr.split("-"))
                result = sub(x, y)
            elif "*" in expr:
                x, y = map(float, expr.split("*"))
                result = mult(x, y)
            elif "/" in expr:
                x, y = map(float, expr.split("/"))
                result = div(x, y)
            else:
                result = "Ошибка"
            entry.delete(0, tk.END)
            entry.insert(tk.END, str(result))
        except:
            entry.delete(0, tk.END)
            entry.insert(tk.END, "Ошибка")
    elif text == "C":
        entry.delete(0, tk.END)
    else:
        entry.insert(tk.END, text)

# Основное окно
root = tk.Tk()
root.title("Калькулятор")

entry = tk.Entry(root, font=("Arial", 20), bd=5, relief=tk.RIDGE)
entry.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C']
]

for i, row in enumerate(buttons):
    for j, btn in enumerate(row):
        b = tk.Button(root, text=btn, font=("Arial", 18), width=5, height=2)
        b.grid(row=i+1, column=j, padx=5, pady=5)
        b.bind("<Button-1>", click)

root.mainloop()



