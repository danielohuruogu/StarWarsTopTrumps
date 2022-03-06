import React from 'react';
import { useState } from 'react';
import './Card.css';

export default function Card(props) {

    const { info, name, attributes, setAttributes, compareAttri } = props

    // console.log(info)
    console.log(attributes)

    function attributeClick(e) {
        var cardAttrDiv = e.target
        // setAttributes({
        //     ...attributes,
        //     [name]: {
        //         [e.target.getAttribute('name')] : e.target.getAttribute('value')
        //     } 
        // })
        attributes[0] = e.target.getAttribute('name')
        attributes[1] = e.target.getAttribute('value')
        
        cardAttrDiv.classList.toggle('selected')
        compareAttri()
    }

    return (
        <div className='card'>
            {info ? (
                <div className='cardInfo'>
                    <div
                        name="name"
                        value={info.name}
                        onClick={attributeClick}
                        >
                            Name: {info.name}
                        </div>
                    <div
                        name="birth_year"
                        value={info.birth_year}
                        onClick={attributeClick}
                        >
                            Birth year: {info.birth_year}
                        </div>
                    <div
                        name="height"
                        value={parseInt(info.height)}
                        onClick={attributeClick}
                        >
                            Height: {parseInt(info.height)} cm
                        </div>
                    <div
                        name="mass"
                        value={parseInt(info.mass)}
                        onClick={attributeClick}
                        >
                            Mass: {parseInt(info.mass)}
                        </div>
                    <div
                        name="films.length"
                        value={info.films.length}
                        onClick={attributeClick}
                        >
                            No. of film appearances: {info.films.length}
                        </div>
                </div>
                ) : 
                (
                    <div className='cardInfo'>
                        WHO WILL YOU GET?
                    </div>
                )}
        </div>
    )
}