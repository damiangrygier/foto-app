<template>
  <div>
    <div v-if="loading" class="loader">load</div>
    <div v-if="singlePhoto">
    <Dialog
      header="Header"
      :closable="false"
      :visible="true"
      :style="{width: '50vw'}"
      :modal="true">

      <img :src="singlePhoto.src" :alt="singlePhoto.title">
      {{ photoId }}

      <template v-slot:footer>
        <button-item
          class="p-button-rounded"
          label="Close"
          icon="pi pi-times"
          @click="$router.push('/')"
          autofocus />
      </template>
    </Dialog>
  </div>
  </div>
  </template>

<script>
import Dialog from 'primevue/dialog'
import ButtonItem from 'primevue/button'
import { mapGetters, mapActions } from 'vuex'

// fix version inconsistence
Dialog.methods.removeStylesFromMask = () => {}

export default ({
  name: 'SinglePhoto',
  computed: {
    ...mapGetters('Photos', { singlePhoto: 'singlePhoto', loading: 'loading' }),
    photoId () {
      return this.$route.params.photoId
    }
  },
  methods: {
    ...mapActions(['Photos/fetchSinglePhoto'])
  },
  components: { Dialog, ButtonItem },
  beforeMount () {
    this.$store.dispatch('Photos/fetchSinglePhoto', this.$route.params._id)
  }
})
</script>

  <style lang="scss" scoped>
  .p-dialog-mask {
    pointer-events: auto;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
  </style>
