# lab4_coloring.py
# Лабораторна робота №4 — Розфарбування графів (варіант 20)
# З автоматичним виведенням і збереженням графів

from collections import defaultdict
import networkx as nx
import matplotlib.pyplot as plt

#  построение графа
def build_adj(edges):
    verts = sorted(set([v for e in edges for v in e]))
    idx = {v: i for i, v in enumerate(verts)}
    adj = [[] for _ in range(len(verts))]
    for u, v in edges:
        a, b = idx[u], idx[v]
        if b not in adj[a]:
            adj[a].append(b)
            adj[b].append(a)
    return verts, adj

#  DSATUR алгоритм
def dsatur_coloring(adj):
    n = len(adj)
    colors = [-1] * n
    saturation = [0] * n
    neighbor_colors = [set() for _ in range(n)]
    degrees = [len(adj[u]) for u in range(n)]
    uncolored = set(range(n))

    # начальная вершина — с наибольшим степенем
    u0 = max(range(n), key=lambda x: degrees[x])
    colors[u0] = 0
    uncolored.remove(u0)

    for v in adj[u0]:
        neighbor_colors[v].add(0)
        saturation[v] = 1

    while uncolored:
        u = max(uncolored, key=lambda x: (saturation[x], degrees[x]))
        used = neighbor_colors[u]
        c = 0
        while c in used:
            c += 1
        colors[u] = c
        uncolored.remove(u)
        for v in adj[u]:
            if colors[v] == -1:
                neighbor_colors[v].add(c)
                saturation[v] = len(neighbor_colors[v])
    return colors

# построение ленейного графа
def build_line_graph(edges):
    m = len(edges)
    adj = [[] for _ in range(m)]
    for i in range(m):
        u1, v1 = edges[i]
        for j in range(i + 1, m):
            u2, v2 = edges[j]
            if (u1 in (u2, v2)) or (v1 in (u2, v2)):
                adj[i].append(j)
                adj[j].append(i)
    return adj

# визуализация
def visualize_vertex_coloring(edges, verts, colors):
    G = nx.Graph()
    G.add_edges_from(edges)
    pos = nx.spring_layout(G, seed=42)

    node_colors = [colors[verts.index(v)] for v in G.nodes()]

    plt.figure(figsize=(6,6))
    nx.draw(G, pos, with_labels=True, node_color=node_colors,
            cmap=plt.cm.Set3, node_size=700, font_size=14, edgecolors='black')
    plt.title("Разукрашивание вершин графа", fontsize=14)
    plt.savefig("vertex_coloring.png", dpi=150)
    plt.show()

def visualize_edge_coloring(edges, edge_colors):
    G = nx.Graph()
    G.add_edges_from(edges)
    pos = nx.spring_layout(G, seed=42)

    colors = [edge_colors[i] for i in range(len(edges))]
    plt.figure(figsize=(6,6))
    nx.draw(G, pos, with_labels=True, node_size=700, font_size=14, edgecolors='black')
    nx.draw_networkx_edges(G, pos, edgelist=edges, edge_color=colors,
                           edge_cmap=plt.cm.Set1, width=3)
    plt.title("Разукрашивание ребер графа", fontsize=14)
    plt.savefig("edge_coloring.png", dpi=150)
    plt.show()

# основная ф-ция
def analyze_graph(edges):
    verts, adj = build_adj(edges)
    print("Вершины:", verts)
    print("Ребра:", edges)

    # 1) Разукрашивание вершин
    vertex_colors = dsatur_coloring(adj)
    chi = max(vertex_colors) + 1
    print(f"\nХроматическое число χ(G) = {chi}")
    for v, c in zip(verts, vertex_colors):
        print(f"  Вершина {v} → цвет {c}")

    # 2) Разукрашивание ребер через линейный граф
    L_adj = build_line_graph(edges)
    edge_colors = dsatur_coloring(L_adj)
    chi_edge = max(edge_colors) + 1
    print(f"\nХроматический клас χ′(G) = {chi_edge}")
    for i, e in enumerate(edges):
        print(f"  Ребро {e} → цвет {edge_colors[i]}")

    # 3) Построение рисунков
    visualize_vertex_coloring(edges, verts, vertex_colors)
    visualize_edge_coloring(edges, edge_colors)

# Варіант 20
if __name__ == "__main__":
    edges = [(1,2),(2,3),(3,4),(4,5),(5,1),(2,5),(3,5)]
    analyze_graph(edges)
