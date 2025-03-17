const entries = {
    2025: [
        "blog-update-1.md",
        "new-blog.md",
    ],
};

const blogSidebar = (entries) => {
    return (year) => {
        return {
            text: year,
            collapsible: true,
	    prefix: year + '/',
            children: entries[year],
        };
    };
};

export default { entries, blogSidebar };
