const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      // Index
      activeChat: 0,
    };
  },

  methods: {
    // Function to select chat
    clickChat(i) {
      this.activeChat = i;
    },
  },
}).mount("#app");
