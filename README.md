# Hajimaru

Hajimaru is an easy way to get started with a beautiful and practical set of startpage and bookmarks list as simple web pages.  Both generators can be use independently of each other.

Generate a Startpage
--------------------

To generate the three web page files, run the following:

    python startpage.py path/to/aliases.json

The `aliases.json` file is in JSON format and contain the list of aliases to translate in the startpage search box.

    {
      "gh": "github.com",
      "yt": "youtube.com"
    }

Generate a Bookmarks Page
-------------------------

To generate the three web page files, run the following:

    python bookmarks.py path/to/bookmarks.json

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
