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
            "/mechanics/": ["", sidebarMap("mechanics", "config-", "Configuration"), sidebarMap("mechanics", "checks-", "Checks"), sidebarMap("mechanics", "trust-", "Trustfactor")],
            "/guides/": ["", sidebarMap("guides", "i", "Intave"), sidebarMap("guides", "e", "Ecosystem")],
        }
    },
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/intave_logo.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/intave_logo.png"}]
    ]
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
