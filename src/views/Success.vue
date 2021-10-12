<template>
  <div
    class="container flex flex-col items-center justify-center h-screen mx-auto"
  >
    <div class="-mt-44">
      <div class="space-y-4 text-center">
        <img
          src="https://img.icons8.com/cute-clipart/64/000000/approval.png"
          class="mx-auto animate__animated animate__heartBeat"
        />
        <h2 class="text-xl font-semibold animate__animated animate__fadeInUp">
          Thank you for applying.
        </h2>
        <p class="animate__fadeInUp animate__animated">
          Your response has been collected. <br />
          You will be informed about the next phase soon.
        </p>
      </div>
      <div class="mt-20 animate__animated animate__fadeInUp">
        <img src="../assets/logo.svg" class="h-10 mx-auto" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.scroll(0, 0);
  },
};
</script>
<style scoped>
.shight {
  height: calc(100vh - 6rem);
}
</style>