import { useState, useMemo } from 'react';
import Sidebar from './organisms/sidebar/Sidebar';
import Grid from './organisms/grid/Grid';
import useFetchData from '../../../../organisms/helpers/useFetchData'
import { Loading } from '../../../../molecules/loading';

function GetFilteredProducts(items, category) {
    const products = useMemo(() => {
        if (category === '')
            return items;
        return items?.filter(({ categories }) => categories.includes(category));
    }, [category, items]);
    return products;
}

function Listing() {
    const [category, setCategory] = useState('');
    const items = useFetchData('items');
    const products = GetFilteredProducts(items, category);

    const handleChange = (id) => {
        setCategory(id);
    };
    console.log(items);
    if (items.length === 0)
        return (<Loading />)
    else {
        return (
            <main className="flex">
                <Sidebar handleChange={handleChange} />
                <Grid products={products} />
            </main>
        );
    }
}

export default Listing;