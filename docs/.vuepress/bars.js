import blogEntries from "./blog-entries";

const blogSidebarEntriesGenerator = blogEntries.blogSidebar(
    blogEntries.entries,
);
const blogYears = ["2025"];

const blogSidebarEntries = [{ text: 'ブログ ホーム', link: '/blog/README.md'}].concat(blogYears.map(blogSidebarEntriesGenerator));

const nav = [
    {
        text: "Blog",
        link: "/blog/",
    },
    {
        text: "Projects",
        link: "/projects/",
    },
    {
        text: "About",
        link: "/about-author/",
    },
];

const side = {
    "/about-author/": [
        {
            text: "About",
            children: ["README.md", "as-programmer.md", "contact.md"],
        },
    ],
    "/projects/": "heading",
    "/blog/": blogSidebarEntries,
};

export default { nav, side };
