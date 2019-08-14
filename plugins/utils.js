



export var noteIterator = function(i, zero) {
  zero = zero[0].toUpperCase() + zero.slice(1)
  var notes = [ 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab' ]
  
  var zeroIndex = notes.indexOf(zero)
  var adjustedNotes = [...notes.slice(zeroIndex), ...notes.slice(0, zeroIndex)]
  var fretIndex = i
  while(fretIndex > 11) { fretIndex = fretIndex - 12 }


  return {
    fret: i,
    note: adjustedNotes[fretIndex]
  }
}

// var fretLength = 22
// var strings = {}
// strings.E = []
// strings.A = []
// strings.D = []
// strings.G = []
// strings.B = []
// strings.highE = []

// for(i = 0; i <= fretLength; i++){
//   strings.E.push(noteIterator(i, 'E'))
//   strings.A.push(noteIterator(i, 'A'))
//   strings.D.push(noteIterator(i, 'D'))
//   strings.G.push(noteIterator(i, 'G'))
//   strings.B.push(noteIterator(i, 'B'))
//   strings.highE.push(noteIterator(i, 'e'))
// }

// console.log(strings)

export var scales = {
  Major: ['Tonic', 'Major 2nd', 'Major 3rd', 'Perfect 4th', 'Perfect 5th', 'Major 6th', 'Major 7th'],
  Minor: ['Tonic', 'Major 2nd', 'minor 3rd', 'Perfect 4th', 'Perfect 5th', 'minor 6th', 'minor 7th'],
}

var intervals = ['Tonic', 'minor 2nd', 'Major 2nd', 'minor 3rd', 'Major 3rd', 'Perfect 4th', 'diminished 5th', 'Perfect 5th', 'minor 6th', 'Major 6th', 'minor 7th', 'Major 7th']
var abbreviatedIntervals = ['1', '-2', '+2', '-3', '+3', '4', '-5', '5', '-6', '+6', '-7', '+7']

export var pentatonics = {
  Major: ['Tonic', 'Major 2nd', 'Major 3rd', 'Perfect 5th', 'Major 6th'],
  Minor: ['Tonic', 'minor 3rd', 'Perfect 4th', 'Perfect 5th', 'minor 7th']
}

export var modes = ['Major', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Minor', 'Locrian']

export var majorPentatonics = ['Major', 'Lydian', 'Mixolydian']
export var minorPentatonics = ['Dorian', 'Phrygian', 'Minor', 'Locrian']

export var arpeggios = {
  Major: ['Major', 'Maj7', '7', 'Maj6', '6/9', 'Maj9', '9'],
  Minor: ['Minor', 'min6', 'min7', '7', 'min9', '9']
}

export var arpeggioDefs = {
  Major: ['Tonic', 'Major 3rd', 'Perfect 5th'],
  Maj7: ['Tonic', 'Major 3rd', 'Perfect 5th', 'Major 7th'],
  7: ['Tonic', 'Major 3rd', 'Perfect 5th', 'minor 7th'],
  Maj6: ['Tonic', 'Major 3rd', 'Perfect 5th', 'Major 6th'],
  '6/9': ['Tonic', 'Major 3rd', 'Perfect 5th', 'Major 6th', 'Major 2nd'],
  Maj9: ['Tonic', 'Major 3rd', 'Perfect 5th', 'Major 7th', 'Major 2nd'],
  9: ['Tonic', 'Major 3rd', 'Perfect 5th', 'Major 6th', 'Major 2nd']
}



// firstString() {
//   let fretData = []
//   // this.strings[1]
//   for (let i = 0; i < this.fretNumber; i++) {
//     var zero = this.strings['1']
//     let fret = noteIterator(i, zero)
//     if(this.activeKey){
//       var zeroIndex = this.notes.indexOf(this.activeKey)
//       var adjustedNotes = [...this.notes.slice(zeroIndex), ...this.notes.slice(0, zeroIndex)]
//       var fretIndex = adjustedNotes.indexOf(fret.note)
//       fret.interval = this.intervals[fretIndex]
//       fret.abbrInterval = this.abbreviatedIntervals[fretIndex]

//       this.scales[this.activeMode].indexOf(fret.interval) != -1 ? fret.activeClass = 'active' : fret.activeClass = 'inactive'
//     }
//     fretData.push(fret)
//   }

//   return fretData
// },
// secondString() {
//   let fretData = []
//   // this.strings[1]
//   for (let i = 0; i < this.fretNumber; i++) {
//     var zero = this.strings['2']
//     let fret = noteIterator(i, zero)
//     if(this.activeKey){
//       var zeroIndex = this.notes.indexOf(this.activeKey)
//       var adjustedNotes = [...this.notes.slice(zeroIndex), ...this.notes.slice(0, zeroIndex)]
//       var fretIndex = adjustedNotes.indexOf(fret.note)
//       fret.interval = this.intervals[fretIndex]
//       fret.abbrInterval = this.abbreviatedIntervals[fretIndex]

//       this.scales[this.activeMode].indexOf(fret.interval) != -1 ? fret.activeClass = 'active' : fret.activeClass = 'inactive'
//     }
//     fretData.push(fret)
//   }

//   return fretData
// },
// thirdString() {
//   let fretData = []
//   // this.strings[1]
//   for (let i = 0; i < this.fretNumber; i++) {
//     var zero = this.strings['3']
//     let fret = noteIterator(i, zero)
//     if(this.activeKey){
//       var zeroIndex = this.notes.indexOf(this.activeKey)
//       var adjustedNotes = [...this.notes.slice(zeroIndex), ...this.notes.slice(0, zeroIndex)]
//       var fretIndex = adjustedNotes.indexOf(fret.note)
//       fret.interval = this.intervals[fretIndex]
//       fret.abbrInterval = this.abbreviatedIntervals[fretIndex]

//       this.scales[this.activeMode].indexOf(fret.interval) != -1 ? fret.activeClass = 'active' : fret.activeClass = 'inactive'
//     }
//     fretData.push(fret)
//   }

//   return fretData
// },
// fourthString() {
//   let fretData = []
//   // this.strings[1]
//   for (let i = 0; i < this.fretNumber; i++) {
//     var zero = this.strings['4']
//     let fret = noteIterator(i, zero)
//     if(this.activeKey){
//       var zeroIndex = this.notes.indexOf(this.activeKey)
//       var adjustedNotes = [...this.notes.slice(zeroIndex), ...this.notes.slice(0, zeroIndex)]
//       var fretIndex = adjustedNotes.indexOf(fret.note)
//       fret.interval = this.intervals[fretIndex]
//       fret.abbrInterval = this.abbreviatedIntervals[fretIndex]

//       this.scales[this.activeMode].indexOf(fret.interval) != -1 ? fret.activeClass = 'active' : fret.activeClass = 'inactive'
//     }
//     fretData.push(fret)
//   }

//   return fretData
// },
// fifthString() {
//   let fretData = []
//   // this.strings[1]
//   for (let i = 0; i < this.fretNumber; i++) {
//     var zero = this.strings['5']
//     let fret = noteIterator(i, zero)
//     if(this.activeKey){
//       var zeroIndex = this.notes.indexOf(this.activeKey)
//       var adjustedNotes = [...this.notes.slice(zeroIndex), ...this.notes.slice(0, zeroIndex)]
//       var fretIndex = adjustedNotes.indexOf(fret.note)
//       fret.interval = this.intervals[fretIndex]
//       fret.abbrInterval = this.abbreviatedIntervals[fretIndex]

//       this.scales[this.activeMode].indexOf(fret.interval) != -1 ? fret.activeClass = 'active' : fret.activeClass = 'inactive'
//     }
//     fretData.push(fret)
//   }

//   return fretData
// },
// sixthString() {
//   let fretData = []
//   // this.strings[1]
//   for (let i = 0; i < this.fretNumber; i++) {
//     var zero = this.strings['6']
//     let fret = noteIterator(i, zero)
//     if(this.activeKey){
//       var zeroIndex = this.notes.indexOf(this.activeKey)
//       var adjustedNotes = [...this.notes.slice(zeroIndex), ...this.notes.slice(0, zeroIndex)]
//       var fretIndex = adjustedNotes.indexOf(fret.note)
//       fret.interval = this.intervals[fretIndex]
//       fret.abbrInterval = this.abbreviatedIntervals[fretIndex]

//       this.scales[this.activeMode].indexOf(fret.interval) != -1 ? fret.activeClass = 'active' : fret.activeClass = 'inactive'
//     }
//     fretData.push(fret)
//   }

//   return fretData
// },