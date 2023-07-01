import React from 'react';
import '../../../../../../styles/style.css'
import { rowWiseDisplay } from './helpers/grid.rowWiseDisplay';
import { renderItems } from './helpers/grid.renderItems';
function Grid({ products }) {
    const rows = rowWiseDisplay(products);
    return (
        <div className="grid__container flex flex__column">
            {renderItems(rows)}
        </div>
    );
}
export default Grid