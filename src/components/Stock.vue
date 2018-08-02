<template lang="pug">
  div
    h1 Stock Page
    ul
      li(v-for="stock in stocks")
        | {{ stock.name }} - {{ stock.price }}
        form(v-on:submit.prevent="buyStocks(stock, $event)")
          input(type="number" name="quantity" value="0")
          button(type="submit") Buy
</template>

<script>
export default {
  computed: {
    stocks() {
      return this.$store.getters.getStocks;
    },
    getMoney() {
      return this.$store.getters.getMoney;
    },
  },
  methods: {
    buyStocks(stock, e) {
      const quantity = Number(e.target.quantity.value);
      if ((quantity > 0) && (quantity * stock.price) < this.getMoney) {
        this.$store.commit('buyStock', {
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
