<template>
  <div id="app">
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
export default {};
</script>

<style>
</style>
