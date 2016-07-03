from jinja2 import Environment, FileSystemLoader
import json
import os
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("aliases", help="the filepath of the aliases in JSON format")
args = parser.parse_args()

env = Environment(loader=FileSystemLoader("templates"))

template_html = env.get_template("startpage.html")
template_css = env.get_template("startpage.css")
template_js = env.get_template("startpage.js")

with open(args.aliases) as data_file:
    aliases = json.load(data_file)

render_html = template_html.render()
render_css = template_css.render()
render_js = template_js.render(aliases=aliases)

if not os.path.exists("output"):
    os.makedirs("output")

with open("output/startpage.html", "wb") as f:
    f.write(render_html)

with open("output/startpage.css", "wb") as f:
    f.write(render_css)

with open("output/startpage.js", "wb") as f:
    f.write(render_js)
