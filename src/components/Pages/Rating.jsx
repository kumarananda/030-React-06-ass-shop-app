import React from 'react'

const Rating = ( {rate}) => {

    if(rate === 5){
        return(
            <>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
            </>
        )
    }else if(rate === 4){
        return(
            <>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star "></i>
            </>
        )
    }else if(rate === 3){
        return(
            <>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star "></i>
                <i className="ti-star "></i>
            </>
        )
    }else if(rate === 2){
        return(
            <>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star "></i>
                <i className="ti-star "></i>
                <i className="ti-star "></i>
            </>
        )
    }else if(rate === 1){
        return(
            <>
                <i className="ti-star full"></i>
                <i className="ti-star "></i>
                <i className="ti-star "></i>
                <i className="ti-star "></i>
                <i className="ti-star "></i>
            </>
        )
    }else {
        return(
            <>
                <i className="ti-star "></i>
                <i className="ti-star "></i>
                <i className="ti-star "></i>
                <i className="ti-star "></i>
                <i className="ti-star "></i>
            </>
        )
    }


}

export default Rating;