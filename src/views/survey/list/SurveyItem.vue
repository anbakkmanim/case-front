<template>
  <div class="px-4 py-4 list-item-component">
    <div class="vx-row">
      <div
        class="vx-col w-full sm:w-5/6 flex sm:items-center sm:flex-row flex-col"
      >
        <div class="flex items-center">
          <h6 class="todo-title">
            {{ title }}
          </h6>
        </div>
        <div class="todo-tags sm:ml-2 sm:my-0 my-2 flex">
          <vs-chip v-for="(tag, index) in tags" :key="index">
            <div class="h-2 w-2 rounded-full mr-1" :class="'bg-primary'"></div>
            <span>{{ tag.i_interest }}</span>
          </vs-chip>
        </div>
      </div>
      <div class="vx-col w-full sm:w-1/6 ml-auto flex sm:justify-end">
        {{ time }}에 생성
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <p class="mt-2 truncate">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ko from 'date-fns/locale/ko';
import distance from 'date-fns/distance_in_words_strict';

export default {
  props: ['survey'],
  data() {
    return {
    };
  },
  computed: {
    title() {
      return this.survey.ca_title;
    },
    desc() {
      return this.survey.ca_content;
    },
    tags() {
      return this.survey.tags.map(t => this.$store.state.survey.tags.find(tf => tf.i_idx === t.i_idx));
    },
    time() {
      return distance(new Date(), new Date(this.survey.ca_created), { locale: ko, addSuffix: true });
    },
  },
};
</script>
