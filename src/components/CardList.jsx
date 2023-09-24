import React from 'react'
import Card from './Card'

function CardList({weather}) {
    return (
        <div className='main-card-day-list'>
            {weather.map((element,key) => {
                if(key != 0){
                    return <Card element={element} key={key} />
                }
            })}
        </div>
    )

}

export default CardList