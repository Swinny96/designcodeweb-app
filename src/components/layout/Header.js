import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <header>
    <HeaderSection>
      <Toggle>
        <Icon>
          <img src={require('../images/toggle/sun.svg')} />
        </Icon>
      </Toggle>
      <img className="HeroImage" src={require('../images/hero/webp/me.webp')}/>
      <h1>Christopher Swinton</h1>
      <p>Digital Developer for Leeds Beckett University</p>
      <ContactSection>
      <Link href="https://www.linkedin.com/in/cswinton96/" target="_blank" className="HeroContact">
        <img className="Contact" src={require('../images/linkedin.webp')}/>
      </Link>
      <Link href="mailto:cswintonux@gmail.com?Subject=UX" target="_blank" className="HeroContact">
        <img className="Contact" src={require('../images/gmail.webp')}/>
      </Link>
      </ContactSection>
    </HeaderSection>
  </header>
)

export default Header

const HeaderSection = styled.div`
    background: #333333;
    margin: 0 auto;
    align-items: center;
    padding: 30px;
    color: white;
    text-align: center;
    max-width: 1024px;

    .HeroImage{
    display: block;
    margin: auto;
    width: 250px;
    height: auto;
    border: 5px solid white;
    border-radius: 50%;
    }

    .Contact{
    height: 40px;
    margin: 0 8px;
    }

    .HeroContact{
      display: inline-grid;
    }

    .HeroContact img{
    filter: grayscale(100%);
    transition: .3s ease-in-out;
    }

    .HeroContact img:hover{
    filter: grayscale(0);
    transform: scale(1.2);
    }
`

const Toggle = styled.div`
    background: white;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    padding: 0.5rem;
    display: grid;
    margin-left: auto;
`

const Icon = styled.div`
    width: 1.2em;
    height: 1.2em;
    grid-area: a;
`

const ContactSection = styled.div`
    
`