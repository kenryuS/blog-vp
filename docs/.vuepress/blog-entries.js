const entries = {
    2025: [],
};

const blogSidebar = (entries) => {
    return (year) => {
        return {
            text: year,
            collapsible: true,
            children: entries[year],
        };
    };
};

export default { entries, blogSidebar };
