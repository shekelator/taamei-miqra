import React from 'react';

const Haftarah = () => {
  const fileMap = {
    "01 Track 1": "01 - Merekha a",
    "02 Track 2": "02 - Merekha b",
    "03 Track 3": "03 - Merekha c",
    "04 Track 4": "04 - Merekha d",
    "05 Track 5": "05 - Tipecha, merekha tipcha",
    "06 Track 6": "06 - Merekha tipcha b",
    "07 Track 7": "07 - Merekah tipcha c",
    "08 Track 8": "08 - Etnachta",
    "09 Track 9": "09 - Merekha tipcha etnachta",
    "10 Track 10": "10 - Munach etnachta",
    "11 Track 11": "11 - Tipcha etnachta",
    "12 Track 12": "12 - Etnachta variations",
    "13 Track 13": "13 - More etnachta variations",
    "14 Track 14": "14 - Sof-pasuk",
    "15 Track 15": "15 - Sof-pasuk phrases",
    "16 Track 16": "16 - More sof-pasuk variations",
    "17 Track 17": "17 - Merekha tipcha etnachta, merekha tipcha sof-pasuk",
    "18 Track 18": "18 - Closing cadence",
    "19 Track 19": "19 - Example reading with closing cadence",
    "20 Track 20": "20 - Etnachta and sof-pasuk clauses",
    "21 Track 21": "21 - (Zakef) katon",
    "22 Track 22": "22 - Pashta",
    "23 Track 23": "23 - Pashta b",
    "24 Track 24": "24 - Patsha katon",
    "25 Track 25": "25 - Mapach",
    "26 Track 26": "26 - Mapach pashta",
    "27 Track 27": "27 - Mapach pashta katon",
    "28 Track 28": "28 - Munach katon",
    "29 Track 29": "29 - Katon variations",
    "30 Track 30": "30 - Verses with katon clause",
    "31 Track 31": "31 - Yetiv",
    "32 Track 32": "32 - Yetiv katon",
    "33 Track 33": "33 - Kadma mapach",
    "34 Track 34": "34 - Verses with katon variations",
    "35 Track 35": "35 - Munah mapach in katon clause",
    "36 Track 36": "36 - Practice passage on p. 34",
    "37 Track 37": "37 - Practice passage on p. 35",
    "38 Track 38": "38 - Zakef-gadol",
    "39 Track 39": "39 - Verses with zakef-gadol",
    "40 Track 40": "40 - Tevir",
    "41 Track 41": "41 - Darga",
    "42 Track 42": "42 - Darga tevir",
    "43 Track 43": "43 - Tevir b",
    "44 Track 44": "44 - Merekha tevir, darga tevir",
    "45 Track 45": "45 - Merekha tevir",
    "46 Track 46": "46 - Kadma and tevir variations",
    "47 Track 47": "47 - Munach darga/merekha tevir",
    "48 Track 48": "48 - Verses with tevir",
    "49 Track 49": "49 - Merekha kefulah",
    "50 Track 50": "50 - Revi'i",
    "51 Track 51": "51 - Munach revi'i",
    "52 Track 52": "52 - Legarmeh",
    "53 Track 53": "53 - Legarmeh munach revi'i",
    "54 Track 54": "54 - Darga munach revi'i",
    "55 Track 55": "55 - Verses with tevir variations",
    "56 Track 56": "56 - Verses with tevir variations b",
    "57 Track 57": "57 - Kadma v'azla",
    "58 Track 58": "58 - Geresh",
    "59 Track 59": "59 - Gershayim",
    "60 Track 60": "60 - Munach gershayim",
    "61 Track 61": "61 - Verses with revi'i variations",
    "62 Track 62": "62 - Verses with revi'i variations b",
    "63 Track 63": "63 - ",
    "64 Track 64": "64 - ",
    "65 Track 65": "65 - ",
    "66 Track 66": "66 - Telisha-ketana",
    "67 Track 67": "67 - Munach telisha-ketana",
    "68 Track 68": "68 - Pazer, munach pazer",
    "69 Track 69": "69 - Telisha-gedolah",
    "70 Track 70": "70 - Munach telisha-gedolah",
    "71 Track 71": "71 - ",
    "72 Track 72": "72 - ",
    "73 Track 73": "73 - ",
    "74 Track 74": "74 - Segol",
    "75 Track 75": "75 - Zarka, zarka segol",
    "76 Track 76": "76 - Munach zarka segol",
    "77 Track 77": "77 - Zarka munach segol",
    "78 Track 78": "78 - ",
    "79 Track 79": "79 - ",
    "80 Track 80": "80"
  };

  return (
    <div className="container">
      <h2>Haftarah Trop</h2>
      <div className="container text-center">
        {Object.entries(fileMap).map(([fileName, displayName], index) => (
            <div key={index} className="row">
                <div className="col text-end text-label">
                    <span>{displayName}</span>
                </div>
                <div className="col text-start">
                    <audio controls>
                        <source src={`https://res.dnix.us/recordings/trop/haftarah/${encodeURIComponent(fileName)}.mp3`} type="audio/mp3" />
                    </audio>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Haftarah;