import React from 'react';

const Binder = () => {
  const files = [
    "01 , Mercha.mp3",
    "02 , Mercha.mp3",
    "03 , Mercha.mp3",
    "04 , Tipcha.mp3",
    "05 , Tipcha.mp3",
    "06 , Mercha Tipcha.mp3",
    "07 , Mercha Tipcha From Sh'ma.mp3",
    "08 , Etnachta.mp3",
    "09 , Mercha Tipcha Etnachta.mp3",
    "10 , Munach Of Ethnachta Clause.mp3",
    "11 , Tipcha Munach Etnachta.mp3",
    "12 , Common Variations Of Etnachta Clause.mp3",
    "13 , Etnachta Clause Practice.mp3",
    "14 , Sof-Pasuk Clause.mp3",
    "15 , Variations Of Etnachta And Sof-Pasuk Clauses.mp3",
    "16 , Sof-Pasuk Phrases.mp3",
    "17 , Complete Torah Verses With Sof-Pasuk.mp3",
    "18 , Sof-Pasuk At End Of Aliyah.mp3",
    "19 , Torah Text From Parashat Masey.mp3",
    "20 , Reviews Of Etnachta And Sof-Pasuk Clauses.mp3",
    "21 , Katon.mp3",
    "22 , Pashta.mp3",
    "23 , Pashta On Accented Syllable.mp3",
    "24 , Pashta Katon Variations.mp3",
    "25 , Mahpach.mp3",
    "26 , Mahpach Pashta.mp3",
    "27 , Mahpach Pashta Katon Clause.mp3",
    "28 , Munach Katon.mp3",
    "29 , Katon Clause Variations.mp3",
    "30 , Katon Clause Variations.mp3",
    "31 , Katon Clause Variations.mp3",
    "32 Yateev.mp3",
    "33 Yateev, Katon Clause.mp3",
    "34 , Yateev, Katon Clause.mp3",
    "35 , Kadma.mp3",
    "36 , Kadma.mp3",
    "37 , Kadma Torah Chanting Practice.mp3",
    "38 , Zakef-Gadol.mp3",
    "39 , Zakef-Gadol.mp3",
    "40 , T'vir.mp3",
    "41 , Darga.mp3",
    "42 , Darga T'vir.mp3",
    "43 , Marcha Chanted Before T'vir.mp3",
    "44 , T'vir Clause Examples.mp3",
    "45 , Kadma Darga T'vir.mp3",
    "46 , Munach Darga, T'vir.mp3",
    "47 , T'vir Clause Practice.mp3",
    "48 , Mercha K'fulah.mp3",
    "49 , Mercha K'fulah.mp3",
    "50 , R'vi-i.mp3",
    "51 , Munach R'vi-i.mp3",
    "52 , Munach Munach R'vi-i.mp3",
    "53 , Munach, Munach R'vi-i.mp3",
    "54 , Darga Munach R'vi-i.mp3",
    "55 , Torah With All Tropes Learned So Far.mp3",
    "56 , Torah With All Tropes Learned So Far.mp3",
    "57 , Kadma V'azla.mp3",
    "58 , Geresh.mp3",
    "59 , Gershayim.mp3",
    "60 , Munach Gershayim.mp3",
    "61 , Variations On R'vi-i Clause.mp3",
    "62 , Tropes Learned So Far.mp3",
    "63 , Tropes Learned So Far.mp3",
    "64 , T'lisha K'tanah.mp3",
    "65 , Munach T'lisha K'tanah.mp3",
    "66 , Pazer.mp3",
    "67 , Munach Pazer.mp3",
    "68 , T'lisha G'dolah.mp3",
    "69 , T'lisha G'dolah.mp3",
    "70 , Munach Munach Pazer And Munach Munach T'lisha K'tanah.mp3",
    "71 , More Complex Trope Combinations.mp3",
    "72 , More Complex Trope Combinations.mp3",
    "73 , Segol_Zarka Clause.mp3",
    "74 , Zarka_Segol Clause.mp3",
    "75 , Zarka Munach Segol.mp3",
    "76 , Verses From Torah Including Segol Clause.mp3",
    "77 , Shalshelet.mp3",
    "78 , Segol Clause With Shashelet.mp3",
    "79 . Karnei Parah.mp3",
    "80 , Entire Verse With Karnei Parah.mp3",
    "81 , Shirat Ha Yam.mp3",
    "82 , Ten Commandments And Concluding A Book Of Torah.mp3",
    "83 , Simchat Torah.mp3",
    "84 , High Holy Day Cantillation.mp3"
  ];

  return (
    <div className="container">
      <h1>Audio Clips from <i>The Art of Torah Cantillation</i></h1>
      <div className="list-group">
        {files.map((file, index) => (
          <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{file}</span>
            <audio controls>
              <source src={`https://res.dnix.us/recordings/trop/binder/${file}`} type="audio/mp3" />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Binder;
