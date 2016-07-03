from jinja2 import Environment, FileSystemLoader
import json
import os
import argparse

parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("bookmarks", help="the filepath of the bookmarks in JSON format")
parser.add_argument("-C", "--colorbg", help="background color", default="#052026")
parser.add_argument("-f", "--font", help="default font", default="Droid Sans")
parser.add_argument("-F", "--fonturl", help="external font URL", default="https://fonts.googleapis.com/css?family=Droid+Sans:400")
parser.add_argument("-t", "--title", help="title of the page", default="Bookmarks")
args = parser.parse_args()

env = Environment(loader=FileSystemLoader("templates"))

template_html = env.get_template("bookmarks.html")
template_css = env.get_template("bookmarks.css")
template_js = env.get_template("bookmarks.js")

with open(args.bookmarks) as data_file:
    bookmarks = json.load(data_file)

render_html = template_html.render(bookmarks=bookmarks, title=args.title, fonturl=args.fonturl)
render_css = template_css.render(font=args.font, colorbg=args.colorbg)
render_js = template_js.render()

if not os.path.exists("output"):
    os.makedirs("output")

with open("output/bookmarks.html", "wb") as f:
    f.write(render_html)

with open("output/bookmarks.css", "wb") as f:
    f.write(render_css)

with open("output/bookmarks.js", "wb") as f:
    f.write(render_js)
