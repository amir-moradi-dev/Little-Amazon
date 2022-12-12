import React from "react"
import './index.css'
import { v4 as idGen } from 'uuid';
import Product from "../Product";

function Home() {
    return (
        <div className={'home'}>

            <div className={'home__landing'}>
                <img src={'images/home/landing.png'} alt={'landing-page'} className={'home__image'}/>
            </div>

            <div className={'home__row'}>
                <Product
                    id={idGen()}
                    title={'2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold'}
                    image={'images/products/p1.jpg'}
                    price={'$900'}
                    rating={'4.8'}
                />
                <Product
                    id={idGen()}
                    title={'Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black'}
                    image={'images/products/p2.jpg'}
                    price={'$79.99'}
                    rating={'4.4'}
                />
                <Product
                    id={idGen()}
                    title={'Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop - Black'}
                    image={'images/products/p3.jpg'}
                    price={'$36.99'}
                    rating={'4'}
                />
            </div>

            <div className={'home__row'}>
                <Product
                    id={idGen()}
                    title={'Acer Aspire 5 A515-56-702V Laptop | 15.6" Full HD IPS Display | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 16GB DDR4 | 512GB SSD | WiFi 6 | Fingerprint Reader | BL Keyboard | Windows 11'}
                    image={'images/products/p4.jpg'}
                    price={'$799.99'}
                    rating={'4.7'}
                />
                <Product
                    id={idGen()}
                    title={'SAMSUNG Galaxy Watch 4 40mm Smartwatch with ECG Monitor Tracker for Health, Fitness, Running, Sleep Cycles, GPS Fall Detection, Bluetooth, US Version, SM-R860NZSAXAA, Silver'}
                    image={'images/products/p5.jpg'}
                    price={'$89.99'}
                    rating={'4.8'}
                />
                <Product
                    id={idGen()}
                    title={'Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)'}
                    image={'images/products/p6.jpg'}
                    price={'$133'}
                    rating={'4.5'}
                />
            </div>

            <div className={'home__row'}>
                <Product
                    id={idGen()}
                    title={'BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games'}
                    image={'images/products/p7.jpg'}
                    price={'$77.99'}
                    rating={'4.5'}
                />
                <Product
                    id={idGen()}
                    title={'SAMSUNG Galaxy Tab A8 10.5” 32GB Android Tablet w/ LCD Screen, Long Lasting Battery, Kids Content, Smart Switch, Expandable Memory, US Version, Silver, Amazon Exclusive'}
                    image={'images/products/p8.jpg'}
                    price={'$159.99'}
                    rating={'4.5'}
                />
                <Product
                    id={idGen()}
                    title={'Lenovo 2022 Newest Ideapad 3 Laptop, 15.6" HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, HDMI, Webcam, Wi-Fi 5, Bluetooth, Windows 11 Home, Almond'}
                    image={'images/products/p9.jpg'}
                    price={'$409'}
                    rating={'4.5'}
                />
            </div>

        </div>
    )
}

export default Home