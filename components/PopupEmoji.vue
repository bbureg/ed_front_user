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
          <img :src="`${category.filePath}/${category.fileNm}`" />
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="grid-container">
        <div v-for="(emoticon, idx) in emoticonList" :key="idx" class="grid-item">
          <img :src="`${emoticon.filePath}/${emoticon.fileNm}`" @click="selectEmoji(`emoticon_01.png`)" />
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
      categoryList: [],
      emoticonList: []
    }
  },

  methods: {
    async selectCategory(idx, category) {
      await this.$axios.$post("/emoticon/getListByCatgCd", {
        catgCd: category.cd
      })
      .then((data) => {
        this.emoticonList = data;
      })

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
  },

  async mounted() {
    await this.$axios.$get("/emoticon_category/getList")
      .then((res) => {
        this.categoryList = res.map((v, idx) => {
          return {
            ...v,
            selected: false
          }
        });

        console.log("sdfsdf", this.emoji.idx);

        if (this.emoji.filePath == "") {
          console.log("sfsdfsdf");
          this.categoryList[0].selected = true;
        }

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  }
}
</script>

<style>

</style>