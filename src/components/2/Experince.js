import React from 'react'
import styled from 'styled-components'

const Experince = props => (
    <Job>
        <h3>{props.title}</h3>
        <a href={props.link} target="_blank">
        <img src={props.image} />
        </a>
        <p>{props.text}</p>
        <button className="Responsibilities">Responsibilities</button>
    </Job>
)

export default Experince

const Job = styled.div`
    img{
    height: 75px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    img:hover{
    transform: translateY(-3px);
    }

    .Responsibilities{
    margin: 8px 0px;
    border: 2px solid;
    border-radius: 20px;
    font-weight: bold;
    padding: 8px 16px;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    background: none;
    font-size: 16px;
  }
  
  .Responsibilities:hover{
    background-color: rgb(51, 51, 51);
    box-shadow: 0 10px 20px rgba(0,0,0,0.25);
    transform: translateY(-3px);
  }
`