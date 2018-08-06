<template lang="pug">
    #app
      nav.navbar.is-dark
        .navbar-brand
          .navbar-item
            a Logo
          a.navbar-burger(
            role="button"
            aria-label="menu"
            aria-expanded="false"
            @click="isActive = !isActive"
            v-bind:class="{'is-active': isActive}"
          )
            span(aria-hidden="true")
            span(aria-hidden="true")
            span(aria-hidden="true")
        .navbar-menu(v-bind:class="{'is-active': isActive}")
          .navbar-start
            router-link.navbar-item(to="portfolio" tag="a") Portfolio
            router-link.navbar-item(to="stock" tag="a") Stock
          .navbar-end
            .navbar-item
              .field.is-grouped
                p.control
                  a.button.is-dark
                    span {{ getMoney }}
                p.control
                  a.button.is-primary(@click="endDay")
                    span End the Day!
      router-view.container
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
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
