<template>
  <div class="container mx-auto space-y-5">
    <div
      class="p-3 mx-auto text-center border border-gray-300 rounded shadow-sm  bg-secondary md:w-1/2 lg:w-1/3"
      v-if="user"
    >
      <p class="text-lg">{{ user.name }}</p>
      <p class="text-sm text-gray-700">+880 {{ user.contact }}</p>
      <p class="text-sm text-gray-700">{{ user.email }}</p>
    </div>
    <div class="container p-3 mx-auto rounded" v-if="apps.length > 0">
      <h2 class="text-2xl font-bold text-center">Applied Jobs</h2>
      <div class="flex flex-col flex-wrap items-center justify-center gap-3">
        <div
          v-for="(j, i) in apps"
          :key="i"
          class="p-5 mt-5 text-center rounded-lg shadow-sm  bg-secondary lg:w-1/3"
        >
          <div class="text-center">
            <img :src="j.icon" :alt="j.tite" class="h-20 mx-auto mb-3" />
          </div>
          <div class="space-y-3 text-gray-900">
            <h2 class="text-xl font-semibold capitalize">{{ j.job }}</h2>
            <p class="">{{ j.status }}</p>
          </div>
          <div class="mt-4 text-gray-800 bangla">
            <h2 class="font-semibold">Submission Time:</h2>
            <p>{{ j.time }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="font-medium text-center">
        You don't have any job application.
      </h2>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user", "applications", "jobs"]),
    apps() {
      let apps = this.applications.map((a) => {
        let ak = this.jobs.find((j) => j.link == a.type);
        return { ...ak, ...a };
      });
      return apps;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>