const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      // Index
      activeChat: 0,
      // Input search var
      searchName: "",
      // New message obj
      newMessage: {
        date: "",
        message: "",
        status: "sent",
      },
      // New message received obj
      newMessageReceived: {
        date: "",
        message: "OK!",
        status: "received",
      },
    };
  },

  methods: {
    // Function to select chat
    clickChat(i) {
      this.activeChat = i;
    },
    // Function to add new message
    addNewMessage() {
      const newMessageCopy = { ...this.newMessage };
      const actualDate = new Date();
      function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      let h = addZero(actualDate.getHours());
      let m = addZero(actualDate.getMinutes());
      let time = h + ":" + m;
      newMessageCopy.date = time;
      this.contacts[this.activeChat].messages.push(newMessageCopy);

      this.newMessage = { date: "", message: "", status: "sent" };
      this.answearMessage();
    },

    // Time Function to send Answear
    answearMessage() {
      setTimeout(() => {
        const newMessageReceivedCopy = { ...this.newMessageReceived };
        const actualDate = new Date();
        function addZero(i) {
          if (i < 10) {
            i = "0" + i;
          }
          return i;
        }
        let h = addZero(actualDate.getHours());
        let m = addZero(actualDate.getMinutes());
        let time = h + ":" + m;
        newMessageReceivedCopy.date = time;
        this.contacts[this.activeChat].messages.push(newMessageReceivedCopy);
      }, 1000);
    },
  },
}).mount("#app");
