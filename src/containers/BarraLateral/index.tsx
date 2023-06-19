import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { Campo } from '../../styles'

import * as enums from '../../utils/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
      </div>
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
    </S.Aside>
  )
}

export default BarraLateral
