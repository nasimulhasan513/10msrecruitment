<template>
  <div class="bg-gray-100 poppins">
    <Header />

    <div class="p-2 content-container sheight">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <hr class="mt-5" />
    <footer
      class="py-4 text-sm text-center text-white  kalpurush bg-gradient-to-r from-gray-600 to-gray-800"
    >
      স্বত্ব © ২০১৫ - ২০২১ টেন মিনিট স্কুল কতৃক সর্বস্বত্ব সংরক্ষিত
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  created() {
    this.$store.dispatch("INIT_USER");
  },
};
</script>

<style lang="scss" scoped>
.sheight {
  min-height: calc(100vh - 150px) !important;
}
/* route transitions */
.route-enter-from {
  transform: translateX(100px);
  opacity: 0;
}
.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>