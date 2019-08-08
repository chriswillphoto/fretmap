<template>
  <div class="guitar-container">
    <div class="string second-string">
      <Fret v-for='fret in secondString' :key='strings[1] + fret.fret' :fretInfo='fret' />
    </div>
    <div class="string first-string">
      <Fret v-for='fret in firstString' :key='strings[1] + fret.fret' :fretInfo='fret' />
    </div>
  </div>
</template>

<script>
import { noteIterator } from '~/plugins/utils.js'
import Fret from '~/components/Fret.vue'

export default {
  data(){
    return {
      notes: [ 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab' ],
      intervals: ['Tonic', 'minor 2nd', 'Major 2nd', 'minor 3rd', 'Major 3rd', 'Perfect 4th', 'diminished 5th', 'Perfect 5th', 'minor 6th', 'Major 6th', 'minor 7th', 'Major 7th'],
      abbreviatedIntervals: ['1', '-2', '2', '-3', '3', '4', '-5', '5', '-6', '6', '-7', '7'],
      scales: {
                Major: ['Tonic', 'Major 2nd', 'Major 3rd', 'Perfect 4th', 'Perfect 5th', 'Major 6th', 'Major 7th'],
                Dorian: ['Tonic', 'Major 2nd', 'minor 3rd', 'Perfect 4th', 'Perfect 5th', 'Major 6th', 'minor 7th'],
                Phrygian: ['Tonic', 'minor 2nd', 'minor 3rd', 'Perfect 4th', 'Perfect 5th', 'minor 6th', 'minor 7th'],
                Lydian: ['Tonic', 'Major 2nd', 'Major 3rd', 'diminished 5th', 'Perfect 5th', 'Major 6th', 'Major 7th'],
                Mixolydian: ['Tonic', 'Major 2nd', 'Major 3rd', 'Perfect 4th', 'Perfect 5th', 'Major 6th', 'minor 7th'],
                Minor: ['Tonic', 'Major 2nd', 'minor 3rd', 'Perfect 4th', 'Perfect 5th', 'minor 6th', 'minor 7th'],
                Locrian: ['Tonic', 'minor 2nd', 'minor 3rd', 'Perfect 4th', 'diminished 5th', 'minor 6th', 'minor 7th']
              },

    }
  },
  components: {
    Fret
  },
  computed: {
    strings() {
      return this.$store.state.strings
    },
    fretNumber() {
      return this.$store.state.fretNumber
    },
    firstString() {
      let fretData = []
      // this.strings[1]
      for (let i = 0; i < this.fretNumber; i++) {
        var zero = this.strings['1']
        let fret = noteIterator(i, zero)
        if(this.activeKey){
          var zeroIndex = this.notes.indexOf(this.activeKey)
          var adjustedNotes = [...this.notes.slice(zeroIndex), ...this.notes.slice(0, zeroIndex)]
          var fretIndex = adjustedNotes.indexOf(fret.note)
          fret.interval = this.intervals[fretIndex]
          fret.abbrInterval = this.abbreviatedIntervals[fretIndex]

          this.scales[this.activeMode].indexOf(fret.interval) != -1 ? fret.activeClass = 'active' : fret.activeClass = 'inactive'
        }
        fretData.push(fret)
      }

      return fretData
    },
    secondString() {
      let fretData = []
      // this.strings[1]
      for (let i = 0; i < this.fretNumber; i++) {
        var zero = this.strings['2']
        let fret = noteIterator(i, zero)
        if(this.activeKey){
          var zeroIndex = this.notes.indexOf(this.activeKey)
          var adjustedNotes = [...this.notes.slice(zeroIndex), ...this.notes.slice(0, zeroIndex)]
          var fretIndex = adjustedNotes.indexOf(fret.note)
          fret.interval = this.intervals[fretIndex]
          fret.abbrInterval = this.abbreviatedIntervals[fretIndex]

          this.scales[this.activeMode].indexOf(fret.interval) != -1 ? fret.activeClass = 'active' : fret.activeClass = 'inactive'
        }
        fretData.push(fret)
      }

      return fretData
    },
    thirdString() {

    },
    fourthString() {

    },
    fifthString() {

    },
    sixthString() {

    },
    activeKey(){
      return this.$store.state.activeKey
    },
    activeMode() {
      return this.$store.state.activeMode
    }
  }
}
</script>

<style>
  .guitar-container {
    width: 100%;
    height: 70vh;
    /* background: skyblue; */
  }

  .string {
    display: flex;
    border: 1px solid rosybrown;
  }
</style>
