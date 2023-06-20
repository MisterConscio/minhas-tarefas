import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { Campo, Botao } from '../../styles'

import * as enums from '../../utils/enums/Tarefa'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="Status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="Status"
                legenda="conluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="Prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="Prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="Prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="Todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            &larr; Voltar a lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
