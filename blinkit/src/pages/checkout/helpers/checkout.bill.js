export const getCartItems = (items, count, cost) => {
    const displayCheckoutItems = new Map();
    items.forEach((item) => {
        if (count.get(item.id) > 0) {
            cost += item.discount_price * count.get(item.id);
            displayCheckoutItems.set(item.product_name, count.get(item.id));
        }
    })
    return { displayCheckoutItems, cost };
}