import React, { useState } from 'react';
import './index.css'
import {Link, useNavigate} from "react-router-dom"
import {AlternateEmail, Error, Lock, Login as LoginIcon, NewReleases, Storefront} from "@mui/icons-material";
import {auth} from "../../config/firebase"
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "../../store/StateProvider";
import {SITE_NAME} from "../../config/site";

function Index() {
    const navigateTo = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')

    function signIn(e) {
        e.preventDefault()

        if(
            !email || !(email.length > 0) || !email.includes('@') ||
            !password || !(password.length > 7)
        ) {
            return setError('Please Insert Valid Inputs')
        }

        const auth = getAuth()
        signInWithEmailAndPassword(auth,email,password)
            .then(({user})=> {

                console.log(user)

                dispatch({
                    type: 'LOGGED_IN',
                    data: user
                })
                navigateTo('/')
            })
            .catch(e => {
                setError(e)
            })
    }

    function signUp(e) {
        e.preventDefault()

        if(
            !email || !(email.length > 0) || !email.includes('@') ||
            !password || !(password.length > 7)
        ) {
            return setError('Please Insert Valid Inputs')
        }

        const auth = getAuth()
        createUserWithEmailAndPassword(auth,email,password)
            .then(auth => {
                if(auth)
                    navigateTo('/')
            })
            .catch(e => {
                setError(e)
            })
    }

    function showError() {
        return(
            <p className={'login__error'}>
                <span>
                    <Error fontSize={'small'} /> Your Email Or Password Is Incorrect !!!
                </span>
                <span>
                    <NewReleases fontSize={'small'} /> Or Try To Sign Up Instead ...
                </span>
            </p>
        )
    }

    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <Storefront className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">{SITE_NAME}</h2>
                    <Storefront className="login__logoImage" fontSize="large" />
                </div>
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5 className={'login__email'}>E-mail <AlternateEmail /></h5>
                    <input className={'login__input '+(error&&' login__inputError')} type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5 className={'login__password'}>Password <Lock /></h5>
                    <input className={'login__input '+(error&&' login__inputError')} type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    {error&&showError()}
                    <button type='submit' className='login__signInButton' onClick={signIn}>
                        Log Me In <LoginIcon />
                    </button>
                </form>
                <p>
                    By signing-in you agree to the {SITE_NAME} Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login__registerButton' onClick={signUp}>
                    Create New Account
                </button>
            </div>
        </div>
    )
}

export default Index;