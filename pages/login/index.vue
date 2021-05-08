<template>
  <div class="login-container">
    <section class="login-contents">
      <form>
        <div class="title-section">
          <img src="~/assets/images/login_title.png" />
        </div>
        <fieldset>
          <div class="input-section">
            <input
              class="input-email"
              type="email"
              v-model="id"
              placeholder="이메일주소"
            />
            <input
              class="input-password"
              type="password"
              v-model="pwd"
              placeholder="비밀번호"
            />
          </div>
        </fieldset>
        <div class="check-section">
          <input id="agree" type="checkbox" />
          <label for="agree">
            <span>자동로그인</span>
          </label>
        </div>
        <button class="btn-login" @click.prevent="login()">로그인</button>
        <button class="btn-signin" @click.prevent="join()">
          계정이 없다면, 간편 회원가입하기
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      pwd: "",
    };
  },

  methods: {
    // 로그인 처리
    login() {
      if (_.trim(this.id) == "") {
        alert("아이디를 입력해주세요.");
        return;
      }

      if (_.trim(this.pwd) == "") {
        alert("비밀번호를 입력해주세요.");
        return;
      }

      this.$router.push("/");
    },

    join() {
      this.$router.push({ name: "join" });
    },
  },
};
</script>
