



export var noteIterator = function(i, zero) {
  zero = zero[0].toUpperCase() + zero.slice(1)
  var notes = [ 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab' ]
  var intervals = ['Tonic', 'minor 2nd', 'Major 2nd', 'minor 3rd', 'Major 3rd', 'Perfect 4th', 'diminished 5th', 'Perfect 5th', 'minor 6th', 'Major 6th', 'minor 7th', 'Major 7th']
  var abbreviatedIntervals = ['1', '-2', '+2', '-3', '+3', '4', '-5', '5', '-6', '+6', '-7', '+7']
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