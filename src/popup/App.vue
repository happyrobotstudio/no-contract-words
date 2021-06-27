<template>
  <div class="extension">
    <h2>No Contract Words</h2>

    <h3>Parts Of Speech</h3>

    <textarea v-model="keyword" placeholder="Enter keyword"></textarea>
    <button v-on:click="buttonParse">Parse</button>
    <div v-html="result" />


    <h3>Pre &amp; Post Fixes</h3>

  </div>
</template>

<script>
const browser = require("webextension-polyfill");
const posTagger = require( 'wink-pos-tagger' );
const tagger = posTagger();

export default {
  data() {
    return {
      keyword: "",
      result: ""
    };
  },
  methods: {
    buttonParse() {
      this.result = tagger.tagSentence( this.keyword );
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 16px;
}
textarea {
  width: 100%;
  height: 300px;
}
.extension {
  width: 600px;
  text-align: left;
}
</style>
