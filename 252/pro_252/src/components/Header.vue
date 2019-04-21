<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <!--<a class="navbar-brand" href="#">Navbar</a>-->
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" activeClass="active" tag="li" class="nav-item"><a class="nav-link" href="">Portfolio</a>
        </router-link>
        <router-link to="stocks" activeClass="active" tag="li" class="nav-item"><a class="nav-link" href="">Stocks</a>
        </router-link>
      </ul>
      <ul class="nav navbar-nav nav-right">
        <li class="nav-item navbar-text mr-2 font-weight-bold">Funds: {{funds | currency}}</li>
        <Li class="nav-item"><a class="nav-link" href="#" @click="endDay">End day</a></Li>
        <li class="nav-item dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" :class="{show: isDropdownOpen}">
            <a class="dropdown-item" href="#" @click="saveData">Save data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };
        this.$http.put('data.json', data)
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>

<style scoped>

</style>


