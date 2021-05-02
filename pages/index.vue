<template>
  <div>
    <div class="list-container">
      <div class="card">
        <div :class="{ active: isActive }" class="card-side card-side-front">
          <div class="emoji-container">
            <ul class="emoji-group">
              <li
                class="emoji-item default"
                v-for="emojiItem in emojiItems"
                :key="emojiItem"
                @click="openEmoji(emojiItem)"
                :class="{
                  selected:
                    selectedItem === emojiItem &&
                    state === 'open' &&
                    bottomSheetType === 'emoji',
                  default: selectedItem === null,
                }"
              >
                <img :src="emojiItem" />
              </li>
            </ul>
          </div>
          <div class="card-info-bottom">
            <div class="info-date">
              <div class="info-date-month">April</div>
              <div class="info-date-day">25</div>
            </div>
            <ul class="info-options">
              <li class="option-item">
                <img src="~/assets/images/ico_share.png" />
              </li>
              <li
                @click="
                  {
                    onWriting(), close();
                  }
                "
                class="option-item"
              >
                <img src="~/assets/images/ico_msg.png" />
              </li>
            </ul>
          </div>
        </div>
        <div :class="{ active: isActive }" class="card-side card-side-back">
          <div @click="endWriting" class="card-close">
            <img src="~/assets/images/ico_close.png" />
          </div>
          <div class="text-section">
            <div class="info-date">
              <div class="info-date-month">April</div>
              <div class="info-date-day">25</div>
            </div>
            <textarea
              rows="5"
              placeholder="이모지로 담지 못한 당신의 하루를 작성해보세요."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <button v-if="isActive" class="btn-save">저장하기</button>
    <div class="bottom-nav">
      <div @click="openCalendar" class="btn-bottom-option">
        <img src="~/assets/images/ico_calendar.png" />
      </div>
      <div class="btn-today">Today</div>
      <div class="btn-bottom-option">
        <img src="~/assets/images/ico_setting.png" />
      </div>
    </div>
    <!-- <div class="wrapper" :data-open="state === 'open' ? 1 : 0">
      <div
        ref="card"
        class="bottomcard"
        :data-state="isMove ? 'move' : state"
        :style="{ top: `${isMove ? y : calcY()}px` }"
      >
        <div class="pan-area" ref="pan">
          <div class="bar" ref="bar" @click="setState('close')"></div>
        </div>
        <div class="contents">
          <popup-emoji
            v-if="bottomSheetType === 'emoji'"
            :tabs="tabs"
            :selected-tab="selectedTab"
            @changeTab="onClickTab"
          >
          </popup-emoji>
          <popup-calendar
            v-if="bottomSheetType === 'calendar'"
          ></popup-calendar>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style>
@font-face {
  font-family: GothamPro;
  font-style: normal;
  src: url("~/assets/font/GothamPro-Bold.eot");
  src: url("~/assets/font/GothamPro-Bold.woff") format("woff"),
    url("~/assets/font/GothamPro-Bold.ttf") format("truetype");
  src: local(※), url("~/assets/font/GothamPro-Bold.woff") format("woff");
  font-weight: 800;
}

#app {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #f2f2f2;
}
img {
  object-fit: contain;
  object-position: center;
  width: 100%;
  vertical-align: bottom;
}

.list-container {
  padding-top: 20px;
  padding-bottom: 56px;
}
.card {
  width: auto;
  height: 430px;
  margin: 0 20px 16px;
  position: relative;
  font-family: "Noto Sans KR", sans-serif;
}

.card-side {
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.2);

  background-color: white;
}

.card-side-front {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-side-back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  display: flex;
}

.card .card-side-front.active {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.card .card-side-back.active {
  -webkit-transform: rotateY(0);
  transform: rotateY(0);
}

.info-date {
  display: flex;
}
.info-date-month {
  color: rgba(34, 34, 34, 1);
  font-size: 20px;
  letter-spacing: 0px;
  font-family: GothamPro, SF UI Display, sans-serif;
  font-weight: 800;
  padding-right: 8px;
  line-height: 32px;
}
.info-date-day {
  color: rgba(34, 34, 34, 1);
  font-size: 20px;
  letter-spacing: -1px;
  font-family: GothamPro, SF UI Display, sans-serif;
  font-weight: 800;
  line-height: 32px;
}
.info-options {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
.option-item {
  width: 32px;
  margin-left: 8px;
  position: relative;
}

.card-info-bottom {
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  padding-right: 24px;
  padding-left: 32px;
}

.emoji-container {
  width: 100%;
  height: 240px;
  margin-top: 56px;
}
.emoji-group {
  width: 240px;
  height: 240px;
  display: grid;
  grid-template-columns: 80px 80px 80px;
  grid-template-rows: 80px 80px 80px;
  margin: 0 auto;
}

.emoji-item {
  position: relative;
}

.emoji-item img {
  position: absolute;
}

.emoji-item.selected {
  border: 2px solid #5b60e9;
  border-radius: 8px;
}
.emoji-item.default::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("~/assets/images/no_image.png");
  background-size: cover;
}

.card-close {
  position: absolute;
  top: 18px;
  right: 20px;
  width: 32px;
}
.text-section {
  margin: 0 auto;
  margin-top: 80px;
}
.text-section .info-date {
  margin: 0 auto;
}

textarea {
  width: 240px;
  margin-top: 24px;
  border: none;
  font-size: 16px;
  padding: 0;
  font-family: SF UI Display, sans-serif;
  line-height: 24px;
  color: #222222;
  opacity: 0.6;
  resize: none;
  word-wrap: break-word;
  word-break: keep-all;
}
textarea:focus {
  outline: none;
}

.bottom-nav {
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}

.btn-bottom-option {
  width: 30px;
  height: 30px;
  padding-top: 13px;
}

.btn-today {
  background: #000124;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  height: 48px;
  margin-top: 4px;
  padding: 0 24px;
  font-family: GothamPro, SF UI Display, sans-serif;
  font-weight: 800;
  font-size: 14px;
  line-height: 48px;
  text-align: center;
  color: white;
}

.btn-save {
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
}

.wrapper[data-open="1"] {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.bottomcard {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
  border-radius: 12px 12px 0 0;
  left: 0;
}

.bottomcard[data-state="open"],
.bottomcard[data-state="close"] {
  transition: top 0.3s ease-out;
}

.bottomcard[data-state="close"] {
  box-shadow: none;
}

.bar {
  width: 36px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
  cursor: pointer;
  background: #222222;
  opacity: 0.2;
}

.pan-area {
  top: 0;
  right: 0;
  left: 0;
  position: absolute;
  padding-top: 10px;
  padding-bottom: 16px;
}

.pan-area .bar:hover {
  cursor: grab;
}

.pan-area .bar:active {
  cursor: grabbing;
}

.contents {
  overflow-y: scroll;
  max-height: 100%;
  padding-bottom: calc(100vh * 0.2);
  box-sizing: border-box;
  margin-top: 30px;
}
</style>
