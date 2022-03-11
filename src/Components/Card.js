import React from 'react';
import './Card.css';

export default function Card(props) {

    const { info, setPlayerAttriState } = props

    var processBirthYear = (yearToProcess) => {
        // change the birth year into a number
        if (yearToProcess.includes('unknown')) {
            return 'unknown'
        } else {
            var proccBirth_Year = parseInt(yearToProcess)

            // if the birth year sent in the server contains ABY, then can call it a negative number
            // more recent birth years are given a negative, so that the comparison function still works
            // the more distant birth years will be bigger, meaning I don't have to change how it works
            if (yearToProcess.includes('ABY')) {
                proccBirth_Year = proccBirth_Year * -1;
            }
            return proccBirth_Year
        }
    }

    function attributeClick(e) {
        var cardAttrDiv = e.target

        var attributeValue = parseInt(e.target.getAttribute('value'))
        // to handle 'unknown' and give it default value of 0
        if (isNaN(attributeValue)) {
            attributeValue = 0
        }

        setPlayerAttriState(() => ({
            'attri': e.target.getAttribute('name'),
            'attriValue': attributeValue
        }))        
        cardAttrDiv.classList.add('selected')
        // checkForPoint()
    }

    return (
        <div className='card'>
            {info ? (
                <div className='cardInfo'>
                    <div className='attr'
                        name="name"
                        value={info.name}
                        onClick={attributeClick}
                        ><strong>
                            Name: {info.name}
                        </strong>
                        </div>
                    <div className='attr'
                        name="birth_year"
                        value={processBirthYear(info.birth_year)}
                        onClick={attributeClick}
                        >
                            Birth year: {info.birth_year}
                        </div>
                    <div className='attr'
                        name="height"
                        value={parseInt(info.height)}
                        onClick={attributeClick}
                        >
                            Height: {info.height} cm
                        </div>
                    <div className='attr'
                        name="mass"
                        value={parseInt(info.mass)}
                        onClick={attributeClick}
                        >
                            Mass: {info.mass}
                        </div>
                    <div className='attr'
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