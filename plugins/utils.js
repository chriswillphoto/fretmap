

fretLength = 22

var noteIterator = function(i, zero) {
  var notes = [ 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab' ]
  var intervals = ['Tonic', 'minor 2nd', 'Major 2nd', 'minor 3rd', 'Major 3rd', 'Perfect 4th', 'diminished 5th', 'Perfect 5th', 'minor 6th', 'Major 6th', 'minor 7th', 'Major 7th']
  var abbreviatedIntervals = ['1', '-2', '2', '-3', '3', '4', '-5', '5', '-6', '6', '-7', '7']
  var zeroIndex = notes.indexOf(zero)
  var adjustedNotes = [...notes.slice(zeroIndex), ...notes.slice(0, zeroIndex)]
  var fretIndex = i
  while(fretIndex > 11) { fretIndex = fretIndex - 12 }


  return {
    fret: i,
    note: adjustedNotes[fretIndex],
    interval: intervals[fretIndex],
    intervalAbbr: abbreviatedIntervals[fretIndex]
  }
}

var E = []

for(i = 0; i <= fretLength; i++){
  E.push(noteIterator(i, 'E'))
}

console.log(E)