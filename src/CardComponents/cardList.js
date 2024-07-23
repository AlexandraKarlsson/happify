import React from 'react'
import CardComponent from "./cardComponent";
import {useSelector} from "react-redux";

export function CardList(){
    const cardList = useSelector(state => state.input.list)

    return (
        <div className='center'>
            {cardList && cardList.map(card => <CardComponent key={card.id} card={card}/>)}
        </div>
    )
}