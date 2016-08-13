#!/usr/bin/env python

from jinja2 import Environment, FileSystemLoader
import json
import os
import argparse

parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("aliases", help="filepath of the aliases in JSON format")
parser.add_argument("-c", "--colorfg", help="search box color", default="#073642")
parser.add_argument("-C", "--colorbg", help="background color", default="#002B36")
parser.add_argument("-f", "--font", help="default font", default="Droid Sans")
parser.add_argument("-F", "--fonturl", help="external font URL", default="https://fonts.googleapis.com/css?family=Droid+Sans:400")
parser.add_argument("-t", "--title", help="title of the page", default="New Tab")
parser.add_argument("-s", "--search", help="query url of the default search engine", default="https://duckduckgo.com/?&atb=v5&q=")
args = parser.parse_args()

env = Environment(loader=FileSystemLoader("templates"))

template_html = env.get_template("startpage.html")
template_css = env.get_template("startpage.css")
template_js = env.get_template("startpage.js")

with open(args.aliases) as data_file:
    aliases = json.load(data_file)

render_html = template_html.render(title=args.title, fonturl=args.fonturl)
render_css = template_css.render(font=args.font, colorfg=args.colorfg, colorbg=args.colorbg)
render_js = template_js.render(aliases=aliases, search=args.search)

if not os.path.exists("output"):
    os.makedirs("output")

with open("output/startpage.html", "wb") as f:
    f.write(render_html)

with open("output/startpage.css", "wb") as f:
    f.write(render_css)

with open("output/startpage.js", "wb") as f:
    f.write(render_js)
