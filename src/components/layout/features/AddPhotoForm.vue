<template>
    <div class="addPhoto" v-on:submit.prevent="handleSubmit">
            <form class="form">
                <label for="title">Title</label>
                <InputText placeholder="title" v-model="form.title" />

                <label for="author">Author</label>
                <InputText placeholder="author" v-model="form.author" />

                <label for="category">Category</label>
                <Listbox v-model="form.category" :options="categories" />

                <label for="description">Description</label>
                <Textarea v-model="form.description" />

                <Button label="Add" icon="pi pi-plus" class="p-button-rounded p-button-success" type="submit"
                @click="handleSubmit" />
            </form>

        <image-upload
        class="imageUploader"
        @choose="uploadPhoto" />

        <Message severity="success" v-if="isSuccess">Success! Your photo has been submitted</Message>
        <Message severity="error" v-if="isError">Oops… something went wrong…</Message>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Message from 'primevue/message'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import ImageUpload from '../shared/ImageUpload.vue'

const apiUrl = 'http://localhost:8000/api'

export default {
  name: 'AddPhotoForm',
  data: () => ({
    form: {
      title: '',
      author: '',
      description: '',
      category: '',
      file: null,
      isSuccess: false,
      isError: false
    }
  }),
  computed: {
    computed: mapGetters('Categories', { categories: 'Categories' }),
    categoryNames () {
      return this.categories.map(category => category.name)
    }
  },
  methods: {
    uploadPhoto (file) {
      this.form.file = file
    },
    async handleSubmit () {
      this.isSuccess = false
      this.isError = false
      const formData = new FormData()
      formData.append('title', this.form.title)
      formData.append('author', this.form.author)
      formData.append('category', this.form.category)
      formData.append('description', this.form.description)
      formData.append('file', this.form.file)

      await axios.post(`${apiUrl}/photos`, formData, { 'Content-Type': 'multipart/form-data' })
        .then(response => {
          console.log(response.data)
          this.isSuccess = true
        })
        .catch(error => {
          console.error(error)
          this.isError = true
        })
    }
  },
  components: {
    InputText,
    Listbox,
    Textarea,
    Button,
    ImageUpload,
    Message
  }
}

</script>

<style lang="scss" scoped>

.addPhoto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0px 300px 0px 300px;
}

    .form {
        display: flex;
        flex-direction: column;
        width: 30%;

        label {
            padding: 15px 0px 10px 5px;
        }

        Button {
            margin-top: 15px;
            width: 6rem;
        }
    }

    .imageUploader {
        width: 60%;
    }

</style>
