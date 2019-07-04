<template>
  <form-wizard
    color="rgba(var(--vs-primary), 1)"
    :title="$props.title"
    :subtitle="$props.subtitle"
    nextButtonText="다음"
    backButtonText="이전"
    finishButtonText="생성"
    @on-complete="$emit('onSubmit')"
  >
    <slot />
  </form-wizard>
</template>

<script>
export default {
  name: 'case-form-wizard',
  props: ['title', 'subtitle'],
};
</script>

<style>
</style>
