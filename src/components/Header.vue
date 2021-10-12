<template>
  <header class="container flex items-center justify-between px-2 py-5 mx-auto">
    <div>
      <router-link to="/">
        <img
          src="../assets/logo.svg"
          class="h-10 mx-auto"
          alt=""
          v-if="$route.name !== 'success'"
      /></router-link>
    </div>
    <div>
      <div v-if="user">
        <router-link
          to="/profile"
          class="px-4 py-2 text-white rounded shadow-sm  hover:bg-gray-300 bg-success hover:text-black"
        >
          Profile
        </router-link>
      </div>
      <div v-else>
        <router-link
          to="/login"
          class="px-4 py-2 text-white rounded shadow-sm bg-success"
        >
          Login
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      auth: true,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss" scoped>
</style>