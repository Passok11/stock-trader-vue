<template lang="pug">
  div
    h1 Portfolio Page
    ul
      li(v-for="item in getPortfolio")
        p {{item.name}} - {{ item.quantity }} - {{ item.price }}
        form(v-on:submit.prevent="sellStocks(item, $event)")
          input(type="number" name="quantity" value="0")
          button(type="submit") Sell
</template>

<script>
export default {
  computed: {
    getPortfolio() {
      return this.$store.getters.getPortfolio;
    },
  },
  methods: {
    sellStocks(stock, e) {
      const quantity = Number(e.target.quantity.value);
      if ((quantity <= stock.quantity)) {
        this.$store.commit('sellStock', {
          stockName: stock.name,
          quantity,
        });
      } else {
        console.log('show don\'t have funds message');
      }
      e.target.quantity.value = 0;
    },
  },
};
</script>
