<template>
  <div>
    <div class="container mx-auto mt-10">
      <div class="p-3 mx-auto rounded md:w-1/2 lg:w-1/3">
        <vee-form :validation-schema="schema" @submit="login">
          <div>
            <label class="">Phone Number</label>
            <div class="relative flex items-center mt-2">
              <vee-field
                type="tel"
                name="contact"
                class="w-full px-3 py-3 text-gray-800 placeholder-gray-500 transition duration-500 border border-gray-200 rounded-md  focus:outline-none text-bold focus:border-black"
                placeholder="E.g. 01XXXXXXXXXX"
              />
              <span class="absolute material-icons right-2"> call </span>
            </div>
            <ErrorMessage class="text-primary" name="contact" />
          </div>
          <div v-if="error" class="p-3 m-2 text-white rounded bg-primary">
            Wrong credential. <br />
            Something went wrong.
          </div>
          <div class="mt-5 text-center">
            <button
              :disabled="loading"
              class="inline-block px-6 py-3 text-white rounded shadow-sm  bg-success"
            >
              {{ loading ? "Please wait..." : "Login" }}
            </button>
          </div>
        </vee-form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import router from "../router";

export default {
  beforeRouteEnter(to, from, next) {
    let user = localStorage.getItem("ruser");
    if (user) {
      next({ path: "/" });
      return;
    }
    next();
  },
  setup() {
    const schema = {
      contact: "required|numeric|min:10|max:14",
    };
    const store = useStore();
    const loading = ref(false);
    const error = ref(false);
    const login = async (values) => {
      loading.value = true;
      let contact = values.contact.substr(
        values.contact.length - 10,
        values.contact.length
      );

      let res = await fetch(
        `https://script.google.com/macros/s/AKfycbwP1hxJnJkt0NZJeU08Y60hd4NFrkVl-zznAEb5aY2X9K1Z19_bb_v9WUNEzuQZg48Q/exec?contact=${contact}`
      );
      let { user } = await res.json();

      if (user) {
        localStorage.setItem(
          "ruser",
          JSON.stringify({
            name: user[2],
            contact: user[0],
            email: user[3],
          })
        );
        store.commit("INIT_USER");
        error.value = false;
        loading.value = false;
        router.replace("/profile");
      } else {
        loading.value = false;
        error.value = true;
      }
    };

    return { schema, login, loading, error };
  },
};
</script>

<style lang="scss" scoped>
</style>