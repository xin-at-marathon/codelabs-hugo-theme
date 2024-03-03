import pathlib
from post_parser import *

filepath = pathlib.Path(__file__).resolve().parent

recipes = glob.glob("*", root_dir=os.path.join('content', 'recipes')) 
for recipe in recipes:
    parser = PostParser(recipe)
    svg = parser.save_svg()
