import React from 'react';

const Haftarah = () => {
  const fileMap = {
    "01 Track 1": "01 - Merekha",
    "02 Track 2": "02 - Tipeha",
    "03 Track 3": "03 - Munah",
    "04 Track 4": "04 - Etnahta",
    "05 Track 5": "05 - Sof-Pasuk",
    "06 Track 6": "06 - Kadma",
    "07 Track 7": "07 - Mapach",
    "08 Track 8": "08 - Pashta",
    "09 Track 9": "09 - Zakef Katon",
    "10 Track 10": "10 - Revi'i",
    "11 Track 11": "11 - Yetiv",
    "12 Track 12": "12 - Merekha tipeha munah etnahta",
    "13 Track 13": "13 - Tevir",
    "14 Track 14": "14 - Gershayim",
    "15 Track 15": "15 - Zakef Gadol",
    "16 Track 16": "16 - Telisha Ketanah",
    "17 Track 17": "17 - Telisha Gedolah",
    "18 Track 18": "18 - Zarka",
    "19 Track 19": "19 - Segol",
    "20 Track 20": "20 - Pazer",
    "21 Track 21": "21 - Munah-Legarmeh",
    "22 Track 22": "22 - Azla",
    "23 Track 23": "23 - Geresh",
    "24 Track 24": "24",
    "25 Track 25": "25",
    "26 Track 26": "26",
    "27 Track 27": "27",
    "28 Track 28": "28",
    "29 Track 29": "29",
    "30 Track 30": "30",
    "31 Track 31": "31",
    "32 Track 32": "32",
    "33 Track 33": "33",
    "34 Track 34": "34",
    "35 Track 35": "35",
    "36 Track 36": "36",
    "37 Track 37": "37",
    "38 Track 38": "38",
    "39 Track 39": "39",
    "40 Track 40": "40",
    "41 Track 41": "41",
    "42 Track 42": "42",
    "43 Track 43": "43",
    "44 Track 44": "44",
    "45 Track 45": "45",
    "46 Track 46": "46",
    "47 Track 47": "47",
    "48 Track 48": "48",
    "49 Track 49": "49",
    "50 Track 50": "50",
    "51 Track 51": "51",
    "52 Track 52": "52",
    "53 Track 53": "53",
    "54 Track 54": "54",
    "55 Track 55": "55",
    "56 Track 56": "56",
    "57 Track 57": "57",
    "58 Track 58": "58",
    "59 Track 59": "59",
    "60 Track 60": "60",
    "61 Track 61": "61",
    "62 Track 62": "62",
    "63 Track 63": "63",
    "64 Track 64": "64",
    "65 Track 65": "65",
    "66 Track 66": "66",
    "67 Track 67": "67",
    "68 Track 68": "68",
    "69 Track 69": "69",
    "70 Track 70": "70",
    "71 Track 71": "71",
    "72 Track 72": "72",
    "73 Track 73": "73",
    "74 Track 74": "74",
    "75 Track 75": "75",
    "76 Track 76": "76",
    "77 Track 77": "77",
    "78 Track 78": "78",
    "79 Track 79": "79",
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