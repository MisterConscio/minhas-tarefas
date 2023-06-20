import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar TypeScript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      desc: ''
    },
    {
      id: 2,
      titulo: 'Estudar Vue',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      desc: 'Entender a diferença entre vue2 e vue3'
    },
    {
      id: 3,
      titulo: 'Estudar Lua',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      desc: 'Aprender o framework love2d'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (tarefaIndex >= 0) {
        state.itens[tarefaIndex] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Ja existe uma tarefa com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const tarefaIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (tarefaIndex >= 0) {
        state.itens[tarefaIndex].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
