<template>
  <div id="app">
    <div class="list-container">
      <div class="card" v-for="(diary, diaryIdx) in diaryList" :key="diaryIdx">
        <div :class="`card-side card-side-front${diary.active ? ' active' : ''}`">
          <div class="emoji-container">
            <ul class="emoji-group">
              <li
                class="emoji-item default"
                v-for="(emoticon, emoticonIdx) in diary.emoticonList"
                :key="emoticonIdx"
                @click="openEmoji()"
              >
                <img :src="`/images/emoticon/${emoticon.path != '' ? emoticon.path + '/' + emoticon.fileNm : 'default/no_image.png'}`" />
              </li>
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
          <!-- <div class="bar" ref="bar"></div> -->
        </div>
        <div class="contents">
          test contents
          <!-- <popup-emoji
            v-if="bottomSheetType === 'emoji'"
            :tabs="tabs"
            :selected-tab="selectedTab"
            @changeTab="onClickTab"
          >
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
export default {
  data() {
    return {
      diaryList: [
        { 
          active: false,
          date: "20200508",
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
        {
          active: false,
          date: "20200507",
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
          date: "20200506",
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

    }

  },

  methods: {
    today() {
      $("html, body").animate({ scrollTop: 0 }, 500);
    },

    onPanStart(evt) {
      console.log("onPanStart");
      this.startY = evt.center.y;
      this.isMove = true;
    },

    onPanEnd(evt) {
      console.log("onPanEnd");
      this.isMove = false;

      switch (this.state) {
        case "close":
          break;
        case "open":
          console.log("open", this.startY, evt.center.y);
          console.log("onPanEnd", this.startY - evt.center.y);
          if (this.startY - evt.center.y < -120) {
            this.state = "close";
          }
          break;
      }
    },

    onPanUp(evt) {
      console.log("onPanUp");
       this.y = evt.center.y - 16;
    },

    onPanDown(evt) {
      console.log("onPanDown");
       this.y = evt.center.y - 16;
    },

    onPanHorizontal() {
      console.log("onPanHorizontal");
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

    openEmoji() {
      this.setState("open");
      this.openY = 0.55;
    }
  },

  mounted() {
    window.onresize = () => {
      this.rect = this.$refs.card.getBoundingClientRect();
    };
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
