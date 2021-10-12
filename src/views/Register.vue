<template>
  <div class="p-3 mx-auto rounded bg-secondary md:w-1/2 lg:w-1/3">
    <div class="my-5">
      <h2 class="text-2xl font-semibold text-center text-gray-700">
        Registe to apply
      </h2>
    </div>
    <div>
      <vee-form
        :validation-schema="schema"
        @submit="submitData"
        class="space-y-5"
      >
        <div v-for="(f, i) in fields" :key="i">
          <label class="">{{ f.label }}</label>
          <div class="relative flex items-center mt-2">
            <vee-field
              :type="f.text"
              :name="f.name"
              class="w-full px-3 py-3 text-gray-800 placeholder-gray-500 transition duration-500 border border-gray-200 rounded-md  focus:outline-none text-bold focus:border-black"
              :placeholder="f.placeholder"
            />
            <span class="absolute material-icons right-2" v-if="f.icon">
              {{ f.icon }}
            </span>
          </div>
          <ErrorMessage class="text-ms" :name="f.name" />
        </div>
        <div class="mt-5 text-center">
          <button
            class="inline-block px-6 py-3 text-white rounded shadow-sm  bg-success"
          >
            Register
          </button>
        </div>
      </vee-form>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const fields = [
      {
        name: "name",
        placeholder: "e.g. John Doe",
        type: "text",
        label: "Name",
        icon: "person",
      },
      {
        name: "contact",
        placeholder: "e.g 016XXXXXXXX",
        type: "tel",
        label: "Contact Number",
        icon: "call",
      },
      {
        name: "email",
        placeholder: "e.g example@example.com",
        type: "email",
        label: "Email Address",
        icon: "alternate_email",
      },
      {
        name: "facebook_id",
        placeholder: "e.g https://www.facebook.com/example",
        type: "text",
        label: "Facebook ID",
      },
    ];

    const schema = {
      name: "required",
      email: "required|min:3|max:100|email",
      contact: "required|numeric|min:10|max:14",
      facebook_id: "required|min:3|max:100",
    };

    const submitData = (values) => {
      let userData = JSON.stringify(values);
      console.log(userData);
    };

    return { fields, schema, submitData };
  },
};
</script>

<style lang="scss" scoped>
</style>