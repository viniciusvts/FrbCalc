import uuid from 'uuid/v4'
import { parseObjectValuesToFloat } from '../utils/parseObjectValuesToFloat'
import omit from 'lodash/omit'
import { SAVE_DISCIPLINA, ADD_DISCIPLINA, REMOVE_DISCIPLINA } from '../constants/ActionTypes'

const initialState = {}

const sanitizeDisciplina = (id, { titulo, notas }) => {
  return {
    [id]: {
      id, titulo,
      notas: parseObjectValuesToFloat(notas)
    }
  }
}

const disciplinas = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_DISCIPLINA:
      return omit(state, [action.disciplina.id])
    case ADD_DISCIPLINA:
      return { ...state, ...sanitizeDisciplina(uuid(), action.disciplina) }
    case SAVE_DISCIPLINA:
      return { ...state, ...sanitizeDisciplina(action.disciplina.id, action.disciplina) }
    default:
      return state
  }
}

export default disciplinas