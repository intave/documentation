const fs = require("fs");
const path = require("path");

module.exports = {
    title: "Intave",
    description: "Documentation around the Intave anticheat",
    themeConfig: {
        repo: 'intave/documentation',
        docsRepo: 'https://gitlab.com/intave/documentation',
        docsBranch: 'master',
        docsDir: '/',

        editLinkPattern: ':repo/-/edit/:branch/:path',
        nav: [
            {text: "Home", link: '/'},
            {text: "Mechanic", link: '/mechanic/'},
            {text: "Guide", link: '/guide/'},
        ],
        sidebar: {
            "/mechanic/": [sidebarMap("mechanic", "Mechanics")],
            "/guide/": ["", sidebarMap("guide", "i", "For Intave"), sidebarMap("guide", "e", "For plugins")],
        }
    }
}

function sidebarMap(folder, prefix, title) {
    const extension = [".md"];
  
    const files = fs
      .readdirSync(path.join(`${__dirname}/../${folder}`))
      .filter(
        (item) =>
          item.toLowerCase() != "readme.md" &&
          item.toLowerCase().startsWith(prefix) &&
          fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
          extension.includes(path.extname(item))
      );
  
    return { title: title, children: [...files] };
  }