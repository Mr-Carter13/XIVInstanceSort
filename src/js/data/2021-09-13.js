dataSetVersion = "2021-09-13"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Expansion",
    key: "expac",
    tooltip: "Check this to restrict to certain expansions.",
    checked: false,
    sub: [
      { name: "A Realm Reborn", key: "arr" },
      { name: "Heavensward", key: "hw" },
      { name: "Stormblood", key: "StB" },
      { name: "Shadowbringers", key: "ShB" },
      { name: "Endwalker", tooltip: "There's nothing here yet.", key: "ew" },
    ]
  },
  {
    name: "Filter by type of instance",
    key: "instancetype",
    tooltip: "Check this to restrict to instances of a specific type.",
    checked: false,
    sub: [ 
      { name: "Leveling Dungeon", key: "leveling" },
      { name: "Expert Dungeon", tooltip: "Max level dungeons for each expansion", key: "expert" },
      { name: "MSQ Dungeons", tooltip: "Includes MSQ 8 Man Dungeons", key: "msq"},
      { name: "Trials", key: "trials" },
      { name: "Extreme Trials", key: "extreme"},
      { name: "Unreal Trials", key: "unreal"},
      { name: "8 Man Raids", key: "raid" }, 
      { name: "8 Man Savage Raids", key: "savage" }, 
      { name: "24 Man Alliance Raids", key: "araid" }, 
      { name: "Guildhests", key: "hest" },
      { name: "Exploratory Missions", key: "mission"},
      { name: "Deep Dungeons", key: "deep"},
      { name: "PvP Instances", key: "pvp"}
    ]
  },
  {
    name: "Remove Hidlibrand Instances",
    key: "hildibrand",
    tooltip: "Check this to remove instances unlocked by the Hildibrand quest line.",
    checked: false
  },
  {
    name: "Remove Relic Trials",
    key: "relic",
    tooltip: "Check this to remove Trials unlocked by the 'A Relic Reborn' quest line.",
    checked: false
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Sastasha",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "The Tam-Tara Deepcroft",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Copperbell Mines",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Halatali",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "The Thousand Maws of Toto-Rak",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Haukke Manor",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Brayflox's Longstop",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "The Sunken Temple of Qarn",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Cutter's Cry",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "The Stone Vigil",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Dzemael Darkhold",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "The Aurum Vale",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Castrum Meridianum",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["msq"]
    }
  },
  {
    name: "The Praetorium",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["msq"]
    }
  },
  {
    name: "The Wanderer's Palace",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Amdapor Keep",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Pharos Sirius",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Copperbell Mines (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Haukke Manor (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Lost City of Amdapor",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Halatali (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Brayflox's Longstop (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Hullbreaker Isle",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Stone Vigil (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Tam-Tara Deepcroft (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Snowcloak",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Sastasha (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Sunken Temple of Qarn (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Keeper of the Lake",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Wanderer's Palace (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Amdapor Keep (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Dusk Vigil",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Sohm Al",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "The Aery",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "The Vault",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "The Great Gubal Library",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "The Aetherochemical Research Facility",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Neverreap",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Fractal Continuum",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Saint Mocianne's Arboretum",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Pharos Sirius (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Antitower",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Lost City of Amdapor (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Sohr Khai",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Hullbreaker Isle (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Xelphatol",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Great Gubal Library (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Baelsar's Wall",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Sohm Al (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Sirensong Sea",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Shisui of the Violet Tides",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Bardam's Mettle",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Doma Castle",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Castrum Abania",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Ala Mhigo",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Kugane Castle",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Temple of the Fist",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Drowned City of Skalla",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Hells' Lid",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Fractal Continuum (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Swallow's Compass",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Saint Mocianne's Arboretum (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Burn",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Ghimlyt Dark",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Holminster Switch",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Dohn Mheg",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "The Qitana Ravel",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Malikah's Well",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Mt. Gulg",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["leveling"]
    }
  },
  {
    name: "Amaurot",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Twinning",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Akadaemia Anyder",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Grand Cosmos",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Anamnesis Anyder",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Heroe's Gauntlet",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Matoya's Relict",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "Paglth'an",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["expert"]
    }
  },
  {
    name: "The Bowl of Embers",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Navel",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Howling Eye",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Cape Westwind",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Chrysalis",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Steps of Faith",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "A Relic Reborn: The Chimera",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"],
      relic: true
    }
  },
  {
    name: "A Relic Reborn: The Hydra",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"],
      relic: true
    }
  },
  {
    name: "Battle on the Big Bridge",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"],
      hildibrand: true
    }
  },
  {
    name: "The Dragon's Neck",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"],
      hildibrand: true
    }
  },
  {
    name: "Battle in the Big Keep",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"],
      hildibrand: true
    }
  },
  {
    name: "The Bowl of Embers (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Howling Eye (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Navel (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Thornmarch (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Whorleater (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Striking Tree (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Akh Afah Amphitheatre (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Urth's Fount",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Minstrel's Ballad: Ultima's Bane",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Howling Eye (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Navel (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Bowl of Embers (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Thornmarch (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Whroleater (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Striking Tree (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Akh Afah Amphitheatre (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Thok ast Thok (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Limitless Blue (Hard)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Singularity Reactor",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Final Steps of Faith",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Containment Bay S1T7",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Containment Bay P1T6",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Containment Bay Z1T9",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Limitless Blue (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "Thok ast Thok (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Minstrel's Ballad: Thordan's Reign",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Minstrel's Ballad: Nidhogg's Rage",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "Containment Bay S1T7 (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "Containment Bay P1T6 (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "Containment Bay Z1T9 (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Pool of Tribute",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Emanation",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Castrum Fluminis",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Kugane Ohashi",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["trial"],
      hildibrand: true
    }
  },
  {
    name: "The Great Hunt",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Jade Stoa",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Hells' Kier",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Wreath of Snakes",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Emanation (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Pool of Tribute (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Minstrel's Ballad: Shinryu's Domain",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Jade Stoa (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Minstrel's Ballad: Tsukuyomi's Pain",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Great Hunt (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "Hells' Kier (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Wreath of Snakes (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Dancing Plague",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Crown of the Immaculate",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Dying Gasp",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Cinder Drift",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Seat of Sacrifice",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "Castrum Marinum",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Cloud Deck",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["trial"]
    }
  },
  {
    name: "The Dancing Plague (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Crown of the Immaculate (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Minstrel's Ballad: Hades's Elegy",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "Cinder Drift (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "Memoria Misera (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "Memoria Misera (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "Castrum Marinum (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "The Cloud Deck (Extreme)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["extreme"]
    }
  },
  {
    name: "Akh Afah Amphitheatre (Unreal)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["unreal"]
    }
  },
  {
    name: "The Navel (Unreal)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["unreal"]
    }
  },
  {
    name: "The Whorleater (Unreal)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["unreal"]
    }
  },
  {
    name: "The Binding Coil of Bahamut - Turn 1",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Binding Coil of Bahamut - Turn 2",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Binding Coil of Bahamut - Turn 3",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Binding Coil of Bahamut - Turn 4",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Binding Coil of Bahamut - Turn 5",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Second Coil of Bahamut - Turn 1",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Second Coil of Bahamut - Turn 2",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Second Coil of Bahamut - Turn 3",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Second Coil of Bahamut - Turn 4",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Final Coil of Bahamut - Turn 1",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Final Coil of Bahamut - Turn 2",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Final Coil of Bahamut - Turn 3",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Final Coil of Bahamut - Turn 4",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["raid"]
    }
  },
  {
    name: "The Second Coil of Bahamut - Turn 1 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["savage"]
    }
  },
  {
    name: "The Second Coil of Bahamut - Turn 2 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["savage"]
    }
  },
  {
    name: "The Second Coil of Bahamut - Turn 3 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["savage"]
    }
  },
  {
    name: "The Second Coil of Bahamut - Turn 4 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Fist of the Father",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Cuff of the Father",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Arm of the Father",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Burden of the Father",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Fist of the Son",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Cuff of the Son",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Arm of the Son",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Burden of the Son",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Eyes of the Creator",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Breath of the Creator",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Heart of the Creator",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Soul of the Creator",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Alexander - The Fist of the Father (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Cuff of the Father (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Arm of the Father (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Burden of the Father (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Fist of the Son (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Cuff of the Son (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Arm of the Son (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Burden of the Son (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Eyes of the Creator (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Breath of the Creator (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Heart of the Creator (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Alexander - The Soul of the Creator (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Deltascape v1.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Deltascape v2.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Deltascape v3.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Deltascape v4.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Sigmascape v1.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Sigmascape v2.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Sigmascape v3.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Sigmascape v4.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Alphascape v1.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Alphascape v2.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Alphascape v3.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Alphascape v4.0",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Omega: Deltascape v1.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Deltascape v2.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Deltascape v3.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Deltascape v4.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Sigmascape v1.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Sigmascape v2.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Sigmascape v3.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Sigmascape v4.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Alphascape v1.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Alphascape v2.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Alphascape v3.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Omega: Alphascape v4.0 (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Gate: Resurrection",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Gate: Descent",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Gate: Inundation",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Gate: Sepulture",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Verse: Fulmination",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Verse: Furor",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Verse: Iconoclasm",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Verse: Refulgence",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Promise: Umbra",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Promise: Litany",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Promise: Anamorphosis",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Promise: Eternity",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["raid"]
    }
  },
  {
    name: "Eden's Gate: Resurrection (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Gate: Descent (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Gate: Inundation (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Gate: Sepulture (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Verse: Fulmination (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Verse: Furor (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Verse: Iconoclasm (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Verse: Refulgence (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Promise: Umbra (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Promise: Litany (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Promise: Anamorphosis (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "Eden's Promise: Eternity (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["savage"]
    }
  },
  {
    name: "The Unending Coil of Bahamut (Ultimate)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["ultimate"]
    }
  },
  {
    name: "The Weapon's Refrain (Ultimate)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["ultimate"]
    }
  },
  {
    name: "The Epic of Alexander (Ultimate)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["ultimate"]
    }
  },
  {
    name: "Labyrinth of the Ancients",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["araid"]
    }
  },
  {
    name: "Syrcus Tower",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["araid"]
    }
  },
  {
    name: "World of Darkness",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["araid"]
    }
  },
  {
    name: "Void Ark",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["araid"]
    }
  },
  {
    name: "The Weeping City of Mhach",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["araid"]
    }
  },
  {
    name: "Dun Scaith",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["araid"]
    }
  },
  {
    name: "The Royal City of Rabanastre",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["araid"]
    }
  },
  {
    name: "The Ridorana Lighthouse",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["araid"]
    }
  },
  {
    name: "The Orbonne Monastery",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["araid"]
    }
  },
  {
    name: "The Copied Factory",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["araid"]
    }
  },
  {
    name: "The Puppet's Bunker",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["araid"]
    }
  },
  {
    name: "The Tower at Paradigm's Breach",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["araid"]
    }
  },
  {
    name: "Basic Training: Enemy Parties",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Under the Armor",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Basic Training: Enemy Strongholds",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Hero on the Halfshell",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Pulling Poison Posies",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Stinging Back",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "All's Well that Ends in the Well",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Flicking Sticks and Taking Names",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "More than a Feeler",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Annoy the Void",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Shadow and Claw",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Long Live the Queen",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Ward Up",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Solemn Trinity",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["hest"]
    }
  },
  {
    name: "Field of Glory (Shatter)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["pvp"]
    }
  },
  {
    name: "Borderland Ruins (Secure)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["pvp"]
    }
  },
  {
    name: "Seal Rock (Sieze)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["pvp"]
    }
  },
  {
    name: "Onsal Hakair (Danshig Naadam)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["pvp"]
    }
  },
  {
    name: "Rival Wings (Astragalos)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["pvp"]
    }
  },
  {
    name: "Rival Wings (Hidden Gorge)",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["pvp"]
    }
  },
  {
    name: "The Feast (Crystal Tower Training Grounds)",
    img: "eJqzxly.png",
    opts: {
      expac: ["arr"],
      instancetype: ["pvp"]
    }
  },
  {
    name: "The Diadem",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["mission"]
    }
  },
  {
    name: "The Forbidden Land, Eureka Anemos",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["mission"]
    }
  },
  {
    name: "The Forbidden Land, Eureka Pagos",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["mission"]
    }
  },
  {
    name: "The Forbidden Land, Eureka Pyros",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["mission"]
    }
  },
  {
    name: "The Forbidden Land, Eureka Hydatos",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["mission"]
    }
  },
  {
    name: "The Bozjan Southern Front",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["mission"]
    }
  },
  {
    name: "Delubrum Reginae",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["mission"]
    }
  },
  {
    name: "Delubrum Reginae (Savage)",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["mission"]
    }
  },
  {
    name: "Zadnor",
    img: "eJqzxly.png",
    opts: {
      expac: ["ShB"],
      instancetype: ["mission"]
    }
  },
  {
    name: "Palace of the Dead",
    img: "eJqzxly.png",
    opts: {
      expac: ["hw"],
      instancetype: ["deep"]
    }
  },
  {
    name: "Heaven-on-High",
    img: "eJqzxly.png",
    opts: {
      expac: ["StB"],
      instancetype: ["deep"]
    }
  },
];
