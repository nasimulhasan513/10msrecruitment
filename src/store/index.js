import { createStore } from "vuex";

export default createStore({
  state: {
    jobs: [
      {
        icon:
          "https://img.icons8.com/external-konkapp-outline-color-konkapp/64/000000/external-student-online-learning-konkapp-outline-color-konkapp.png",

        title: "Student Advisor",
        summary:
          "Provide personalized support to students and help them progress",
        link: "advisor",
      },
      // {
      //   icon: "https://img.icons8.com/color/96/000000/school.png",
      //   title: "Academics",
      //   summary:
      //     "Develop remarkable content which effectively imparts knowledge",
      //   link: "academics",
      // },
    ],
    applications: [],
    user: null,
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_APPLICATION(state, payload) {
      state.applications = payload.map((j) => {
        let job = state.jobs.find((t) => t.link === j.job);
        return { ...job, ...j };
      });
    },
  },
  actions: {
    async INIT_USER({ commit }) {
      let user = localStorage.getItem("ruser");
      if (user) {
        commit("SET_USER", JSON.parse(user));

        const res = await fetch(
          `https://script.google.com/macros/s/AKfycbyvIX3K7AJ6SBe8rYIm3JorRDGIPq7kjARWLG0VU8Op1nVL9cOAFkbUvgNcYskbcaaO/exec?type=applications&contact=${user.contact}`
        );
        const { exam } = await res.json();
        commit("SET_APPLICATION", exam);
      }
    },
  },
  getters: {},
  modules: {},
});
