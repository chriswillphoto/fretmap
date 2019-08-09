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
  <button @click='togglePentatonic' class='label' :class='"pentatonic-"+pentatonic'>Pentatonic</button>
  </div>
</template>

<script>
import { arpeggios, majorPentatonics } from '~/plugins/utils.js'

export default {
  data() {
    return {
      notes: [ 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab' ],
      modes: ['Major', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Minor', 'Locrian'],
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
    pentatonic() {
      return this.$store.state.pentatonic
    },
    arpeggioList() {
      return majorPentatonics.includes(this.activeMode) ? arpeggios.Major : arpeggios.Minor
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

  .label::after {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuMjg1IDJsLTExLjI4NSAxMS41NjctNS4yODYtNS4wMTEtMy43MTQgMy43MTYgOSA4LjcyOCAxNS0xNS4yODV6Ii8+PC9zdmc+");
  }
</style>
