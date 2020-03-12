<template>
  <div>
    <!-- <div class="demo" :style="{backgroundColor:color }"></div> -->
    <div class="demo" :style="myStyle"></div>
    <input type="text" v-model="color" placeholder="type color" />
    <input type="text" v-model="width" placeholder="type width" />
    <input type="text" v-model="height" placeholder="type height" />
  </div>
</template>

<script>
export default {
  name: "box",
  data() {
    return {
      color: "green",
      width: 100,
      height : 100
    };
  },
  computed: {
    myStyle() {
      return {
        backgroundColor: this.color,
        width: this.width + "px",
        height: this.height + "px"
      };
    }
  }
};
</script>

<style scoped>
.demo {
  width: 100px;
  height: 100px;
  background-color: green;
  display: inline-block;
  margin: 10px;
}
</style>