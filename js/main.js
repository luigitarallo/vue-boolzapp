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
      contacts: contacts.map((contact) => ({
        ...contact,
        messages: contact.messages.map((message) => ({
          ...message,
          showMenu: false, // Aggiungi questa proprietà per gestire la visibilità del menu
        })),
      })),
      deletedMessageText:
        '<span style="color: gray; font-style: italic;"><i class="fa-solid fa-circle-info"></i> Messaggio eliminato</span>',
    };
  },

  mounted() {
    // Aggiungi un ascoltatore di eventi di clic al livello superiore del DOM (body)
    document.body.addEventListener("click", this.handleClickOutsideMenu);
  },

  beforeUnmount() {
    // Rimuovi l'ascoltatore dell'evento di clic quando il componente viene distrutto
    document.body.removeEventListener("click", this.handleClickOutsideMenu);
  },
  methods: {
    handleClickOutsideMenu(event) {
      const menuElements = document.querySelectorAll(".message-options-menu");

      menuElements.forEach((menu) => {
        if (
          !menu.contains(event.target) &&
          !event.target.classList.contains("fa-chevron-down")
        ) {
          // Chiudi il menu solo se l'elemento cliccato non è parte del menu
          this.contacts[this.activeChat].messages.forEach((message) => {
            message.showMenu = false;
          });
        }
      });
    },

    deleteMessage(index) {
      // Segna il messaggio come cancellato impostando uno stato particolare
      this.contacts[this.activeChat].messages[index].isDeleted = true;
      this.contacts[this.activeChat].messages[index].showMenu = false; // Correzione qui
    },

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
      let day = addZero(actualDate.getDate());
      let month = addZero(actualDate.getMonth() + 1);
      let year = addZero(actualDate.getFullYear());
      let h = addZero(actualDate.getHours());
      let m = addZero(actualDate.getMinutes());
      let s = addZero(actualDate.getSeconds());
      let time = h + ":" + m + ":" + s;
      newMessageCopy.date = day + "/" + month + "/" + year + " " + time;
      this.contacts[this.activeChat].messages.push(newMessageCopy);

      this.newMessage = { date: "", message: "", status: "sent" };
      this.answearMessage();
    },

    showMenu(index, event) {
      event.stopPropagation();

      // Chiudi tutti i menu tranne quello attualmente cliccato
      this.contacts[this.activeChat].messages.forEach((message, i) => {
        if (i !== index) {
          message.showMenu = false;
        }
      });

      // Inverti la visibilità del menu cliccato
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
