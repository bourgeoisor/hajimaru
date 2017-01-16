# Hajimaru

Hajimaru is an easy way to get started with a beautiful and practical set of startpage and bookmarks list as simple web pages.  Both generators can be use independently of each other.

A live demo is available [here](http://code.bourgeois.io/hajimaru/startpage.html) and [here](http://code.bourgeois.io/hajimaru/bookmarks.html).

Generate a Startpage
--------------------

To generate the three web page files, run the following:

    python startpage.py path/to/aliases.json

For a full list of the optional arguments:

    python startpage.py --help

The `aliases.json` file is in JSON format and contain the list of aliases to translate in the startpage search box.

    {
      "gh": "github.com",
      "yt": "youtube.com"
    }

Generate a Bookmarks Page
-------------------------

To generate the three web page files, run the following:

    python bookmarks.py path/to/bookmarks.json

For a full list of the optional arguments:

    python startpage.py --help

The `bookmarks.json` file is in JSON format and contain the list of bookmark URLs.

    {
      "Top Tier Websites": {
        "Reddit": "reddit.com",
        "Zombo": "zombo.com"
      },

      "Lower Tier Websites": {
        "obmoZ": "obmoz.com"
      }
    }

Collaboration
-------------

Feel free to fork this repository, make changes and create a pull requests, and to create new issues!
