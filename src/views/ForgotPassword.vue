<template>
  <div class="h-screen flex w-full bg-img">
    <div class="vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row">
            <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center  text-center">
              <img src="@/assets/images/pages/forgot-password.png" alt="login" class="mx-auto">
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white text-left">
              <div class="p-8">
                <div class="vx-card__title mb-8 text-left">
                  <h4 class="mb-4">비밀번호</h4>
                  <p>회원님이 등록한 이메일로 비밀번호 초기화 절차를 발송합니다.</p>
                </div>

                <vs-input
                      v-validate="'required|alpha_dash'"
                      data-vv-validate-on="blur"
                      label-placeholder="아이디"
                      name="account"
                      v-model="account"
                      class="w-full" />
                  <span class="text-danger text-sm">{{ errors.first('account') }}</span>

                <vs-input
                      v-validate="'required|email'"
                      data-vv-validate-on="blur"
                      name="email"
                      type="email"
                      label-placeholder="이메일"
                      v-model="email"
                      class="w-full mt-8 text-left" />
                  <span class="text-danger text-sm">{{ errors.first('email') }}</span>

                <div class="flex flex-wrap justify-between flex-col-reverse sm:flex-row mt-8">
                  <vs-button type="flat" to="/login" class="px-4 w-full md:w-auto">로그인 화면으로 돌아가기</vs-button>
                  <vs-button class="float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0" :disabled="!validateForm">비밀번호 복구</vs-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      account: '',
    };
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.account !== '' && this.email !== '';
    },
  },
};
</script>
