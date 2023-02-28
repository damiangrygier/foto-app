<template>
   <div>
        <div ref="catalog"
        class="PhotoList">
        <photos-list
        :photos="photos"
        @vote="addVote"/>
        <div class="loader" v-show="photosRequest.pending">
          <progress-spinner />
        </div>
      </div>
   </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import PhotosList from '../shared/PhotosList.vue'
import ProgressSpinner from 'primevue/progressspinner'

export default {
  components: { PhotosList, ProgressSpinner },
  name: 'PhotosCatalog',
  data: () => ({
    currentPage: 1
  }),
  props: {
    category: {
      type: String
    }
  },
  computed: mapGetters('Photos', { photos: 'Photos', photoRequest: 'PhotoRequest' }),
  methods: {
    ...mapState(['photosRequest']),
    ...mapActions('Photos', ['fetchPhotos', 'fetchCategoryPhotos', 'addVote']),
    loadPhotos () {
      this.currentPage++
      if (!this.category) this.fetchPhotos(this.currentPage)
      else this.fetchCategoryPhotos({ category: this.category, page: this.currentPage })
    },
    handleScroll () {
      const elem = this.$refs.catalog
      const bottomOfWindow = Math.ceil(elem.scrollTop) >= (elem.scrollHeight - elem.offsetHeight)

      if (bottomOfWindow) this.loadPhotos()
    },
    prepareScroll () {
      this.$refs.catalog.addEventListener('scroll', () => { this.handleScroll() })
    },
    addVotes (_id) {
      // this.addVote(_id)
      console.log(_id)
    }
  },
  created () {
    if (!this.category) this.fetchPhotos(1)
    else this.fetchCategoryPhotos({ category: this.category, page: 1 })
  },
  mounted () {
    this.prepareScroll()
  }
}

</script>

<style lang="scss" scoped>
.PhotoList {
    max-height: 1000px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 15px;
    margin-bottom: 10px;
}
</style>
