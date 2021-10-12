<template>
  <div class="container mx-auto lg:w-2/3">
    <div
      class="p-3 mx-auto mt-10 text-center bg-white rounded-lg shadow-lg  animate__animated animate__fadeIn"
    >
      <h2 class="text-2xl font-semibold text-center text-ms">Join Our Team</h2>
      <div>
        10 Minute School is the largest online educational platform in
        Bangladesh. We believe in democratizing education and with that end in
        mind, we strive to erase all hurdles in the path of every student of the
        country.
      </div>
    </div>
    <section class="container mx-auto mt-5 bg-gray-100">
      <div>
        <h2 class="text-2xl text-center">Browse Particular Jobs</h2>
        <Jobs :jobs="jobs" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Jobs from "@/components/Jobs";
export default {
  components: {
    Jobs,
  },
  computed: {
    ...mapState(["jobs"]),
  },
};
</script>

<style lang="scss" scoped>
</style>