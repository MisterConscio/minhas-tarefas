import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar } from '../../store/reducers/tarefas'

import * as S from './styles'
import { BotaoSalvar } from '../../styles'
//import * as enums from '../../utils/enums/Tarefa'

import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ titulo, prioridade, status, desc: descricao, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [desc, setDesc] = useState('')

  useEffect(() => {
    if (descricao.length > 0) {
      setDesc(descricao)
    }
  }, [descricao])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDesc(descricao)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="Prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="Status" status={status}>
        {status}
      </S.Tag>
      <S.Desc
        disabled={!estaEditando}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    desc,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
