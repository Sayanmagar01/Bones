// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Bones",
  version: "idk",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 6400,
  bpm: 75,
  totalframe: 306,
  nbpolo: 7,
  bonusloopA: true, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: false,
  colBck: "#161018",
  col0: "#CCCCCC",
  col1: "#999999",
  col2: "#666666",
  col3: "#333333",
  col4: "#000000",
  animearray: [
    {
      name: "01_durag",
      color: "8E3455",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "02_gentleman",
      color: "8E3455",
      uniqsnd: !1,
    },
    {
      name: "03_cap",
      color: "8E3455",
      uniqsnd: !0,
    },
    {
      name: "04_bandit",
      color: "8E3455",
      uniqsnd: !0,
    },
    {
      name: "05_farmer",
      color: "8E3455",
      uniqsnd: !1,
    },
    {
      name: "06_butcher",
      color: "2B6172",
      uniqsnd: !1,
    },
    {
      name: "07_climber",
      color: "2B6172",
      uniqsnd: !0,
    },
    {
      name: "08_performer",
      color: "2B6172",
      uniqsnd: !1,
    },
    {
      name: "09_hooded",
      color: "2B6172",
      uniqsnd: !1,
    },
    {
      name: "10_sailor",
      color: "2B6172",
      uniqsnd: !0,
    },
    {
      name: "11_indian",
      color: "38A952",
      uniqsnd: !0,
    },
    {
      name: "12_sombrero",
      color: "38A952",
      uniqsnd: !1,
    },
    {
      name: "13_rapper",
      color: "38A952",
      uniqsnd: !1,
    },
    {
      name: "14_target",
      color: "38A952",
      uniqsnd: !0,
    },
    {
      name: "15_teller",
      color: "38A952",
      uniqsnd: !1,
    },
    {
      name: "16_punk",
      color: "9B58B8",
      uniqsnd: !1,
    },
    {
      name: "17_idol",
      color: "9B58B8",
      uniqsnd: !1,
    },
    {
      name: "18_actor",
      color: "9B58B8",
      uniqsnd: !1,
    },
    {
      name: "19_butterfly",
      color: "9B58B8",
      uniqsnd: !1,
    },
    {
      name: "20_mayor",
      color: "9B58B8",
      uniqsnd: !1,
    },
  ],
  bonusarray: [
    {
      name: "Underground",
      src: "b1-v1-underground-hb",
      code: "1,3,7,15,17",
      sound: "bonus-underground",
      aspire: "aspire-underground",
      loop: 2, // ← Every bonus have its own loops in this version
    },
  ],
};

// versions.v2 = {
//  name: "New Version",
// version: "2",
// date: "2025",
// ...