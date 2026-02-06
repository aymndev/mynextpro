



export const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
        throw new Error("Failed to fech data");
    };

    const data = await res.json();
    return data.products;
};


