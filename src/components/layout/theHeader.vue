<template>
    <div class="main">
        <div class="flex align-items-center justify-content-between py-1 px-4 border-bottom-1 border-300">
            <router-link to="/" class="no-underline">
            <Button class="p-button-secondary p-button-text p-button-lg">
                <p class="bold">PhotosApp |</p>
                <p class="normal">share your moments</p>
            </Button></router-link>
            <router-link to="/add-photo" class="no-underline"><Button label="Submit" icon="pi pi-plus" class="p-button-rounded" /></router-link>
        </div>
        <div>
            <categories-list
            class="mt-3" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from 'primevue/button'
import CategoriesList from './features/CategoriesList'

export default {
  name: 'AppHeader',
  computed: mapGetters('Categories', { categories: 'Categories' }),
  components: {
    Button,
    CategoriesList
  }
}
</script>

<style lang="scss" scoped>

.bold {
    font-weight: 700;
    font-size: 20px;
    padding-right: 6px;
    text-decoration: none;
    outline: none;
}

.normal {
    padding-top: 2px;
    font-size: 16px;
}

</style>
