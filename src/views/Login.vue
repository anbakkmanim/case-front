<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <case-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img
                src="@/assets/case_logo.png"
                alt="login"
                class="mx-auto lg:w-3/4 mb-2"
              />
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 bg-white text-left">
              <div class="p-8">
                <div class="vx-card__title mb-8 text-left">
                  <h4 class="mb-4">로그인</h4>
                  <p>CASE의 다양한 서비스를 이용하실 수 있습니다.</p>
                </div>
                <!-- icon="icon icon-user"
                    icon-pack="feather" -->
                <vs-input
                  v-validate="'required'"
                  data-vv-validate-on="blur"
                  name="account"
                  label-placeholder="아이디"
                  v-model="account"
                  class="w-full no-icon-border text-left"
                />
                <span class="text-danger text-sm">{{
                  errors.first("account")
                }}</span>

                <vs-input
                  data-vv-validate-on="blur"
                  v-validate="'required'"
                  type="password"
                  name="password"
                  label-placeholder="비밀번호"
                  v-model="password"
                  class="w-full mt-6 no-icon-border text-left"
                />
                <span class="text-danger text-sm">{{
                  errors.first("password")
                }}</span>

                <div class="flex flex-wrap justify-between my-5">
                  <vs-checkbox v-model="checkbox_remember_me" class="mb-3"
                    >자동 로그인</vs-checkbox
                  >
                  <router-link to="/forgetpassword"
                    >비밀번호를 잊으셨나요?</router-link
                  >
                </div>

                <div
                  class="flex flex-wrap justify-between flex-col-reverse sm:flex-row"
                >
                  <vs-button
                    type="flat"
                    to="/register"
                    class="float-left"
                    @click="registerUser"
                    >계정이 없으신가요?</vs-button
                  >
                  <vs-button
                    class="float-right"
                    :disabled="!validateForm"
                    @click="login"
                    >로그인</vs-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </case-card>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      account: '',
      password: '',
      checkbox_remember_me: false,
    };
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.account !== '' && this.password !== '';
    },
  },
  methods: {
    login() {
      this.$http.post('/user/login', {
        account: this.account,
        password: this.password,
      })
        .then(({ data }) => {
          this.$store.dispatch('user/addUserInfo', data);
          this.$router.push('/');
        })
        .catch((e) => {
          console.error(e);
        });
    },

    loginAuth0() {
      if (this.$store.state.auth.isUserLoggedIn()) {
        this.notifyAlreadyLogedIn();
        return false;
      }
      this.$auth.login({ target: this.$route.query.to });
    },

    notifyAlreadyLogedIn() {
      this.$vs.notify({
        title: 'Login Attempt',
        text: 'You are already logged in!',
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'warning',
      });
    },
    registerUser() {
      // if (this.$store.state.auth.isUserLoggedIn()) {
      //   this.notifyAlreadyLogedIn();
      //   return false;
      // }
      this.$router.push('/register');
    },
  },
};
</script>

<style lang="scss">
#page-login {
  .social-login {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>
