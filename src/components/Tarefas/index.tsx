import { useState } from 'react'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  desc: string
}

const Tarefa = ({ titulo, prioridade, status, desc }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="Prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="Status" status={status}>
        {status}
      </S.Tag>
      <S.Desc value={desc} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar>Remover</S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
