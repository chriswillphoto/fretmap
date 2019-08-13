export const state = () => ({
  fretNumber: 25,
  strings: {
    1: 'E',
    2: 'A',
    3: 'D',
    4: 'G',
    5: 'B',
    6: 'E'
  },
  activeKey: 'C',
  activeMode: 'Major',
  pentatonic: false,
  arpeggio: null,
  lowerLimit: 0,
  upperLimit: 22
})

export const mutations = {
  changeKey(state, newKey){
    state.activeKey = newKey
  },

  changeMode(state, newMode) {
    state.activeMode = newMode
  },

  togglePentatonic(state) {
    state.pentatonic = !state.pentatonic
  },

  setLowerLimit(state, newLowLimit) {
    state.lowerLimit = newLowLimit
  },

  setHigherLimit(state, newHighLimit) {
    state.upperLimit = newHighLimit
  }
}

export const actions = {

}