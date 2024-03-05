new Vue({
  el: "#app",
  // Кнопки
  data: {
    nameButtons: [
      "Kitchen",
      "Bedroom",
      "Building",
      "Architecture",
      "Kitchen-Planning",
      "Bathroom",
    ],
    currentTab: "Kitchen",
  },
  computed: {
    changeTabs() {
      return `${this.currentTab}`;
    },
  },
});
