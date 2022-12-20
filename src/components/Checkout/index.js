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
                <div className={'checkout__heroImage'}>
                    <div className={'checkout__heroImage__left'}>
                        <img className={'checkout__ad'} src={'images/checkout/left.jpg'} alt={'description about sale'} />
                    </div>
                    <div className={'checkout__heroImage__right'}>
                        <img src={'images/checkout/top-right.jpg'} alt={'online shopping...'}/>
                        <img src={'images/checkout/bottom-right.jpg'} alt={'online shopping...'}/>
                    </div>
                </div>

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

