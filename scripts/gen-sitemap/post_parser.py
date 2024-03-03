import frontmatter
import glob
from pathlib import Path
import os
import pydot    

from subprocess import Popen, PIPE, STDOUT

def dot2svg(dot):
    p = Popen(['dot', '-Tsvg'], stdout=PIPE, stdin=PIPE, stderr=PIPE, text=True, encoding='utf-8')
    svg = p.communicate(input=dot)[0]

    # pydot has encoding issue!!!!
    # graphs = pydot.graph_from_dot_data(dot)
    # svg_bytes = graphs[0].create_svg() 
    # svg = str(svg_bytes, 'utf-8')
    return svg

class PostParser:
    def __init__(self, prefix):
        self.prefix = prefix
        self.posts = []
        files = glob.glob(os.path.join('content', 'recipes', prefix, '**', 'index.md'), recursive = True) 
        for file in files: 
            id = file.replace('content' + os.sep + 'recipes' + os.sep + self.prefix + os.sep, '')
            id = id.replace(os.sep + 'index.md', '')
            fm = frontmatter.load(file)
            self.posts.append({'id': id, 'fm': fm})

    def get_dot_nodes(self):
        dot_nodes=[]
        for post in self.posts:
            id = post['id']
            fm = post['fm']
            dot_nodes.append(f'"{id}" [label="{fm['title']}", URL="{id}"];')
        return dot_nodes
    
    def get_dot_node_deps(self):
        dot_node_deps=[]
        for post in self.posts:
            id = post['id']
            fm = post['fm']
            if 'deps' in fm:
                for dep in fm['deps']:
                    dot_node_deps.append(f'"{dep}" -> "{id}";')
        return dot_node_deps

    def save_svg(self):
        dot_string = u"""digraph {
    node [ fontname="Adobe Kaiti Std" ];
    edge [ fontname="Adobe Heiti Std" ];

    __NODE__

    __EDGE__
}"""
        dot_string = dot_string.replace("__NODE__", "\n    ".join(self.get_dot_nodes()))
        dot_string = dot_string.replace("__EDGE__", "\n    ".join(self.get_dot_node_deps()))

        print(dot_string)
        svg = dot2svg(dot_string)
        i = svg.index('<svg ')
#        print(svg)
        svg_file_path = os.path.join("static", "recipes", f"{self.prefix}.svg")
        with open(svg_file_path, 'w', encoding='utf-8') as f: 
            f.write(svg[i:]) 
        print(f"Write to file: {svg_file_path}")
