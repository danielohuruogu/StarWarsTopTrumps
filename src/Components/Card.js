import React from 'react'
import './Card.css';

export default function Card(props) {

    const { info } = props

    console.log(info)

    return (
        <div className='card'>
            {info && (
                <>
                    <div>Name: {info.name}</div>
                    <div>Birth year: {info.birth_year}</div>
                    <div>Height: {info.height} cm</div>
                    <div>Mass: {info.mass}</div>
                    <div>No. of film appearances: {info.films.length}</div>
                </>
                )}
        </div>
    )
}