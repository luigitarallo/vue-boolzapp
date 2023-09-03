const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeChat: 0,
    };
  },

  methods: {
    clickChat(i) {
      this.activeChat = i;
    },
  },
}).mount("#app");
