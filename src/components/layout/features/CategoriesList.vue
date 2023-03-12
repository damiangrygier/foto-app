<template>
     <ul class="categories">
      <router-link
          :key="id"
          v-for="(category, id) in categories"
          :to="`/photos/${category.name}`"
          class="no-underline"
        >
          <Button class="p-button-rounded p-button-outlined ml-2">{{ category.name }}
        </Button></router-link>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from 'primevue/button'

export default {
  name: 'CategoriesList',
  computed: {
    ...mapGetters('Categories', { categories: 'Categories' })
  },
  components: { Button }
}

</script>
