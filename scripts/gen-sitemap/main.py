import os
import glob
import pathlib
from post_parser import *

filepath = pathlib.Path(__file__).resolve().parent

recipes = glob.glob(os.path.join('content', 'recipes', '*')) 
for recipe in recipes:
    recipe = recipe.lstrip(os.path.join('content', 'recipes'))
    parser = PostParser(recipe)
    svg = parser.save_svg()
