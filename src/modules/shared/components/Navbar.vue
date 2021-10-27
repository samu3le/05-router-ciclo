<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }">
      Pokemon por Id
    </router-link>
    <router-link :to="{ name: 'about' }">About</router-link> -->
    <Customlink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  data() {
    return {
      links: [
        { to: "/home", name: "Pokemons" },
        { to: "/pokemonid/50", name: "Por ID" },
        { to: "/about", name: "About" },
        { to: "https://google.com ", name: "Google" },
      ],
    };
  },

  components: {
    Customlink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
</style>
