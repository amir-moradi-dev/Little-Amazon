import React from 'react'
import './index.css'
import CheckoutProduct from "../CheckoutProduct";
import Subtotal from "../Subtotal";
import {useStateValue} from "../../store/StateProvider";
import {CreditCard} from "@mui/icons-material";

function Checkout() {

    const basket = useStateValue('basket')

    function renderCheckoutProducts() {
        return basket.map( item => {
            return (
                <CheckoutProduct {...item}/>
            )
        })
    }

    return (
        <div className={'checkout'}>
            <div className={'checkout__left'}>
                <img className={'checkout__ad'} src={'images/checkout/ad.jpg'} alt={'description about sale'} />
                <div >
                    <div className={'checkout__title'}>
                        <h2>
                            Your Shopping Card <CreditCard />
                        </h2>
                    </div>

                    {renderCheckoutProducts()}
                </div>
            </div>
            <div className={'checkout__right'}>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

