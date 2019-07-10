<template>
  <div class="container mx-auto">
    <case-card>
      <vs-row vs-w="12" vs-type="flex" vs-align="center" vs-justify="space-between">
        <vs-col vs-w="9" vs-type="flex" vs-justify="center" vs-align="center">
          <vs-input class="inputx flex-1 my-4" placeholder="설문지 제목" v-model="title" />
        </vs-col>
        <vs-col vs-w="3" vs-type="flex" vs-justify="center" vs-align="center">
          <vs-dropdown>
            <vs-button type="filled" color="success" class="flex-1 btnx hover:cursor-pointer">문항 추가</vs-button>
            <vs-dropdown-menu>
              <vs-dropdown-group vs-label="주관형" class="mt-0 outline-none border-0">
                <vs-dropdown-item @click="addQuestion('ShortAnswer')">
                  <span class="flex items-center">
                    <feather-icon class="icon-adjust mr-2" icon="Edit3Icon" />
                    <span>단답형</span>
                  </span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="addQuestion('LongAnswer')">
                  <span class="flex items-center">
                    <feather-icon class="icon-adjust mr-2" icon="EditIcon" />
                    <span>장문형</span>
                  </span>
                </vs-dropdown-item>
              </vs-dropdown-group>
              <vs-dropdown-group vs-label="선다형">
                <vs-dropdown-item @click="addQuestion('Selection')">
                  <span class="flex items-center">
                    <feather-icon class="icon-adjust mr-2" icon="CheckIcon" />
                    <span>선택형</span>
                  </span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="addQuestion('Tournament')">
                  <span class="flex items-center">
                    <feather-icon class="icon-adjust mr-2" icon="TrendingUpIcon" />
                    <span>토너먼트형</span>
                  </span>
                </vs-dropdown-item>
              </vs-dropdown-group>
            </vs-dropdown-menu>
          </vs-dropdown>
        </vs-col>
      </vs-row>
      <vs-row v-for="(question, index) in questions" :key="index">
        <component :is="question.type" />
      </vs-row>
    </case-card>
  </div>
</template>

<script>
import Tournament from './tournament.vue';
import Selection from './selection.vue';
import ShortAnswer from './ShortAnswer.vue';
import LongAnswer from './LongAnswer.vue';

export default {
  name: 'make-survey',
  components: {
    Tournament, ShortAnswer, LongAnswer, Selection,
  },
  data() {
    return {
      title: '',
      loading: false,
      questions: [],
    };
  },
  methods: {
    addQuestion(type) {
      this.questions.push({
        type,
      });
      console.log(type);
      console.log(this.questions);
    },
  },
};
</script>

<style lang="scss">
.icon-adjust {
  height: 1em;
  width: 1em;
  padding-top: 0.1rem;
}
</style>
