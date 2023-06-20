import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

const Opcoes = styled.div`
  margin-bottom: 16px;

  + p {
    margin-botoom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [desc, setDesc] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        desc,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
