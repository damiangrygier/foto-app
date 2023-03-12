<template>
  <div>
      <router-link :to="singlePhoto" class="no-underline">
        <Card class="card">
            <template #header>
                <div class="image" >
                  <div class="vote">
                    <p>{{ __v }}</p>
                    <p>{{ votes }}</p>
                    <Button icon="pi pi-star" class="p-button-rounded p-button-text p-button-lg" />
                  </div>
                  <img :src="src" style="height: 400px; object-fit: cover;" @click="$emit('vote', _id)"/>
                  <slot></slot>
                </div>
              </template>
                <template #title>
                  <div class="title">
                      <p>{{ title }}</p>
                  </div>
              </template>
            <template #subtitle>
                <div class="subtitle">
                    <p>{{ author }}</p>
                </div>
            </template>
            <template #footer>
                <div class="footer">
                    <Button icon="pi pi-bookmark" class="p-button-outlined" style="width: 100px;">{{ category }}</Button>
                </div>
              </template>
            </Card>
          </router-link>
          </div>
</template>

<script>
import Card from 'primevue/card'
import Button from 'primevue/button'

export default {
  name: 'PhotoSummary',
  props: {
    _id: {
      type: String
    },
    title: {
      type: String
    },
    author: {
      type: String
    },
    description: {
      type: String
    },
    src: {
      type: String
    },
    category: {
      type: String
    },
    votes: {
      type: Number
    },
    __v: {
      type: Number
    }
  },
  computed: {
    singlePhoto () {
      return `/${this._id}`
    }
  },
  components: { Card, Button }
}
</script>

<style lang="scss" scoped>

.card {
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 5px;
  max-height: 600px;
  min-height: 600px;
}

.image {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 100%;
    .vote {
        position: absolute;
        display: flex;
        align-items: center;

        p {
            font-size: 18px;
        }
    }
}

.title {
    margin-top: -15px;
}

.subtitle {
    margin-top: -15px;
}

.footer {
    margin-top: -30px;
}

</style>
