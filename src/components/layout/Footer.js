import React from 'react'
import styled from 'styled-components'

const Footer = ({ siteTitle }) => (
  <FooterArea>
    <footer>
      <p>Last Updated October 2020</p>
    </footer>
  </FooterArea>
)

export default Footer

const FooterArea = styled.div`
    background: #333;
    color: white;
    text-align: center;
    margin: 0;
    padding: 16px;
`