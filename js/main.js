const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      // Index to select active chat, start from the first
      activeChat: 0,
      // Input search var
      searchName: "",
      // New message obj
      newMessage: {
        date: "",
        message: "",
        status: "sent",
      },
      // Default answer message to send
      newMessageReceived: {
        date: "",
        message: "OK!",
        status: "received",
      },

      contacts: contacts.map((contact) => ({
        ...contact,
        messages: contact.messages.map((message) => ({
          ...message,
          showMenu: false, // For managing the delete menu visibility
        })),
      })),
      deletedMessageText:
        '<span style="color: gray; font-style: italic;"><i class="fa-solid fa-circle-info"></i> Messaggio eliminato</span>',
    };
  },

  mounted() {
    // Added an event listener to the full body,
    // The function handleClickOutsideMenu manage it
    document.body.addEventListener("click", this.handleClickOutsideMenu);
  },

  beforeUnmount() {
    // Remove the event listener for click from the body when the component is detroyed
    document.body.removeEventListener("click", this.handleClickOutsideMenu);
  },
  methods: {
    // Function invoked when click ouitside delete menu.
    // Take a parameter given from the clicked menu
    handleClickOutsideMenu(event) {
      // Select all the elements with message-options-menu class
      const menuElements = document.querySelectorAll(".message-options-menu");
      // Iteration on the array with all the elements from DOM
      menuElements.forEach((menu) => {
        // Check if the clicked element(event.target) it is not in the menu icon
        // and if it is not the menu icon
        if (
          !menu.contains(event.target) &&
          !event.target.classList.contains("fa-chevron-down")
        ) {
          // Close all the other delete menus to avoid multiple opening
          this.contacts[this.activeChat].messages.forEach((message) => {
            message.showMenu = false;
          });
        }
      });
    },

    // Function to delete a specific message
    deleteMessage(index) {
      // Set the is deleted property to a specific message
      this.contacts[this.activeChat].messages[index].isDeleted = true;
      // Close the delete menu after deleting the message
      this.contacts[this.activeChat].messages[index].showMenu = false;
    },

    // Function to select a specific chat
    clickChat(i) {
      this.activeChat = i;
    },
    // Function to add new message
    addNewMessage() {
      const newMessageCopy = { ...this.newMessage };
      const actualDate = new Date();
      // To add zero on date under 10
      function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      // Take Date, save info in variables
      let day = addZero(actualDate.getDate());
      let month = addZero(actualDate.getMonth() + 1);
      let year = addZero(actualDate.getFullYear());
      let h = addZero(actualDate.getHours());
      let m = addZero(actualDate.getMinutes());
      let s = addZero(actualDate.getSeconds());
      // Variable with hours, minutes and seconds
      let time = h + ":" + m + ":" + s;
      // Save all infos in the new message
      newMessageCopy.date = day + "/" + month + "/" + year + " " + time;
      // Push in the active chat array
      this.contacts[this.activeChat].messages.push(newMessageCopy);
      // Empty the newMessage variable for a new message
      this.newMessage = { date: "", message: "", status: "sent" };
      // Invoke the automatic answer function
      this.answearMessage();
    },

    showMenu(index, event) {
      // To avoid the propagation of the event to the other elements in the DOM
      event.stopPropagation();
      // Iteration on all messages in the conversation
      this.contacts[this.activeChat].messages.forEach((message, i) => {
        // If the index is different from the activeChat, hide the delete menu
        if (i !== index) {
          message.showMenu = false;
        }
      });

      // Reverse the visibility status of the clicked delete menu
      this.contacts[this.activeChat].messages[index].showMenu =
        !this.contacts[this.activeChat].messages[index].showMenu;
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
        let day = addZero(actualDate.getDate());
        let month = addZero(actualDate.getMonth() + 1);
        let year = addZero(actualDate.getFullYear());
        let h = addZero(actualDate.getHours());
        let m = addZero(actualDate.getMinutes());
        let s = addZero(actualDate.getSeconds());
        let time = h + ":" + m + ":" + s;
        newMessageReceivedCopy.date =
          day + "/" + month + "/" + year + " " + time;
        console.log(newMessageReceivedCopy.date);
        this.contacts[this.activeChat].messages.push(newMessageReceivedCopy);
      }, 1000);
    },
  },
}).mount("#app");
