<template>
  <div class="fret" :class='[fretInfo.activeClass, pentatonicClass, fretInfo.fret == 0 ? "open" : "", fretWidth]'>
    {{fretInfo.note}}<br>{{fretInfo.abbrInterval}} 
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
    }
  },
  methods: {
    // fretWidth() {
    //   if (fretInfo.fret > 15) { return 'extra-high' } else
    //   if (fretInfo.fret > 9) { return 'high' } else 
    //   if (fretInfo.fret > 5) { return 'medium' }
    // }
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
  }

  .fret.medium { flex: 0.85; }
  .fret.high { flex: 0.75; }
  .fret.extra-high { flex: 0.6; }

  .fret.open {
    border-right: 3px solid black;
  }

  .fret.active {
    background: seashell;
  }

  .pentatonic-true:not(.arpeggio-true) .fret.active.pentatonic {
    background: rgba(180, 255, 255, 0.4);
  }


</style>
