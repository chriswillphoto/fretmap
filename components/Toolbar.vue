<template>
  <div class="toolbar-container">
    
    <span class='keysig' key='1'>{{activeKey}} {{activeMode}}</span><transition name="fade"><span key='2' v-if="pentatonic"> Pentatonic</span></transition>
    <div class='keychanger'>
      <select class='select-css' name="" id=""  v-model='activeKey'>
        <option v-for='note in notes' :key='note'  :value="note">{{note}}</option>
      </select>
    </div>
    <div class='modechanger'>
      <select class='select-css' name="" id=""  v-model='activeMode'>
        <option v-for='mode in modes' :key='mode'  :value="mode">{{mode}}</option>
      </select>
    </div>
    <div class="pentatonic" :class='"pentatonic-"+pentatonic'>
      <button @click='togglePentatonic' class='label' :class='"pentatonic-"+pentatonic'>Pentatonic</button>
      <transition name="fade">
      <svg v-if='pentatonic' class='checkmark' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff0000" stroke="#000"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
      </transition>
    </div>
  
    <div class="lower-view">
      <input type="number" min='0' :max='fretNumber - 1' step='1' v-model='lowerView'>
    </div>
    <div class="higher-view">
      <input type="number" min='1' :max='fretNumber' step='1' v-model='upperView'>
    </div>

    <div class="arpeggio-selector">
      <select name="" id="" class="select-css" v-model='arpeggio'>
        <option value=''>(none)</option>
        <option v-for='arp in arpeggioList' :key='arp' :value='arp'>{{arp}}</option>
      </select>
    </div>

  </div>
</template>

<script>
import { arpeggios, majorPentatonics, minorPentatonics } from '~/plugins/utils.js'

export default {
  data() {
    return {
      notes: [ 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab' ],
      modes: ['Major', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Minor', 'Locrian'],
      checkmark: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff0000" stroke="#000"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>',
    }
  },
  computed: {
    activeKey: {
      get: function(){
        return this.$store.state.activeKey
      },
      set: function(newKey) {
        this.$store.commit('changeKey', newKey)    
      }
    },
    activeMode: {
      get: function() {
        return this.$store.state.activeMode
      },
      set: function(newMode) {
        this.$store.commit('changeMode', newMode)
      }
    },
    lowerView: {
      get: function() {
        return this.$store.state.lowerLimit
      },
      set: function(newLowLimit) {
        this.$store.commit('setLowerLimit', newLowLimit)
      }
    },
    upperView: {
      get: function() {
        return this.$store.state.upperLimit
      },
      set: function(newHighLimit) {
        this.$store.commit('setHigherLimit', newHighLimit)
      }
    },
    pentatonic() {
      return this.$store.state.pentatonic
    },
    arpeggioList() {
      return majorPentatonics.includes(this.activeMode) ? arpeggios.Major : arpeggios.Minor
    },
    arpeggio: {
      get: function() {
        return this.$store.state.arpeggio
      },
      set: function(newArp) {
        this.$store.commit('setArp', newArp);
      }
    },
    fretNumber() {
      return this.$store.state.fretNumber
    }
  },
  methods: {
    // keyHandler(event) {
    //   const newKey = event.target.value
    //   this.$store.commit('changeKey', newKey)
    // },
    togglePentatonic() {
      this.$store.commit('togglePentatonic')
    }
  },
  mounted() {
    var el = document.querySelector("#guitar")
    var options = {
      width: 1024,
      height: 400,
      useCORS: true,
      windowWidth: 1024,
      windowHeight: 400,
      type: 'dataURL'
    }
    this.$html2canvas(el, options).then(function(canvas){
      var newImage = document.createElement('IMG')
      newImage.setAttribute('src', canvas)
      // console.log(newImage)
      document.body.innerHtml = newImage
      // console.log(canvas)
    })
  }
}
</script>

<style>

.keysig {
  animation: fadeIn 0.5s linear forwards 1 ;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
  .toolbar-container {
    /* background: pink; */
    width: 100%;
    height: 30vh;
    flex: 1;
  }

  .select-css {
      display: block;
      font-size: 16px;
      font-family: sans-serif;
      font-weight: 700;
      color: #444;
      line-height: 1.3;
      padding: .6em 1.4em .5em .8em;
      width: 140px;
      max-width: 100%; 
      box-sizing: border-box;
      margin: 0 auto;
      border: 1px solid #aaa;
      box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
      border-radius: .5em;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
      background-repeat: no-repeat, repeat;
      background-position: right .7em top 50%, 0 0;
      background-size: .65em auto, 100%;
  }
  .select-css::-ms-expand {
      display: none;
  }
  .select-css:hover {
      border-color: #888;
  }
  .select-css:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #222; 
      outline: none;
  }
  .select-css option {
      font-weight:normal;
  }

  .label::selection {
    background: transparent;
  }

  /* .label::after {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuMjg1IDJsLTExLjI4NSAxMS41NjctNS4yODYtNS4wMTEtMy43MTQgMy43MTYgOSA4LjcyOCAxNS0xNS4yODV6Ii8+PC9zdmc+");
    color: blue;
  } */

  /* .pentatonic-false .checkmark {
    display: none;
  } */
</style>
