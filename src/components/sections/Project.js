import React from 'react'
import './Project.css'

const Project = props => (
    <div className="Project">
        <div className="Project-Contents">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p>{props.status}</p>
        <p>{props.date}</p>
        </div>
        <a href={props.url} target="_blank" className="Project-Card" id={props.id}>
        <img src={props.image} id={props.id} />
        </a>
    </div>
)

export default Project