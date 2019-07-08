<template>
  <vs-card>
    <div slot="header">
      <h3>{{ title }}</h3>
    </div>
    <div slot="media">
      <img :src="image" />
    </div>
  </vs-card>
</template>

<script>
export default {
  name: 'tournament-item',
  props: ['title', 'image'],
};
</script>

<style>
</style>
