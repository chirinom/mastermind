import axios from 'axios'

const state = {
  availableColors: [],
  guesses: [],
  id: null,
  maxGuesses: 0,
  numberOfColors: 0,
  numberOfSlots: 0,
  secretCode: [],
  gameStatus: '',

  hasInput: false,
  currentGuess: {
    code: []
  },
  currentColor: '',
  completeSlotsList: [],
  availableSlot: {
    black_pegs: 0,
    code: ['grey', 'grey', 'grey', 'grey'],
    disabled: true,
    white_pegs: 0
  }
}
const getters = {
  availableColors: (state) => state.availableColors,
  currentGuess: (state) => state.currentGuess,
  currentColor: (state) => state.currentColor,
  completeSlotsList: (state) => state.completeSlotsList
}
const actions = {
  createNewGame ({ commit }, data) {
    const baseUrl = 'http://localhost:8000/api/games/'
    try {
      axios.post(baseUrl, data)
    } catch (e) {
      console.error(e)
    }
  },
  async getGame ({ commit }, id) {
    const baseUrl = `http://localhost:8000/api/games/${id}`
    try {
      const response = await axios.get(baseUrl)
      commit('setAvailableColors', response.data.colors)
      commit('setGuesses', response.data.guesses)
      commit('setId', response.data.id)
      commit('setMaxGuesses', response.data.max_guesses)
      commit('setNumberOfColors', response.data.num_colors)
      commit('setNumberOfSlots', response.data.num_slots)
      commit('setSecretCode', response.data.secret_code)
      commit('setGameStatus', response.data.status)
      commit('setUpdateGuessesTable')
    } catch (e) {
      console.error(e)
    }
  },
  async createNewGuess ({ commit }) {
    const baseUrl = `http://localhost:8000/api/games/${state.id}/guesses/`
    const data = state.currentGuess
    try {
      const response = await axios.post(baseUrl, data)
      commit('setGuesses', response.data.guesses)
      commit('setMaxGuesses', response.data.max_guesses)
      commit('setGameStatus', response.data.status)
      commit('setUpdateGuessesTable')
    } catch (e) {
      console.error(e)
    }
  },
  handleInputChange ({ commit }, data) {
    commit('setHandleInputChange', data)
    commit('setUpdateGuessesTable')
  },
  updateGuessesTable ({ commit }) {
    commit('setUpdateGuessesTable')
  }
}
const mutations = {
  setAvailableColors: (state, data) => (state.availableColors = data),
  setGuesses: (state, data) => (state.guesses = data),
  setId: (state, data) => (state.id = data),
  setMaxGuesses: (state, data) => (state.maxGuesses = data),
  setNumberOfColors: (state, data) => (state.numberOfColors = data),
  setNumberOfSlots: (state, data) => (state.numberOfSlots = data),
  setSecretCode: (state, data) => (state.secretCode = data),
  setGameStatus: (state, data) => (state.gameStatus = data),
  setCurrentColor: (state, data) => (state.currentColor = data),

  setHandleInputChange: (state, data) => {
    state.completeSlotsList.forEach((option) => {
      if (!option.disabled) {
        state.hasInput = true
        option.code[data.index] = data.color
        state.currentGuess.code = option.code
      }
    })
  },

  setUpdateGuessesTable: (state) => {
    const fullList = []
    const availableSlotsCount = state.maxGuesses - state.guesses.length
    const hasCheckedVals = state.currentGuess.code.find((a) => a === 'lightgrey')
    const emptySlot = {
      black_pegs: 0,
      code: ['lightgrey', 'lightgrey', 'lightgrey', 'lightgrey'],
      disabled: false,
      white_pegs: 0
    }

    // Add guesses with disabled true
    state.guesses.map(guess => fullList.push({ ...guess, disabled: true }))

    // Add empty slot or user input
    if (!state.hasInput) {
      hasCheckedVals
        ? fullList.push(state.inputSlot)
        : fullList.push(emptySlot)
    } else {
      state.completeSlotsList.forEach((option) => {
        if (!option.disabled) {
          fullList.push({ ...option, code: option.code })
        }
      })
    }

    // Add available slots
    for (let i = 0; i < availableSlotsCount - 1; i++) { fullList.push(state.availableSlot) }
    state.completeSlotsList = fullList
    state.hasInput = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
