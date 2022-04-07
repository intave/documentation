const fs = require("fs");
const path = require("path");

module.exports = {
    title: "Intave",
    description: "Documentation around the Intave anticheat",
    extend: '@vuepress/theme-default',
    themeConfig: {
        logo: '/assets/intave_logo.png',
        repo: 'intave/documentation',
        docsRepo: 'https://github.com/intave/documentation',
        docsBranch: 'master',
        docsDir: '/',
        searchPlaceholder: 'Search...',
        editLinkPattern: ':repo/-/edit/:branch/:path',
        nav: [
            {text: "Mechanics", link: '/mechanics/'},
            {text: "Guides", link: '/guides/'},
            {text: "Discord", link: 'https://intave.de/go/discord'},
        ],
        sidebar: {
            "/mechanics/": ["", sidebarMap("mechanics", "c", "Configuration"), sidebarMap("mechanics", "t", "Trustfactor")],
            "/guides/": ["", sidebarMap("guides", "i", "For Intave"), sidebarMap("guides", "e", "For plugins")],
        }
    }
}

function sidebarMap(folder, prefix, title) {
    const extension = [".md"];

    const files = fs
        .readdirSync(path.join(`${__dirname}/../${folder}`))
        .filter(
            (item) =>
                item.toLowerCase() !== "readme.md" &&
                item.toLowerCase().startsWith(prefix) &&
                fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
                extension.includes(path.extname(item))
        );

    return {title: title, children: [...files]};
}