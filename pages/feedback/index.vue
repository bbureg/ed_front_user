<template>
  <div class="feedback-container">
    <section class="signin-contents">
      <button class="btn-close">
        <img src="~/assets/images/ico_close_page.png" />
      </button>
      <form>
        <div class="title-section">
          <h1>문의 및 건의사항</h1>
          <span
            >보내주신 문의 및 건의사항은 가입하신 메일주소로 답변드립니다.
            답변은 좀 걸릴수도 있어요.</span
          >
        </div>
        <fieldset>
          <div class="input-section">
            <textarea
              rows="5"
              placeholder="궁금하신 점이나 개선 사항을 작성해주세요."
            ></textarea>
          </div>
        </fieldset>
      </form>
    </section>
    <button class="btn-completed">보내기</button>
  </div>
</template>

<script>
export default {

}
</script>
