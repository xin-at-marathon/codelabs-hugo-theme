import os
import glob
from post_parser import *

dir = os.path.join('content', 'recipes')
recipes = glob.glob(os.path.join(dir, '*')) 
for recipe in recipes:
    recipe = recipe.lstrip(dir)
    parser = PostParser(recipe)
    svg = parser.save_svg()
