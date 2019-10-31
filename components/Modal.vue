<template>
  <div class="modal-container" @click="closeModal" :class="showModal ? 'show' : 'hide'">

    <div class="image-container">
      <button class="close" @click='closeModal'>X</button>
      <img src="" alt="" id="modal">
      <a href="" id="downloadButton" @click='download' :download='activeKey + activeMode + ".jpg"'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z" fill="#FFFFFF"/></svg></a>
    </div>
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
    },
    activeKey(){
      return this.$store.state.activeKey
    },
    activeMode(){
      return this.$store.state.activeMode
    },
    pentatonic(){
      return this.$store.state.pentatonic
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

  .close {
    position: absolute;
    bottom: 102%;
    right: 0;
    padding: 8px;
    background: transparent;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    line-height: 14px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border: 2px solid white;
    transition: all 0.4s;
  }

  .close:hover {
    background: white;
    color: black;
    cursor: pointer;
  }

  .image-container {
    width: 92vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #downloadButton {
    position: absolute;
    bottom: 3px;
    right: 0;
    background: rgb(85, 164, 85);
  }

  svg {
    width:45px;
    height: 45px;
  }

  #modal {
    width: 100%;
  }
</style>
