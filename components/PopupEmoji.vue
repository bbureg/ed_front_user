<template>
  <div class="bottom-sheet-emoji">
    <div class="emoji-option">
      <ul class="tabs">
        <li 
          v-for="(category, idx) in categoryList" 
          :key="idx" 
          :class="`tab-option${category.selected ? ' active' : ''}`"
          @click="selectCategory(idx, category)"        
        >
          <img :src="`/images/emoticon/${category.type}/main/main.png`" />
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="grid-container">
        <div class="grid-item">
          <img src="/images/emoticon/default/emoticon_01.png" @click="selectEmoji('emoticon_01.png')" />
        </div>
        <div class="grid-item">
          <img src="/images/emoticon/default/emoticon_02.png" @click="selectEmoji('emoticon_02.png')"/>
        </div>
        <div class="grid-item">
          <img src="/images/emoticon/default/emoticon_03.png" @click="selectEmoji('emoticon_03.png')"/>
        </div>
        <div class="grid-item">
          <img src="/images/emoticon/default/emoticon_04.png" @click="selectEmoji('emoticon_04.png')"/>
        </div>
        <div class="grid-item">
          <img src="/images/emoticon/default/emoticon_05.png" @click="selectEmoji('emoticon_05.png')"/>
        </div>
        <div class="grid-item">
          <img src="/images/emoticon/default/emoticon_06.png" @click="selectEmoji('emoticon_06.png')"/>
        </div>
        <div class="grid-item">
          <img src="/images/emoticon/default/emoticon_07.png" @click="selectEmoji('emoticon_07.png')"/>
        </div>
        <div class="grid-item">
          <img src="/images/emoticon/default/emoticon_08.png" @click="selectEmoji('emoticon_08.png')"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    emoji: {
      type: Object,
      default() {
        return {
          idx: 0,
          path: "",
          fileNm: ""
        }
      }
    }
  },

  data() {
    return {
      categoryList: [
        { selected: true, type: "activity" },
        { selected: false, type: "body" },
        { selected: false, type: "clothes" },
        { selected: false, type: "face" },
        { selected: false, type: "food" },
        { selected: false, type: "objects" },
        { selected: false, type: "weather" },
      ],

      emoticonList: [

      ]
    }
  },

  methods: {
    selectCategory(idx, category) {
      this.categoryList.forEach((v, index) => {
        if (idx == index) {
          v.selected = true;
        } else {
          v.selected = false;
        }
      });
    },
    
    selectEmoji(fileNm) {
      this.$emit("selectEmoji", this.emoji.idx, fileNm);
    }
  }
}
</script>

<style>

</style>