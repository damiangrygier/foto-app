<template>
    <div class="category">
      <page-title>{{ $route.params.category }}</page-title>
      <photos-catalog
      :category="$route.params.category" />
    </div>
  </template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageTitle from '@/components/layout/PageTitle.vue'
import PhotosCatalog from '@/components/layout/features/PhotosCatalog'

export default {
  name: 'CategoryPhotosPage',
  setup () {
    const route = useRoute()

    const category = computed(() => route.value.params.category)
    const singlePhoto = computed(() => `/photos/${category.value.toLowerCase()}/${this._id}`)

    return {
      category,
      singlePhoto
    }
  },
  components: {
    PageTitle,
    PhotosCatalog
  }
}
</script>
