Vue.createApp({
  computed: {
    navbarClasses() {
      return {
        "navbar-light": !this.useDarkMode,
        "bg-light": !this.useDarkMode,
        "navbar-dark": this.useDarkMode,
        "bg-dark": this.useDarkMode,
      };
    },
  },
  data() {
    return {
      activeIndex: 0,
      useDarkMode: false,
      pages: [
        {
          link: { text: "Home", url: "index.html" },
          pageTitle: "Home Page",
          content: "This is the home content",
        },
        {
          link: { text: "About", url: "about.html" },
          pageTitle: "About Page",
          content: "This is the about content",
        },
        {
          link: { text: "Contact", url: "contact.html" },
          pageTitle: "Contact Page",
          content: "This is the contact content",
        },
      ],
      heading: "Hello, Vue",
      message: "Welcome to vuejs site",
      age: 29,
    };
  },
}).mount("body");
