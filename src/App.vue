<template>
  <!-- <hello-world title="increase" :username="name"> </hello-world> -->
  <!-- <box/>
        <behaviour/>
  <app-box/>-->
  <!-- <button @click="selectedComponent = 'app-quote'">App-Quote</button>
        <button @click="selectedComponent = 'app-author'">App-Author</button>
        <button @click="selectedComponent = 'app-new'">App-new</button>
  <p>{{selectedComponent}}</p>-->
  <!-- <app-quote>
          <h2 slot="title">{{quoteTitle}}</h2>
          <p>It's a Wonderful Quote</p>
  </app-quote>-->

  <!-- <component :is="selectedComponent">
          <p>Default Content</p>
  </component>-->
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote()"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info : Click on a Quote to Delete it !!!</div>
      </div>
    </div>
  </div>
</template>


<script>
// import HelloWorld from '@/components/HelloWorld';
// import Box from '@/components/Box';
// import Behaviour from '@/components/Behaviour';
// import Author from "@/components/Author";
// import New from "@/components/New";

// components
// HelloWorld,
// Box,
// Behaviour,
// "app-quote": Quotes
// "app-author": Author,
// "app-new": New
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import QuoteGrid from "@/components/QuoteGrid";
import Header from "@/components/Header";
import NewQuote from "@/components/NewQuote";
import Vue from "vue";
Vue.use(BootstrapVue);
export default {
  name: "App",
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  },
  data() {
    return {
      name: "Jeki",
      quoteTitle: "The Quote",
      selectedComponent: "app-quote",
      maxQuotes: 10,
      quotes: ["One Quote"]
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        alert("some Quote must be deleted");
      } else this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.content {
  justify-content: center;
  padding: 10px;
}
</style>
