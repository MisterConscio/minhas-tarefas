import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 64px;
  height: 64px;
  background-color: #44bd32;
  color: white;
  font-size: 40px;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
`

const BotaoAdicionar = () => <Circulo to="/novo">+</Circulo>

export default BotaoAdicionar
