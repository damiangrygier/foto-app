<template>
    <div class="addPhoto">
        <page-title>Add your photo!</page-title>
        <add-photo-form></add-photo-form>
    </div>
</template>

<script>
import PageTitle from '@/components/layout/PageTitle'
import AddPhotoForm from '@/components/layout/features/AddPhotoForm'

export default {
  name: 'AddPhotoPage',
  components: {
    PageTitle,
    AddPhotoForm
  }
}

</script>
