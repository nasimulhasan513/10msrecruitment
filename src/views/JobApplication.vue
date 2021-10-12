<template>
  <div class="container mx-auto lg:w-1/2">
    <div class="my-5">
      <h2 class="text-2xl font-semibold text-center text-gray-700">
        Student Consultancy Recruitment
      </h2>
    </div>
    <div>
      <vee-form
        :validation-schema="schema"
        :initial-values="user"
        @submit="submitData"
        class="space-y-5"
      >
        <div v-for="(f, i) in fields" :key="i">
          <label class="">{{ f.label }}</label>
          <div class="relative flex items-center mt-2">
            <vee-field
              :type="f.text"
              :name="f.name"
              class="input-block"
              :placeholder="f.placeholder"
            />
            <span class="absolute material-icons right-2" v-if="f.icon">
              {{ f.icon }}
            </span>
          </div>
          <ErrorMessage class="text-primary" :name="f.name" />
        </div>
        <div>
          <label> Where do you live? </label>
          <vee-field as="select" name="live_in" class="input-block">
            <option value="" selected disabled>Select One</option>
            <option value="inside_dhaka">Inside Dhaka</option>
            <option value="outside_dhaka">Outside Dhaka</option>
          </vee-field>
          <ErrorMessage class="text-primary" name="live_in" />
        </div>
        <div>
          <label>Detailed Address: </label>
          <vee-field
            type="text"
            name="address"
            placeholder="Full Address"
            class="input-block"
          >
          </vee-field>
          <ErrorMessage class="text-primary" name="address" />
        </div>
        <div>
          <p>Do you have a laptop/desktop of your own?</p>
          <div class="flex flex-col mt-3 space-y-3">
            <label class="inline-flex items-center mt-3">
              <vee-field
                type="radio"
                class="w-5 h-5 text-gray-600 form-radio"
                name="device"
                value="yes"
              /><span class="ml-2 text-gray-700">Yes</span>
            </label>
            <label class="inline-flex items-center mt-3">
              <vee-field
                type="radio"
                class="w-5 h-5 text-gray-600 form-radio"
                name="device"
                value="no"
              /><span class="ml-2 text-gray-700">No</span>
            </label>
          </div>
          <ErrorMessage class="text-primary" name="device" />
        </div>
        <div>
          <p>Do you have access to stable WiFi connection?</p>
          <div class="flex flex-col mt-3 space-y-3">
            <label class="items-center hidden mt-3">
              <vee-field
                type="radio"
                class="w-5 h-5 text-gray-600 form-radio"
                name="device"
              /><span class="ml-2 text-gray-700" chacked>Others</span>
            </label>
            <label class="inline-flex items-center mt-3">
              <vee-field
                type="radio"
                class="w-5 h-5 text-gray-600 form-radio"
                name="wifi"
                value="yes"
              /><span class="ml-2 text-gray-700" value="yes">Yes</span>
            </label>
            <label class="inline-flex items-center mt-3">
              <vee-field
                type="radio"
                class="w-5 h-5 text-gray-600 form-radio"
                name="wifi"
                value="no"
              /><span class="ml-2 text-gray-700" value="no">No</span>
            </label>
            <label class="items-center hidden mt-3">
              <vee-field
                type="radio"
                class="w-5 h-5 text-gray-600 form-radio"
                name="wifi"
              /><span class="ml-2 text-gray-700" chacked>Others</span>
            </label>
          </div>
          <ErrorMessage class="text-primary" name="wifi" />
        </div>
        <div v-for="(f, i) in bfields" :key="i">
          <label class="">{{ f.label }}</label>
          <div class="relative flex items-center mt-2">
            <vee-field
              :type="f.text"
              :name="f.name"
              class="input-block"
              :placeholder="f.placeholder"
            />
            <span class="absolute material-icons right-2" v-if="f.icon">
              {{ f.icon }}
            </span>
          </div>
          <ErrorMessage class="text-primary" :name="f.name" />
        </div>
        <div>
          <label>Upload your CV</label>
          <div class="mt-2">
            <vee-field type="file" name="cv" @change="uploadImage" />
          </div>
          <ErrorMessage class="text-primary" name="cv" />
        </div>

        <div class="my-5 text-center">
          <button
            type="submit"
            :disabled="loading"
            class="inline-block px-4 py-4 mx-auto font-semibold text-white rounded-md shadow  hover:shadow-lg hover:scale-105 btn-primary"
          >
            {{ loading ? "Please wait.." : " Submit" }}
          </button>
        </div>
      </vee-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      images: [],
      error: "",
      loading: false,
      schema: {
        name: "required",
        email: "required|min:3|max:100|email",
        contact: "required|numeric|min:10|max:14",
        facebook_id: "required|min:3|max:100",
        university: "required",
        department: "required",
        semester: "required",
        live_in: "required",
        address: "required",
        favoriteSubject: "required",
        teachingExperiance: "required",
        whyDoJoin: "required",
        cv: "required",
        wifi: "required",
        device: "required",
      },
      fields: [
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
        {
          name: "university",
          placeholder: "e.g BUET",
          type: "text",
          label: "University",
          icon: "school",
        },
        {
          name: "department",
          placeholder: "e.g CSE,CE,EEE",
          type: "text",
          label: "Department",
        },
        {
          name: "semester",
          placeholder: "2021",
          type: "text",
          label: "Semester",
        },
      ],
      bfields: [
        {
          name: "favoriteSubject",
          placeholder: "Physics",
          type: "text",
          label: "What is your favorite subject?",
        },
        {
          name: "teachingExperiance",
          placeholder: "Teaching Experiance",
          type: "text",
          label: "Tell us about your teaching experience",
        },
        {
          name: "whyDoJoin",
          placeholder: "We join because ..",
          type: "text",
          label: "Why do you want to join 10 Minute School?",
        },
      ],
    };
  },
  methods: {
    submitData(values) {
      // submit application form
      if (this.images.length > 0) {
        let userData = {
          ...values,
          job: this.$route.params.id,
          contact: values.contact.substr(
            values.contact.length - 10,
            values.contact.length
          ),
        };
        delete userData.cv;
        this.loading = true;
        const body = JSON.stringify({
          application: Object.values(userData),
          images: this.images,
          sheet: "applications",
        });

        let url =
          "https://script.google.com/macros/s/AKfycbx44LoYYtHNIWKUg-BNKwpVt1gqG8C9xaU8cNkfXLoaBlSYvQYjBwsWFWxNItfnjtS4/exec";
        fetch(url, {
          method: "POST",
          mode: "no-cors",
          cache: "no-cache",
          redirect: "follow",
          body,
        })
          .then(() => {
            if (!this.user) {
              // login user if not logged in based on phone number
              localStorage.setItem("ruser", JSON.stringify(userData));
              fetch(
                "https://script.google.com/macros/s/AKfycbwP1hxJnJkt0NZJeU08Y60hd4NFrkVl-zznAEb5aY2X9K1Z19_bb_v9WUNEzuQZg48Q/execs",
                {
                  method: "POST",
                  mode: "no-cors",
                  cache: "no-cache",
                  redirect: "follow",
                  body: JSON.stringify(userData),
                }
              ).then(() => {
                this.$store.dispatch("INIT_USER");
                this.loading = false;
                this.$router.replace("/success");
              });
            } else {
              this.loading = false;
              this.$router.replace("/success");
            }
          })
          .catch((err) => {
            console.log(err);
            this.loading = false;
          });
      } else {
        this.error = "You must upload your CV.";
      }
    },

    uploadImage(e) {
      let files = e.target.files;

      files.forEach((file) => {
        var reader = new FileReader();
        reader.onloadend = () => {
          this.images.push(reader.result);
        };
        reader.readAsDataURL(file);
      });
    },
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    window.scroll(0, 0);
  },
};
</script>

<style lang="scss" scoped>
</style>