<template>
  <div
    class="flex flex-wrap items-center justify-center gap-3 mt-5"
    v-if="jobs.length > 0"
  >
    <div
      v-for="(j, i) in jobs"
      :key="i"
      class="flex flex-col items-center justify-center p-4 text-center transition-all duration-200 bg-white rounded-lg shadow-md cursor-pointer  w-72 hover:bg-gray-50 h-72"
    >
      <img :src="j.icon" :alt="j.tite" class="h-20 mb-3" />
      <div class="space-y-3">
        <h3 class="text-xl font-semibold text-ms">{{ j.title }}</h3>
        <p>{{ j.summary }}</p>
        <router-link
          :to="`/job/${j.link}`"
          class="inline-block px-3 py-2 text-white rounded shadow  btn-primary hover:shadow-md"
          >View Job</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jobs: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>