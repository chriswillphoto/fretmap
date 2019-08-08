<template>
  <div class="fret" :class='fretInfo.activeClass'>
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
    /* width: 10%; */
    flex: 1;
    height: 60px;
    /* border: 1px solid black; */
  }

  .fret.active {
    background: seashell;
  }
</style>
