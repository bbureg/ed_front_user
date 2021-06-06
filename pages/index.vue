<template>
  <div id="app">
    <div class="list-container">
      <div class="card" v-for="(diary, diaryIdx) in diaryList" :key="diaryIdx">
        <div :class="`card-side card-side-front${diary.active ? ' active' : ''}`">
          <div class="emoji-container">
            <ul class="emoji-group">
              <template v-if="diary.date == $moment().format('YYYYMMDD')">
                <li
                  :class="`emoji-item default${emoticon.selected ? ' selected' : ''}`"
                  v-for="(emoticon, emoticonIdx) in diary.emoticonList"
                  :key="emoticonIdx"
                  @click="openEmoji(emoticonIdx, emoticon)"
                >
                  <img :src="`/images/emoticon/${emoticon.path != '' ? emoticon.path + '/' + emoticon.fileNm : 'default/no_image.png'}`" />
                </li>
              </template>
              <template v-else>
                <li
                  class="emoji-item"
                  v-for="(emoticon, emoticonIdx) in diary.emoticonList"
                  :key="emoticonIdx"
                >
                  <img v-if="emoticon.path != ''" :src="`/images/emoticon/${emoticon.path + '/' + emoticon.fileNm}`" />
                </li>
              </template>
            </ul>
          </div>
          <div class="card-info-bottom">
            <div class="info-date">
              <div class="info-date-month">{{ $moment(diary.date).month() | getEnMonth }}</div>
              <div class="info-date-day">{{ $moment(diary.date).date() }}</div>
            </div>
            <ul class="info-options">
              <li class="option-item">
                <img src="~/assets/images/ico_share.png" />
              </li>
              <li class="option-item" @click="diary.active = !diary.active">
                <img src="~/assets/images/ico_msg.png" />
              </li>
            </ul>
          </div>
        </div>
        <div :class="`card-side card-side-back${diary.active ? ' active' : ''}`">
          <div class="card-close" @click="diary.active = false">
            <img src="~/assets/images/ico_close.png" />
          </div>
          <div class="text-section">
            <div class="info-date">
              <div class="info-date-month">{{ $moment(diary.date).month() | getEnMonth }}</div>
              <div class="info-date-day">{{ $moment(diary.date).date() }}</div>
            </div>
            <textarea
              rows="5"
              placeholder="이모지로 담지 못한 당신의 하루를 작성해보세요."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <button v-if="false" class="btn-save">저장하기</button>
    <div class="bottom-nav">
      <div class="btn-bottom-option">
        <img src="~/assets/images/ico_calendar.png" />
      </div>
      <div class="btn-today" @click="today()">Today</div>
      <div class="btn-bottom-option">
        <img src="~/assets/images/ico_setting.png" />
      </div>
    </div>
    <div class="wrapper" :data-open="state === 'open' ? 1 : 0">
      <div
        ref="card"
        class="bottomcard"
        :data-state="isMove ? 'move' : state"
        :style="{ top: `${isMove ? y : calcY()}px` }"
      >
        <div 
          class="pan-area" 
          ref="pan"
          v-hammer:pan.horizontal="onPanHorizontal"
          v-hammer:panstart="onPanStart"
          v-hammer:panend="onPanEnd"
          v-hammer:panup="onPanUp"
          v-hammer:pandown="onPanDown"
        >
          <div class="bar" ref="bar" @click="setState('close')"></div>
        </div>
        <div class="contents">
          <popup-emoji
            :emoji="selectedEmoji"
            v-if="bottomSheetType == 'emoji'"
            @selectEmoji="selectEmoji"
          >
          </popup-emoji>
          <!-- 
          </popup-emoji>
          <popup-calendar
            v-if="bottomSheetType === 'calendar'"
          ></popup-calendar> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopupEmoji from "~/components/PopupEmoji";

export default {
  components: {
    PopupEmoji
  },

  data() {
    return {
      diaryList: [
        { 
          active: false,
          date: this.$moment().format("YYYYMMDD"),
          emoticonList: [
            {
              selected: false,
              path: "default",
              fileNm: "emoticon_01.png"
            },
            {
              selected: false,
              path: '',
              fileNm: ''
            },
            {
              selected: false,
              path: "default",
              fileNm: "emoticon_03.png"
            },
            {
              selected: false,
              path: '',
              fileNm: ''
            },
            {
              selected: false,
              path: '',
              fileNm: ''
            },
            {
              selected: false,
              path: '',
              fileNm: ''
            },
            {
              selected: false,
              path: '',
              fileNm: ''
            },
            {
              selected: false,
              path: '',
              fileNm: ''
            },
            {
              selected: false,
              path: '',
              fileNm: ''
            },
          ],
          cont: ""
        },
        {
          active: false,
          date: this.$moment().day(-1).format("YYYYMMDD"),
          emoticonList: [
            {
              path: "default",
              fileNm: "emoticon_01.png"
            },
            {
              path: "default",
              fileNm: "emoticon_03.png"
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
          ],
          cont: ""
        },
        {
          active: false,
          date: this.$moment().day(-2).format("YYYYMMDD"),
          emoticonList: [
            {
              path: "default",
              fileNm: "emoticon_01.png"
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: "default",
              fileNm: "emoticon_03.png"
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
            {
              path: '',
              fileNm: ''
            },
          ],
          cont: ""
        },
      ],

      isActive: false,
      bottomSheetType: "",
      openY: 0.6,
      state: "close",
      mc: null,
      y: 0,
      startY: 0,
      isMove: false,
      rect: {},

      selectedEmoji: {
        idx: 0,
        category: "",
        path: "",
        fileNm: ""
      }
    }

  },

  methods: {
    today() {
      $("html, body").animate({ scrollTop: 0 }, 500);
    },

    onPanStart(evt) {
      this.startY = evt.center.y;
      this.isMove = true;
    },

    onPanEnd(evt) {
      this.isMove = false;

      switch (this.state) {
        case "close":
          break;
        case "open":
          if (this.startY - evt.center.y < -120) {
            this.state = "close";
          }
          break;
      }

      // emoji bottomsheet 닫았을 경우
      if (this.state == "close" && this.bottomSheetType == 'emoji') {
        this.diaryList[0].emoticonList.forEach(v => {
            v.selected = false;
        });
      }
    },

    onPanUp(evt) {
       this.y = evt.center.y - 16;
    },

    onPanDown(evt) {
       this.y = evt.center.y - 16;
    },

    onPanHorizontal() {
    },

    calcY() {
      switch (this.state) {
        case "close":
          return this.rect.height;
        case "open":
          return this.rect.height * this.openY;
        default:
          return this.y;
      }
    },

    setState(state) {
      this.state = state;
    },

    openEmoji(idx, emoticon) {
      this.diaryList[0].emoticonList.forEach((v, index) => {
        if (idx == index) {
          v.selected = true;
        } else {
          v.selected = false;
        }
      });

      this.selectedEmoji = {
        idx: idx,
        path: emoticon.path,
        fileNm: emoticon.fileNm
      }

      this.setState("open");
      this.openY = 0.55;
      this.bottomSheetType = "emoji";      
    },

    selectEmoji(idx, fileNm) {
      this.diaryList[0].emoticonList.splice(idx, 1,  { path: "default", fileNm: fileNm });

      this.diaryList[0].emoticonList.forEach((v, index) => {
        if (idx == index) {
          v.selected = true;
        } else {
          v.selected = false;
        }
      });
    }
  },

  mounted() {
    this.rect = this.$refs.card.getBoundingClientRect();
  },

  filters: {
    getEnMonth(idx) {
      let enStr = "";
      if (idx == 0) enStr = "January"
      else if (idx == 1) enStr = "February"
      else if (idx == 2) enStr = "March"
      else if (idx == 3) enStr = "April"
      else if (idx == 4) enStr = "May"
      else if (idx == 5) enStr = "June"
      else if (idx == 6) enStr = "July"
      else if (idx == 7) enStr = "August"
      else if (idx == 8) enStr = "September"
      else if (idx == 9) enStr = "October"
      else if (idx == 10) enStr = "November"
      else if (idx == 11) enStr = "December"

      return enStr;
    }
  }  
};
</script>

<style>
</style>
