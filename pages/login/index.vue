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
        <button class="btn-login" @click.prevent="login()">로그인</button>
        <button class="btn-signin" @click.prevent="join()">계정이 없다면, 간편 회원가입하기</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      pwd: ""
    }
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
      this.$router.push({name: "join"})
    }

  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background-color: #fff;
  /*background-image: url("../assets/images/login_bg.png");*/
  background-repeat: no-repeat;
  background-size: contain;
}

.login-contents form {
  display: flex;
  flex-direction: column;
}
.title-section img {
  width: 300px;
  object-fit: cover;
  margin-bottom: 32px;
}

.input-section {
  border-radius: 16px;
  background-color: #f2f2f2;
  width: 300px;
  margin-bottom: 16px;
}

input {
  background-color: transparent;
  border-width: 0;
  box-sizing: border-box;
  width: 300px;
  height: 48px;
  padding: 0 20px;
  font-size: 14px;
  color: #222222;
  line-height: 20px;
  caret-color: #5b60e9;
}

input::placeholder {
  color: rgba(34, 34, 34, 0.6);
}
input:focus {
  outline: none;
}
input:invalid {
  border-bottom: 1px solid red;
}
.input-email {
  border-bottom: 1px solid #fff;
}

.btn-login {
  height: 48px;
  background: #000124;
  border-radius: 16px;
  color: white;
  font-size: 14px;
  line-height: 20px;
}
.btn-signin {
  margin-top: 40px;
  height: 48px;
  background: #fff;
  border-radius: 16px;
  color: #222;
  font-size: 14px;
  border: 1px solid #000124;
  line-height: 20px;
}
</style>