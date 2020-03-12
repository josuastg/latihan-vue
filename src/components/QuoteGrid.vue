<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      v-bind:key="quote"
      @click.native="deleteQuote(index)"
    >{{quote}}</app-quote>
  </div>
</template>
<script>
import Quotes from "@/components/Quotes";

export default {
  props: ["quotes"],
  
  components: {
    appQuote: Quotes
  },
  data(){
      return{
          filteredQuote: ''
      }
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }, 
    computed: {
      filteredQuote() {
        this.quotes.filter(element => {
          return element.match(this.filterQuote);
        });
      }
    }
  }
};
</script>


<style  scoped>
</style>