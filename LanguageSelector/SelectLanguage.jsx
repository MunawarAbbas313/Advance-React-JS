import { useLanguage } from "./LanguageContext";

function LanguageSelctor() {
  const { Language, toggleLanguage } = useLanguage(); // Corrected destructuring
  const HandleChange = (e) => {
    toggleLanguage(e.target.value);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="Language">Choose Language :</label>

      <select
        name=""
        id="Language"
        value={Language}
        onChange={HandleChange}
      >
  <option value="en">English</option>
  <option value="ur">Urdu</option>
  <option value="es">Spanish</option>
  <option value="fr">French</option>
  <option value="de">German</option>
  <option value="it">Italian</option>
  <option value="pt">Portuguese</option>
  <option value="zh">Chinese</option>
  <option value="ar">Arabic</option>
  <option value="ru">Russian</option>
  <option value="ja">Japanese</option>
  <option value="ko">Korean</option>
      </select>
    </div>
  );
}

export default LanguageSelctor;
