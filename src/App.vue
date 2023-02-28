<template>
  <div class="container p-p-4">

    <app-header />

    <main>
      <router-view v-slot="{ Component }">
        <SlideFadeAnimation>
          <component :is="Component" :key="$route.fullPath" />
        </SlideFadeAnimation>
      </router-view>
    </main>

    <app-footer />

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/layout/theHeader'
import AppFooter from '@/components/layout/theFooter'
import axios from 'axios'
import PhotoSummary from './components/layout/shared/PhotoSummary.vue'

export default {
  name: 'App',
  methods: { ...mapActions('Categories', ['fetchCategories']) },
  created () {
    this.$store.dispatch('Categories/fetchCategories')
    axios.get('http://localhost:8000/api/categories').then(res => console.log(res))
  },
  components: { AppHeader, AppFooter, PhotoSummary }
}
</script>
