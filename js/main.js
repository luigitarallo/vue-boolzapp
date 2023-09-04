const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      // Index
      activeChat: 0,

      // New message obj
      newMessage: {
        date: "",
        message: "",
        status: "sent",
      },

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

      this.newMessage = { date: "", message: "", status: "sent" };
      this.answearMessage();
    },
    answearMessage() {
      setTimeout(() => {
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
        this.newMessageReceived.date =
          day + "/" + month + "/" + year + " " + time;
        this.contacts[this.activeChat].messages.push(this.newMessageReceived);
      }, 1000);
    },
  },
}).mount("#app");
