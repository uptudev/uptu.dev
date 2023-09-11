# Stylesheets

This folder contains all the SCSS files for styling the website.
It is segmented into various folders using a tree structure meant to model the actual HTML tree of the website while allowing for modularity and default styling.
For areas that may be unclear, this document will serve as a table of contents of sorts for the stylesheets.

As of right now, the layout of the folder is as such:
* `stylesheets`
  * `libs` contains the .css files representing the vars used elsewhere in code.
    * `colours.css` contains the basic theming for the website, defining colour variables.
    * `fonts.css` contains the font-face definitions for all fonts used by the website.
  * `base` contains the .scss files that apply to most (if not all) aspects of the webpage.
    * `text.scss` contains default text formatting rules, which can be overridden in page styling by use of the !important flag.
    * `logo.scss` contains the styling for the logo header of the website.
    * `navbar.scss` contains the styling for the navbar under the logo.
    * `header.scss` contains the styling for the Header component prefacing every page.
  * `pages` contains page-specific styling data meant to override the styling in `base`.
    * `about.scss` contains styling for /src/pages/About.tsx.
    * `admin.scss` contains styling for /src/pages/Admin.tsx.
    * `blog.scss` contains styling for /src/pages/Blog.tsx.
    * `games.scss` contains styling for /src/pages/Games.tsx.
    * `home.scss` contains styling for /src/pages/Home.tsx.
    * `nopage.scss` contains styling for /src/pages/NoPage.tsx.
  * `index.scss` is the base class imported by the webpage, and contains import declarations to all code in `base`.
  * `stylesheets.md` is this file.