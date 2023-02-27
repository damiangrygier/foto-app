<template>
  <div class="home">
    <page-title>Photos</page-title>
    <photos-catalog />
  </div>
</template>

<script>
import PageTitle from '@/components/layout/PageTitle.vue'
import PhotosCatalog from '@/components/layout/features/PhotosCatalog'

export default {
  name: 'HomePage',
  components: {
    PageTitle,
    PhotosCatalog
  }
}
</script>
