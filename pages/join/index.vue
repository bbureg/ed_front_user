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
              name="gender-type"
              type="radio"
              value="No-binary"
              checked
            /><label for="gender-type-1">선택안함</label>
            <input
              id="gender-type-2"
              name="gender-type"
              type="radio"
              value="Male"
            /><label for="gender-type-2">남성</label>
            <input
              id="gender-type-3"
              name="gender-type"
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
export default {};
</script>

<style>
</style>