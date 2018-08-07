<template lang="pug">
  div
    .section
      h1.title Portifolio
      template(v-if="getPortfolio.length")
        .columns(v-for="chunk in chunkStocks")
          .column.is-one-third(v-for="stock in chunk")
            .card
              header.card-header
                p.card-header-title {{ stock.name }}
              .card-content
                p.is-size-3 {{ convertCurrency(stock.price) }}
                p.is-size-5 Quantity: {{ stock.quantity }}
              .card-footer
                form.card-footer-item.has-addons.field(
                  v-on:submit.prevent="sellStocks(stock, $event)"
                )
                  .control
                    input.input.control.is-medium(type="number" name="quantity" value="0")
                  .control
                    button.button.is-fullwidth.is-medium.is-primary.control(type="submit") Sell
      h1.is-3(v-else) You don't have any stock!
</template>

<script>
import _ from 'lodash/array';

export default {
  computed: {
    getPortfolio() {
      return this.$store.getters.getPortfolio;
    },
    chunkStocks() {
      return _.chunk(this.getPortfolio, 3);
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
    convertCurrency(value) {
      return `$${value}.00`;
    },
  },
};
</script>
