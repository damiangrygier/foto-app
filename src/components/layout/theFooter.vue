<template>
    <footer class="footer p-mt-2 p-mb-2 flex justify-content-between py-1 px-4">
      <p>2023 All rights reserved</p>
      <p>We have {{ categoriesAmount }} categories!</p>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppFooter',
  computed: mapGetters({ categoriesAmount: 'CategoriesAmount' })
}
</script>
