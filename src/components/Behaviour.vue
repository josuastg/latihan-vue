<template>
  <div>
    <button @click="counter++">INCREASE</button>
    <button @click="counter--">DECREASE</button>
    <button @click="secondCounter++">SECOND COUNTER</button>
    <button @click="clear" ref="myButton">Clear</button>
    <p>Counter : {{counter}} || {{secondCounter}}</p>
    <p>Result : METHOD {{result()}} || COMPUTED {{output}}</p>
  </div>
</template>

<script>
export default {
  name: "behaviour",
  data() {
    return {
      counter: 0,
      secondCounter: 0
    };
  },
  methods: {
    result() {
      console.log("METHOD CALL");
      return this.counter > 5 ? "Greater than 5" : "Smaller Than 5";
    },
    clear() {
      this.counter = 0;
      this.secondCounter = 0;
      this.$refs.innerText = "Text";
    }
  },
  computed: {
    output() {
      console.log("COMPUTED CALL");
      return this.counter > 5 ? "Greater than 5" : "Smaller Than 5";
    }
  }
};
</script>