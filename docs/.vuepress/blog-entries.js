const entries = {
    2025: [
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
