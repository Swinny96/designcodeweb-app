import React from 'react'
import './Experince.css'

const Experince = props => (
    <div className="Job">
        <h3>{props.title}</h3>
        <a href={props.link} target="_blank">
        <img src={props.image} />
        </a>
        <p>{props.text}</p>
        <button className="Responsibilities">Responsibilities</button>
        
    </div>
)

export default Experince