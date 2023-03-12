<template>
  <div v-on:submit.prevent="handleSubmit">
  <Form v-slot="{ errors }" class="addPhoto">

    <div class="form">
      <Field name="title" v-slot="{ field }" rules="required|min:10|max:60">
        <label for="title">Title</label>
        <InputText v-bind="field" placeholder="title" v-model="form.title" />
        <span class="error">{{ errors.title }}</span>
      </Field>

      <Field name="author" v-slot="{ field }" rules="required|min:3|max:30">
        <label for="author">Author</label>
        <InputText v-bind="field" placeholder="author" v-model="form.author" />
        <span class="error">{{ errors.author }}</span>
      </Field>

      <Field name="category" v-slot="{ field }" rules="required">
        <label for="category">Category</label>
        <Listbox v-bind="field" v-model="form.category" :options="categoryNames" />
        <span class="error">{{ errors.category }}</span>
      </Field>

      <Field name="description" v-slot="{ field }" rules="required|max:100">
        <label for="description">Description</label>
        <Textarea v-bind="field" v-model="form.description" />
        <span class="error">{{ errors.description }}</span>
      </Field>

        <Button label="Add" icon="pi pi-plus" class="p-button-rounded p-button-success" type="submit"
        @click="handleSubmit" />
    </div>

    <div class="imageUploader">
      <Field name="image" v-slot="{ field }" rules="required|ext:png,jpg">
        <image-upload
        v-bind="field"
        class="imageUploader"
        @choose="uploadPhoto" />
        <span class="error">{{ errors.image }}</span>
      </Field>
    </div>

  </Form>
  <Message severity="success" v-if="isSuccess">Success! Your photo has been submitted</Message>
  <Message severity="error" v-if="isError">Oops… something went wrong…</Message>
    </div>
</template>

<script>
import { reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { Form, Field, defineRule } from 'vee-validate'
import { required, min, max, ext } from '@vee-validate/rules'
import axios from 'axios'
import Message from 'primevue/message'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import ImageUpload from '../shared/ImageUpload.vue'

const apiUrl = 'http://localhost:8000/api'

defineRule('required', (value) => required(value) || 'This field is so so required...')
defineRule('min', (value, params) => min(value, params) || `It should be longer than ${params}`)
defineRule('max', (value, params) => max(value, params) || `It should be shorter than ${params}`)
defineRule('ext', (value, params) => ext(value, params) || `You should use one of these extensions: ${params}`)

export default {
  name: 'AddPhotoForm',
  setup () {
    const store = useStore()
    const isSuccess = ref(false)
    const isError = ref(false)
    const form = reactive({
      title: '',
      author: '',
      description: '',
      category: '',
      file: null
    })
    const uploadPhoto = (file) => {
      form.file = file
    }
    const handleSubmit = async () => {
      isSuccess.value = false
      isError.value = false
      const formData = new FormData()
      formData.append('title', form.title)
      formData.append('author', form.author)
      formData.append('category', form.category)
      formData.append('description', form.description)
      formData.append('file', form.file)

      await axios.post(`${apiUrl}/photos`, formData, { 'Content-Type': 'multipart/form-data' })
        .then(response => {
          console.log(response.data)
          isSuccess.value = true
        })
        .catch(error => {
          console.error(error)
          isError.value = true
        })
    }
    const categories = computed(() => store.state.Categories.categories)
    const categoryNames = computed(() => {
      return categories.value.map(category => category.name)
    })
    return {
      isSuccess, isError, form, uploadPhoto, handleSubmit, categories, categoryNames
    }
  },
  components: {
    InputText,
    Listbox,
    Textarea,
    Button,
    ImageUpload,
    Message,
    Form,
    Field
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

        .error {
          color: red;
          padding-top: 5px;
        }
    }

    .imageUploader {
        width: 60%;
    }

</style>
