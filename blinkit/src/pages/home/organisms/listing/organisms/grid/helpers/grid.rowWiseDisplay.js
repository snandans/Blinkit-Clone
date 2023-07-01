export function rowWiseDisplay(products) {
    const rows = [];
    for (let i = 0; i < products.length; i += 4) {
        const row = products.slice(i, i + 4);
        rows.push(row);
    }

    return rows;
}