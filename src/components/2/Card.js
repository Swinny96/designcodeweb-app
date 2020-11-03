import React from 'react'
import './Card.css'

const Cards = props => (
    <div className="Card">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Cards

const Card = styled.div`
    a.Comapny {
    display: flex;
    text-decoration: none;
    font-weight: bold;
    align-items: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    a.Comapny:hover {
    text-decoration: underline;
    transform: translateY(-3px);
    }
`