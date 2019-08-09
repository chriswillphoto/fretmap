<template>
  <div class="fret" :class='[fretInfo.activeClass, pentatonicClass]'>
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
  }

  .fret.active {
    background: seashell;
  }

  .pentatonic-true .fret.active.pentatonic {
    background: rgba(180, 255, 255, 0.4);
  }
</style>
