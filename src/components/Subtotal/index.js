import React from "react"
import './index.css'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from "../../reducers";
import {useStateValue} from "../../store/StateProvider";

function Subtotal() {

    const basket = useStateValue('basket')
    const totalPrice = getBasketTotal(basket)

    function renderSomeText(value) {

        if(value==='$0')
            return <>
                <h3 style={{color:"#bead1e"}}>
                    Your Shopping Card Is Empty!
                </h3>
            </>

        return <>

            <p>
                Total Amount : ({basket.length} items):
                <strong style={{color:"green"}}>
                    {value}
                </strong>
            </p>


        </>
    }

    return <>
        <div className={'subtotal'}>
            <CurrencyFormat
                renderText={renderSomeText}
                decimalScale={2}
                value={totalPrice}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    </>
}

export default Subtotal