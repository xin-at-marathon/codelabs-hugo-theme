import pydot    

n1 = u"中文"
n2 = u"测试"

g = pydot.Dot()
g.add_edge(pydot.Edge(n1, n2))
svg_string = g.create_svg()

svg = str(svg_string)
print(svg)
