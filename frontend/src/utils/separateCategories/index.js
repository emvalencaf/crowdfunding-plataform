const separateCategories = (categoryStr) => {
    const categories = categoryStr.match(/,/g) ? (
        categoryStr
            .split(",")
            .map((category) => category.trim())
    ) : [categoryStr];

    categories.forEach((category) => {
        if (category.length > 15) throw new Error('category tag cannot be greater than 15 characters');
    });

    return categories;
}

export default separateCategories;