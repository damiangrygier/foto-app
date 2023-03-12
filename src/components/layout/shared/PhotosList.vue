<template>
    <div>
        <div>
            <div v-if="photos.length > 0" class="gridDisplay">
                <photo-summary
                :key="index"
                v-for="(photo, index) in photos"
                :_id="photo._id"
                :title="photo.title"
                :author="photo.author"
                :description="photo.description"
                :src="photo.src"
                :votes="photo.votes"
                :category="photo.category"
                :__v=0
                @vote="votes" >
            </photo-summary>
            </div>
            <span v-else>Brak zdjęć do wyświetlenia</span>
        </div>
    </div>
</template>

<script>
import PhotoSummary from './PhotoSummary'

export default {
  name: 'PhotosList',
  props: {
    photos: {
      type: Array
    }
  },
  methods: {
    votes (_id) {
      this.$emit('vote', _id)
    }
  },
  components: { PhotoSummary }
}

</script>

<style lang="scss" scoped>
.gridDisplay {
    display: grid;
    grid-template-columns: 16% 16% 16% 16% 16% 16%;
    position: relative;

    @media only screen and (max-width: 992px) {
    grid-template-columns: 25% 25% 25% 25%;
}
    @media only screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
}
    @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
}
}

</style>
