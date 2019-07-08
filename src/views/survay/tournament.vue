<template>
  <div
    id="suvray-create-tournament"
    class="border border-solid border-gray-400 rounded relative overflow-hidden"
  >
    <case-form-wizard title="토너먼트 생성" subtitle="">
      <tab-content
        title="토너먼트 기본 설정"
        :before-change="validate('step1')"
      >
        <form @submit="(e) => e.preventDefault()" data-vv-scope="step1">
          <div class="vx-row align-left">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                label="토너먼트 제목"
                name="title"
                v-model="title"
                v-validate="'required'"
              />
            </div>
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-select
                class="w-full"
                label="토너먼트 갯수"
                v-model="selectCount"
              >
                <vs-select-item
                  :key="index"
                  :value="item"
                  :text="item + '강'"
                  v-for="(item, index) in tourCount"
                />
              </vs-select>
            </div>
          </div>
          <div class="vx-row align-left">
            <div class="vx-col w-full mb-2">
              <label for class="vs-input--label">태그</label>
              <div class="vs-con-input">
                <vs-input
                  size="small"
                  class="mb-2 w-24"
                  label-placeholder="태그 추가"
                  @keypress="handleTagInput"
                  v-model="tagInfo"
                />
                <vs-chip
                  color="primary"
                  @click="removeTag(index)"
                  v-for="(tag, index) in tags"
                  :key="index"
                  closable
                  >{{ tag }}</vs-chip
                >
              </div>
            </div>
          </div>
        </form>
      </tab-content>

      <tab-content title="토너먼트 항목 생성"> </tab-content>

      <tab-content title="토너먼트 최종 확인"> </tab-content>
    </case-form-wizard>
  </div>
</template>

<script>
import CaseFormWizard from '@/components/form/CaseFormWizard.vue';

export default {
  data() {
    return {
      title: '',
      tourCount: [4, 8, 16, 32, 64],
      selectCount: 4,
      tags: ['computer', 'test', 'test2'],
      tagInfo: '',
    };
  },
  methods: {
    onComplate() {},
    removeTag(idx) {
      this.tags.splice(idx, 1);
    },
    handleTagInput(e) {
      if (e.keyCode === 13 && this.tagInfo.length > 0) {
        this.tags.push(this.tagInfo);
        this.tagInfo = '';
      }
    },
    validate(step) {
      return () => new Promise((resolve, reject) => {
        this.$validator.validateAll(step).then((result) => {
          if (result) {
            resolve(true);
          } else {
            reject(new Error('correct all value'));
          }
        });
      });
    },
  },
  components: {
    CaseFormWizard,
  },
};
</script>

<style scopped>
.align-left {
  text-align: left;
}
</style>
