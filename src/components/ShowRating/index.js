import {Star} from "@mui/icons-material";
import React from "react";
import { v4 as idGen } from 'uuid';

function ShowRating({rating}) {

    let stars = Array(parseInt(rating))

    return stars
        .fill()
        .map( ()=> <Star key={idGen()} fontSize={'medium'} style={{color:'#ffeb3b'}} /> )

}

export default ShowRating