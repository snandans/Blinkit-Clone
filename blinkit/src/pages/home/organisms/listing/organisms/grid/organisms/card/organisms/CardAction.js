import React, { Fragment } from 'react'
import Button from '../../../../../../../../../atoms/Button'
import { useSelector, useDispatch } from 'react-redux'
import { handleOnClick } from './helpers/card.handleClick'

function CardAction({ discountPrice, price, id }) {

    const count = useSelector((state) => state.countReducer)
    const dispatch = useDispatch();

    return (
        <div className="cardBottom flex flex__center__cross-axis">
            <div>
                <p>₹{discountPrice}</p>
                <p className="gray strikethrough">₹{price}</p>
            </div>
            <Fragment>
                {
                    count.get(id) ? (
                        <div className="flex innerbtn">
                            <Button styles="btn" onClick={() => handleOnClick(false, id, dispatch)}> - </Button>
                            <p className="flex flex__center__cross-axis">{count.get(id)}</p>
                            <Button styles="btn" onClick={() => handleOnClick(true, id, dispatch)}> + </Button>
                        </div>
                    ) : (
                        <Button styles="btn flex flex__center__main-axis flex__center__cross-axis"
                            onClick={() => handleOnClick(true, id, dispatch)}> ADD </Button>
                    )
                }
            </Fragment>
        </div>
    )
}

export default CardAction