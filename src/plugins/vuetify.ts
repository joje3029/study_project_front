// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const myTheme = {
  light: true,
  dark: false,
  colors: {
    primary: "#5149E9",
    background: "#ECEFF1",
    surface: "#ECEFF1",
    secondary: "#0F101F",
    tertiary: "#807AC2",
    error: "#F196E3",
    info: "#307BB7",
    success: "#52C78C",
    warning: "#F09379",
  },
};
export default createVuetify({
  theme: {
    defaultTheme: "myTheme",
    themes: {
      myTheme,
    },
  },
});
