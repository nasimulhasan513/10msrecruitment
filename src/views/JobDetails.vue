<template>
  <div class="container mx-auto lg:w-2/3" v-if="currentJob">
    <div class="mx-auto my-5 text-center">
      <h1 class="text-3xl font-semibold text-gray-800">
        {{ currentJob.title }}
      </h1>
      <p class="text-sm text-gray-600 drop-shadow-xl">
        {{ currentJob.summary }}
      </p>
    </div>
    <div class="my-5">
      10 Minute School is an online educational platform in Bangladesh which
      covers academic classes from 1 to 12 covering the entire academic syllabus
      of the Bangladesh schooling system. To further extend our services, we are
      introducing a program where we will provide personalized support to
      students and help them progress. We are looking for enthusiastic student
      advisors who can help the next generation of learners.
    </div>
    <div class="my-5">
      <h2 class="text-xl font-semibold text-gray-700">Responsibilities:</h2>
      <div class="ml-5">
        <ul class="space-y-2 list-disc">
          <li>
            Receiving calls from students from all over the country through our
            system.
          </li>
          <li>Registering them via calls by collecting their requirements.</li>
          <li>
            Listening to their progress, situations, problems and providing them
            with the best solutions, and setting their targets and aims.
          </li>
          <li>
            Listing down student behavior and satisfaction rating in our system.
          </li>
          <li>
            Doing surveys and preparing data about student behavior, learning
            progress and requirements.
          </li>
        </ul>
      </div>
    </div>

    <div class="my-5 space-y-3">
      <p>
        <span class="text-xl font-semibold text-gray-800">Job Type:</span>
        5 hours/day (Remote Work)
      </p>
      <p>
        <span class="text-xl font-semibold text-gray-800">Job duration:</span>
        5 days/week
      </p>
    </div>

    <div class="my-5">
      <h2 class="mb-1 text-xl font-semibold text-gray-700">
        Skills &amp; Requirements:
      </h2>
      <p><span class="font-medium">Software Skill:</span> Google Sheet.</p>
      <p>Good Communication Skills.</p>
      <p>Access to stable Wi-Fi and personal laptop/desktop.</p>
    </div>
    <div class="my-5">
      <h2 class="mb-1 text-xl font-semibold text-gray-700">Salary:</h2>
      <p>Basic: 10,000 BDT</p>
      <p>Bonus: Up to 5000 BDT</p>
      <p>Incentive: 5% of Basic if the KPI is met</p>
    </div>
    <div v-if="isApplied">
      <h2 class="font-semibold text-center text-red-500">
        You have already applied for this job. <br />
        Please wait for further response.
      </h2>
    </div>
    <div class="my-5 text-center" v-if="!isPending">
      <router-link
        :to="`/apply/${$route.params.id}`"
        class="inline-block px-4 py-4 mx-auto font-semibold text-white transform rounded-md shadow  hover:shadow-lg hover:scale-105 btn-primary"
        >{{ isApplied ? "Reapply" : "Apply" }} Now</router-link
      >
    </div>

    <div class="mt-5 space-y-3" v-if="othersJobs.length > 0">
      <h2 class="text-xl font-semibold text-center text-gray-700">
        Doesn't meet our requirements? You may also like our other jobs:
      </h2>
      <Jobs :jobs="othersJobs" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Jobs from "@/components/Jobs";
export default {
  components: { Jobs },
  computed: {
    ...mapState(["jobs", "applications"]),
    currentJob() {
      let job = this.jobs.find((job) => job.link === this.$route.params.id);
      return job;
    },
    isApplied() {
      let job = this.applications.find(
        (job) => job.type === this.$route.params.id
      );
      return job ? true : false;
    },
    isPending() {
      let job = this.applications.find(
        (job) => job.type === this.$route.params.id
      );
      return job?.status == "Pending" ? true : false;
    },
    othersJobs() {
      let job = this.jobs.filter((job) => job.link !== this.$route.params.id);
      return job;
    },
  },
  mounted() {
    window.scroll(0, 0);
  },
};
</script>

<style lang="scss" scoped>
</style>