import './App.css';
import Phrase from './Phrase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Te'amim and melodies for Torah cantillation</h1>
        <div className="container text-center">
        <Phrase hebrew="מֵרְכָ֥א טִפְּחָ֖א מֵרְכָ֥א סִילֽוּק:" audioFile="merekha-tippecha-merekha-siluk.mp3" />
        <Phrase hebrew="מֵרְכָ֥א טִפְּחָ֖א סִילֽוּק:" audioFile="merekha-tippecha-siluk.mp3" />
        <Phrase hebrew="מֵרְכָ֥א תְּבִ֛יר" audioFile="merekha-tevir.mp3" />
        <Phrase hebrew="תְּבִ֛יר" audioFile="tevir.mp3" />
        <Phrase hebrew="דַּרְגָ֧א תְּבִ֛יר" audioFile="darga-tevir.mp3" />
        <Phrase hebrew="רְבִ֗יעַ" audioFile="revia.mp3" />
        <Phrase hebrew="מֻנַ֣ח רְבִ֗יעַ" audioFile="munach-revi'a.mp3" />
        <Phrase hebrew="מֵרְכָ֥א לְגַרְמֵ֣הּ ׀ מֻנַ֣ח רְבִ֗יעַ" audioFile="merekha-legarmeh-munach-revia.mp3" />
        <Phrase hebrew="זָקֵ֕ף" audioFile="zakef-gadol.mp3" />
        <Phrase hebrew="יְ֚תִיב מֻנַ֣ח זָקֵ֔ף" audioFile="yetiv-munach-zakef.mp3" />
        <Phrase hebrew="מֻנַ֣ח מַהְפַּ֤ךְ פַּשְטָא֙ מֻנַ֣ח זָקֵ֔ף" audioFile="munach-mahpakh-pashta-munach-zakef.mp3" />
        <Phrase hebrew="מֻנַ֣ח תְּלִשָה֩ קַדְמָ֨ה מַהְפַּ֤ךְ פַּשְטָא֙ זָקֵ֔ף" audioFile="munach-telisha-kadma-mahpakh-pashta-zakef.mp3" />
        <Phrase hebrew="מֵרְכָ֥א פַּשְטָא֙ מֻנַ֣ח זָקֵ֔ף" audioFile="merekha-pashta-munach-zakef.mp3" />
        <Phrase hebrew="מְתִיגָ֨ה־זָקֵ֔ף" audioFile="metigah-zakef.mp3" />
        <Phrase hebrew="מֻנַ֣ח סֶגוֹל֒" audioFile="munach-segol.mp3" />
        <Phrase hebrew="מֻנַ֣ח זַרְקָא֘ מֻנַ֣ח סֶגוֹל֒" audioFile="munach-zarka-munach-segol.mp3" />
        <Phrase hebrew="גֶ֜רֶשׁ" audioFile="geresh.mp3" />
        <Phrase hebrew="קַדְמָ֨ה וגֶ֜רֶשׁ" audioFile="kadma-vegeresh.mp3" />
      </div>
      </header>
    </div>
  );
}

export default App;
