const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      // Index
      activeChat: 0,
      newMessage: {
        date: "",
        message: "",
        status: "sent",
      },
    };
  },

  methods: {
    // Function to select chat
    clickChat(i) {
      this.activeChat = i;
    },
    addNewMessage() {
      const newMessageCopy = { ...this.newMessage };
      this.contacts[this.activeChat].messages.push(newMessageCopy);
      this.newMessage = {};
    },
  },
}).mount("#app");
