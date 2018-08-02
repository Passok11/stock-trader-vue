<template lang="pug">
    #app
      .nav
        router-link(to="portfolio" tag="a") Portfolio
        router-link(to="stock" tag="a") Stock
        | {{ getMoney }}
        button(@click="endDay") End the Day!
      router-view
</template>
<script>
export default {
  computed: {
    getMoney() {
      return this.$store.getters.getMoney;
    },
  },
  methods: {
    endDay() {
      return this.$store.commit('endDay');
    },
  },
};
</script>


<style>

</style>
