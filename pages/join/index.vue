<template>
  <div class="signin-container">
    <section class="signin-contents">
      <button class="btn-close">
        <img src="~/assets/images/ico_close_page.png" />
      </button>
      <form>
        <div class="title-section">
          <h1>회원 가입</h1>
          <span
            >베타 버전으로 비밀번호 변경 기능 없으니, 신중히 설정해주세요~</span
          >
        </div>
        <fieldset>
          <div class="input-section">
            <input
              class="input-email"
              name="user_ID"
              type="email"
              placeholder="이메일주소"
            />
            <input
              class="input-password"
              name="user_PW"
              type="password"
              placeholder="비밀번호"
            />
          </div>
        </fieldset>
        <select name="birth_year">
          <option value="1999">1999</option>
          <option value="1999">1999</option>
          <option value="1999">1999</option>
          <option value="1999">1999</option>
        </select>
        <fieldset>
          <div class="gender-section">
            <input
              id="gender-type-1"
              name="gendar-type"
              type="radio"
              value="No-binary"
              checked
            /><label for="gender-type-1">선택안함</label>
            <input
              id="gender-type-2"
              name="gendar-type"
              type="radio"
              value="Male"
            /><label for="gender-type-2">남성</label>
            <input
              id="gender-type-3"
              name="gendar-type"
              type="radio"
              value="Female"
            /><label for="gender-type-3">여성</label>
          </div>
        </fieldset>
      </form>
    </section>
    <button class="btn-completed">가입완료</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.signin-container {
  height: 100vh;
  background-color: #fff;
  position: relative;
}
.btn-close {
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
}
.btn-close img {
  width: 24px;
  height: 24px;
}

.signin-contents form {
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.title-section {
  width: 300px;
  margin-top: 32px;
  margin-bottom: 16px;
}
.title-section h1 {
  font-size: 24px;
  font-weight: 800;
  color: #222222;
  letter-spacing: -1px;
  padding-bottom: 8px;
}
.title-section span {
  opacity: 0.6;
  font-size: 16px;
  color: #222222;
  line-height: 24px;
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

select {
  border-radius: 16px;
  background-color: #f2f2f2;
  border-width: 0;
  box-sizing: border-box;
  width: 300px;
  height: 48px;
  padding: 0 20px;
  font-size: 14px;
  color: #222222;
  line-height: 20px;
  background-image: url("~/assets/images/ico_arrow_down.png");
  background-repeat: no-repeat;
  background-position: 95% 50%;
  background-size: 24px;
  -webkit-appearance: none; /* 화살표 없애기 for chrome*/
  -moz-appearance: none; /* 화살표 없애기 for firefox*/
  appearance: none; /* 화살표 없애기 공통*/
}

select:focus {
  outline: none;
}

select::-ms-expand {
  display: none;
}
.gender-section {
  border-radius: 16px;
  background-color: #f2f2f2;
  width: 300px;
  height: 48px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.gender-section input {
  display: none;
}

.gender-section input:checked + label {
  background-color: #000124;
  border-radius: 16px;
  color: #fff;
}

label {
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  width: 100px;
  height: 48px;
  padding: 14px 0;
  font-size: 14px;
  color: #222222;
  line-height: 20px;
}

.btn-completed {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  background-color: #000124;
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 48px;
  text-align: center;
  color: white;
  line-height: 20px;
}
</style>