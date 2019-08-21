<template>
  <div class="modal-container" @click="closeModal" :class="showModal ? 'show' : 'hide'">
    <img src="" alt="" id="modal">
    <a href="" id="downloadButton" @click='download' download='Boardwalk.png'>Download</a>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    closeModal(){
      this.$store.commit('closeModal')
    },
    download(e){
      e.stopPropagation()
    }
  },
  computed: {
    showModal(){
      return this.$store.state.showModal
    }
  }
}
</script>

<style scoped>
  .modal-container {
    position: fixed;
    background: rgba(0,0,0,0.7);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .modal-container.hide {
    display: none;
  }

  #modal {
    max-width: 80vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>