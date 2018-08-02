<template lang="pug">
    #app
      .nav
        router-link(to="portfolio" tag="a") Portfolio
        router-link(to="stock" tag="a") Stock
        | {{ getMoney }}
      router-view
</template>
<script>
export default {
  computed: {
     getMoney() {
      return this.$store.getters.getMoney;
    },
  },
};
</script>


<style>

</style>
