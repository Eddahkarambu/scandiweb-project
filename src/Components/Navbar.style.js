
import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Nav = styled.div`
position: absolute;
background: #white;
margin-top: 30px;
width:100%;
display: flex;
align-items: center;
text-align: center;

`
export const NavLink = styled(Link)`
width: 65px;
height: 20px;
margin-right: 50px;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 120%;
display: flex;
justify-content: space-between;
text-transform: uppercase;
color: black;

&.active {
    color: green
}
`

export const Arrow = styled.div`
width: 65px;
height: 20px;
margin-right: 100px;
align-items: center;
text-align: center;
`


export const Signs = styled.div`
height: 20px;
margin-right: 100px;
align-items: center;
text-align: center;
display:flex;
`


export const People = styled.div`
display:flex;
`




export const Tools = styled.div`
display:flex;
width:90%;
margin:auto;
justify-content:space-between;
`





