<template>
  <div class="container">
    <Header />
    <Guitar />
    <Toolbar />
    <Modal />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Guitar from '~/components/Guitar.vue'
import Toolbar from '~/components/Toolbar.vue'
import Header from '~/components/Header.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Guitar,
    Toolbar,
    Header,
    Modal
  },
  computed: {
    
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  position: relative;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
