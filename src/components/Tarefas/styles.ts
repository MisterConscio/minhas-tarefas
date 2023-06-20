import styled from 'styled-components'
import color from '../../styles/var'

import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'Status' | 'Prioridade'
}

function tagCordeFundo(props: TagProps): string {
  if (props.parametro === 'Status') {
    if (props.status === enums.Status.PENDENTE) return color.amarelo
    if (props.status === enums.Status.CONCLUIDA) return color.verde
  } else {
    if (props.prioridade === enums.Prioridade.URGENTE) return color.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE) return color.amarelo2
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => tagCordeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
`

export const Desc = styled.textarea`
  color: #888888;
  font-size: 14px;
  line-height: 24px;
  font-family: Roboto Mono, monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${color.vermelho};
`
