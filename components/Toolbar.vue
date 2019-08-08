<template>
  <div class="toolbar-container">
    {{activeKey}}

    <div class='keychanger'>
      <select name="" id="" @change='keyHandler'>
        <option v-for='note in notes' :key='note' :value="note">{{note}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [ 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab' ]
    }
  },
  computed: {
    activeKey() {
      return this.$store.state.activeKey
    }
  },
  methods: {
    keyHandler(event) {
      const newKey = event.target.value
      this.$store.commit('changeKey', newKey)
    },
    modeHandler() {

    }
  }
}
</script>

<style>
  .toolbar-container {
    /* background: pink; */
    width: 100%;
    height: 30vh;
  }
</style>
