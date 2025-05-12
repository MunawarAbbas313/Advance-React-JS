import { LanguageProvider } from "./LanguageContext";
import LanguageSelctor from "./LanguageSelctor";
import { ThemeProvider } from "./ThemeConext";
import Wellcome from "./Wellcome";

function App(){
    return(
     <ThemeProvider>
        <LanguageProvider>
     <LanguageSelctor/>
     <Wellcome/>
     </LanguageProvider>
     </ThemeProvider>
    )
}
export default App;
