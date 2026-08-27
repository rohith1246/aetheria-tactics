/**
 * MonstersDatabase.js - Master Catalog of 250+ Tactical Adversaries
 */
module.exports = [
  {
    "id": "monster_0001",
    "name": "Tier 1 Plasma Sentinel Mark-1",
    "level": 1,
    "tier": 1,
    "baseElement": "plasma",
    "stats": {
      "hp": 145,
      "maxHp": 145,
      "ap": 4,
      "attack": 23,
      "tech": 19,
      "armor": 8,
      "speed": 11,
      "critChance": 0.06,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 11,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0004",
        "chance": 0.45
      },
      {
        "itemId": "item_0008",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_002",
      "skill_007"
    ]
  },
  {
    "id": "monster_0002",
    "name": "Tier 1 Void Stalker Mark-2",
    "level": 2,
    "tier": 1,
    "baseElement": "cryo",
    "stats": {
      "hp": 190,
      "maxHp": 190,
      "ap": 4,
      "attack": 31,
      "tech": 26,
      "armor": 11,
      "speed": 12,
      "critChance": 0.07,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 12,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0007",
        "chance": 0.45
      },
      {
        "itemId": "item_0015",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_003",
      "skill_008"
    ]
  },
  {
    "id": "monster_0003",
    "name": "Tier 1 Glitch Fiend Mark-3",
    "level": 3,
    "tier": 1,
    "baseElement": "shock",
    "stats": {
      "hp": 235,
      "maxHp": 235,
      "ap": 4,
      "attack": 39,
      "tech": 33,
      "armor": 14,
      "speed": 13,
      "critChance": 0.08,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 13,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0010",
        "chance": 0.45
      },
      {
        "itemId": "item_0022",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_004",
      "skill_009"
    ]
  },
  {
    "id": "monster_0004",
    "name": "Tier 1 Nanite Swarm Mark-4",
    "level": 4,
    "tier": 1,
    "baseElement": "void",
    "stats": {
      "hp": 280,
      "maxHp": 280,
      "ap": 4,
      "attack": 47,
      "tech": 40,
      "armor": 17,
      "speed": 14,
      "critChance": 0.09,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 14,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0013",
        "chance": 0.45
      },
      {
        "itemId": "item_0029",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_005",
      "skill_010"
    ]
  },
  {
    "id": "monster_0005",
    "name": "Tier 1 Chrono Titan Mark-5",
    "level": 5,
    "tier": 1,
    "baseElement": "physical",
    "stats": {
      "hp": 325,
      "maxHp": 325,
      "ap": 4,
      "attack": 55,
      "tech": 47,
      "armor": 20,
      "speed": 15,
      "critChance": 0.1,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 15,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0016",
        "chance": 0.45
      },
      {
        "itemId": "item_0036",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_006",
      "skill_011"
    ]
  },
  {
    "id": "monster_0006",
    "name": "Tier 1 Bionic Berserker Mark-6",
    "level": 6,
    "tier": 1,
    "baseElement": "plasma",
    "stats": {
      "hp": 370,
      "maxHp": 370,
      "ap": 4,
      "attack": 63,
      "tech": 54,
      "armor": 23,
      "speed": 16,
      "critChance": 0.11,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 16,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0019",
        "chance": 0.45
      },
      {
        "itemId": "item_0043",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_007",
      "skill_012"
    ]
  },
  {
    "id": "monster_0007",
    "name": "Tier 1 Neon Wraith Mark-7",
    "level": 7,
    "tier": 1,
    "baseElement": "cryo",
    "stats": {
      "hp": 415,
      "maxHp": 415,
      "ap": 4,
      "attack": 71,
      "tech": 61,
      "armor": 26,
      "speed": 17,
      "critChance": 0.12,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 17,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0022",
        "chance": 0.45
      },
      {
        "itemId": "item_0050",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_008",
      "skill_013"
    ]
  },
  {
    "id": "monster_0008",
    "name": "Tier 1 Quantum Golem Mark-8",
    "level": 8,
    "tier": 1,
    "baseElement": "shock",
    "stats": {
      "hp": 460,
      "maxHp": 460,
      "ap": 4,
      "attack": 79,
      "tech": 68,
      "armor": 29,
      "speed": 18,
      "critChance": 0.13,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 18,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0025",
        "chance": 0.45
      },
      {
        "itemId": "item_0057",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_009",
      "skill_014"
    ]
  },
  {
    "id": "monster_0009",
    "name": "Tier 1 Vortex Drake Mark-9",
    "level": 9,
    "tier": 1,
    "baseElement": "void",
    "stats": {
      "hp": 505,
      "maxHp": 505,
      "ap": 4,
      "attack": 87,
      "tech": 75,
      "armor": 32,
      "speed": 19,
      "critChance": 0.14,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 19,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0028",
        "chance": 0.45
      },
      {
        "itemId": "item_0064",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_010",
      "skill_015"
    ]
  },
  {
    "id": "monster_0010",
    "name": "Tier 1 Cyber-Revenant Mark-10",
    "level": 10,
    "tier": 1,
    "baseElement": "physical",
    "stats": {
      "hp": 550,
      "maxHp": 550,
      "ap": 4,
      "attack": 95,
      "tech": 82,
      "armor": 35,
      "speed": 20,
      "critChance": 0.15,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 20,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0031",
        "chance": 0.45
      },
      {
        "itemId": "item_0071",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_011",
      "skill_016"
    ]
  },
  {
    "id": "monster_0011",
    "name": "Tier 1 Plasma Sentinel Mark-11",
    "level": 11,
    "tier": 1,
    "baseElement": "plasma",
    "stats": {
      "hp": 595,
      "maxHp": 595,
      "ap": 4,
      "attack": 103,
      "tech": 89,
      "armor": 38,
      "speed": 21,
      "critChance": 0.16,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 21,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0034",
        "chance": 0.45
      },
      {
        "itemId": "item_0078",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_012",
      "skill_017"
    ]
  },
  {
    "id": "monster_0012",
    "name": "Tier 1 Void Stalker Mark-12",
    "level": 12,
    "tier": 1,
    "baseElement": "cryo",
    "stats": {
      "hp": 640,
      "maxHp": 640,
      "ap": 4,
      "attack": 111,
      "tech": 96,
      "armor": 41,
      "speed": 22,
      "critChance": 0.17,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 22,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0037",
        "chance": 0.45
      },
      {
        "itemId": "item_0085",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_013",
      "skill_018"
    ]
  },
  {
    "id": "monster_0013",
    "name": "Tier 1 Glitch Fiend Mark-13",
    "level": 13,
    "tier": 1,
    "baseElement": "shock",
    "stats": {
      "hp": 685,
      "maxHp": 685,
      "ap": 4,
      "attack": 119,
      "tech": 103,
      "armor": 44,
      "speed": 23,
      "critChance": 0.18,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 23,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0040",
        "chance": 0.45
      },
      {
        "itemId": "item_0092",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_014",
      "skill_019"
    ]
  },
  {
    "id": "monster_0014",
    "name": "Tier 1 Nanite Swarm Mark-14",
    "level": 14,
    "tier": 1,
    "baseElement": "void",
    "stats": {
      "hp": 730,
      "maxHp": 730,
      "ap": 4,
      "attack": 127,
      "tech": 110,
      "armor": 47,
      "speed": 24,
      "critChance": 0.19,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 24,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0043",
        "chance": 0.45
      },
      {
        "itemId": "item_0099",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_015",
      "skill_020"
    ]
  },
  {
    "id": "monster_0015",
    "name": "Tier 1 Chrono Titan Mark-15",
    "level": 15,
    "tier": 1,
    "baseElement": "physical",
    "stats": {
      "hp": 775,
      "maxHp": 775,
      "ap": 4,
      "attack": 135,
      "tech": 117,
      "armor": 50,
      "speed": 25,
      "critChance": 0.05,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 25,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0046",
        "chance": 0.45
      },
      {
        "itemId": "item_0106",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_016",
      "skill_021"
    ]
  },
  {
    "id": "monster_0016",
    "name": "Tier 1 Bionic Berserker Mark-16",
    "level": 16,
    "tier": 1,
    "baseElement": "plasma",
    "stats": {
      "hp": 820,
      "maxHp": 820,
      "ap": 4,
      "attack": 143,
      "tech": 124,
      "armor": 53,
      "speed": 26,
      "critChance": 0.06,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 26,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0049",
        "chance": 0.45
      },
      {
        "itemId": "item_0113",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_017",
      "skill_022"
    ]
  },
  {
    "id": "monster_0017",
    "name": "Tier 1 Neon Wraith Mark-17",
    "level": 17,
    "tier": 1,
    "baseElement": "cryo",
    "stats": {
      "hp": 865,
      "maxHp": 865,
      "ap": 4,
      "attack": 151,
      "tech": 131,
      "armor": 56,
      "speed": 27,
      "critChance": 0.07,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 27,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0052",
        "chance": 0.45
      },
      {
        "itemId": "item_0120",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_018",
      "skill_023"
    ]
  },
  {
    "id": "monster_0018",
    "name": "Tier 1 Quantum Golem Mark-18",
    "level": 18,
    "tier": 1,
    "baseElement": "shock",
    "stats": {
      "hp": 910,
      "maxHp": 910,
      "ap": 4,
      "attack": 159,
      "tech": 138,
      "armor": 59,
      "speed": 28,
      "critChance": 0.08,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 28,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0055",
        "chance": 0.45
      },
      {
        "itemId": "item_0127",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_019",
      "skill_024"
    ]
  },
  {
    "id": "monster_0019",
    "name": "Tier 1 Vortex Drake Mark-19",
    "level": 19,
    "tier": 1,
    "baseElement": "void",
    "stats": {
      "hp": 955,
      "maxHp": 955,
      "ap": 4,
      "attack": 167,
      "tech": 145,
      "armor": 62,
      "speed": 29,
      "critChance": 0.09,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 29,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0058",
        "chance": 0.45
      },
      {
        "itemId": "item_0134",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_020",
      "skill_025"
    ]
  },
  {
    "id": "monster_0020",
    "name": "Tier 1 Cyber-Revenant Mark-20",
    "level": 20,
    "tier": 1,
    "baseElement": "physical",
    "stats": {
      "hp": 1000,
      "maxHp": 1000,
      "ap": 4,
      "attack": 175,
      "tech": 152,
      "armor": 65,
      "speed": 10,
      "critChance": 0.1,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 30,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0061",
        "chance": 0.45
      },
      {
        "itemId": "item_0141",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_021",
      "skill_026"
    ]
  },
  {
    "id": "monster_0021",
    "name": "Tier 1 Plasma Sentinel Mark-21",
    "level": 21,
    "tier": 1,
    "baseElement": "plasma",
    "stats": {
      "hp": 1045,
      "maxHp": 1045,
      "ap": 4,
      "attack": 183,
      "tech": 159,
      "armor": 68,
      "speed": 11,
      "critChance": 0.11,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 31,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0064",
        "chance": 0.45
      },
      {
        "itemId": "item_0148",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_022",
      "skill_027"
    ]
  },
  {
    "id": "monster_0022",
    "name": "Tier 1 Void Stalker Mark-22",
    "level": 22,
    "tier": 1,
    "baseElement": "cryo",
    "stats": {
      "hp": 1090,
      "maxHp": 1090,
      "ap": 4,
      "attack": 191,
      "tech": 166,
      "armor": 71,
      "speed": 12,
      "critChance": 0.12,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 32,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0067",
        "chance": 0.45
      },
      {
        "itemId": "item_0155",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_023",
      "skill_028"
    ]
  },
  {
    "id": "monster_0023",
    "name": "Tier 1 Glitch Fiend Mark-23",
    "level": 23,
    "tier": 1,
    "baseElement": "shock",
    "stats": {
      "hp": 1135,
      "maxHp": 1135,
      "ap": 4,
      "attack": 199,
      "tech": 173,
      "armor": 74,
      "speed": 13,
      "critChance": 0.13,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 33,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0070",
        "chance": 0.45
      },
      {
        "itemId": "item_0162",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_024",
      "skill_029"
    ]
  },
  {
    "id": "monster_0024",
    "name": "Tier 1 Nanite Swarm Mark-24",
    "level": 24,
    "tier": 1,
    "baseElement": "void",
    "stats": {
      "hp": 1180,
      "maxHp": 1180,
      "ap": 4,
      "attack": 207,
      "tech": 180,
      "armor": 77,
      "speed": 14,
      "critChance": 0.14,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 34,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0073",
        "chance": 0.45
      },
      {
        "itemId": "item_0169",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_025",
      "skill_030"
    ]
  },
  {
    "id": "monster_0025",
    "name": "Tier 1 Chrono Titan Mark-25",
    "level": 25,
    "tier": 1,
    "baseElement": "physical",
    "stats": {
      "hp": 1225,
      "maxHp": 1225,
      "ap": 4,
      "attack": 215,
      "tech": 187,
      "armor": 80,
      "speed": 15,
      "critChance": 0.15,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 35,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0076",
        "chance": 0.45
      },
      {
        "itemId": "item_0176",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_026",
      "skill_031"
    ]
  },
  {
    "id": "monster_0026",
    "name": "Tier 1 Bionic Berserker Mark-26",
    "level": 26,
    "tier": 1,
    "baseElement": "plasma",
    "stats": {
      "hp": 1270,
      "maxHp": 1270,
      "ap": 4,
      "attack": 223,
      "tech": 194,
      "armor": 83,
      "speed": 16,
      "critChance": 0.16,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 36,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0079",
        "chance": 0.45
      },
      {
        "itemId": "item_0183",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_027",
      "skill_032"
    ]
  },
  {
    "id": "monster_0027",
    "name": "Tier 1 Neon Wraith Mark-27",
    "level": 27,
    "tier": 1,
    "baseElement": "cryo",
    "stats": {
      "hp": 1315,
      "maxHp": 1315,
      "ap": 4,
      "attack": 231,
      "tech": 201,
      "armor": 86,
      "speed": 17,
      "critChance": 0.17,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 37,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0082",
        "chance": 0.45
      },
      {
        "itemId": "item_0190",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_028",
      "skill_033"
    ]
  },
  {
    "id": "monster_0028",
    "name": "Tier 1 Quantum Golem Mark-28",
    "level": 28,
    "tier": 1,
    "baseElement": "shock",
    "stats": {
      "hp": 1360,
      "maxHp": 1360,
      "ap": 4,
      "attack": 239,
      "tech": 208,
      "armor": 89,
      "speed": 18,
      "critChance": 0.18,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 38,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0085",
        "chance": 0.45
      },
      {
        "itemId": "item_0197",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_029",
      "skill_034"
    ]
  },
  {
    "id": "monster_0029",
    "name": "Tier 1 Vortex Drake Mark-29",
    "level": 29,
    "tier": 1,
    "baseElement": "void",
    "stats": {
      "hp": 1405,
      "maxHp": 1405,
      "ap": 4,
      "attack": 247,
      "tech": 215,
      "armor": 92,
      "speed": 19,
      "critChance": 0.19,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 39,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0088",
        "chance": 0.45
      },
      {
        "itemId": "item_0204",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_030",
      "skill_035"
    ]
  },
  {
    "id": "monster_0030",
    "name": "Tier 1 Cyber-Revenant Mark-30",
    "level": 30,
    "tier": 1,
    "baseElement": "physical",
    "stats": {
      "hp": 1450,
      "maxHp": 1450,
      "ap": 4,
      "attack": 255,
      "tech": 222,
      "armor": 95,
      "speed": 20,
      "critChance": 0.05,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 10,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0091",
        "chance": 0.45
      },
      {
        "itemId": "item_0211",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_031",
      "skill_036"
    ]
  },
  {
    "id": "monster_0031",
    "name": "Tier 1 Plasma Sentinel Mark-31",
    "level": 31,
    "tier": 1,
    "baseElement": "plasma",
    "stats": {
      "hp": 1495,
      "maxHp": 1495,
      "ap": 4,
      "attack": 263,
      "tech": 229,
      "armor": 98,
      "speed": 21,
      "critChance": 0.06,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 11,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0094",
        "chance": 0.45
      },
      {
        "itemId": "item_0218",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_032",
      "skill_037"
    ]
  },
  {
    "id": "monster_0032",
    "name": "Tier 1 Void Stalker Mark-32",
    "level": 32,
    "tier": 1,
    "baseElement": "cryo",
    "stats": {
      "hp": 1540,
      "maxHp": 1540,
      "ap": 4,
      "attack": 271,
      "tech": 236,
      "armor": 101,
      "speed": 22,
      "critChance": 0.07,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 12,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0097",
        "chance": 0.45
      },
      {
        "itemId": "item_0225",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_033",
      "skill_038"
    ]
  },
  {
    "id": "monster_0033",
    "name": "Tier 1 Glitch Fiend Mark-33",
    "level": 33,
    "tier": 1,
    "baseElement": "shock",
    "stats": {
      "hp": 1585,
      "maxHp": 1585,
      "ap": 4,
      "attack": 279,
      "tech": 243,
      "armor": 104,
      "speed": 23,
      "critChance": 0.08,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 13,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0100",
        "chance": 0.45
      },
      {
        "itemId": "item_0232",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_034",
      "skill_039"
    ]
  },
  {
    "id": "monster_0034",
    "name": "Tier 1 Nanite Swarm Mark-34",
    "level": 34,
    "tier": 1,
    "baseElement": "void",
    "stats": {
      "hp": 1630,
      "maxHp": 1630,
      "ap": 4,
      "attack": 287,
      "tech": 250,
      "armor": 107,
      "speed": 24,
      "critChance": 0.09,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 14,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0103",
        "chance": 0.45
      },
      {
        "itemId": "item_0239",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_035",
      "skill_040"
    ]
  },
  {
    "id": "monster_0035",
    "name": "Tier 1 Chrono Titan Mark-35",
    "level": 35,
    "tier": 1,
    "baseElement": "physical",
    "stats": {
      "hp": 1675,
      "maxHp": 1675,
      "ap": 4,
      "attack": 295,
      "tech": 257,
      "armor": 110,
      "speed": 25,
      "critChance": 0.1,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 15,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0106",
        "chance": 0.45
      },
      {
        "itemId": "item_0246",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_036",
      "skill_041"
    ]
  },
  {
    "id": "monster_0036",
    "name": "Tier 1 Bionic Berserker Mark-36",
    "level": 36,
    "tier": 1,
    "baseElement": "plasma",
    "stats": {
      "hp": 1720,
      "maxHp": 1720,
      "ap": 4,
      "attack": 303,
      "tech": 264,
      "armor": 113,
      "speed": 26,
      "critChance": 0.11,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 16,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0109",
        "chance": 0.45
      },
      {
        "itemId": "item_0253",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_037",
      "skill_042"
    ]
  },
  {
    "id": "monster_0037",
    "name": "Tier 1 Neon Wraith Mark-37",
    "level": 37,
    "tier": 1,
    "baseElement": "cryo",
    "stats": {
      "hp": 1765,
      "maxHp": 1765,
      "ap": 4,
      "attack": 311,
      "tech": 271,
      "armor": 116,
      "speed": 27,
      "critChance": 0.12,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 17,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0112",
        "chance": 0.45
      },
      {
        "itemId": "item_0260",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_038",
      "skill_043"
    ]
  },
  {
    "id": "monster_0038",
    "name": "Tier 1 Quantum Golem Mark-38",
    "level": 38,
    "tier": 1,
    "baseElement": "shock",
    "stats": {
      "hp": 1810,
      "maxHp": 1810,
      "ap": 4,
      "attack": 319,
      "tech": 278,
      "armor": 119,
      "speed": 28,
      "critChance": 0.13,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 18,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0115",
        "chance": 0.45
      },
      {
        "itemId": "item_0267",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_039",
      "skill_044"
    ]
  },
  {
    "id": "monster_0039",
    "name": "Tier 1 Vortex Drake Mark-39",
    "level": 39,
    "tier": 1,
    "baseElement": "void",
    "stats": {
      "hp": 1855,
      "maxHp": 1855,
      "ap": 4,
      "attack": 327,
      "tech": 285,
      "armor": 122,
      "speed": 29,
      "critChance": 0.14,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 19,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0118",
        "chance": 0.45
      },
      {
        "itemId": "item_0274",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_040",
      "skill_045"
    ]
  },
  {
    "id": "monster_0040",
    "name": "Tier 1 Cyber-Revenant Mark-40",
    "level": 40,
    "tier": 1,
    "baseElement": "physical",
    "stats": {
      "hp": 1900,
      "maxHp": 1900,
      "ap": 4,
      "attack": 335,
      "tech": 292,
      "armor": 125,
      "speed": 10,
      "critChance": 0.15,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 20,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0121",
        "chance": 0.45
      },
      {
        "itemId": "item_0281",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_041",
      "skill_046"
    ]
  },
  {
    "id": "monster_0041",
    "name": "Tier 1 Plasma Sentinel Mark-41",
    "level": 41,
    "tier": 1,
    "baseElement": "plasma",
    "stats": {
      "hp": 1945,
      "maxHp": 1945,
      "ap": 4,
      "attack": 343,
      "tech": 299,
      "armor": 128,
      "speed": 11,
      "critChance": 0.16,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 21,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0124",
        "chance": 0.45
      },
      {
        "itemId": "item_0288",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_042",
      "skill_047"
    ]
  },
  {
    "id": "monster_0042",
    "name": "Tier 1 Void Stalker Mark-42",
    "level": 42,
    "tier": 1,
    "baseElement": "cryo",
    "stats": {
      "hp": 1990,
      "maxHp": 1990,
      "ap": 4,
      "attack": 351,
      "tech": 306,
      "armor": 131,
      "speed": 12,
      "critChance": 0.17,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 22,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0127",
        "chance": 0.45
      },
      {
        "itemId": "item_0295",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_043",
      "skill_048"
    ]
  },
  {
    "id": "monster_0043",
    "name": "Tier 1 Glitch Fiend Mark-43",
    "level": 43,
    "tier": 1,
    "baseElement": "shock",
    "stats": {
      "hp": 2035,
      "maxHp": 2035,
      "ap": 4,
      "attack": 359,
      "tech": 313,
      "armor": 134,
      "speed": 13,
      "critChance": 0.18,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 23,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0130",
        "chance": 0.45
      },
      {
        "itemId": "item_0302",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_044",
      "skill_049"
    ]
  },
  {
    "id": "monster_0044",
    "name": "Tier 1 Nanite Swarm Mark-44",
    "level": 44,
    "tier": 1,
    "baseElement": "void",
    "stats": {
      "hp": 2080,
      "maxHp": 2080,
      "ap": 4,
      "attack": 367,
      "tech": 320,
      "armor": 137,
      "speed": 14,
      "critChance": 0.19,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 24,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0133",
        "chance": 0.45
      },
      {
        "itemId": "item_0309",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_045",
      "skill_050"
    ]
  },
  {
    "id": "monster_0045",
    "name": "Tier 1 Chrono Titan Mark-45",
    "level": 45,
    "tier": 1,
    "baseElement": "physical",
    "stats": {
      "hp": 2125,
      "maxHp": 2125,
      "ap": 4,
      "attack": 375,
      "tech": 327,
      "armor": 140,
      "speed": 15,
      "critChance": 0.05,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 25,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0136",
        "chance": 0.45
      },
      {
        "itemId": "item_0316",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_046",
      "skill_051"
    ]
  },
  {
    "id": "monster_0046",
    "name": "Tier 1 Bionic Berserker Mark-46",
    "level": 46,
    "tier": 1,
    "baseElement": "plasma",
    "stats": {
      "hp": 2170,
      "maxHp": 2170,
      "ap": 4,
      "attack": 383,
      "tech": 334,
      "armor": 143,
      "speed": 16,
      "critChance": 0.06,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 26,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0139",
        "chance": 0.45
      },
      {
        "itemId": "item_0323",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_047",
      "skill_052"
    ]
  },
  {
    "id": "monster_0047",
    "name": "Tier 1 Neon Wraith Mark-47",
    "level": 47,
    "tier": 1,
    "baseElement": "cryo",
    "stats": {
      "hp": 2215,
      "maxHp": 2215,
      "ap": 4,
      "attack": 391,
      "tech": 341,
      "armor": 146,
      "speed": 17,
      "critChance": 0.07,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 27,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0142",
        "chance": 0.45
      },
      {
        "itemId": "item_0330",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_048",
      "skill_053"
    ]
  },
  {
    "id": "monster_0048",
    "name": "Tier 1 Quantum Golem Mark-48",
    "level": 48,
    "tier": 1,
    "baseElement": "shock",
    "stats": {
      "hp": 2260,
      "maxHp": 2260,
      "ap": 4,
      "attack": 399,
      "tech": 348,
      "armor": 149,
      "speed": 18,
      "critChance": 0.08,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 28,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0145",
        "chance": 0.45
      },
      {
        "itemId": "item_0337",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_049",
      "skill_054"
    ]
  },
  {
    "id": "monster_0049",
    "name": "Tier 1 Vortex Drake Mark-49",
    "level": 49,
    "tier": 1,
    "baseElement": "void",
    "stats": {
      "hp": 2305,
      "maxHp": 2305,
      "ap": 4,
      "attack": 407,
      "tech": 355,
      "armor": 152,
      "speed": 19,
      "critChance": 0.09,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 29,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0148",
        "chance": 0.45
      },
      {
        "itemId": "item_0344",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_050",
      "skill_055"
    ]
  },
  {
    "id": "monster_0050",
    "name": "Tier 2 Cyber-Revenant Mark-50",
    "level": 50,
    "tier": 2,
    "baseElement": "physical",
    "stats": {
      "hp": 2350,
      "maxHp": 2350,
      "ap": 5,
      "attack": 415,
      "tech": 362,
      "armor": 155,
      "speed": 20,
      "critChance": 0.1,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 30,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0151",
        "chance": 0.45
      },
      {
        "itemId": "item_0351",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_051",
      "skill_056"
    ]
  },
  {
    "id": "monster_0051",
    "name": "Tier 2 Plasma Sentinel Mark-51",
    "level": 51,
    "tier": 2,
    "baseElement": "plasma",
    "stats": {
      "hp": 2395,
      "maxHp": 2395,
      "ap": 5,
      "attack": 423,
      "tech": 369,
      "armor": 158,
      "speed": 21,
      "critChance": 0.11,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 31,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0154",
        "chance": 0.45
      },
      {
        "itemId": "item_0358",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_052",
      "skill_057"
    ]
  },
  {
    "id": "monster_0052",
    "name": "Tier 2 Void Stalker Mark-52",
    "level": 52,
    "tier": 2,
    "baseElement": "cryo",
    "stats": {
      "hp": 2440,
      "maxHp": 2440,
      "ap": 5,
      "attack": 431,
      "tech": 376,
      "armor": 161,
      "speed": 22,
      "critChance": 0.12,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 32,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0157",
        "chance": 0.45
      },
      {
        "itemId": "item_0365",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_053",
      "skill_058"
    ]
  },
  {
    "id": "monster_0053",
    "name": "Tier 2 Glitch Fiend Mark-53",
    "level": 53,
    "tier": 2,
    "baseElement": "shock",
    "stats": {
      "hp": 2485,
      "maxHp": 2485,
      "ap": 5,
      "attack": 439,
      "tech": 383,
      "armor": 164,
      "speed": 23,
      "critChance": 0.13,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 33,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0160",
        "chance": 0.45
      },
      {
        "itemId": "item_0372",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_054",
      "skill_059"
    ]
  },
  {
    "id": "monster_0054",
    "name": "Tier 2 Nanite Swarm Mark-54",
    "level": 54,
    "tier": 2,
    "baseElement": "void",
    "stats": {
      "hp": 2530,
      "maxHp": 2530,
      "ap": 5,
      "attack": 447,
      "tech": 390,
      "armor": 167,
      "speed": 24,
      "critChance": 0.14,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 34,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0163",
        "chance": 0.45
      },
      {
        "itemId": "item_0379",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_055",
      "skill_060"
    ]
  },
  {
    "id": "monster_0055",
    "name": "Tier 2 Chrono Titan Mark-55",
    "level": 55,
    "tier": 2,
    "baseElement": "physical",
    "stats": {
      "hp": 2575,
      "maxHp": 2575,
      "ap": 5,
      "attack": 455,
      "tech": 397,
      "armor": 170,
      "speed": 25,
      "critChance": 0.15,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 35,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0166",
        "chance": 0.45
      },
      {
        "itemId": "item_0386",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_056",
      "skill_061"
    ]
  },
  {
    "id": "monster_0056",
    "name": "Tier 2 Bionic Berserker Mark-56",
    "level": 56,
    "tier": 2,
    "baseElement": "plasma",
    "stats": {
      "hp": 2620,
      "maxHp": 2620,
      "ap": 5,
      "attack": 463,
      "tech": 404,
      "armor": 173,
      "speed": 26,
      "critChance": 0.16,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 36,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0169",
        "chance": 0.45
      },
      {
        "itemId": "item_0393",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_057",
      "skill_062"
    ]
  },
  {
    "id": "monster_0057",
    "name": "Tier 2 Neon Wraith Mark-57",
    "level": 57,
    "tier": 2,
    "baseElement": "cryo",
    "stats": {
      "hp": 2665,
      "maxHp": 2665,
      "ap": 5,
      "attack": 471,
      "tech": 411,
      "armor": 176,
      "speed": 27,
      "critChance": 0.17,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 37,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0172",
        "chance": 0.45
      },
      {
        "itemId": "item_0400",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_058",
      "skill_063"
    ]
  },
  {
    "id": "monster_0058",
    "name": "Tier 2 Quantum Golem Mark-58",
    "level": 58,
    "tier": 2,
    "baseElement": "shock",
    "stats": {
      "hp": 2710,
      "maxHp": 2710,
      "ap": 5,
      "attack": 479,
      "tech": 418,
      "armor": 179,
      "speed": 28,
      "critChance": 0.18,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 38,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0175",
        "chance": 0.45
      },
      {
        "itemId": "item_0407",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_059",
      "skill_064"
    ]
  },
  {
    "id": "monster_0059",
    "name": "Tier 2 Vortex Drake Mark-59",
    "level": 59,
    "tier": 2,
    "baseElement": "void",
    "stats": {
      "hp": 2755,
      "maxHp": 2755,
      "ap": 5,
      "attack": 487,
      "tech": 425,
      "armor": 182,
      "speed": 29,
      "critChance": 0.19,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 39,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0178",
        "chance": 0.45
      },
      {
        "itemId": "item_0414",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_060",
      "skill_065"
    ]
  },
  {
    "id": "monster_0060",
    "name": "Tier 2 Cyber-Revenant Mark-60",
    "level": 60,
    "tier": 2,
    "baseElement": "physical",
    "stats": {
      "hp": 2800,
      "maxHp": 2800,
      "ap": 5,
      "attack": 495,
      "tech": 432,
      "armor": 185,
      "speed": 10,
      "critChance": 0.05,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 10,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0181",
        "chance": 0.45
      },
      {
        "itemId": "item_0421",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_061",
      "skill_066"
    ]
  },
  {
    "id": "monster_0061",
    "name": "Tier 2 Plasma Sentinel Mark-61",
    "level": 61,
    "tier": 2,
    "baseElement": "plasma",
    "stats": {
      "hp": 2845,
      "maxHp": 2845,
      "ap": 5,
      "attack": 503,
      "tech": 439,
      "armor": 188,
      "speed": 11,
      "critChance": 0.06,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 11,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0184",
        "chance": 0.45
      },
      {
        "itemId": "item_0428",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_062",
      "skill_067"
    ]
  },
  {
    "id": "monster_0062",
    "name": "Tier 2 Void Stalker Mark-62",
    "level": 62,
    "tier": 2,
    "baseElement": "cryo",
    "stats": {
      "hp": 2890,
      "maxHp": 2890,
      "ap": 5,
      "attack": 511,
      "tech": 446,
      "armor": 191,
      "speed": 12,
      "critChance": 0.07,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 12,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0187",
        "chance": 0.45
      },
      {
        "itemId": "item_0435",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_063",
      "skill_068"
    ]
  },
  {
    "id": "monster_0063",
    "name": "Tier 2 Glitch Fiend Mark-63",
    "level": 63,
    "tier": 2,
    "baseElement": "shock",
    "stats": {
      "hp": 2935,
      "maxHp": 2935,
      "ap": 5,
      "attack": 519,
      "tech": 453,
      "armor": 194,
      "speed": 13,
      "critChance": 0.08,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 13,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0190",
        "chance": 0.45
      },
      {
        "itemId": "item_0442",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_064",
      "skill_069"
    ]
  },
  {
    "id": "monster_0064",
    "name": "Tier 2 Nanite Swarm Mark-64",
    "level": 64,
    "tier": 2,
    "baseElement": "void",
    "stats": {
      "hp": 2980,
      "maxHp": 2980,
      "ap": 5,
      "attack": 527,
      "tech": 460,
      "armor": 197,
      "speed": 14,
      "critChance": 0.09,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 14,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0193",
        "chance": 0.45
      },
      {
        "itemId": "item_0449",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_065",
      "skill_070"
    ]
  },
  {
    "id": "monster_0065",
    "name": "Tier 2 Chrono Titan Mark-65",
    "level": 65,
    "tier": 2,
    "baseElement": "physical",
    "stats": {
      "hp": 3025,
      "maxHp": 3025,
      "ap": 5,
      "attack": 535,
      "tech": 467,
      "armor": 200,
      "speed": 15,
      "critChance": 0.1,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 15,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0196",
        "chance": 0.45
      },
      {
        "itemId": "item_0456",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_066",
      "skill_071"
    ]
  },
  {
    "id": "monster_0066",
    "name": "Tier 2 Bionic Berserker Mark-66",
    "level": 66,
    "tier": 2,
    "baseElement": "plasma",
    "stats": {
      "hp": 3070,
      "maxHp": 3070,
      "ap": 5,
      "attack": 543,
      "tech": 474,
      "armor": 203,
      "speed": 16,
      "critChance": 0.11,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 16,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0199",
        "chance": 0.45
      },
      {
        "itemId": "item_0463",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_067",
      "skill_072"
    ]
  },
  {
    "id": "monster_0067",
    "name": "Tier 2 Neon Wraith Mark-67",
    "level": 67,
    "tier": 2,
    "baseElement": "cryo",
    "stats": {
      "hp": 3115,
      "maxHp": 3115,
      "ap": 5,
      "attack": 551,
      "tech": 481,
      "armor": 206,
      "speed": 17,
      "critChance": 0.12,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 17,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0202",
        "chance": 0.45
      },
      {
        "itemId": "item_0470",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_068",
      "skill_073"
    ]
  },
  {
    "id": "monster_0068",
    "name": "Tier 2 Quantum Golem Mark-68",
    "level": 68,
    "tier": 2,
    "baseElement": "shock",
    "stats": {
      "hp": 3160,
      "maxHp": 3160,
      "ap": 5,
      "attack": 559,
      "tech": 488,
      "armor": 209,
      "speed": 18,
      "critChance": 0.13,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 18,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0205",
        "chance": 0.45
      },
      {
        "itemId": "item_0477",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_069",
      "skill_074"
    ]
  },
  {
    "id": "monster_0069",
    "name": "Tier 2 Vortex Drake Mark-69",
    "level": 69,
    "tier": 2,
    "baseElement": "void",
    "stats": {
      "hp": 3205,
      "maxHp": 3205,
      "ap": 5,
      "attack": 567,
      "tech": 495,
      "armor": 212,
      "speed": 19,
      "critChance": 0.14,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 19,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0208",
        "chance": 0.45
      },
      {
        "itemId": "item_0484",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_070",
      "skill_075"
    ]
  },
  {
    "id": "monster_0070",
    "name": "Tier 2 Cyber-Revenant Mark-70",
    "level": 70,
    "tier": 2,
    "baseElement": "physical",
    "stats": {
      "hp": 3250,
      "maxHp": 3250,
      "ap": 5,
      "attack": 575,
      "tech": 502,
      "armor": 215,
      "speed": 20,
      "critChance": 0.15,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 20,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0211",
        "chance": 0.45
      },
      {
        "itemId": "item_0491",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_071",
      "skill_076"
    ]
  },
  {
    "id": "monster_0071",
    "name": "Tier 2 Plasma Sentinel Mark-71",
    "level": 71,
    "tier": 2,
    "baseElement": "plasma",
    "stats": {
      "hp": 3295,
      "maxHp": 3295,
      "ap": 5,
      "attack": 583,
      "tech": 509,
      "armor": 218,
      "speed": 21,
      "critChance": 0.16,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 21,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0214",
        "chance": 0.45
      },
      {
        "itemId": "item_0498",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_072",
      "skill_077"
    ]
  },
  {
    "id": "monster_0072",
    "name": "Tier 2 Void Stalker Mark-72",
    "level": 72,
    "tier": 2,
    "baseElement": "cryo",
    "stats": {
      "hp": 3340,
      "maxHp": 3340,
      "ap": 5,
      "attack": 591,
      "tech": 516,
      "armor": 221,
      "speed": 22,
      "critChance": 0.17,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 22,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0217",
        "chance": 0.45
      },
      {
        "itemId": "item_0005",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_073",
      "skill_078"
    ]
  },
  {
    "id": "monster_0073",
    "name": "Tier 2 Glitch Fiend Mark-73",
    "level": 73,
    "tier": 2,
    "baseElement": "shock",
    "stats": {
      "hp": 3385,
      "maxHp": 3385,
      "ap": 5,
      "attack": 599,
      "tech": 523,
      "armor": 224,
      "speed": 23,
      "critChance": 0.18,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 23,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0220",
        "chance": 0.45
      },
      {
        "itemId": "item_0012",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_074",
      "skill_079"
    ]
  },
  {
    "id": "monster_0074",
    "name": "Tier 2 Nanite Swarm Mark-74",
    "level": 74,
    "tier": 2,
    "baseElement": "void",
    "stats": {
      "hp": 3430,
      "maxHp": 3430,
      "ap": 5,
      "attack": 607,
      "tech": 530,
      "armor": 227,
      "speed": 24,
      "critChance": 0.19,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 24,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0223",
        "chance": 0.45
      },
      {
        "itemId": "item_0019",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_075",
      "skill_080"
    ]
  },
  {
    "id": "monster_0075",
    "name": "Tier 2 Chrono Titan Mark-75",
    "level": 75,
    "tier": 2,
    "baseElement": "physical",
    "stats": {
      "hp": 3475,
      "maxHp": 3475,
      "ap": 5,
      "attack": 615,
      "tech": 537,
      "armor": 230,
      "speed": 25,
      "critChance": 0.05,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 25,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0226",
        "chance": 0.45
      },
      {
        "itemId": "item_0026",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_076",
      "skill_081"
    ]
  },
  {
    "id": "monster_0076",
    "name": "Tier 2 Bionic Berserker Mark-76",
    "level": 76,
    "tier": 2,
    "baseElement": "plasma",
    "stats": {
      "hp": 3520,
      "maxHp": 3520,
      "ap": 5,
      "attack": 623,
      "tech": 544,
      "armor": 233,
      "speed": 26,
      "critChance": 0.06,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 26,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0229",
        "chance": 0.45
      },
      {
        "itemId": "item_0033",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_077",
      "skill_082"
    ]
  },
  {
    "id": "monster_0077",
    "name": "Tier 2 Neon Wraith Mark-77",
    "level": 77,
    "tier": 2,
    "baseElement": "cryo",
    "stats": {
      "hp": 3565,
      "maxHp": 3565,
      "ap": 5,
      "attack": 631,
      "tech": 551,
      "armor": 236,
      "speed": 27,
      "critChance": 0.07,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 27,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0232",
        "chance": 0.45
      },
      {
        "itemId": "item_0040",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_078",
      "skill_083"
    ]
  },
  {
    "id": "monster_0078",
    "name": "Tier 2 Quantum Golem Mark-78",
    "level": 78,
    "tier": 2,
    "baseElement": "shock",
    "stats": {
      "hp": 3610,
      "maxHp": 3610,
      "ap": 5,
      "attack": 639,
      "tech": 558,
      "armor": 239,
      "speed": 28,
      "critChance": 0.08,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 28,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0235",
        "chance": 0.45
      },
      {
        "itemId": "item_0047",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_079",
      "skill_084"
    ]
  },
  {
    "id": "monster_0079",
    "name": "Tier 2 Vortex Drake Mark-79",
    "level": 79,
    "tier": 2,
    "baseElement": "void",
    "stats": {
      "hp": 3655,
      "maxHp": 3655,
      "ap": 5,
      "attack": 647,
      "tech": 565,
      "armor": 242,
      "speed": 29,
      "critChance": 0.09,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 29,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0238",
        "chance": 0.45
      },
      {
        "itemId": "item_0054",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_080",
      "skill_085"
    ]
  },
  {
    "id": "monster_0080",
    "name": "Tier 2 Cyber-Revenant Mark-80",
    "level": 80,
    "tier": 2,
    "baseElement": "physical",
    "stats": {
      "hp": 3700,
      "maxHp": 3700,
      "ap": 5,
      "attack": 655,
      "tech": 572,
      "armor": 245,
      "speed": 10,
      "critChance": 0.1,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 30,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0241",
        "chance": 0.45
      },
      {
        "itemId": "item_0061",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_081",
      "skill_086"
    ]
  },
  {
    "id": "monster_0081",
    "name": "Tier 2 Plasma Sentinel Mark-81",
    "level": 81,
    "tier": 2,
    "baseElement": "plasma",
    "stats": {
      "hp": 3745,
      "maxHp": 3745,
      "ap": 5,
      "attack": 663,
      "tech": 579,
      "armor": 248,
      "speed": 11,
      "critChance": 0.11,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 31,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0244",
        "chance": 0.45
      },
      {
        "itemId": "item_0068",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_082",
      "skill_087"
    ]
  },
  {
    "id": "monster_0082",
    "name": "Tier 2 Void Stalker Mark-82",
    "level": 82,
    "tier": 2,
    "baseElement": "cryo",
    "stats": {
      "hp": 3790,
      "maxHp": 3790,
      "ap": 5,
      "attack": 671,
      "tech": 586,
      "armor": 251,
      "speed": 12,
      "critChance": 0.12,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 32,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0247",
        "chance": 0.45
      },
      {
        "itemId": "item_0075",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_083",
      "skill_088"
    ]
  },
  {
    "id": "monster_0083",
    "name": "Tier 2 Glitch Fiend Mark-83",
    "level": 83,
    "tier": 2,
    "baseElement": "shock",
    "stats": {
      "hp": 3835,
      "maxHp": 3835,
      "ap": 5,
      "attack": 679,
      "tech": 593,
      "armor": 254,
      "speed": 13,
      "critChance": 0.13,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 33,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0250",
        "chance": 0.45
      },
      {
        "itemId": "item_0082",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_084",
      "skill_089"
    ]
  },
  {
    "id": "monster_0084",
    "name": "Tier 2 Nanite Swarm Mark-84",
    "level": 84,
    "tier": 2,
    "baseElement": "void",
    "stats": {
      "hp": 3880,
      "maxHp": 3880,
      "ap": 5,
      "attack": 687,
      "tech": 600,
      "armor": 257,
      "speed": 14,
      "critChance": 0.14,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 34,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0253",
        "chance": 0.45
      },
      {
        "itemId": "item_0089",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_085",
      "skill_090"
    ]
  },
  {
    "id": "monster_0085",
    "name": "Tier 2 Chrono Titan Mark-85",
    "level": 85,
    "tier": 2,
    "baseElement": "physical",
    "stats": {
      "hp": 3925,
      "maxHp": 3925,
      "ap": 5,
      "attack": 695,
      "tech": 607,
      "armor": 260,
      "speed": 15,
      "critChance": 0.15,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 35,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0256",
        "chance": 0.45
      },
      {
        "itemId": "item_0096",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_086",
      "skill_091"
    ]
  },
  {
    "id": "monster_0086",
    "name": "Tier 2 Bionic Berserker Mark-86",
    "level": 86,
    "tier": 2,
    "baseElement": "plasma",
    "stats": {
      "hp": 3970,
      "maxHp": 3970,
      "ap": 5,
      "attack": 703,
      "tech": 614,
      "armor": 263,
      "speed": 16,
      "critChance": 0.16,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 36,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0259",
        "chance": 0.45
      },
      {
        "itemId": "item_0103",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_087",
      "skill_092"
    ]
  },
  {
    "id": "monster_0087",
    "name": "Tier 2 Neon Wraith Mark-87",
    "level": 87,
    "tier": 2,
    "baseElement": "cryo",
    "stats": {
      "hp": 4015,
      "maxHp": 4015,
      "ap": 5,
      "attack": 711,
      "tech": 621,
      "armor": 266,
      "speed": 17,
      "critChance": 0.17,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 37,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0262",
        "chance": 0.45
      },
      {
        "itemId": "item_0110",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_088",
      "skill_093"
    ]
  },
  {
    "id": "monster_0088",
    "name": "Tier 2 Quantum Golem Mark-88",
    "level": 88,
    "tier": 2,
    "baseElement": "shock",
    "stats": {
      "hp": 4060,
      "maxHp": 4060,
      "ap": 5,
      "attack": 719,
      "tech": 628,
      "armor": 269,
      "speed": 18,
      "critChance": 0.18,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 38,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0265",
        "chance": 0.45
      },
      {
        "itemId": "item_0117",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_089",
      "skill_094"
    ]
  },
  {
    "id": "monster_0089",
    "name": "Tier 2 Vortex Drake Mark-89",
    "level": 89,
    "tier": 2,
    "baseElement": "void",
    "stats": {
      "hp": 4105,
      "maxHp": 4105,
      "ap": 5,
      "attack": 727,
      "tech": 635,
      "armor": 272,
      "speed": 19,
      "critChance": 0.19,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 39,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0268",
        "chance": 0.45
      },
      {
        "itemId": "item_0124",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_090",
      "skill_095"
    ]
  },
  {
    "id": "monster_0090",
    "name": "Tier 2 Cyber-Revenant Mark-90",
    "level": 90,
    "tier": 2,
    "baseElement": "physical",
    "stats": {
      "hp": 4150,
      "maxHp": 4150,
      "ap": 5,
      "attack": 735,
      "tech": 642,
      "armor": 275,
      "speed": 20,
      "critChance": 0.05,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 10,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0271",
        "chance": 0.45
      },
      {
        "itemId": "item_0131",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_091",
      "skill_096"
    ]
  },
  {
    "id": "monster_0091",
    "name": "Tier 2 Plasma Sentinel Mark-91",
    "level": 91,
    "tier": 2,
    "baseElement": "plasma",
    "stats": {
      "hp": 4195,
      "maxHp": 4195,
      "ap": 5,
      "attack": 743,
      "tech": 649,
      "armor": 278,
      "speed": 21,
      "critChance": 0.06,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 11,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0274",
        "chance": 0.45
      },
      {
        "itemId": "item_0138",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_092",
      "skill_097"
    ]
  },
  {
    "id": "monster_0092",
    "name": "Tier 2 Void Stalker Mark-92",
    "level": 92,
    "tier": 2,
    "baseElement": "cryo",
    "stats": {
      "hp": 4240,
      "maxHp": 4240,
      "ap": 5,
      "attack": 751,
      "tech": 656,
      "armor": 281,
      "speed": 22,
      "critChance": 0.07,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 12,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0277",
        "chance": 0.45
      },
      {
        "itemId": "item_0145",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_093",
      "skill_098"
    ]
  },
  {
    "id": "monster_0093",
    "name": "Tier 2 Glitch Fiend Mark-93",
    "level": 93,
    "tier": 2,
    "baseElement": "shock",
    "stats": {
      "hp": 4285,
      "maxHp": 4285,
      "ap": 5,
      "attack": 759,
      "tech": 663,
      "armor": 284,
      "speed": 23,
      "critChance": 0.08,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 13,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0280",
        "chance": 0.45
      },
      {
        "itemId": "item_0152",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_094",
      "skill_099"
    ]
  },
  {
    "id": "monster_0094",
    "name": "Tier 2 Nanite Swarm Mark-94",
    "level": 94,
    "tier": 2,
    "baseElement": "void",
    "stats": {
      "hp": 4330,
      "maxHp": 4330,
      "ap": 5,
      "attack": 767,
      "tech": 670,
      "armor": 287,
      "speed": 24,
      "critChance": 0.09,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 14,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0283",
        "chance": 0.45
      },
      {
        "itemId": "item_0159",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_095",
      "skill_100"
    ]
  },
  {
    "id": "monster_0095",
    "name": "Tier 2 Chrono Titan Mark-95",
    "level": 95,
    "tier": 2,
    "baseElement": "physical",
    "stats": {
      "hp": 4375,
      "maxHp": 4375,
      "ap": 5,
      "attack": 775,
      "tech": 677,
      "armor": 290,
      "speed": 25,
      "critChance": 0.1,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 15,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0286",
        "chance": 0.45
      },
      {
        "itemId": "item_0166",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_096",
      "skill_101"
    ]
  },
  {
    "id": "monster_0096",
    "name": "Tier 2 Bionic Berserker Mark-96",
    "level": 96,
    "tier": 2,
    "baseElement": "plasma",
    "stats": {
      "hp": 4420,
      "maxHp": 4420,
      "ap": 5,
      "attack": 783,
      "tech": 684,
      "armor": 293,
      "speed": 26,
      "critChance": 0.11,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 16,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0289",
        "chance": 0.45
      },
      {
        "itemId": "item_0173",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_097",
      "skill_102"
    ]
  },
  {
    "id": "monster_0097",
    "name": "Tier 2 Neon Wraith Mark-97",
    "level": 97,
    "tier": 2,
    "baseElement": "cryo",
    "stats": {
      "hp": 4465,
      "maxHp": 4465,
      "ap": 5,
      "attack": 791,
      "tech": 691,
      "armor": 296,
      "speed": 27,
      "critChance": 0.12,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 17,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0292",
        "chance": 0.45
      },
      {
        "itemId": "item_0180",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_098",
      "skill_103"
    ]
  },
  {
    "id": "monster_0098",
    "name": "Tier 2 Quantum Golem Mark-98",
    "level": 98,
    "tier": 2,
    "baseElement": "shock",
    "stats": {
      "hp": 4510,
      "maxHp": 4510,
      "ap": 5,
      "attack": 799,
      "tech": 698,
      "armor": 299,
      "speed": 28,
      "critChance": 0.13,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 18,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0295",
        "chance": 0.45
      },
      {
        "itemId": "item_0187",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_099",
      "skill_104"
    ]
  },
  {
    "id": "monster_0099",
    "name": "Tier 2 Vortex Drake Mark-99",
    "level": 99,
    "tier": 2,
    "baseElement": "void",
    "stats": {
      "hp": 4555,
      "maxHp": 4555,
      "ap": 5,
      "attack": 807,
      "tech": 705,
      "armor": 302,
      "speed": 29,
      "critChance": 0.14,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 19,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0298",
        "chance": 0.45
      },
      {
        "itemId": "item_0194",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_100",
      "skill_105"
    ]
  },
  {
    "id": "monster_0100",
    "name": "Tier 3 Cyber-Revenant Mark-100",
    "level": 100,
    "tier": 3,
    "baseElement": "physical",
    "stats": {
      "hp": 4600,
      "maxHp": 4600,
      "ap": 6,
      "attack": 815,
      "tech": 712,
      "armor": 305,
      "speed": 10,
      "critChance": 0.15,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 20,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0301",
        "chance": 0.45
      },
      {
        "itemId": "item_0201",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_101",
      "skill_106"
    ]
  },
  {
    "id": "monster_0101",
    "name": "Tier 3 Plasma Sentinel Mark-101",
    "level": 101,
    "tier": 3,
    "baseElement": "plasma",
    "stats": {
      "hp": 4645,
      "maxHp": 4645,
      "ap": 6,
      "attack": 823,
      "tech": 719,
      "armor": 308,
      "speed": 11,
      "critChance": 0.16,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 21,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0304",
        "chance": 0.45
      },
      {
        "itemId": "item_0208",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_102",
      "skill_107"
    ]
  },
  {
    "id": "monster_0102",
    "name": "Tier 3 Void Stalker Mark-102",
    "level": 102,
    "tier": 3,
    "baseElement": "cryo",
    "stats": {
      "hp": 4690,
      "maxHp": 4690,
      "ap": 6,
      "attack": 831,
      "tech": 726,
      "armor": 311,
      "speed": 12,
      "critChance": 0.17,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 22,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0307",
        "chance": 0.45
      },
      {
        "itemId": "item_0215",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_103",
      "skill_108"
    ]
  },
  {
    "id": "monster_0103",
    "name": "Tier 3 Glitch Fiend Mark-103",
    "level": 103,
    "tier": 3,
    "baseElement": "shock",
    "stats": {
      "hp": 4735,
      "maxHp": 4735,
      "ap": 6,
      "attack": 839,
      "tech": 733,
      "armor": 314,
      "speed": 13,
      "critChance": 0.18,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 23,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0310",
        "chance": 0.45
      },
      {
        "itemId": "item_0222",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_104",
      "skill_109"
    ]
  },
  {
    "id": "monster_0104",
    "name": "Tier 3 Nanite Swarm Mark-104",
    "level": 104,
    "tier": 3,
    "baseElement": "void",
    "stats": {
      "hp": 4780,
      "maxHp": 4780,
      "ap": 6,
      "attack": 847,
      "tech": 740,
      "armor": 317,
      "speed": 14,
      "critChance": 0.19,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 24,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0313",
        "chance": 0.45
      },
      {
        "itemId": "item_0229",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_105",
      "skill_110"
    ]
  },
  {
    "id": "monster_0105",
    "name": "Tier 3 Chrono Titan Mark-105",
    "level": 105,
    "tier": 3,
    "baseElement": "physical",
    "stats": {
      "hp": 4825,
      "maxHp": 4825,
      "ap": 6,
      "attack": 855,
      "tech": 747,
      "armor": 320,
      "speed": 15,
      "critChance": 0.05,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 25,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0316",
        "chance": 0.45
      },
      {
        "itemId": "item_0236",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_106",
      "skill_111"
    ]
  },
  {
    "id": "monster_0106",
    "name": "Tier 3 Bionic Berserker Mark-106",
    "level": 106,
    "tier": 3,
    "baseElement": "plasma",
    "stats": {
      "hp": 4870,
      "maxHp": 4870,
      "ap": 6,
      "attack": 863,
      "tech": 754,
      "armor": 323,
      "speed": 16,
      "critChance": 0.06,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 26,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0319",
        "chance": 0.45
      },
      {
        "itemId": "item_0243",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_107",
      "skill_112"
    ]
  },
  {
    "id": "monster_0107",
    "name": "Tier 3 Neon Wraith Mark-107",
    "level": 107,
    "tier": 3,
    "baseElement": "cryo",
    "stats": {
      "hp": 4915,
      "maxHp": 4915,
      "ap": 6,
      "attack": 871,
      "tech": 761,
      "armor": 326,
      "speed": 17,
      "critChance": 0.07,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 27,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0322",
        "chance": 0.45
      },
      {
        "itemId": "item_0250",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_108",
      "skill_113"
    ]
  },
  {
    "id": "monster_0108",
    "name": "Tier 3 Quantum Golem Mark-108",
    "level": 108,
    "tier": 3,
    "baseElement": "shock",
    "stats": {
      "hp": 4960,
      "maxHp": 4960,
      "ap": 6,
      "attack": 879,
      "tech": 768,
      "armor": 329,
      "speed": 18,
      "critChance": 0.08,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 28,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0325",
        "chance": 0.45
      },
      {
        "itemId": "item_0257",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_109",
      "skill_114"
    ]
  },
  {
    "id": "monster_0109",
    "name": "Tier 3 Vortex Drake Mark-109",
    "level": 109,
    "tier": 3,
    "baseElement": "void",
    "stats": {
      "hp": 5005,
      "maxHp": 5005,
      "ap": 6,
      "attack": 887,
      "tech": 775,
      "armor": 332,
      "speed": 19,
      "critChance": 0.09,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 29,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0328",
        "chance": 0.45
      },
      {
        "itemId": "item_0264",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_110",
      "skill_115"
    ]
  },
  {
    "id": "monster_0110",
    "name": "Tier 3 Cyber-Revenant Mark-110",
    "level": 110,
    "tier": 3,
    "baseElement": "physical",
    "stats": {
      "hp": 5050,
      "maxHp": 5050,
      "ap": 6,
      "attack": 895,
      "tech": 782,
      "armor": 335,
      "speed": 20,
      "critChance": 0.1,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 30,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0331",
        "chance": 0.45
      },
      {
        "itemId": "item_0271",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_111",
      "skill_116"
    ]
  },
  {
    "id": "monster_0111",
    "name": "Tier 3 Plasma Sentinel Mark-111",
    "level": 111,
    "tier": 3,
    "baseElement": "plasma",
    "stats": {
      "hp": 5095,
      "maxHp": 5095,
      "ap": 6,
      "attack": 903,
      "tech": 789,
      "armor": 338,
      "speed": 21,
      "critChance": 0.11,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 31,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0334",
        "chance": 0.45
      },
      {
        "itemId": "item_0278",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_112",
      "skill_117"
    ]
  },
  {
    "id": "monster_0112",
    "name": "Tier 3 Void Stalker Mark-112",
    "level": 112,
    "tier": 3,
    "baseElement": "cryo",
    "stats": {
      "hp": 5140,
      "maxHp": 5140,
      "ap": 6,
      "attack": 911,
      "tech": 796,
      "armor": 341,
      "speed": 22,
      "critChance": 0.12,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 32,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0337",
        "chance": 0.45
      },
      {
        "itemId": "item_0285",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_113",
      "skill_118"
    ]
  },
  {
    "id": "monster_0113",
    "name": "Tier 3 Glitch Fiend Mark-113",
    "level": 113,
    "tier": 3,
    "baseElement": "shock",
    "stats": {
      "hp": 5185,
      "maxHp": 5185,
      "ap": 6,
      "attack": 919,
      "tech": 803,
      "armor": 344,
      "speed": 23,
      "critChance": 0.13,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 33,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0340",
        "chance": 0.45
      },
      {
        "itemId": "item_0292",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_114",
      "skill_119"
    ]
  },
  {
    "id": "monster_0114",
    "name": "Tier 3 Nanite Swarm Mark-114",
    "level": 114,
    "tier": 3,
    "baseElement": "void",
    "stats": {
      "hp": 5230,
      "maxHp": 5230,
      "ap": 6,
      "attack": 927,
      "tech": 810,
      "armor": 347,
      "speed": 24,
      "critChance": 0.14,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 34,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0343",
        "chance": 0.45
      },
      {
        "itemId": "item_0299",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_115",
      "skill_120"
    ]
  },
  {
    "id": "monster_0115",
    "name": "Tier 3 Chrono Titan Mark-115",
    "level": 115,
    "tier": 3,
    "baseElement": "physical",
    "stats": {
      "hp": 5275,
      "maxHp": 5275,
      "ap": 6,
      "attack": 935,
      "tech": 817,
      "armor": 350,
      "speed": 25,
      "critChance": 0.15,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 35,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0346",
        "chance": 0.45
      },
      {
        "itemId": "item_0306",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_116",
      "skill_001"
    ]
  },
  {
    "id": "monster_0116",
    "name": "Tier 3 Bionic Berserker Mark-116",
    "level": 116,
    "tier": 3,
    "baseElement": "plasma",
    "stats": {
      "hp": 5320,
      "maxHp": 5320,
      "ap": 6,
      "attack": 943,
      "tech": 824,
      "armor": 353,
      "speed": 26,
      "critChance": 0.16,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 36,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0349",
        "chance": 0.45
      },
      {
        "itemId": "item_0313",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_117",
      "skill_002"
    ]
  },
  {
    "id": "monster_0117",
    "name": "Tier 3 Neon Wraith Mark-117",
    "level": 117,
    "tier": 3,
    "baseElement": "cryo",
    "stats": {
      "hp": 5365,
      "maxHp": 5365,
      "ap": 6,
      "attack": 951,
      "tech": 831,
      "armor": 356,
      "speed": 27,
      "critChance": 0.17,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 37,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0352",
        "chance": 0.45
      },
      {
        "itemId": "item_0320",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_118",
      "skill_003"
    ]
  },
  {
    "id": "monster_0118",
    "name": "Tier 3 Quantum Golem Mark-118",
    "level": 118,
    "tier": 3,
    "baseElement": "shock",
    "stats": {
      "hp": 5410,
      "maxHp": 5410,
      "ap": 6,
      "attack": 959,
      "tech": 838,
      "armor": 359,
      "speed": 28,
      "critChance": 0.18,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 38,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0355",
        "chance": 0.45
      },
      {
        "itemId": "item_0327",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_119",
      "skill_004"
    ]
  },
  {
    "id": "monster_0119",
    "name": "Tier 3 Vortex Drake Mark-119",
    "level": 119,
    "tier": 3,
    "baseElement": "void",
    "stats": {
      "hp": 5455,
      "maxHp": 5455,
      "ap": 6,
      "attack": 967,
      "tech": 845,
      "armor": 362,
      "speed": 29,
      "critChance": 0.19,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 39,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0358",
        "chance": 0.45
      },
      {
        "itemId": "item_0334",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_120",
      "skill_005"
    ]
  },
  {
    "id": "monster_0120",
    "name": "Tier 3 Cyber-Revenant Mark-120",
    "level": 120,
    "tier": 3,
    "baseElement": "physical",
    "stats": {
      "hp": 5500,
      "maxHp": 5500,
      "ap": 6,
      "attack": 975,
      "tech": 852,
      "armor": 365,
      "speed": 10,
      "critChance": 0.05,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 10,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0361",
        "chance": 0.45
      },
      {
        "itemId": "item_0341",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_001",
      "skill_006"
    ]
  },
  {
    "id": "monster_0121",
    "name": "Tier 3 Plasma Sentinel Mark-121",
    "level": 121,
    "tier": 3,
    "baseElement": "plasma",
    "stats": {
      "hp": 5545,
      "maxHp": 5545,
      "ap": 6,
      "attack": 983,
      "tech": 859,
      "armor": 368,
      "speed": 11,
      "critChance": 0.06,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 11,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0364",
        "chance": 0.45
      },
      {
        "itemId": "item_0348",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_002",
      "skill_007"
    ]
  },
  {
    "id": "monster_0122",
    "name": "Tier 3 Void Stalker Mark-122",
    "level": 122,
    "tier": 3,
    "baseElement": "cryo",
    "stats": {
      "hp": 5590,
      "maxHp": 5590,
      "ap": 6,
      "attack": 991,
      "tech": 866,
      "armor": 371,
      "speed": 12,
      "critChance": 0.07,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 12,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0367",
        "chance": 0.45
      },
      {
        "itemId": "item_0355",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_003",
      "skill_008"
    ]
  },
  {
    "id": "monster_0123",
    "name": "Tier 3 Glitch Fiend Mark-123",
    "level": 123,
    "tier": 3,
    "baseElement": "shock",
    "stats": {
      "hp": 5635,
      "maxHp": 5635,
      "ap": 6,
      "attack": 999,
      "tech": 873,
      "armor": 374,
      "speed": 13,
      "critChance": 0.08,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 13,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0370",
        "chance": 0.45
      },
      {
        "itemId": "item_0362",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_004",
      "skill_009"
    ]
  },
  {
    "id": "monster_0124",
    "name": "Tier 3 Nanite Swarm Mark-124",
    "level": 124,
    "tier": 3,
    "baseElement": "void",
    "stats": {
      "hp": 5680,
      "maxHp": 5680,
      "ap": 6,
      "attack": 1007,
      "tech": 880,
      "armor": 377,
      "speed": 14,
      "critChance": 0.09,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 14,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0373",
        "chance": 0.45
      },
      {
        "itemId": "item_0369",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_005",
      "skill_010"
    ]
  },
  {
    "id": "monster_0125",
    "name": "Tier 3 Chrono Titan Mark-125",
    "level": 125,
    "tier": 3,
    "baseElement": "physical",
    "stats": {
      "hp": 5725,
      "maxHp": 5725,
      "ap": 6,
      "attack": 1015,
      "tech": 887,
      "armor": 380,
      "speed": 15,
      "critChance": 0.1,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 15,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0376",
        "chance": 0.45
      },
      {
        "itemId": "item_0376",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_006",
      "skill_011"
    ]
  },
  {
    "id": "monster_0126",
    "name": "Tier 3 Bionic Berserker Mark-126",
    "level": 126,
    "tier": 3,
    "baseElement": "plasma",
    "stats": {
      "hp": 5770,
      "maxHp": 5770,
      "ap": 6,
      "attack": 1023,
      "tech": 894,
      "armor": 383,
      "speed": 16,
      "critChance": 0.11,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 16,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0379",
        "chance": 0.45
      },
      {
        "itemId": "item_0383",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_007",
      "skill_012"
    ]
  },
  {
    "id": "monster_0127",
    "name": "Tier 3 Neon Wraith Mark-127",
    "level": 127,
    "tier": 3,
    "baseElement": "cryo",
    "stats": {
      "hp": 5815,
      "maxHp": 5815,
      "ap": 6,
      "attack": 1031,
      "tech": 901,
      "armor": 386,
      "speed": 17,
      "critChance": 0.12,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 17,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0382",
        "chance": 0.45
      },
      {
        "itemId": "item_0390",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_008",
      "skill_013"
    ]
  },
  {
    "id": "monster_0128",
    "name": "Tier 3 Quantum Golem Mark-128",
    "level": 128,
    "tier": 3,
    "baseElement": "shock",
    "stats": {
      "hp": 5860,
      "maxHp": 5860,
      "ap": 6,
      "attack": 1039,
      "tech": 908,
      "armor": 389,
      "speed": 18,
      "critChance": 0.13,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 18,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0385",
        "chance": 0.45
      },
      {
        "itemId": "item_0397",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_009",
      "skill_014"
    ]
  },
  {
    "id": "monster_0129",
    "name": "Tier 3 Vortex Drake Mark-129",
    "level": 129,
    "tier": 3,
    "baseElement": "void",
    "stats": {
      "hp": 5905,
      "maxHp": 5905,
      "ap": 6,
      "attack": 1047,
      "tech": 915,
      "armor": 392,
      "speed": 19,
      "critChance": 0.14,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 19,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0388",
        "chance": 0.45
      },
      {
        "itemId": "item_0404",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_010",
      "skill_015"
    ]
  },
  {
    "id": "monster_0130",
    "name": "Tier 3 Cyber-Revenant Mark-130",
    "level": 130,
    "tier": 3,
    "baseElement": "physical",
    "stats": {
      "hp": 5950,
      "maxHp": 5950,
      "ap": 6,
      "attack": 1055,
      "tech": 922,
      "armor": 395,
      "speed": 20,
      "critChance": 0.15,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 20,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0391",
        "chance": 0.45
      },
      {
        "itemId": "item_0411",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_011",
      "skill_016"
    ]
  },
  {
    "id": "monster_0131",
    "name": "Tier 3 Plasma Sentinel Mark-131",
    "level": 131,
    "tier": 3,
    "baseElement": "plasma",
    "stats": {
      "hp": 5995,
      "maxHp": 5995,
      "ap": 6,
      "attack": 1063,
      "tech": 929,
      "armor": 398,
      "speed": 21,
      "critChance": 0.16,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 21,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0394",
        "chance": 0.45
      },
      {
        "itemId": "item_0418",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_012",
      "skill_017"
    ]
  },
  {
    "id": "monster_0132",
    "name": "Tier 3 Void Stalker Mark-132",
    "level": 132,
    "tier": 3,
    "baseElement": "cryo",
    "stats": {
      "hp": 6040,
      "maxHp": 6040,
      "ap": 6,
      "attack": 1071,
      "tech": 936,
      "armor": 401,
      "speed": 22,
      "critChance": 0.17,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 22,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0397",
        "chance": 0.45
      },
      {
        "itemId": "item_0425",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_013",
      "skill_018"
    ]
  },
  {
    "id": "monster_0133",
    "name": "Tier 3 Glitch Fiend Mark-133",
    "level": 133,
    "tier": 3,
    "baseElement": "shock",
    "stats": {
      "hp": 6085,
      "maxHp": 6085,
      "ap": 6,
      "attack": 1079,
      "tech": 943,
      "armor": 404,
      "speed": 23,
      "critChance": 0.18,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 23,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0400",
        "chance": 0.45
      },
      {
        "itemId": "item_0432",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_014",
      "skill_019"
    ]
  },
  {
    "id": "monster_0134",
    "name": "Tier 3 Nanite Swarm Mark-134",
    "level": 134,
    "tier": 3,
    "baseElement": "void",
    "stats": {
      "hp": 6130,
      "maxHp": 6130,
      "ap": 6,
      "attack": 1087,
      "tech": 950,
      "armor": 407,
      "speed": 24,
      "critChance": 0.19,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 24,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0403",
        "chance": 0.45
      },
      {
        "itemId": "item_0439",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_015",
      "skill_020"
    ]
  },
  {
    "id": "monster_0135",
    "name": "Tier 3 Chrono Titan Mark-135",
    "level": 135,
    "tier": 3,
    "baseElement": "physical",
    "stats": {
      "hp": 6175,
      "maxHp": 6175,
      "ap": 6,
      "attack": 1095,
      "tech": 957,
      "armor": 410,
      "speed": 25,
      "critChance": 0.05,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 25,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0406",
        "chance": 0.45
      },
      {
        "itemId": "item_0446",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_016",
      "skill_021"
    ]
  },
  {
    "id": "monster_0136",
    "name": "Tier 3 Bionic Berserker Mark-136",
    "level": 136,
    "tier": 3,
    "baseElement": "plasma",
    "stats": {
      "hp": 6220,
      "maxHp": 6220,
      "ap": 6,
      "attack": 1103,
      "tech": 964,
      "armor": 413,
      "speed": 26,
      "critChance": 0.06,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 26,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0409",
        "chance": 0.45
      },
      {
        "itemId": "item_0453",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_017",
      "skill_022"
    ]
  },
  {
    "id": "monster_0137",
    "name": "Tier 3 Neon Wraith Mark-137",
    "level": 137,
    "tier": 3,
    "baseElement": "cryo",
    "stats": {
      "hp": 6265,
      "maxHp": 6265,
      "ap": 6,
      "attack": 1111,
      "tech": 971,
      "armor": 416,
      "speed": 27,
      "critChance": 0.07,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 27,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0412",
        "chance": 0.45
      },
      {
        "itemId": "item_0460",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_018",
      "skill_023"
    ]
  },
  {
    "id": "monster_0138",
    "name": "Tier 3 Quantum Golem Mark-138",
    "level": 138,
    "tier": 3,
    "baseElement": "shock",
    "stats": {
      "hp": 6310,
      "maxHp": 6310,
      "ap": 6,
      "attack": 1119,
      "tech": 978,
      "armor": 419,
      "speed": 28,
      "critChance": 0.08,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 28,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0415",
        "chance": 0.45
      },
      {
        "itemId": "item_0467",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_019",
      "skill_024"
    ]
  },
  {
    "id": "monster_0139",
    "name": "Tier 3 Vortex Drake Mark-139",
    "level": 139,
    "tier": 3,
    "baseElement": "void",
    "stats": {
      "hp": 6355,
      "maxHp": 6355,
      "ap": 6,
      "attack": 1127,
      "tech": 985,
      "armor": 422,
      "speed": 29,
      "critChance": 0.09,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 29,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0418",
        "chance": 0.45
      },
      {
        "itemId": "item_0474",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_020",
      "skill_025"
    ]
  },
  {
    "id": "monster_0140",
    "name": "Tier 3 Cyber-Revenant Mark-140",
    "level": 140,
    "tier": 3,
    "baseElement": "physical",
    "stats": {
      "hp": 6400,
      "maxHp": 6400,
      "ap": 6,
      "attack": 1135,
      "tech": 992,
      "armor": 425,
      "speed": 10,
      "critChance": 0.1,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 30,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0421",
        "chance": 0.45
      },
      {
        "itemId": "item_0481",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_021",
      "skill_026"
    ]
  },
  {
    "id": "monster_0141",
    "name": "Tier 3 Plasma Sentinel Mark-141",
    "level": 141,
    "tier": 3,
    "baseElement": "plasma",
    "stats": {
      "hp": 6445,
      "maxHp": 6445,
      "ap": 6,
      "attack": 1143,
      "tech": 999,
      "armor": 428,
      "speed": 11,
      "critChance": 0.11,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 31,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0424",
        "chance": 0.45
      },
      {
        "itemId": "item_0488",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_022",
      "skill_027"
    ]
  },
  {
    "id": "monster_0142",
    "name": "Tier 3 Void Stalker Mark-142",
    "level": 142,
    "tier": 3,
    "baseElement": "cryo",
    "stats": {
      "hp": 6490,
      "maxHp": 6490,
      "ap": 6,
      "attack": 1151,
      "tech": 1006,
      "armor": 431,
      "speed": 12,
      "critChance": 0.12,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 32,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0427",
        "chance": 0.45
      },
      {
        "itemId": "item_0495",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_023",
      "skill_028"
    ]
  },
  {
    "id": "monster_0143",
    "name": "Tier 3 Glitch Fiend Mark-143",
    "level": 143,
    "tier": 3,
    "baseElement": "shock",
    "stats": {
      "hp": 6535,
      "maxHp": 6535,
      "ap": 6,
      "attack": 1159,
      "tech": 1013,
      "armor": 434,
      "speed": 13,
      "critChance": 0.13,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 33,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0430",
        "chance": 0.45
      },
      {
        "itemId": "item_0002",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_024",
      "skill_029"
    ]
  },
  {
    "id": "monster_0144",
    "name": "Tier 3 Nanite Swarm Mark-144",
    "level": 144,
    "tier": 3,
    "baseElement": "void",
    "stats": {
      "hp": 6580,
      "maxHp": 6580,
      "ap": 6,
      "attack": 1167,
      "tech": 1020,
      "armor": 437,
      "speed": 14,
      "critChance": 0.14,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 34,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0433",
        "chance": 0.45
      },
      {
        "itemId": "item_0009",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_025",
      "skill_030"
    ]
  },
  {
    "id": "monster_0145",
    "name": "Tier 3 Chrono Titan Mark-145",
    "level": 145,
    "tier": 3,
    "baseElement": "physical",
    "stats": {
      "hp": 6625,
      "maxHp": 6625,
      "ap": 6,
      "attack": 1175,
      "tech": 1027,
      "armor": 440,
      "speed": 15,
      "critChance": 0.15,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 35,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0436",
        "chance": 0.45
      },
      {
        "itemId": "item_0016",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_026",
      "skill_031"
    ]
  },
  {
    "id": "monster_0146",
    "name": "Tier 3 Bionic Berserker Mark-146",
    "level": 146,
    "tier": 3,
    "baseElement": "plasma",
    "stats": {
      "hp": 6670,
      "maxHp": 6670,
      "ap": 6,
      "attack": 1183,
      "tech": 1034,
      "armor": 443,
      "speed": 16,
      "critChance": 0.16,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 36,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0439",
        "chance": 0.45
      },
      {
        "itemId": "item_0023",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_027",
      "skill_032"
    ]
  },
  {
    "id": "monster_0147",
    "name": "Tier 3 Neon Wraith Mark-147",
    "level": 147,
    "tier": 3,
    "baseElement": "cryo",
    "stats": {
      "hp": 6715,
      "maxHp": 6715,
      "ap": 6,
      "attack": 1191,
      "tech": 1041,
      "armor": 446,
      "speed": 17,
      "critChance": 0.17,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 37,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0442",
        "chance": 0.45
      },
      {
        "itemId": "item_0030",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_028",
      "skill_033"
    ]
  },
  {
    "id": "monster_0148",
    "name": "Tier 3 Quantum Golem Mark-148",
    "level": 148,
    "tier": 3,
    "baseElement": "shock",
    "stats": {
      "hp": 6760,
      "maxHp": 6760,
      "ap": 6,
      "attack": 1199,
      "tech": 1048,
      "armor": 449,
      "speed": 18,
      "critChance": 0.18,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 38,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0445",
        "chance": 0.45
      },
      {
        "itemId": "item_0037",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_029",
      "skill_034"
    ]
  },
  {
    "id": "monster_0149",
    "name": "Tier 3 Vortex Drake Mark-149",
    "level": 149,
    "tier": 3,
    "baseElement": "void",
    "stats": {
      "hp": 6805,
      "maxHp": 6805,
      "ap": 6,
      "attack": 1207,
      "tech": 1055,
      "armor": 452,
      "speed": 19,
      "critChance": 0.19,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 39,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0448",
        "chance": 0.45
      },
      {
        "itemId": "item_0044",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_030",
      "skill_035"
    ]
  },
  {
    "id": "monster_0150",
    "name": "Tier 4 Cyber-Revenant Mark-150",
    "level": 150,
    "tier": 4,
    "baseElement": "physical",
    "stats": {
      "hp": 6850,
      "maxHp": 6850,
      "ap": 7,
      "attack": 1215,
      "tech": 1062,
      "armor": 455,
      "speed": 20,
      "critChance": 0.05,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 10,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0451",
        "chance": 0.45
      },
      {
        "itemId": "item_0051",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_031",
      "skill_036"
    ]
  },
  {
    "id": "monster_0151",
    "name": "Tier 4 Plasma Sentinel Mark-151",
    "level": 151,
    "tier": 4,
    "baseElement": "plasma",
    "stats": {
      "hp": 6895,
      "maxHp": 6895,
      "ap": 7,
      "attack": 1223,
      "tech": 1069,
      "armor": 458,
      "speed": 21,
      "critChance": 0.06,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 11,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0454",
        "chance": 0.45
      },
      {
        "itemId": "item_0058",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_032",
      "skill_037"
    ]
  },
  {
    "id": "monster_0152",
    "name": "Tier 4 Void Stalker Mark-152",
    "level": 152,
    "tier": 4,
    "baseElement": "cryo",
    "stats": {
      "hp": 6940,
      "maxHp": 6940,
      "ap": 7,
      "attack": 1231,
      "tech": 1076,
      "armor": 461,
      "speed": 22,
      "critChance": 0.07,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 12,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0457",
        "chance": 0.45
      },
      {
        "itemId": "item_0065",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_033",
      "skill_038"
    ]
  },
  {
    "id": "monster_0153",
    "name": "Tier 4 Glitch Fiend Mark-153",
    "level": 153,
    "tier": 4,
    "baseElement": "shock",
    "stats": {
      "hp": 6985,
      "maxHp": 6985,
      "ap": 7,
      "attack": 1239,
      "tech": 1083,
      "armor": 464,
      "speed": 23,
      "critChance": 0.08,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 13,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0460",
        "chance": 0.45
      },
      {
        "itemId": "item_0072",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_034",
      "skill_039"
    ]
  },
  {
    "id": "monster_0154",
    "name": "Tier 4 Nanite Swarm Mark-154",
    "level": 154,
    "tier": 4,
    "baseElement": "void",
    "stats": {
      "hp": 7030,
      "maxHp": 7030,
      "ap": 7,
      "attack": 1247,
      "tech": 1090,
      "armor": 467,
      "speed": 24,
      "critChance": 0.09,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 14,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0463",
        "chance": 0.45
      },
      {
        "itemId": "item_0079",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_035",
      "skill_040"
    ]
  },
  {
    "id": "monster_0155",
    "name": "Tier 4 Chrono Titan Mark-155",
    "level": 155,
    "tier": 4,
    "baseElement": "physical",
    "stats": {
      "hp": 7075,
      "maxHp": 7075,
      "ap": 7,
      "attack": 1255,
      "tech": 1097,
      "armor": 470,
      "speed": 25,
      "critChance": 0.1,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 15,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0466",
        "chance": 0.45
      },
      {
        "itemId": "item_0086",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_036",
      "skill_041"
    ]
  },
  {
    "id": "monster_0156",
    "name": "Tier 4 Bionic Berserker Mark-156",
    "level": 156,
    "tier": 4,
    "baseElement": "plasma",
    "stats": {
      "hp": 7120,
      "maxHp": 7120,
      "ap": 7,
      "attack": 1263,
      "tech": 1104,
      "armor": 473,
      "speed": 26,
      "critChance": 0.11,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 16,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0469",
        "chance": 0.45
      },
      {
        "itemId": "item_0093",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_037",
      "skill_042"
    ]
  },
  {
    "id": "monster_0157",
    "name": "Tier 4 Neon Wraith Mark-157",
    "level": 157,
    "tier": 4,
    "baseElement": "cryo",
    "stats": {
      "hp": 7165,
      "maxHp": 7165,
      "ap": 7,
      "attack": 1271,
      "tech": 1111,
      "armor": 476,
      "speed": 27,
      "critChance": 0.12,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 17,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0472",
        "chance": 0.45
      },
      {
        "itemId": "item_0100",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_038",
      "skill_043"
    ]
  },
  {
    "id": "monster_0158",
    "name": "Tier 4 Quantum Golem Mark-158",
    "level": 158,
    "tier": 4,
    "baseElement": "shock",
    "stats": {
      "hp": 7210,
      "maxHp": 7210,
      "ap": 7,
      "attack": 1279,
      "tech": 1118,
      "armor": 479,
      "speed": 28,
      "critChance": 0.13,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 18,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0475",
        "chance": 0.45
      },
      {
        "itemId": "item_0107",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_039",
      "skill_044"
    ]
  },
  {
    "id": "monster_0159",
    "name": "Tier 4 Vortex Drake Mark-159",
    "level": 159,
    "tier": 4,
    "baseElement": "void",
    "stats": {
      "hp": 7255,
      "maxHp": 7255,
      "ap": 7,
      "attack": 1287,
      "tech": 1125,
      "armor": 482,
      "speed": 29,
      "critChance": 0.14,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 19,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0478",
        "chance": 0.45
      },
      {
        "itemId": "item_0114",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_040",
      "skill_045"
    ]
  },
  {
    "id": "monster_0160",
    "name": "Tier 4 Cyber-Revenant Mark-160",
    "level": 160,
    "tier": 4,
    "baseElement": "physical",
    "stats": {
      "hp": 7300,
      "maxHp": 7300,
      "ap": 7,
      "attack": 1295,
      "tech": 1132,
      "armor": 485,
      "speed": 10,
      "critChance": 0.15,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 20,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0481",
        "chance": 0.45
      },
      {
        "itemId": "item_0121",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_041",
      "skill_046"
    ]
  },
  {
    "id": "monster_0161",
    "name": "Tier 4 Plasma Sentinel Mark-161",
    "level": 161,
    "tier": 4,
    "baseElement": "plasma",
    "stats": {
      "hp": 7345,
      "maxHp": 7345,
      "ap": 7,
      "attack": 1303,
      "tech": 1139,
      "armor": 488,
      "speed": 11,
      "critChance": 0.16,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 21,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0484",
        "chance": 0.45
      },
      {
        "itemId": "item_0128",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_042",
      "skill_047"
    ]
  },
  {
    "id": "monster_0162",
    "name": "Tier 4 Void Stalker Mark-162",
    "level": 162,
    "tier": 4,
    "baseElement": "cryo",
    "stats": {
      "hp": 7390,
      "maxHp": 7390,
      "ap": 7,
      "attack": 1311,
      "tech": 1146,
      "armor": 491,
      "speed": 12,
      "critChance": 0.17,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 22,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0487",
        "chance": 0.45
      },
      {
        "itemId": "item_0135",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_043",
      "skill_048"
    ]
  },
  {
    "id": "monster_0163",
    "name": "Tier 4 Glitch Fiend Mark-163",
    "level": 163,
    "tier": 4,
    "baseElement": "shock",
    "stats": {
      "hp": 7435,
      "maxHp": 7435,
      "ap": 7,
      "attack": 1319,
      "tech": 1153,
      "armor": 494,
      "speed": 13,
      "critChance": 0.18,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 23,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0490",
        "chance": 0.45
      },
      {
        "itemId": "item_0142",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_044",
      "skill_049"
    ]
  },
  {
    "id": "monster_0164",
    "name": "Tier 4 Nanite Swarm Mark-164",
    "level": 164,
    "tier": 4,
    "baseElement": "void",
    "stats": {
      "hp": 7480,
      "maxHp": 7480,
      "ap": 7,
      "attack": 1327,
      "tech": 1160,
      "armor": 497,
      "speed": 14,
      "critChance": 0.19,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 24,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0493",
        "chance": 0.45
      },
      {
        "itemId": "item_0149",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_045",
      "skill_050"
    ]
  },
  {
    "id": "monster_0165",
    "name": "Tier 4 Chrono Titan Mark-165",
    "level": 165,
    "tier": 4,
    "baseElement": "physical",
    "stats": {
      "hp": 7525,
      "maxHp": 7525,
      "ap": 7,
      "attack": 1335,
      "tech": 1167,
      "armor": 500,
      "speed": 15,
      "critChance": 0.05,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 25,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0496",
        "chance": 0.45
      },
      {
        "itemId": "item_0156",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_046",
      "skill_051"
    ]
  },
  {
    "id": "monster_0166",
    "name": "Tier 4 Bionic Berserker Mark-166",
    "level": 166,
    "tier": 4,
    "baseElement": "plasma",
    "stats": {
      "hp": 7570,
      "maxHp": 7570,
      "ap": 7,
      "attack": 1343,
      "tech": 1174,
      "armor": 503,
      "speed": 16,
      "critChance": 0.06,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 26,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0499",
        "chance": 0.45
      },
      {
        "itemId": "item_0163",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_047",
      "skill_052"
    ]
  },
  {
    "id": "monster_0167",
    "name": "Tier 4 Neon Wraith Mark-167",
    "level": 167,
    "tier": 4,
    "baseElement": "cryo",
    "stats": {
      "hp": 7615,
      "maxHp": 7615,
      "ap": 7,
      "attack": 1351,
      "tech": 1181,
      "armor": 506,
      "speed": 17,
      "critChance": 0.07,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 27,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0002",
        "chance": 0.45
      },
      {
        "itemId": "item_0170",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_048",
      "skill_053"
    ]
  },
  {
    "id": "monster_0168",
    "name": "Tier 4 Quantum Golem Mark-168",
    "level": 168,
    "tier": 4,
    "baseElement": "shock",
    "stats": {
      "hp": 7660,
      "maxHp": 7660,
      "ap": 7,
      "attack": 1359,
      "tech": 1188,
      "armor": 509,
      "speed": 18,
      "critChance": 0.08,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 28,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0005",
        "chance": 0.45
      },
      {
        "itemId": "item_0177",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_049",
      "skill_054"
    ]
  },
  {
    "id": "monster_0169",
    "name": "Tier 4 Vortex Drake Mark-169",
    "level": 169,
    "tier": 4,
    "baseElement": "void",
    "stats": {
      "hp": 7705,
      "maxHp": 7705,
      "ap": 7,
      "attack": 1367,
      "tech": 1195,
      "armor": 512,
      "speed": 19,
      "critChance": 0.09,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 29,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0008",
        "chance": 0.45
      },
      {
        "itemId": "item_0184",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_050",
      "skill_055"
    ]
  },
  {
    "id": "monster_0170",
    "name": "Tier 4 Cyber-Revenant Mark-170",
    "level": 170,
    "tier": 4,
    "baseElement": "physical",
    "stats": {
      "hp": 7750,
      "maxHp": 7750,
      "ap": 7,
      "attack": 1375,
      "tech": 1202,
      "armor": 515,
      "speed": 20,
      "critChance": 0.1,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 30,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0011",
        "chance": 0.45
      },
      {
        "itemId": "item_0191",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_051",
      "skill_056"
    ]
  },
  {
    "id": "monster_0171",
    "name": "Tier 4 Plasma Sentinel Mark-171",
    "level": 171,
    "tier": 4,
    "baseElement": "plasma",
    "stats": {
      "hp": 7795,
      "maxHp": 7795,
      "ap": 7,
      "attack": 1383,
      "tech": 1209,
      "armor": 518,
      "speed": 21,
      "critChance": 0.11,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 31,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0014",
        "chance": 0.45
      },
      {
        "itemId": "item_0198",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_052",
      "skill_057"
    ]
  },
  {
    "id": "monster_0172",
    "name": "Tier 4 Void Stalker Mark-172",
    "level": 172,
    "tier": 4,
    "baseElement": "cryo",
    "stats": {
      "hp": 7840,
      "maxHp": 7840,
      "ap": 7,
      "attack": 1391,
      "tech": 1216,
      "armor": 521,
      "speed": 22,
      "critChance": 0.12,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 32,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0017",
        "chance": 0.45
      },
      {
        "itemId": "item_0205",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_053",
      "skill_058"
    ]
  },
  {
    "id": "monster_0173",
    "name": "Tier 4 Glitch Fiend Mark-173",
    "level": 173,
    "tier": 4,
    "baseElement": "shock",
    "stats": {
      "hp": 7885,
      "maxHp": 7885,
      "ap": 7,
      "attack": 1399,
      "tech": 1223,
      "armor": 524,
      "speed": 23,
      "critChance": 0.13,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 33,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0020",
        "chance": 0.45
      },
      {
        "itemId": "item_0212",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_054",
      "skill_059"
    ]
  },
  {
    "id": "monster_0174",
    "name": "Tier 4 Nanite Swarm Mark-174",
    "level": 174,
    "tier": 4,
    "baseElement": "void",
    "stats": {
      "hp": 7930,
      "maxHp": 7930,
      "ap": 7,
      "attack": 1407,
      "tech": 1230,
      "armor": 527,
      "speed": 24,
      "critChance": 0.14,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 34,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0023",
        "chance": 0.45
      },
      {
        "itemId": "item_0219",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_055",
      "skill_060"
    ]
  },
  {
    "id": "monster_0175",
    "name": "Tier 4 Chrono Titan Mark-175",
    "level": 175,
    "tier": 4,
    "baseElement": "physical",
    "stats": {
      "hp": 7975,
      "maxHp": 7975,
      "ap": 7,
      "attack": 1415,
      "tech": 1237,
      "armor": 530,
      "speed": 25,
      "critChance": 0.15,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 35,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0026",
        "chance": 0.45
      },
      {
        "itemId": "item_0226",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_056",
      "skill_061"
    ]
  },
  {
    "id": "monster_0176",
    "name": "Tier 4 Bionic Berserker Mark-176",
    "level": 176,
    "tier": 4,
    "baseElement": "plasma",
    "stats": {
      "hp": 8020,
      "maxHp": 8020,
      "ap": 7,
      "attack": 1423,
      "tech": 1244,
      "armor": 533,
      "speed": 26,
      "critChance": 0.16,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 36,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0029",
        "chance": 0.45
      },
      {
        "itemId": "item_0233",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_057",
      "skill_062"
    ]
  },
  {
    "id": "monster_0177",
    "name": "Tier 4 Neon Wraith Mark-177",
    "level": 177,
    "tier": 4,
    "baseElement": "cryo",
    "stats": {
      "hp": 8065,
      "maxHp": 8065,
      "ap": 7,
      "attack": 1431,
      "tech": 1251,
      "armor": 536,
      "speed": 27,
      "critChance": 0.17,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 37,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0032",
        "chance": 0.45
      },
      {
        "itemId": "item_0240",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_058",
      "skill_063"
    ]
  },
  {
    "id": "monster_0178",
    "name": "Tier 4 Quantum Golem Mark-178",
    "level": 178,
    "tier": 4,
    "baseElement": "shock",
    "stats": {
      "hp": 8110,
      "maxHp": 8110,
      "ap": 7,
      "attack": 1439,
      "tech": 1258,
      "armor": 539,
      "speed": 28,
      "critChance": 0.18,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 38,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0035",
        "chance": 0.45
      },
      {
        "itemId": "item_0247",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_059",
      "skill_064"
    ]
  },
  {
    "id": "monster_0179",
    "name": "Tier 4 Vortex Drake Mark-179",
    "level": 179,
    "tier": 4,
    "baseElement": "void",
    "stats": {
      "hp": 8155,
      "maxHp": 8155,
      "ap": 7,
      "attack": 1447,
      "tech": 1265,
      "armor": 542,
      "speed": 29,
      "critChance": 0.19,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 39,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0038",
        "chance": 0.45
      },
      {
        "itemId": "item_0254",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_060",
      "skill_065"
    ]
  },
  {
    "id": "monster_0180",
    "name": "Tier 4 Cyber-Revenant Mark-180",
    "level": 180,
    "tier": 4,
    "baseElement": "physical",
    "stats": {
      "hp": 8200,
      "maxHp": 8200,
      "ap": 7,
      "attack": 1455,
      "tech": 1272,
      "armor": 545,
      "speed": 10,
      "critChance": 0.05,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 10,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0041",
        "chance": 0.45
      },
      {
        "itemId": "item_0261",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_061",
      "skill_066"
    ]
  },
  {
    "id": "monster_0181",
    "name": "Tier 4 Plasma Sentinel Mark-181",
    "level": 181,
    "tier": 4,
    "baseElement": "plasma",
    "stats": {
      "hp": 8245,
      "maxHp": 8245,
      "ap": 7,
      "attack": 1463,
      "tech": 1279,
      "armor": 548,
      "speed": 11,
      "critChance": 0.06,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 11,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0044",
        "chance": 0.45
      },
      {
        "itemId": "item_0268",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_062",
      "skill_067"
    ]
  },
  {
    "id": "monster_0182",
    "name": "Tier 4 Void Stalker Mark-182",
    "level": 182,
    "tier": 4,
    "baseElement": "cryo",
    "stats": {
      "hp": 8290,
      "maxHp": 8290,
      "ap": 7,
      "attack": 1471,
      "tech": 1286,
      "armor": 551,
      "speed": 12,
      "critChance": 0.07,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 12,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0047",
        "chance": 0.45
      },
      {
        "itemId": "item_0275",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_063",
      "skill_068"
    ]
  },
  {
    "id": "monster_0183",
    "name": "Tier 4 Glitch Fiend Mark-183",
    "level": 183,
    "tier": 4,
    "baseElement": "shock",
    "stats": {
      "hp": 8335,
      "maxHp": 8335,
      "ap": 7,
      "attack": 1479,
      "tech": 1293,
      "armor": 554,
      "speed": 13,
      "critChance": 0.08,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 13,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0050",
        "chance": 0.45
      },
      {
        "itemId": "item_0282",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_064",
      "skill_069"
    ]
  },
  {
    "id": "monster_0184",
    "name": "Tier 4 Nanite Swarm Mark-184",
    "level": 184,
    "tier": 4,
    "baseElement": "void",
    "stats": {
      "hp": 8380,
      "maxHp": 8380,
      "ap": 7,
      "attack": 1487,
      "tech": 1300,
      "armor": 557,
      "speed": 14,
      "critChance": 0.09,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 14,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0053",
        "chance": 0.45
      },
      {
        "itemId": "item_0289",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_065",
      "skill_070"
    ]
  },
  {
    "id": "monster_0185",
    "name": "Tier 4 Chrono Titan Mark-185",
    "level": 185,
    "tier": 4,
    "baseElement": "physical",
    "stats": {
      "hp": 8425,
      "maxHp": 8425,
      "ap": 7,
      "attack": 1495,
      "tech": 1307,
      "armor": 560,
      "speed": 15,
      "critChance": 0.1,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 15,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0056",
        "chance": 0.45
      },
      {
        "itemId": "item_0296",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_066",
      "skill_071"
    ]
  },
  {
    "id": "monster_0186",
    "name": "Tier 4 Bionic Berserker Mark-186",
    "level": 186,
    "tier": 4,
    "baseElement": "plasma",
    "stats": {
      "hp": 8470,
      "maxHp": 8470,
      "ap": 7,
      "attack": 1503,
      "tech": 1314,
      "armor": 563,
      "speed": 16,
      "critChance": 0.11,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 16,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0059",
        "chance": 0.45
      },
      {
        "itemId": "item_0303",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_067",
      "skill_072"
    ]
  },
  {
    "id": "monster_0187",
    "name": "Tier 4 Neon Wraith Mark-187",
    "level": 187,
    "tier": 4,
    "baseElement": "cryo",
    "stats": {
      "hp": 8515,
      "maxHp": 8515,
      "ap": 7,
      "attack": 1511,
      "tech": 1321,
      "armor": 566,
      "speed": 17,
      "critChance": 0.12,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 17,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0062",
        "chance": 0.45
      },
      {
        "itemId": "item_0310",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_068",
      "skill_073"
    ]
  },
  {
    "id": "monster_0188",
    "name": "Tier 4 Quantum Golem Mark-188",
    "level": 188,
    "tier": 4,
    "baseElement": "shock",
    "stats": {
      "hp": 8560,
      "maxHp": 8560,
      "ap": 7,
      "attack": 1519,
      "tech": 1328,
      "armor": 569,
      "speed": 18,
      "critChance": 0.13,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 18,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0065",
        "chance": 0.45
      },
      {
        "itemId": "item_0317",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_069",
      "skill_074"
    ]
  },
  {
    "id": "monster_0189",
    "name": "Tier 4 Vortex Drake Mark-189",
    "level": 189,
    "tier": 4,
    "baseElement": "void",
    "stats": {
      "hp": 8605,
      "maxHp": 8605,
      "ap": 7,
      "attack": 1527,
      "tech": 1335,
      "armor": 572,
      "speed": 19,
      "critChance": 0.14,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 19,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0068",
        "chance": 0.45
      },
      {
        "itemId": "item_0324",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_070",
      "skill_075"
    ]
  },
  {
    "id": "monster_0190",
    "name": "Tier 4 Cyber-Revenant Mark-190",
    "level": 190,
    "tier": 4,
    "baseElement": "physical",
    "stats": {
      "hp": 8650,
      "maxHp": 8650,
      "ap": 7,
      "attack": 1535,
      "tech": 1342,
      "armor": 575,
      "speed": 20,
      "critChance": 0.15,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 20,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0071",
        "chance": 0.45
      },
      {
        "itemId": "item_0331",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_071",
      "skill_076"
    ]
  },
  {
    "id": "monster_0191",
    "name": "Tier 4 Plasma Sentinel Mark-191",
    "level": 191,
    "tier": 4,
    "baseElement": "plasma",
    "stats": {
      "hp": 8695,
      "maxHp": 8695,
      "ap": 7,
      "attack": 1543,
      "tech": 1349,
      "armor": 578,
      "speed": 21,
      "critChance": 0.16,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 21,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0074",
        "chance": 0.45
      },
      {
        "itemId": "item_0338",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_072",
      "skill_077"
    ]
  },
  {
    "id": "monster_0192",
    "name": "Tier 4 Void Stalker Mark-192",
    "level": 192,
    "tier": 4,
    "baseElement": "cryo",
    "stats": {
      "hp": 8740,
      "maxHp": 8740,
      "ap": 7,
      "attack": 1551,
      "tech": 1356,
      "armor": 581,
      "speed": 22,
      "critChance": 0.17,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 22,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0077",
        "chance": 0.45
      },
      {
        "itemId": "item_0345",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_073",
      "skill_078"
    ]
  },
  {
    "id": "monster_0193",
    "name": "Tier 4 Glitch Fiend Mark-193",
    "level": 193,
    "tier": 4,
    "baseElement": "shock",
    "stats": {
      "hp": 8785,
      "maxHp": 8785,
      "ap": 7,
      "attack": 1559,
      "tech": 1363,
      "armor": 584,
      "speed": 23,
      "critChance": 0.18,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 23,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0080",
        "chance": 0.45
      },
      {
        "itemId": "item_0352",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_074",
      "skill_079"
    ]
  },
  {
    "id": "monster_0194",
    "name": "Tier 4 Nanite Swarm Mark-194",
    "level": 194,
    "tier": 4,
    "baseElement": "void",
    "stats": {
      "hp": 8830,
      "maxHp": 8830,
      "ap": 7,
      "attack": 1567,
      "tech": 1370,
      "armor": 587,
      "speed": 24,
      "critChance": 0.19,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 24,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0083",
        "chance": 0.45
      },
      {
        "itemId": "item_0359",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_075",
      "skill_080"
    ]
  },
  {
    "id": "monster_0195",
    "name": "Tier 4 Chrono Titan Mark-195",
    "level": 195,
    "tier": 4,
    "baseElement": "physical",
    "stats": {
      "hp": 8875,
      "maxHp": 8875,
      "ap": 7,
      "attack": 1575,
      "tech": 1377,
      "armor": 590,
      "speed": 25,
      "critChance": 0.05,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 25,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0086",
        "chance": 0.45
      },
      {
        "itemId": "item_0366",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_076",
      "skill_081"
    ]
  },
  {
    "id": "monster_0196",
    "name": "Tier 4 Bionic Berserker Mark-196",
    "level": 196,
    "tier": 4,
    "baseElement": "plasma",
    "stats": {
      "hp": 8920,
      "maxHp": 8920,
      "ap": 7,
      "attack": 1583,
      "tech": 1384,
      "armor": 593,
      "speed": 26,
      "critChance": 0.06,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 26,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0089",
        "chance": 0.45
      },
      {
        "itemId": "item_0373",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_077",
      "skill_082"
    ]
  },
  {
    "id": "monster_0197",
    "name": "Tier 4 Neon Wraith Mark-197",
    "level": 197,
    "tier": 4,
    "baseElement": "cryo",
    "stats": {
      "hp": 8965,
      "maxHp": 8965,
      "ap": 7,
      "attack": 1591,
      "tech": 1391,
      "armor": 596,
      "speed": 27,
      "critChance": 0.07,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 27,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0092",
        "chance": 0.45
      },
      {
        "itemId": "item_0380",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_078",
      "skill_083"
    ]
  },
  {
    "id": "monster_0198",
    "name": "Tier 4 Quantum Golem Mark-198",
    "level": 198,
    "tier": 4,
    "baseElement": "shock",
    "stats": {
      "hp": 9010,
      "maxHp": 9010,
      "ap": 7,
      "attack": 1599,
      "tech": 1398,
      "armor": 599,
      "speed": 28,
      "critChance": 0.08,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 28,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0095",
        "chance": 0.45
      },
      {
        "itemId": "item_0387",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_079",
      "skill_084"
    ]
  },
  {
    "id": "monster_0199",
    "name": "Tier 4 Vortex Drake Mark-199",
    "level": 199,
    "tier": 4,
    "baseElement": "void",
    "stats": {
      "hp": 9055,
      "maxHp": 9055,
      "ap": 7,
      "attack": 1607,
      "tech": 1405,
      "armor": 602,
      "speed": 29,
      "critChance": 0.09,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 29,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0098",
        "chance": 0.45
      },
      {
        "itemId": "item_0394",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_080",
      "skill_085"
    ]
  },
  {
    "id": "monster_0200",
    "name": "Tier 5 Cyber-Revenant Mark-200",
    "level": 200,
    "tier": 5,
    "baseElement": "physical",
    "stats": {
      "hp": 9100,
      "maxHp": 9100,
      "ap": 8,
      "attack": 1615,
      "tech": 1412,
      "armor": 605,
      "speed": 10,
      "critChance": 0.1,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 30,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0101",
        "chance": 0.45
      },
      {
        "itemId": "item_0401",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_081",
      "skill_086"
    ]
  },
  {
    "id": "monster_0201",
    "name": "Tier 5 Plasma Sentinel Mark-201",
    "level": 201,
    "tier": 5,
    "baseElement": "plasma",
    "stats": {
      "hp": 9145,
      "maxHp": 9145,
      "ap": 8,
      "attack": 1623,
      "tech": 1419,
      "armor": 608,
      "speed": 11,
      "critChance": 0.11,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 31,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0104",
        "chance": 0.45
      },
      {
        "itemId": "item_0408",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_082",
      "skill_087"
    ]
  },
  {
    "id": "monster_0202",
    "name": "Tier 5 Void Stalker Mark-202",
    "level": 202,
    "tier": 5,
    "baseElement": "cryo",
    "stats": {
      "hp": 9190,
      "maxHp": 9190,
      "ap": 8,
      "attack": 1631,
      "tech": 1426,
      "armor": 611,
      "speed": 12,
      "critChance": 0.12,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 32,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0107",
        "chance": 0.45
      },
      {
        "itemId": "item_0415",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_083",
      "skill_088"
    ]
  },
  {
    "id": "monster_0203",
    "name": "Tier 5 Glitch Fiend Mark-203",
    "level": 203,
    "tier": 5,
    "baseElement": "shock",
    "stats": {
      "hp": 9235,
      "maxHp": 9235,
      "ap": 8,
      "attack": 1639,
      "tech": 1433,
      "armor": 614,
      "speed": 13,
      "critChance": 0.13,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 33,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0110",
        "chance": 0.45
      },
      {
        "itemId": "item_0422",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_084",
      "skill_089"
    ]
  },
  {
    "id": "monster_0204",
    "name": "Tier 5 Nanite Swarm Mark-204",
    "level": 204,
    "tier": 5,
    "baseElement": "void",
    "stats": {
      "hp": 9280,
      "maxHp": 9280,
      "ap": 8,
      "attack": 1647,
      "tech": 1440,
      "armor": 617,
      "speed": 14,
      "critChance": 0.14,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 34,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0113",
        "chance": 0.45
      },
      {
        "itemId": "item_0429",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_085",
      "skill_090"
    ]
  },
  {
    "id": "monster_0205",
    "name": "Tier 5 Chrono Titan Mark-205",
    "level": 205,
    "tier": 5,
    "baseElement": "physical",
    "stats": {
      "hp": 9325,
      "maxHp": 9325,
      "ap": 8,
      "attack": 1655,
      "tech": 1447,
      "armor": 620,
      "speed": 15,
      "critChance": 0.15,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 35,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0116",
        "chance": 0.45
      },
      {
        "itemId": "item_0436",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_086",
      "skill_091"
    ]
  },
  {
    "id": "monster_0206",
    "name": "Tier 5 Bionic Berserker Mark-206",
    "level": 206,
    "tier": 5,
    "baseElement": "plasma",
    "stats": {
      "hp": 9370,
      "maxHp": 9370,
      "ap": 8,
      "attack": 1663,
      "tech": 1454,
      "armor": 623,
      "speed": 16,
      "critChance": 0.16,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 36,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0119",
        "chance": 0.45
      },
      {
        "itemId": "item_0443",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_087",
      "skill_092"
    ]
  },
  {
    "id": "monster_0207",
    "name": "Tier 5 Neon Wraith Mark-207",
    "level": 207,
    "tier": 5,
    "baseElement": "cryo",
    "stats": {
      "hp": 9415,
      "maxHp": 9415,
      "ap": 8,
      "attack": 1671,
      "tech": 1461,
      "armor": 626,
      "speed": 17,
      "critChance": 0.17,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 37,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0122",
        "chance": 0.45
      },
      {
        "itemId": "item_0450",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_088",
      "skill_093"
    ]
  },
  {
    "id": "monster_0208",
    "name": "Tier 5 Quantum Golem Mark-208",
    "level": 208,
    "tier": 5,
    "baseElement": "shock",
    "stats": {
      "hp": 9460,
      "maxHp": 9460,
      "ap": 8,
      "attack": 1679,
      "tech": 1468,
      "armor": 629,
      "speed": 18,
      "critChance": 0.18,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 38,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0125",
        "chance": 0.45
      },
      {
        "itemId": "item_0457",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_089",
      "skill_094"
    ]
  },
  {
    "id": "monster_0209",
    "name": "Tier 5 Vortex Drake Mark-209",
    "level": 209,
    "tier": 5,
    "baseElement": "void",
    "stats": {
      "hp": 9505,
      "maxHp": 9505,
      "ap": 8,
      "attack": 1687,
      "tech": 1475,
      "armor": 632,
      "speed": 19,
      "critChance": 0.19,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 39,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0128",
        "chance": 0.45
      },
      {
        "itemId": "item_0464",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_090",
      "skill_095"
    ]
  },
  {
    "id": "monster_0210",
    "name": "Tier 5 Cyber-Revenant Mark-210",
    "level": 210,
    "tier": 5,
    "baseElement": "physical",
    "stats": {
      "hp": 9550,
      "maxHp": 9550,
      "ap": 8,
      "attack": 1695,
      "tech": 1482,
      "armor": 635,
      "speed": 20,
      "critChance": 0.05,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 10,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0131",
        "chance": 0.45
      },
      {
        "itemId": "item_0471",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_091",
      "skill_096"
    ]
  },
  {
    "id": "monster_0211",
    "name": "Tier 5 Plasma Sentinel Mark-211",
    "level": 211,
    "tier": 5,
    "baseElement": "plasma",
    "stats": {
      "hp": 9595,
      "maxHp": 9595,
      "ap": 8,
      "attack": 1703,
      "tech": 1489,
      "armor": 638,
      "speed": 21,
      "critChance": 0.06,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 11,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0134",
        "chance": 0.45
      },
      {
        "itemId": "item_0478",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_092",
      "skill_097"
    ]
  },
  {
    "id": "monster_0212",
    "name": "Tier 5 Void Stalker Mark-212",
    "level": 212,
    "tier": 5,
    "baseElement": "cryo",
    "stats": {
      "hp": 9640,
      "maxHp": 9640,
      "ap": 8,
      "attack": 1711,
      "tech": 1496,
      "armor": 641,
      "speed": 22,
      "critChance": 0.07,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 12,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0137",
        "chance": 0.45
      },
      {
        "itemId": "item_0485",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_093",
      "skill_098"
    ]
  },
  {
    "id": "monster_0213",
    "name": "Tier 5 Glitch Fiend Mark-213",
    "level": 213,
    "tier": 5,
    "baseElement": "shock",
    "stats": {
      "hp": 9685,
      "maxHp": 9685,
      "ap": 8,
      "attack": 1719,
      "tech": 1503,
      "armor": 644,
      "speed": 23,
      "critChance": 0.08,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 13,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0140",
        "chance": 0.45
      },
      {
        "itemId": "item_0492",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_094",
      "skill_099"
    ]
  },
  {
    "id": "monster_0214",
    "name": "Tier 5 Nanite Swarm Mark-214",
    "level": 214,
    "tier": 5,
    "baseElement": "void",
    "stats": {
      "hp": 9730,
      "maxHp": 9730,
      "ap": 8,
      "attack": 1727,
      "tech": 1510,
      "armor": 647,
      "speed": 24,
      "critChance": 0.09,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 14,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0143",
        "chance": 0.45
      },
      {
        "itemId": "item_0499",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_095",
      "skill_100"
    ]
  },
  {
    "id": "monster_0215",
    "name": "Tier 5 Chrono Titan Mark-215",
    "level": 215,
    "tier": 5,
    "baseElement": "physical",
    "stats": {
      "hp": 9775,
      "maxHp": 9775,
      "ap": 8,
      "attack": 1735,
      "tech": 1517,
      "armor": 650,
      "speed": 25,
      "critChance": 0.1,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 15,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0146",
        "chance": 0.45
      },
      {
        "itemId": "item_0006",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_096",
      "skill_101"
    ]
  },
  {
    "id": "monster_0216",
    "name": "Tier 5 Bionic Berserker Mark-216",
    "level": 216,
    "tier": 5,
    "baseElement": "plasma",
    "stats": {
      "hp": 9820,
      "maxHp": 9820,
      "ap": 8,
      "attack": 1743,
      "tech": 1524,
      "armor": 653,
      "speed": 26,
      "critChance": 0.11,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 16,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0149",
        "chance": 0.45
      },
      {
        "itemId": "item_0013",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_097",
      "skill_102"
    ]
  },
  {
    "id": "monster_0217",
    "name": "Tier 5 Neon Wraith Mark-217",
    "level": 217,
    "tier": 5,
    "baseElement": "cryo",
    "stats": {
      "hp": 9865,
      "maxHp": 9865,
      "ap": 8,
      "attack": 1751,
      "tech": 1531,
      "armor": 656,
      "speed": 27,
      "critChance": 0.12,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 17,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0152",
        "chance": 0.45
      },
      {
        "itemId": "item_0020",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_098",
      "skill_103"
    ]
  },
  {
    "id": "monster_0218",
    "name": "Tier 5 Quantum Golem Mark-218",
    "level": 218,
    "tier": 5,
    "baseElement": "shock",
    "stats": {
      "hp": 9910,
      "maxHp": 9910,
      "ap": 8,
      "attack": 1759,
      "tech": 1538,
      "armor": 659,
      "speed": 28,
      "critChance": 0.13,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 18,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0155",
        "chance": 0.45
      },
      {
        "itemId": "item_0027",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_099",
      "skill_104"
    ]
  },
  {
    "id": "monster_0219",
    "name": "Tier 5 Vortex Drake Mark-219",
    "level": 219,
    "tier": 5,
    "baseElement": "void",
    "stats": {
      "hp": 9955,
      "maxHp": 9955,
      "ap": 8,
      "attack": 1767,
      "tech": 1545,
      "armor": 662,
      "speed": 29,
      "critChance": 0.14,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 19,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0158",
        "chance": 0.45
      },
      {
        "itemId": "item_0034",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_100",
      "skill_105"
    ]
  },
  {
    "id": "monster_0220",
    "name": "Tier 5 Cyber-Revenant Mark-220",
    "level": 220,
    "tier": 5,
    "baseElement": "physical",
    "stats": {
      "hp": 10000,
      "maxHp": 10000,
      "ap": 8,
      "attack": 1775,
      "tech": 1552,
      "armor": 665,
      "speed": 10,
      "critChance": 0.15,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 20,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0161",
        "chance": 0.45
      },
      {
        "itemId": "item_0041",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_101",
      "skill_106"
    ]
  },
  {
    "id": "monster_0221",
    "name": "Tier 5 Plasma Sentinel Mark-221",
    "level": 221,
    "tier": 5,
    "baseElement": "plasma",
    "stats": {
      "hp": 10045,
      "maxHp": 10045,
      "ap": 8,
      "attack": 1783,
      "tech": 1559,
      "armor": 668,
      "speed": 11,
      "critChance": 0.16,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 21,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0164",
        "chance": 0.45
      },
      {
        "itemId": "item_0048",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_102",
      "skill_107"
    ]
  },
  {
    "id": "monster_0222",
    "name": "Tier 5 Void Stalker Mark-222",
    "level": 222,
    "tier": 5,
    "baseElement": "cryo",
    "stats": {
      "hp": 10090,
      "maxHp": 10090,
      "ap": 8,
      "attack": 1791,
      "tech": 1566,
      "armor": 671,
      "speed": 12,
      "critChance": 0.17,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 22,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0167",
        "chance": 0.45
      },
      {
        "itemId": "item_0055",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_103",
      "skill_108"
    ]
  },
  {
    "id": "monster_0223",
    "name": "Tier 5 Glitch Fiend Mark-223",
    "level": 223,
    "tier": 5,
    "baseElement": "shock",
    "stats": {
      "hp": 10135,
      "maxHp": 10135,
      "ap": 8,
      "attack": 1799,
      "tech": 1573,
      "armor": 674,
      "speed": 13,
      "critChance": 0.18,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 23,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0170",
        "chance": 0.45
      },
      {
        "itemId": "item_0062",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_104",
      "skill_109"
    ]
  },
  {
    "id": "monster_0224",
    "name": "Tier 5 Nanite Swarm Mark-224",
    "level": 224,
    "tier": 5,
    "baseElement": "void",
    "stats": {
      "hp": 10180,
      "maxHp": 10180,
      "ap": 8,
      "attack": 1807,
      "tech": 1580,
      "armor": 677,
      "speed": 14,
      "critChance": 0.19,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 24,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0173",
        "chance": 0.45
      },
      {
        "itemId": "item_0069",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_105",
      "skill_110"
    ]
  },
  {
    "id": "monster_0225",
    "name": "Tier 5 Chrono Titan Mark-225",
    "level": 225,
    "tier": 5,
    "baseElement": "physical",
    "stats": {
      "hp": 10225,
      "maxHp": 10225,
      "ap": 8,
      "attack": 1815,
      "tech": 1587,
      "armor": 680,
      "speed": 15,
      "critChance": 0.05,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 25,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0176",
        "chance": 0.45
      },
      {
        "itemId": "item_0076",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_106",
      "skill_111"
    ]
  },
  {
    "id": "monster_0226",
    "name": "Tier 5 Bionic Berserker Mark-226",
    "level": 226,
    "tier": 5,
    "baseElement": "plasma",
    "stats": {
      "hp": 10270,
      "maxHp": 10270,
      "ap": 8,
      "attack": 1823,
      "tech": 1594,
      "armor": 683,
      "speed": 16,
      "critChance": 0.06,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 26,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0179",
        "chance": 0.45
      },
      {
        "itemId": "item_0083",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_107",
      "skill_112"
    ]
  },
  {
    "id": "monster_0227",
    "name": "Tier 5 Neon Wraith Mark-227",
    "level": 227,
    "tier": 5,
    "baseElement": "cryo",
    "stats": {
      "hp": 10315,
      "maxHp": 10315,
      "ap": 8,
      "attack": 1831,
      "tech": 1601,
      "armor": 686,
      "speed": 17,
      "critChance": 0.07,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 27,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0182",
        "chance": 0.45
      },
      {
        "itemId": "item_0090",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_108",
      "skill_113"
    ]
  },
  {
    "id": "monster_0228",
    "name": "Tier 5 Quantum Golem Mark-228",
    "level": 228,
    "tier": 5,
    "baseElement": "shock",
    "stats": {
      "hp": 10360,
      "maxHp": 10360,
      "ap": 8,
      "attack": 1839,
      "tech": 1608,
      "armor": 689,
      "speed": 18,
      "critChance": 0.08,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 28,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0185",
        "chance": 0.45
      },
      {
        "itemId": "item_0097",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_109",
      "skill_114"
    ]
  },
  {
    "id": "monster_0229",
    "name": "Tier 5 Vortex Drake Mark-229",
    "level": 229,
    "tier": 5,
    "baseElement": "void",
    "stats": {
      "hp": 10405,
      "maxHp": 10405,
      "ap": 8,
      "attack": 1847,
      "tech": 1615,
      "armor": 692,
      "speed": 19,
      "critChance": 0.09,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 29,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0188",
        "chance": 0.45
      },
      {
        "itemId": "item_0104",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_110",
      "skill_115"
    ]
  },
  {
    "id": "monster_0230",
    "name": "Tier 5 Cyber-Revenant Mark-230",
    "level": 230,
    "tier": 5,
    "baseElement": "physical",
    "stats": {
      "hp": 10450,
      "maxHp": 10450,
      "ap": 8,
      "attack": 1855,
      "tech": 1622,
      "armor": 695,
      "speed": 20,
      "critChance": 0.1,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 30,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0191",
        "chance": 0.45
      },
      {
        "itemId": "item_0111",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_111",
      "skill_116"
    ]
  },
  {
    "id": "monster_0231",
    "name": "Tier 5 Plasma Sentinel Mark-231",
    "level": 231,
    "tier": 5,
    "baseElement": "plasma",
    "stats": {
      "hp": 10495,
      "maxHp": 10495,
      "ap": 8,
      "attack": 1863,
      "tech": 1629,
      "armor": 698,
      "speed": 21,
      "critChance": 0.11,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 31,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0194",
        "chance": 0.45
      },
      {
        "itemId": "item_0118",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_112",
      "skill_117"
    ]
  },
  {
    "id": "monster_0232",
    "name": "Tier 5 Void Stalker Mark-232",
    "level": 232,
    "tier": 5,
    "baseElement": "cryo",
    "stats": {
      "hp": 10540,
      "maxHp": 10540,
      "ap": 8,
      "attack": 1871,
      "tech": 1636,
      "armor": 701,
      "speed": 22,
      "critChance": 0.12,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 32,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0197",
        "chance": 0.45
      },
      {
        "itemId": "item_0125",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_113",
      "skill_118"
    ]
  },
  {
    "id": "monster_0233",
    "name": "Tier 5 Glitch Fiend Mark-233",
    "level": 233,
    "tier": 5,
    "baseElement": "shock",
    "stats": {
      "hp": 10585,
      "maxHp": 10585,
      "ap": 8,
      "attack": 1879,
      "tech": 1643,
      "armor": 704,
      "speed": 23,
      "critChance": 0.13,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 33,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0200",
        "chance": 0.45
      },
      {
        "itemId": "item_0132",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_114",
      "skill_119"
    ]
  },
  {
    "id": "monster_0234",
    "name": "Tier 5 Nanite Swarm Mark-234",
    "level": 234,
    "tier": 5,
    "baseElement": "void",
    "stats": {
      "hp": 10630,
      "maxHp": 10630,
      "ap": 8,
      "attack": 1887,
      "tech": 1650,
      "armor": 707,
      "speed": 24,
      "critChance": 0.14,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 34,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0203",
        "chance": 0.45
      },
      {
        "itemId": "item_0139",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_115",
      "skill_120"
    ]
  },
  {
    "id": "monster_0235",
    "name": "Tier 5 Chrono Titan Mark-235",
    "level": 235,
    "tier": 5,
    "baseElement": "physical",
    "stats": {
      "hp": 10675,
      "maxHp": 10675,
      "ap": 8,
      "attack": 1895,
      "tech": 1657,
      "armor": 710,
      "speed": 25,
      "critChance": 0.15,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 35,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0206",
        "chance": 0.45
      },
      {
        "itemId": "item_0146",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_116",
      "skill_001"
    ]
  },
  {
    "id": "monster_0236",
    "name": "Tier 5 Bionic Berserker Mark-236",
    "level": 236,
    "tier": 5,
    "baseElement": "plasma",
    "stats": {
      "hp": 10720,
      "maxHp": 10720,
      "ap": 8,
      "attack": 1903,
      "tech": 1664,
      "armor": 713,
      "speed": 26,
      "critChance": 0.16,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 36,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0209",
        "chance": 0.45
      },
      {
        "itemId": "item_0153",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_117",
      "skill_002"
    ]
  },
  {
    "id": "monster_0237",
    "name": "Tier 5 Neon Wraith Mark-237",
    "level": 237,
    "tier": 5,
    "baseElement": "cryo",
    "stats": {
      "hp": 10765,
      "maxHp": 10765,
      "ap": 8,
      "attack": 1911,
      "tech": 1671,
      "armor": 716,
      "speed": 27,
      "critChance": 0.17,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 37,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0212",
        "chance": 0.45
      },
      {
        "itemId": "item_0160",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_118",
      "skill_003"
    ]
  },
  {
    "id": "monster_0238",
    "name": "Tier 5 Quantum Golem Mark-238",
    "level": 238,
    "tier": 5,
    "baseElement": "shock",
    "stats": {
      "hp": 10810,
      "maxHp": 10810,
      "ap": 8,
      "attack": 1919,
      "tech": 1678,
      "armor": 719,
      "speed": 28,
      "critChance": 0.18,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 38,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0215",
        "chance": 0.45
      },
      {
        "itemId": "item_0167",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_119",
      "skill_004"
    ]
  },
  {
    "id": "monster_0239",
    "name": "Tier 5 Vortex Drake Mark-239",
    "level": 239,
    "tier": 5,
    "baseElement": "void",
    "stats": {
      "hp": 10855,
      "maxHp": 10855,
      "ap": 8,
      "attack": 1927,
      "tech": 1685,
      "armor": 722,
      "speed": 29,
      "critChance": 0.19,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 39,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0218",
        "chance": 0.45
      },
      {
        "itemId": "item_0174",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_120",
      "skill_005"
    ]
  },
  {
    "id": "monster_0240",
    "name": "Tier 5 Cyber-Revenant Mark-240",
    "level": 240,
    "tier": 5,
    "baseElement": "physical",
    "stats": {
      "hp": 10900,
      "maxHp": 10900,
      "ap": 8,
      "attack": 1935,
      "tech": 1692,
      "armor": 725,
      "speed": 10,
      "critChance": 0.05,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 10,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0221",
        "chance": 0.45
      },
      {
        "itemId": "item_0181",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_001",
      "skill_006"
    ]
  },
  {
    "id": "monster_0241",
    "name": "Tier 5 Plasma Sentinel Mark-241",
    "level": 241,
    "tier": 5,
    "baseElement": "plasma",
    "stats": {
      "hp": 10945,
      "maxHp": 10945,
      "ap": 8,
      "attack": 1943,
      "tech": 1699,
      "armor": 728,
      "speed": 11,
      "critChance": 0.06,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 11,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0224",
        "chance": 0.45
      },
      {
        "itemId": "item_0188",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_002",
      "skill_007"
    ]
  },
  {
    "id": "monster_0242",
    "name": "Tier 5 Void Stalker Mark-242",
    "level": 242,
    "tier": 5,
    "baseElement": "cryo",
    "stats": {
      "hp": 10990,
      "maxHp": 10990,
      "ap": 8,
      "attack": 1951,
      "tech": 1706,
      "armor": 731,
      "speed": 12,
      "critChance": 0.07,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 12,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0227",
        "chance": 0.45
      },
      {
        "itemId": "item_0195",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_003",
      "skill_008"
    ]
  },
  {
    "id": "monster_0243",
    "name": "Tier 5 Glitch Fiend Mark-243",
    "level": 243,
    "tier": 5,
    "baseElement": "shock",
    "stats": {
      "hp": 11035,
      "maxHp": 11035,
      "ap": 8,
      "attack": 1959,
      "tech": 1713,
      "armor": 734,
      "speed": 13,
      "critChance": 0.08,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 13,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0230",
        "chance": 0.45
      },
      {
        "itemId": "item_0202",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_004",
      "skill_009"
    ]
  },
  {
    "id": "monster_0244",
    "name": "Tier 5 Nanite Swarm Mark-244",
    "level": 244,
    "tier": 5,
    "baseElement": "void",
    "stats": {
      "hp": 11080,
      "maxHp": 11080,
      "ap": 8,
      "attack": 1967,
      "tech": 1720,
      "armor": 737,
      "speed": 14,
      "critChance": 0.09,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 14,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0233",
        "chance": 0.45
      },
      {
        "itemId": "item_0209",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_005",
      "skill_010"
    ]
  },
  {
    "id": "monster_0245",
    "name": "Tier 5 Chrono Titan Mark-245",
    "level": 245,
    "tier": 5,
    "baseElement": "physical",
    "stats": {
      "hp": 11125,
      "maxHp": 11125,
      "ap": 8,
      "attack": 1975,
      "tech": 1727,
      "armor": 740,
      "speed": 15,
      "critChance": 0.1,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 15,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0236",
        "chance": 0.45
      },
      {
        "itemId": "item_0216",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_006",
      "skill_011"
    ]
  },
  {
    "id": "monster_0246",
    "name": "Tier 5 Bionic Berserker Mark-246",
    "level": 246,
    "tier": 5,
    "baseElement": "plasma",
    "stats": {
      "hp": 11170,
      "maxHp": 11170,
      "ap": 8,
      "attack": 1983,
      "tech": 1734,
      "armor": 743,
      "speed": 16,
      "critChance": 0.11,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 16,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0239",
        "chance": 0.45
      },
      {
        "itemId": "item_0223",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_007",
      "skill_012"
    ]
  },
  {
    "id": "monster_0247",
    "name": "Tier 5 Neon Wraith Mark-247",
    "level": 247,
    "tier": 5,
    "baseElement": "cryo",
    "stats": {
      "hp": 11215,
      "maxHp": 11215,
      "ap": 8,
      "attack": 1991,
      "tech": 1741,
      "armor": 746,
      "speed": 17,
      "critChance": 0.12,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 17,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0242",
        "chance": 0.45
      },
      {
        "itemId": "item_0230",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_008",
      "skill_013"
    ]
  },
  {
    "id": "monster_0248",
    "name": "Tier 5 Quantum Golem Mark-248",
    "level": 248,
    "tier": 5,
    "baseElement": "shock",
    "stats": {
      "hp": 11260,
      "maxHp": 11260,
      "ap": 8,
      "attack": 1999,
      "tech": 1748,
      "armor": 749,
      "speed": 18,
      "critChance": 0.13,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 18,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0245",
        "chance": 0.45
      },
      {
        "itemId": "item_0237",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_009",
      "skill_014"
    ]
  },
  {
    "id": "monster_0249",
    "name": "Tier 5 Vortex Drake Mark-249",
    "level": 249,
    "tier": 5,
    "baseElement": "void",
    "stats": {
      "hp": 11305,
      "maxHp": 11305,
      "ap": 8,
      "attack": 2007,
      "tech": 1755,
      "armor": 752,
      "speed": 19,
      "critChance": 0.14,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 19,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0248",
        "chance": 0.45
      },
      {
        "itemId": "item_0244",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_010",
      "skill_015"
    ]
  },
  {
    "id": "monster_0250",
    "name": "Tier 6 Cyber-Revenant Mark-250",
    "level": 250,
    "tier": 6,
    "baseElement": "physical",
    "stats": {
      "hp": 11350,
      "maxHp": 11350,
      "ap": 9,
      "attack": 2015,
      "tech": 1762,
      "armor": 755,
      "speed": 20,
      "critChance": 0.15,
      "critMultiplier": 1.5,
      "resistances": {
        "physical": 20,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0251",
        "chance": 0.45
      },
      {
        "itemId": "item_0251",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_011",
      "skill_016"
    ]
  },
  {
    "id": "monster_0251",
    "name": "Tier 6 Plasma Sentinel Mark-251",
    "level": 251,
    "tier": 6,
    "baseElement": "plasma",
    "stats": {
      "hp": 11395,
      "maxHp": 11395,
      "ap": 9,
      "attack": 2023,
      "tech": 1769,
      "armor": 758,
      "speed": 21,
      "critChance": 0.16,
      "critMultiplier": 1.55,
      "resistances": {
        "physical": 21,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0254",
        "chance": 0.45
      },
      {
        "itemId": "item_0258",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_012",
      "skill_017"
    ]
  },
  {
    "id": "monster_0252",
    "name": "Tier 6 Void Stalker Mark-252",
    "level": 252,
    "tier": 6,
    "baseElement": "cryo",
    "stats": {
      "hp": 11440,
      "maxHp": 11440,
      "ap": 9,
      "attack": 2031,
      "tech": 1776,
      "armor": 761,
      "speed": 22,
      "critChance": 0.17,
      "critMultiplier": 1.6,
      "resistances": {
        "physical": 22,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0257",
        "chance": 0.45
      },
      {
        "itemId": "item_0265",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_013",
      "skill_018"
    ]
  },
  {
    "id": "monster_0253",
    "name": "Tier 6 Glitch Fiend Mark-253",
    "level": 253,
    "tier": 6,
    "baseElement": "shock",
    "stats": {
      "hp": 11485,
      "maxHp": 11485,
      "ap": 9,
      "attack": 2039,
      "tech": 1783,
      "armor": 764,
      "speed": 23,
      "critChance": 0.18,
      "critMultiplier": 1.65,
      "resistances": {
        "physical": 23,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0260",
        "chance": 0.45
      },
      {
        "itemId": "item_0272",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_014",
      "skill_019"
    ]
  },
  {
    "id": "monster_0254",
    "name": "Tier 6 Nanite Swarm Mark-254",
    "level": 254,
    "tier": 6,
    "baseElement": "void",
    "stats": {
      "hp": 11530,
      "maxHp": 11530,
      "ap": 9,
      "attack": 2047,
      "tech": 1790,
      "armor": 767,
      "speed": 24,
      "critChance": 0.19,
      "critMultiplier": 1.7,
      "resistances": {
        "physical": 24,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0263",
        "chance": 0.45
      },
      {
        "itemId": "item_0279",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_015",
      "skill_020"
    ]
  },
  {
    "id": "monster_0255",
    "name": "Tier 6 Chrono Titan Mark-255",
    "level": 255,
    "tier": 6,
    "baseElement": "physical",
    "stats": {
      "hp": 11575,
      "maxHp": 11575,
      "ap": 9,
      "attack": 2055,
      "tech": 1797,
      "armor": 770,
      "speed": 25,
      "critChance": 0.05,
      "critMultiplier": 1.75,
      "resistances": {
        "physical": 25,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0266",
        "chance": 0.45
      },
      {
        "itemId": "item_0286",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_016",
      "skill_021"
    ]
  },
  {
    "id": "monster_0256",
    "name": "Tier 6 Bionic Berserker Mark-256",
    "level": 256,
    "tier": 6,
    "baseElement": "plasma",
    "stats": {
      "hp": 11620,
      "maxHp": 11620,
      "ap": 9,
      "attack": 2063,
      "tech": 1804,
      "armor": 773,
      "speed": 26,
      "critChance": 0.06,
      "critMultiplier": 1.8,
      "resistances": {
        "physical": 26,
        "plasma": 20,
        "cryo": -10,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0269",
        "chance": 0.45
      },
      {
        "itemId": "item_0293",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_017",
      "skill_022"
    ]
  },
  {
    "id": "monster_0257",
    "name": "Tier 6 Neon Wraith Mark-257",
    "level": 257,
    "tier": 6,
    "baseElement": "cryo",
    "stats": {
      "hp": 11665,
      "maxHp": 11665,
      "ap": 9,
      "attack": 2071,
      "tech": 1811,
      "armor": 776,
      "speed": 27,
      "critChance": 0.07,
      "critMultiplier": 1.85,
      "resistances": {
        "physical": 27,
        "plasma": -10,
        "cryo": 20,
        "shock": 0,
        "void": -5
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0272",
        "chance": 0.45
      },
      {
        "itemId": "item_0300",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_018",
      "skill_023"
    ]
  },
  {
    "id": "monster_0258",
    "name": "Tier 6 Quantum Golem Mark-258",
    "level": 258,
    "tier": 6,
    "baseElement": "shock",
    "stats": {
      "hp": 11710,
      "maxHp": 11710,
      "ap": 9,
      "attack": 2079,
      "tech": 1818,
      "armor": 779,
      "speed": 28,
      "critChance": 0.08,
      "critMultiplier": 1.9,
      "resistances": {
        "physical": 28,
        "plasma": 0,
        "cryo": 0,
        "shock": 20,
        "void": -5
      }
    },
    "aiType": "aggressive",
    "lootTable": [
      {
        "itemId": "item_0275",
        "chance": 0.45
      },
      {
        "itemId": "item_0307",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_019",
      "skill_024"
    ]
  },
  {
    "id": "monster_0259",
    "name": "Tier 6 Vortex Drake Mark-259",
    "level": 259,
    "tier": 6,
    "baseElement": "void",
    "stats": {
      "hp": 11755,
      "maxHp": 11755,
      "ap": 9,
      "attack": 2087,
      "tech": 1825,
      "armor": 782,
      "speed": 29,
      "critChance": 0.09,
      "critMultiplier": 1.95,
      "resistances": {
        "physical": 29,
        "plasma": 0,
        "cryo": 0,
        "shock": 0,
        "void": 25
      }
    },
    "aiType": "tactical",
    "lootTable": [
      {
        "itemId": "item_0278",
        "chance": 0.45
      },
      {
        "itemId": "item_0314",
        "chance": 0.15
      }
    ],
    "abilities": [
      "skill_020",
      "skill_025"
    ]
  }
];
