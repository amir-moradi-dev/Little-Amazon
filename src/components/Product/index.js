import React from "react"
import './index.css'
import {AddShoppingCart} from "@mui/icons-material";
import ShowRating from "../ShowRating";
import {useDispatch} from "../../store/StateProvider";

function Product({id,title,image,rating,price}) {

    const dispatch = useDispatch()

    function addToBasket() {
        return dispatch({
            type: 'ADD_TO_BASKET',
            data: {id,image,title,price,rating}
        })
    }

    return (
        <div className={'product'}>


            <img src={image} alt={'product_image'} />


            <div className={'product__info'}>
                <h3>{title}</h3>
                <hr />
                <div className={'product__price'}>Price: {price}</div>
                <div className={'product__rating'}>
                    Rating : <ShowRating rating={rating} />
                </div>
            </div>

            <button className={'product__add'} onClick={addToBasket}>
                <p>Add</p>
                <AddShoppingCart />
            </button>

        </div>
    )
}

export default Product