import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle

def draw_block(x, y, w, h, text):
    plt.gca().add_patch(Rectangle((x, y), w, h, fill=False))
    plt.text(x + w/2, y + h/2, text, ha='center', va='center', fontsize=12)

def draw_circle(x, y, r=0.1):
    plt.gca().add_patch(Circle((x, y), r, fill=False))

def line(x1, y1, x2, y2):
    plt.plot([x1, x2], [y1, y2])

plt.figure(figsize=(10, 6))

# Входи
plt.text(0.1, 4, "X2")
plt.text(0.1, 3, "X3")
plt.text(0.1, 2.5, "X4")
plt.text(0.1, 1.5, "X5")
plt.text(0.1, 0.8, "X1")

# Інверсія X2 (через & з кружечком)
draw_block(1, 3.7, 1, 0.6, "&")
draw_circle(2.1, 4)
line(0.3, 4, 1, 4)

# АБО X3, X4
draw_block(1, 2.3, 1, 0.6, "1")
line(0.3, 3, 1, 2.6)
line(0.3, 2.5, 1, 2.6)

# Інверсія X5
draw_block(1, 1.2, 1, 0.6, "&")
draw_circle(2.1, 1.5)
line(0.3, 1.5, 1, 1.5)

# AND (X̅2 · (X3∨X4) · X̅5)
draw_block(3, 2.3, 1.2, 0.8, "&")
line(2.2, 4, 3, 2.7)
line(2, 2.6, 3, 2.7)
line(2.2, 1.5, 3, 2.7)

# OR з X1
draw_block(5, 1.8, 1.2, 0.8, "1")
line(4.2, 2.7, 5, 2.2)
line(0.3, 0.8, 5, 2.2)

# Вихід
plt.text(6.4, 2.2, "Y")
line(6.2, 2.2, 6.4, 2.2)

plt.axis('off')
plt.title("Логічна схема для Y = X1 ∨ X̅2·(X3 ∨ X4)·X̅5")
plt.show()
