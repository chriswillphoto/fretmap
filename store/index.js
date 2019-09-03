
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
  arpeggio: '',
  lowerLimit: 0,
  upperLimit: 12,
  showModal: false,
  showNumbers: true
})

export const mutations = {
  changeKey(state, newKey){
    state.activeKey = newKey
    state.arpeggio = ''
    state.pentatonic = false
  },

  changeMode(state, newMode) {
    state.activeMode = newMode
    state.arpeggio = ''
    state.pentatonic = false
  },

  togglePentatonic(state) {
    state.pentatonic = !state.pentatonic
    if(state.pentatonic && state.arpeggio) { state.arpeggio = ''}
  },

  setLowerLimit(state, newLowLimit) {
    state.lowerLimit = newLowLimit
  },

  setHigherLimit(state, newHighLimit) {
    state.upperLimit = newHighLimit
  },

  setArp(state, newArp){
    state.arpeggio = newArp;
    if( state.arpeggio && state.pentatonic) { state.pentatonic = false } 
  },

  closeModal(state){
    state.showModal = false
  },

  showModal(state) {
    state.showModal = true
  },
  toggleNumbers(state) {
    state.showNumbers = !state.showNumbers
  }
}

export const actions = {

}