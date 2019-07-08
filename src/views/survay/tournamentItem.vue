<template>
  <vs-card>
    <div slot="header">
      <h3 v-if="!isSet">{{ title }}</h3>
      <vs-input
        class="w-full"
        v-else
        label-placeholder="이름"
        v-model="title"
      />
    </div>
    <div slot="media">
      <file-upload
        v-if="isSet"
        extensions="gif,jpg,jpeg,png,webp"
        v-model="images"
        @input-file="onAddFile"
        @input-filter="onFilterFile"
      >
        <img :src="images.length > 0 ? images[0].url : '/img/default.jpg'" />
      </file-upload>
      <img
        v-else
        :src="images.length > 0 ? images[0].url : '/img/default.jpg'"
      />
    </div>
  </vs-card>
</template>

<script>
import FileUpload from 'vue-upload-component';

export default {
  data() {
    return {
      title: '',
      images: [],
      isSet: true,
    };
  },
  methods: {
    onAddFile(newFile, oldFile, prevent) {
      console.log(this.images);
      console.log(newFile, oldFile, prevent);
      this.isSet = false;
    },
    onFilterFile(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
          this.alert('이미지를 올려 주세요');
          return prevent();
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        newFile.url = '';
        const URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.url = URL.createObjectURL(newFile.file);
        }
      }
    },
  },
  name: 'tournament-item',
  components: { FileUpload },
};
</script>

<style>
</style>
