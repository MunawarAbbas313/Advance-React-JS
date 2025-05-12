import { ThemeProvider } from "./Conetxt";
import Switch from "./Switch";
import Text from "./Text";

function App(){
  return(
    <ThemeProvider>
      <Switch/>
      <p>
        Wellcome To theme Switcher
      </p>
      <Text/>
    </ThemeProvider>
  )
}
export default App;
