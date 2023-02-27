<template>
     <ul class="categorie">
        <Button
        :key="id"
        v-for="(category, id) in categories"
        class="p-button-rounded p-button-outlined ml-2">{{ category.name }}</Button>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from 'primevue/button'

export default {
  name: 'CategoriesList',
  computed: mapGetters({ categories: 'Categories' }),
  components: { Button }
}

</script>
