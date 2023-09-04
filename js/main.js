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
      const actualDate = new Date();
      let day = actualDate.getDate();
      let month = actualDate.getMonth() + 1;
      let year = actualDate.getFullYear();
      function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      let h = addZero(actualDate.getHours());
      let m = addZero(actualDate.getMinutes());
      let s = addZero(actualDate.getSeconds());
      let time = h + ":" + m + ":" + s;
      newMessageCopy.date = day + "/" + month + "/" + year + " " + time;
      this.contacts[this.activeChat].messages.push(newMessageCopy);
      this.newMessage = {};
    },
  },
}).mount("#app");
