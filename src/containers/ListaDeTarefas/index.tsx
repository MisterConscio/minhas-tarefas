import Tarefa from '../../components/Tarefas'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    id: 0,
    titulo: 'Estudar TypeScript',
    desc: 'Ler a documentação sobre API Fetch',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    id: 1,
    titulo: 'Pagar conta de internet',
    desc: 'Olhar a fatura',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    id: 2,
    titulo: 'Academia',
    desc: 'Treino de perna',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <S.Main>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.id}>
          <Tarefa
            titulo={t.titulo}
            desc={t.desc}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </S.Main>
)

export default ListaDeTarefas
