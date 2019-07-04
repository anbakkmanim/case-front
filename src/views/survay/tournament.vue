<template>
  <div
    id="suvray-create-tournament"
    class="border border-solid border-gray-400 rounded relative overflow-hidden"
  >
    <case-form-wizard title="토너먼트 생성" subtitle="">
      <tab-content title="토너먼트 기본 설정"> </tab-content>

      <tab-content title="토너먼트 항목 생성"> </tab-content>

      <tab-content title="토너먼트 최종 확인"> </tab-content>
    </case-form-wizard>
  </div>
</template>

<script>
import CaseFormWizard from '@/components/form/CaseFormWizard.vue';

export default {
  methods: {
    onComplate() {},
  },
  components: {
    CaseFormWizard,
  },
};
</script>

<style>
</style>
