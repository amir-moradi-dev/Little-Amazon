import React from "react"
import './index.css'
import {RemoveShoppingCart} from "@mui/icons-material";
import ShowRating from "../ShowRating"
import {useDispatch} from "../../store/StateProvider";

function CheckoutProduct({id,title,image,price,rating}) {

    const dispatch = useDispatch()

    function removeFromBasket() {
        return dispatch({
            type: 'REMOVE_FROM_BASKET',
            data: {id}
        })
    }

    return <>

        <div className={'checkoutProduct'}>
            <img className={'checkoutProduct__image'} src={image} alt={title} />

            <div className={'checkoutProduct__info'}>
                <p className={'checkoutProduct__title'}>
                    {title}
                </p>
                <p className={'checkoutProduct__price'}>
                    Price: {price}
                </p>
                <div className={'checkoutProduct__rating'}>
                    Rating: <ShowRating rating={rating} />
                </div>
                <button className={'checkout__removeFromBasket'} onClick={removeFromBasket}>
                    <span>Remove From Basket</span>
                    <RemoveShoppingCart fontSize={'medium'} />
                </button>
            </div>


        </div>

    </>
}

export default CheckoutProduct