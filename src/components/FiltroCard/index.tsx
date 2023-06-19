import { useDispatch, useSelector } from 'react-redux'

import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

import * as enums from '../../utils/enums/Tarefa'

import * as S from './styles'

export type Props = {
  legenda: string
  criterio: 'Prioridade' | 'Status' | 'Todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'Todas') return tarefas.itens.length
    if (criterio === 'Prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'Status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarTarefas()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
