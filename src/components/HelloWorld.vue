<template>
  <div>
    <button v-on:click="increase">{{title}}</button>
    <button @click="resetName">reset</button>
    <p>{{counter}}</p>
    <p v-on:mousemove="updateCoordinate">Coordinates : {{x}} / {{y}}</p>
    <p>Username : {{switchUsername()}}</p>

    <button @click="unhide">Showing the lists </button>
    <ul v-for="user in users" v-bind:key="user.name" v-show="show">
      <li>{{user.name}}</li>
      <li>{{user.age}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "hello-world",
  data() {
    return {
      counter: 0,
      x: 0,
      y: 0,
      show: false,
      users: [
        {
          name: "Fatiri",
          age: 20
        },
        {
          name: "Jojo",
          age: 18
        },
        {
          name: "Reza",
          age: 25
        }
      ]
    };
  },
  props: {
    username: {
      type: String
    },
    title: {
      type: String
    }
  },
  methods: {
    increase() {
      this.counter++;
    },
    updateCoordinate: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    switchUsername() {
      return this.username
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.username = "jojo";
    },unhide(){
      if(this.show){
        this.show = false;
      }else{
        this.show = true
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
