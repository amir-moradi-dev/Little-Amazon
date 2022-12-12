// here we define all the application level states and define
// actions to make the changes to the state

export const initialState = {
    basket: [] ,
    user: ''
}


// Selector
function reducer(state,action) {
    switch(action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                user: action.data
            }
        case "LOGGED_OUT":
            return {
                ...state,
                user: ''
            }
        case "ADD_TO_BASKET" :
            return {
                ...state,
                basket: [...state.basket,action.data]
            }
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                basket: state.basket.filter( item => item.id !== action.data.id)
            }
        default:
            return state
    }
}

export function getBasketTotal(basket) {

    function calculateTotalPrice(amount,item) {
        //"$900" => ['','900'] => '900' => Number('900') => 900
        const realPrice = Number(item.price.split('$')[1])
        console.log('item.price=>')
        console.log(item.price)
        amount += realPrice
        return amount
    }

    return ( basket?.reduce(calculateTotalPrice,0) )
}

export default reducer