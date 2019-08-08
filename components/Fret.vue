<template>
  <div class="fret">
    {{fretInfo.note}}<br>{{fretInfo.abbrInterval}}
  </div>
</template>

<script>
export default {
  props: [
    'fretInfo'
  ]
}
</script>

<style>
  .fret {
    width: 10%;
    height: 60px;
    border: 1px solid black;
  }
</style>
