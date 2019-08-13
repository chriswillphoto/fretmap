<template>
  <div class="fret" :class='[fretInfo.activeClass, pentatonicClass, fretInfo.fret == 0 ? "open" : "", fretWidth, viewFilter, numbers]'>
    {{fretInfo.note}}<br>{{fretInfo.abbrInterval}}
    <div class='fret-number' v-if='fretInfo.numbers'>{{fretInfo.fret}}</div>
  </div>
</template>

<script>
import { pentatonics, majorPentatonics, minorPentatonics } from '~/plugins/utils.js'
export default {
  props: [
    'fretInfo'
  ],
  data() {
    return {
      
    }
  },
  computed: {
    activeMode() {
      return this.$store.state.activeMode
    },
    pentatonicCheck(){
      return majorPentatonics.includes(this.$store.state.activeMode) ? pentatonics.Major : pentatonics.Minor
    },
    pentatonicClass(){
      return this.pentatonicCheck.includes(this.fretInfo.interval) ? 'pentatonic' : ''
    },
    fretWidth() {
      if (this.fretInfo.fret > 15) { return 'extra-high' } else
      if (this.fretInfo.fret > 9) { return 'high' } else 
      if (this.fretInfo.fret > 5) { return 'medium' }
    },
    viewFilter() {
      if(this.fretInfo.fret > this.$store.state.upperLimit) { return 'hide' } else
      if (this.fretInfo.fret < this.$store.state.lowerLimit) { return 'hide' } else 
      { return 'show' }
    },
    numbers() {
      return this.fretInfo.numbers ? 'show-numbers' : ''
    }
  },
  methods: {

  }
}
</script>

<style>
  .fret {
    /* width: 10%; */
    flex: 1;
    height: 60px;
    /* border: 1px solid black; */
    transition: all 0.4s;
    position: relative;
  }

  .fret.medium { flex: 0.85; }
  .fret.high { flex: 0.75; }
  .fret.extra-high { flex: 0.6; }

  .fret.open {
    border-right: 3px solid black;
  }

  .fret.active {
    background: rgba(250, 162, 255, 0.4);
  }

  .pentatonic-true:not(.arpeggio-true) .fret.active.pentatonic {
    background: rgba(161, 214, 255, 0.4);
  }

  .fret.hide {
    display: none;
  }

  .fret.show-numbers .fret-number{
    position: absolute;
    width: 100%;
    top: 105%;
    /* left: 50%; */
  }


</style>
