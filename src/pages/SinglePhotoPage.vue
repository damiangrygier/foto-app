<template>
    <div class="singlePhoto">
        <page-title>single photo</page-title>
        <router-view></router-view>
        <single-photo />
    </div>
</template>

<script>
import PageTitle from '@/components/layout/PageTitle'
import SinglePhoto from '@/components/layout/features/SinglePhoto.vue'

export default {
  name: 'SinglePhotoPage',
  components: {
    PageTitle,
    SinglePhoto
  }
}

</script>
