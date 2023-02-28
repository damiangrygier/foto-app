<template>
    <div class="addPhoto">
        <div class="container">
            <form class="form">
                <label for="title">Title</label>
                <InputText placeholder="title" v-model="form.title" />

                <label for="author">Author</label>
                <InputText placeholder="author" v-model="form.author" />

                <label for="category">Category</label>
                <Listbox v-model="form.category" :options="categories" />

                <label for="description">Description</label>
                <Textarea v-model="form.description" />

                <Button label="Add" icon="pi pi-plus" class="p-button-rounded p-button-success" type="submit" />
            </form>

        </div>
        <image-upload class="im"/>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import ImageUpload from '../shared/ImageUpload.vue'

export default {
  name: 'AddPhotoForm',
  data: () => ({
    form: {
      title: '',
      author: '',
      description: '',
      category: '',
      file: null
    }
  }),
  components: {
    InputText,
    Listbox,
    Textarea,
    Button,
    ImageUpload
  }
}

</script>

<style lang="scss" scoped>

.addPhoto {
    // display: flex;
    // justify-content: space-around;
    // width: 100%;
}

.container {
    // display: flex;
    // justify-content: space-between;
    // flex-direction: row;
    // width: 100%;
    .form {
        display: flex;
        flex-direction: column;
        width: 40%;

        label {
            padding: 15px 0px 10px 5px;
        }

        Button {
            margin-top: 15px;
            width: 6rem;
        }
    }

    .im {
        width: 100%;
    }
}

</style>
