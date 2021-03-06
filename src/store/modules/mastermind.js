import axios from 'axios'

const state = {
  availableColors: [],
  guesses: [],
  id: null,
  maxGuesses: 0,
  gameStatus: '',

  inputChange: false,
  currentGuess: { code: [] },
  currentColor: 'lightgrey',
  completeSlotsList: [],
  availableSlot: {
    black_pegs: 0,
    code: ['grey', 'grey', 'grey', 'grey'],
    disabled: true,
    white_pegs: 0
  },
  createGuessDisabled: true
}
const getters = {
  id: (state) => state.id,
  availableColors: (state) => state.availableColors,
  currentGuess: (state) => state.currentGuess,
  currentColor: (state) => state.currentColor,
  completeSlotsList: (state) => state.completeSlotsList,
  gameStatus: (state) => state.gameStatus,
  createGuessDisabled: (state) => state.createGuessDisabled
}
const actions = {
  async createNewGame ({ commit }) {
    const gameSettings = { num_colors: 6, num_slots: 4, max_guesses: 10 }
    const baseUrl = 'http://localhost:8000/api/games/'
    try {
      const response = await axios.post(baseUrl, gameSettings)
      commit('setId', response.data.id)
      commit('setAvailableColors', response.data.colors)
      commit('setGuesses', response.data.guesses)
      commit('setMaxGuesses', response.data.max_guesses)
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
  setGameStatus: (state, data) => (state.gameStatus = data),
  setCurrentColor: (state, data) => (state.currentColor = data),

  setHandleInputChange: (state, data) => {
    state.completeSlotsList.forEach((option) => {
      if (!option.disabled) {
        state.inputChange = true
        option.code[data.index] = data.color
        state.currentGuess.code = option.code
        if (state.currentGuess.code.find((a) => a === 'lightgrey') === undefined) {
          state.createGuessDisabled = false
        }
      }
    })
  },

  setUpdateGuessesTable: (state) => {
    const fullList = []
    const availableSlotsCount = state.maxGuesses - state.guesses.length
    const inputComplete = state.currentGuess.code.find((a) => a === 'lightgrey') === undefined
    const emptyInputSlot = {
      black_pegs: 0,
      code: ['lightgrey', 'lightgrey', 'lightgrey', 'lightgrey'],
      disabled: false,
      white_pegs: 0
    }

    // Add guesses
    state.guesses.map(guess => fullList.push({ ...guess, disabled: true }))

    // Add empty slot or user input
    if (!state.inputChange && inputComplete) {
      state.gameStatus === 'running'
        ? fullList.push(emptyInputSlot)
        : fullList.push(state.availableSlot)
      state.createGuessDisabled = true
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
    state.inputChange = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
