import turtle
import time

# --- Настройка экрана ---
screen = turtle.Screen()
screen.bgcolor("lightblue")
screen.title("Живой котик")

# --- Черепашка для статичных частей ---
t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# --- Функции для рисования частей кота ---
def draw_circle(t, x, y, r, color):
    t.penup()
    t.goto(x, y - r)
    t.pendown()
    t.fillcolor(color)
    t.begin_fill()
    t.circle(r)
    t.end_fill()

def draw_ear(t, x, y, color):
    t.penup()
    t.goto(x, y)
    t.pendown()
    t.fillcolor(color)
    t.begin_fill()
    t.goto(x - 20, y + 50)
    t.goto(x + 20, y + 50)
    t.goto(x, y)
    t.end_fill()

# --- Рисуем тело и голову ---
draw_circle(t, 0, -100, 80, "orange")  # тело
draw_circle(t, 0, 20, 50, "orange")    # голова

# --- Уши ---
draw_ear(t, -35, 60, "pink")
draw_ear(t, 35, 60, "pink")

# --- Лапки (левую и правую статично) ---
draw_circle(t, -60, -120, 20, "orange")
draw_circle(t, 60, -120, 20, "orange")

# --- Рот и нос ---
draw_circle(t, 0, 25, 5, "pink")       # нос
t.penup()
t.goto(0, 20)                           # рот
t.pendown()
t.goto(-10, 10)
t.penup()
t.goto(0, 20)
t.pendown()
t.goto(10, 10)

# --- Усы ---
for y in [-5, 0, 5]:
    t.penup()
    t.goto(-5, 20 + y)
    t.pendown()
    t.goto(-35, 25 + y)
    t.penup()
    t.goto(5, 20 + y)
    t.pendown()
    t.goto(35, 25 + y)

# --- Создаем "живые" элементы ---
left_eye = turtle.Turtle()
left_eye.hideturtle()
left_eye.penup()
left_eye.goto(-20, 40)

right_eye = turtle.Turtle()
right_eye.hideturtle()
right_eye.penup()
right_eye.goto(20, 40)

tail = turtle.Turtle()
tail.hideturtle()
tail.penup()
tail.goto(80, -60)
tail.pensize(10)
tail.pendown()

paw = turtle.Turtle()
paw.hideturtle()
paw.penup()
paw.goto(-60, -120)
paw.pensize(2)
paw.fillcolor("orange")

# --- Функции для анимации ---
def blink_eyes():
    # моргание (сжатие)
    for eye in [left_eye, right_eye]:
        eye.clear()
        draw_circle(eye, eye.xcor(), eye.ycor(), 3, "green")
    time.sleep(0.2)
    for eye in [left_eye, right_eye]:
        eye.clear()
        draw_circle(eye, eye.xcor(), eye.ycor(), 10, "green")
    time.sleep(1)

def wag_tail():
    tail.clear()
    tail.penup()
    tail.goto(80, -60)
    tail.pendown()
    tail.goto(150, -30)
    time.sleep(0.3)
    tail.clear()
    tail.penup()
    tail.goto(80, -60)
    tail.pendown()
    tail.goto(150, -20)
    time.sleep(0.3)

def wave_paw():
    paw.clear()
    paw.penup()
    paw.goto(-60, -120)
    paw.pendown()
    paw.begin_fill()
    paw.goto(-40, -90)
    paw.goto(-20, -120)
    paw.goto(-60, -120)
    paw.end_fill()
    time.sleep(0.3)
    paw.clear()
    draw_circle(paw, -60, -120, 20, "orange")
    time.sleep(0.3)

# --- Основной цикл анимации ---
while True:
    blink_eyes()
    wag_tail()
    wave_paw()
