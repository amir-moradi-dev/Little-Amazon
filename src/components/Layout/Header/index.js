import React, {useEffect} from "react"
import './index.css'
import {LocalGroceryStore, Search, Storefront} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useStateValue} from "../../../store/StateProvider";

function Header() {

    const basket= useStateValue('basket')
    const user = useStateValue('user')

    useEffect(()=>{},[user])

    function showUserAccount() {
        return (

            <Link className={'nav__item'} to={'login'}>
                <span className={'nav__itemLineOne'}>
                        Hello {user ? user.email : 'Guest'}
                </span>
                <span className={'nav__itemLineTwo'}>
                    {user ? 'Sign Out' : 'Sign In'}
                </span>
            </Link>

        )
    }

    return (
        <div className={'header'}>

            <Link className={'header__logo'} to={'/'} >
                <Storefront className={'header__logoImage'} fontSize={'large'}/>
                <h2 className={'header__logoTitle'}>Little-Amazon</h2>
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