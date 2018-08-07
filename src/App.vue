<template lang="pug">
    #app(v-bind:class="{darkMode: darkMode}")
      nav.navbar.is-dark.is-size-5-mobile.is-size-3
        .navbar-brand
          .navbar-item
            a Logo
          .navbar-item
            span DarkMode
            label.switch
              input(type="checkbox" v-model="darkMode")
              span.slider.round
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
              p.control
                .dropdown.is-hoverable
                  button.button(aria-haspopup="true" aria-controls="dropdown-menu")
                    span Load / Save
                  .dropdown-menu
                    .dropdown-content
                      a.dropdown-item(@click="loadState") Load
                      a.dropdown-item(@click="saveState") Save
            .navbar-item
              .field.is-grouped
                p.control
                  a.button.is-dark
                    span.is-size-3.is-size-5-mobile {{  convertCurrency(getMoney) }}
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
      darkMode: false,
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
    convertCurrency(value) {
      return `$${value}.00`;
    },
    loadState() {
      this.$store.commit('loadState');
    },
    saveState() {
      this.$store.commit('saveState');
    },
  },
};
</script>


<style>
 /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.darkMode{
  background-color:grey;
}
</style>
