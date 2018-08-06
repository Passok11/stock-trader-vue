<template lang="pug">
  div
    .section
      h1.title Stock List
      .columns(v-for="chunk in chunkStocks")
        .column.is-one-third(v-for="stock in chunk")
          .card
            header.card-header
              p.card-header-title {{ stock.name }}
            .card-content
              p.is-size-3 {{ convertCurrency(stock.price) }}
            .card-footer
              form.card-footer-item.has-addons.field(v-on:submit.prevent="buyStocks(stock, $event)")
                .control
                  input.input.control.is-medium(type="number" name="quantity" value="0")
                .control
                  button.button.is-fullwidth.is-medium.is-primary.control(type="submit") Buy
</template>

<script>
import _ from 'lodash/array';

export default {
  computed: {
    stocks() {
      return this.$store.getters.getStocks;
    },
    getMoney() {
      return this.$store.getters.getMoney;
    },
    chunkStocks() {
      return _.chunk(this.stocks, 3);
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
    convertCurrency(value) {
      return `$${value}.00`;
    },
  },
};
</script>

<style scoped>
.card{
  -webkit-box-shadow: 0px 0px 26px -9px rgba(0,0,0,0.18);
  -moz-box-shadow: 0px 0px 26px -9px rgba(0,0,0,0.18);
  box-shadow: 0px 0px 26px -9px rgba(0,0,0,0.18);
}
</style>

