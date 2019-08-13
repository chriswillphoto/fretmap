<template>
  <div class="guitar-container" :class='"pentatonic-"+pentatonic'>
    <div class="string sixth-string">
      <Fret v-for='fret in setString(6)' :key='strings[6] + fret.fret' :fretInfo='fret' />
    </div>
    <div class="string fifth-string">
      <Fret v-for='fret in setString(5)' :key='strings[5] + fret.fret' :fretInfo='fret' />
    </div>
    <div class="string fourth-string">
      <Fret v-for='fret in setString(4)' :key='strings[4] + fret.fret' :fretInfo='fret' />
    </div>
    <div class="string third-string">
      <Fret v-for='fret in setString(3)' :key='strings[3] + fret.fret' :fretInfo='fret' />
    </div>
    <div class="string second-string">
      <Fret v-for='fret in setString(2)' :key='strings[2] + fret.fret' :fretInfo='fret' />
    </div>
    <div class="string first-string">
      <Fret v-for='fret in setString(1)' :key='strings[1] + fret.fret' :fretInfo='fret' />
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
    activeKey(){
      return this.$store.state.activeKey
    },
    activeMode() {
      return this.$store.state.activeMode
    },
    pentatonic() {
      return this.$store.state.pentatonic
    },
  }, // end computed
  methods: {
    setString(stringNumber) {
      let fretData = []
      // this.strings[1]
      for (let i = 0; i < this.fretNumber; i++) {
        var zero = this.strings[stringNumber]
        let fret = noteIterator(i, zero)
        if(this.activeKey){
          var zeroIndex = this.notes.indexOf(this.activeKey)
          var adjustedNotes = [...this.notes.slice(zeroIndex), ...this.notes.slice(0, zeroIndex)]
          var fretIndex = adjustedNotes.indexOf(fret.note)
          fret.interval = this.intervals[fretIndex]
          fret.abbrInterval = this.abbreviatedIntervals[fretIndex]

          this.scales[this.activeMode].includes(fret.interval) ? fret.activeClass = 'active' : fret.activeClass = 'inactive'
        }
        fretData.push(fret)
      }

      return fretData
    }
  }
}
</script>

<style>
  .guitar-container {
    width: 100%;
    /* height: 70vh; */
    /* background: skyblue; */
    background-image: url('https://res.cloudinary.com/dz7d2ezqb/image/upload/v1565572379/fretmap-assets/Maple_qmn6fu.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 32px;
    margin-top: 32px;
  }

  .string {
    display: flex;
    border: 1px solid rosybrown;
  }
</style>
