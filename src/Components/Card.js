import React from 'react'

export default function Card(props) {

    const { info } = props

    console.log(info)

    return (
        <div>
            <div>{info && info.name}</div>
        </div>
    )
}