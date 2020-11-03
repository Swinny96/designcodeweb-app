import React from 'react'
import './Certifications.css'

const Certifications = props => (
    <div className="Cert">
        <h3>{props.title}</h3>
        <a className="Comapny" href={props.link} target="_blank" aria-label={props.company} >
        <img className={props.company} src={props.image} alt={props.company} />
        <p>{props.company}</p>
        </a>
        <p>{props.text}</p>
        <a className="btn" href={props.cert} target="_blank">See Certification</a>
    </div>
)

export default Certifications