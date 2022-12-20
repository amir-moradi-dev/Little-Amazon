import React, {useEffect} from "react"
import './index.css'
import {LocalGroceryStore, Search, Storefront} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useDispatch, useStateValue} from "../../../store/StateProvider";
import {SITE_NAME} from "../../../config/site";

function Header() {

    const basket= useStateValue('basket')
    const user = useStateValue('user')
    const dispatch = useDispatch()

    useEffect(()=>{},[user])

    function logUserOut() {
        dispatch({
            type: 'LOGGED_OUT'
        })
    }

    function showUserAccount() {


            if(!user) {
                return <>
                    <Link className={'nav__item'} to={'login'}>
                        <span className={'nav__itemLineOne'}>
                                Hello My Friend
                        </span>
                        <span className={'nav__itemLineTwo'}>
                                Sign In
                        </span>
                    </Link>
                </>
            }

            return <>
                <Link className={'nav__item'} to={'/'} onClick={logUserOut}>
                    <span className={'nav__itemLineOne'}>
                        Welcome Back {user.email}
                    </span>
                    <span className={'nav__itemLineTwo'}>
                        Sign Out
                    </span>
                </Link>
            </>



    }

    return (
        <div className={'header'}>

            <Link className={'header__logo'} to={'/'} >
                <Storefront className={'header__logoImage'} fontSize={'large'}/>
                <h2 className={'header__logoTitle'}>{SITE_NAME}</h2>
            </Link>

            <div className={'header__search'}>
                <input type={'text'} placeholder={'Search For A Product...'} className={'header__searchInput'}/>
                <Search className={'header__searchIcon'}/>
            </div>

            <div className={'header__nav'}>

                {showUserAccount()}

                <Link className={'nav__item nav__itemBasket'} to={'/checkout'}>
                    <LocalGroceryStore />
                    <span className={'nav__itemLineTwo nav__basketCount'}>
                        {basket?('+'+basket.length):0}
                    </span>
                </Link>

            </div>

        </div>
    )
}

export default Header