export const state = () => ({
  fretNumber: 22,
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
  areggio: null,
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
  }
}

export const actions = {

}