<template>
    <div class="category">
      <page-title>Category</page-title>
      <photos-catalog
      :category="$route.params.category" />
    </div>
  </template>

<script>
import PageTitle from '@/components/layout/PageTitle.vue'
import PhotosCatalog from '@/components/layout/features/PhotosCatalog'

export default {
  name: 'CategoryPhotosPage',
  components: {
    PageTitle,
    PhotosCatalog
  }
}
</script>
