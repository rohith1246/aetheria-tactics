/**
 * DialogueDatabase.js - Branching Narrative & Quest Initiation Trees
 */
module.exports = [
  {
    "id": "dialogue_001",
    "npcName": "Agent Synapse Syndicate-1",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 1. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_1_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_001"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_1_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_1_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_002",
    "npcName": "Agent Void Walkers-2",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 2. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_2_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_002"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_2_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_2_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_003",
    "npcName": "Agent Chrono Enclave-3",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 3. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_3_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_003"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_3_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_3_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_004",
    "npcName": "Agent Iron Foundry-4",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 4. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_4_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_004"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_4_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_4_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_005",
    "npcName": "Agent Neon Vanguard-5",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 5. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_5_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_005"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_5_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_5_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_006",
    "npcName": "Agent Synapse Syndicate-6",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 6. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_6_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_006"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_6_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_6_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_007",
    "npcName": "Agent Void Walkers-7",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 7. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_7_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_007"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_7_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_7_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_008",
    "npcName": "Agent Chrono Enclave-8",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 8. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_8_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_008"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_8_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_8_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_009",
    "npcName": "Agent Iron Foundry-9",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 9. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_9_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_009"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_9_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_9_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_010",
    "npcName": "Agent Neon Vanguard-10",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 10. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_10_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_010"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_10_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_10_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_011",
    "npcName": "Agent Synapse Syndicate-11",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 11. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_11_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_011"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_11_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_11_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_012",
    "npcName": "Agent Void Walkers-12",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 12. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_12_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_012"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_12_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_12_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_013",
    "npcName": "Agent Chrono Enclave-13",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 13. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_13_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_013"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_13_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_13_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_014",
    "npcName": "Agent Iron Foundry-14",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 14. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_14_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_014"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_14_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_14_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_015",
    "npcName": "Agent Neon Vanguard-15",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 15. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_15_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_015"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_15_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_15_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_016",
    "npcName": "Agent Synapse Syndicate-16",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 16. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_16_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_016"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_16_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_16_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_017",
    "npcName": "Agent Void Walkers-17",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 17. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_17_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_017"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_17_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_17_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_018",
    "npcName": "Agent Chrono Enclave-18",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 18. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_18_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_018"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_18_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_18_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_019",
    "npcName": "Agent Iron Foundry-19",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 19. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_19_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_019"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_19_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_19_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_020",
    "npcName": "Agent Neon Vanguard-20",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 20. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_20_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_020"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_20_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_20_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_021",
    "npcName": "Agent Synapse Syndicate-21",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 21. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_21_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_021"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_21_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_21_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_022",
    "npcName": "Agent Void Walkers-22",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 22. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_22_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_022"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_22_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_22_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_023",
    "npcName": "Agent Chrono Enclave-23",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 23. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_23_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_023"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_23_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_23_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_024",
    "npcName": "Agent Iron Foundry-24",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 24. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_24_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_024"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_24_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_24_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_025",
    "npcName": "Agent Neon Vanguard-25",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 25. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_25_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_025"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_25_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_25_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_026",
    "npcName": "Agent Synapse Syndicate-26",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 26. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_26_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_026"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_26_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_26_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_027",
    "npcName": "Agent Void Walkers-27",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 27. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_27_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_027"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_27_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_27_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_028",
    "npcName": "Agent Chrono Enclave-28",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 28. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_28_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_028"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_28_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_28_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_029",
    "npcName": "Agent Iron Foundry-29",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 29. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_29_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_029"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_29_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_29_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_030",
    "npcName": "Agent Neon Vanguard-30",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 30. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_30_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_030"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_30_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_30_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_031",
    "npcName": "Agent Synapse Syndicate-31",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 31. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_31_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_031"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_31_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_31_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_032",
    "npcName": "Agent Void Walkers-32",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 32. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_32_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_032"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_32_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_32_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_033",
    "npcName": "Agent Chrono Enclave-33",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 33. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_33_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_033"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_33_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_33_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_034",
    "npcName": "Agent Iron Foundry-34",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 34. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_34_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_034"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_34_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_34_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_035",
    "npcName": "Agent Neon Vanguard-35",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 35. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_35_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_035"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_35_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_35_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_036",
    "npcName": "Agent Synapse Syndicate-36",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 36. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_36_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_036"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_36_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_36_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_037",
    "npcName": "Agent Void Walkers-37",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 37. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_37_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_037"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_37_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_37_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_038",
    "npcName": "Agent Chrono Enclave-38",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 38. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_38_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_038"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_38_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_38_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_039",
    "npcName": "Agent Iron Foundry-39",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 39. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_39_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_039"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_39_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_39_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_040",
    "npcName": "Agent Neon Vanguard-40",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 40. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_40_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_040"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_40_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_40_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_041",
    "npcName": "Agent Synapse Syndicate-41",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 41. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_41_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_041"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_41_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_41_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_042",
    "npcName": "Agent Void Walkers-42",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 42. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_42_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_042"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_42_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_42_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_043",
    "npcName": "Agent Chrono Enclave-43",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 43. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_43_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_043"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_43_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_43_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_044",
    "npcName": "Agent Iron Foundry-44",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 44. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_44_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_044"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_44_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_44_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_045",
    "npcName": "Agent Neon Vanguard-45",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 45. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_45_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_045"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_45_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_45_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_046",
    "npcName": "Agent Synapse Syndicate-46",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 46. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_46_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_046"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_46_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_46_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_047",
    "npcName": "Agent Void Walkers-47",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 47. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_47_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_047"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_47_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_47_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_048",
    "npcName": "Agent Chrono Enclave-48",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 48. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_48_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_048"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_48_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_48_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_049",
    "npcName": "Agent Iron Foundry-49",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 49. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_49_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_049"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_49_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_49_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_050",
    "npcName": "Agent Neon Vanguard-50",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 50. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_50_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_050"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_50_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_50_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_051",
    "npcName": "Agent Synapse Syndicate-51",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 51. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_51_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_051"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_51_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_51_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_052",
    "npcName": "Agent Void Walkers-52",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 52. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_52_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_052"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_52_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_52_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_053",
    "npcName": "Agent Chrono Enclave-53",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 53. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_53_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_053"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_53_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_53_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_054",
    "npcName": "Agent Iron Foundry-54",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 54. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_54_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_054"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_54_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_54_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_055",
    "npcName": "Agent Neon Vanguard-55",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 55. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_55_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_055"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_55_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_55_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_056",
    "npcName": "Agent Synapse Syndicate-56",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 56. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_56_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_056"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_56_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_56_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_057",
    "npcName": "Agent Void Walkers-57",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 57. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_57_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_057"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_57_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_57_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_058",
    "npcName": "Agent Chrono Enclave-58",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 58. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_58_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_058"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_58_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_58_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_059",
    "npcName": "Agent Iron Foundry-59",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 59. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_59_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_059"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_59_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_59_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_060",
    "npcName": "Agent Neon Vanguard-60",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 60. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_60_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_060"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_60_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_60_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_061",
    "npcName": "Agent Synapse Syndicate-61",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 61. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_61_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_061"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_61_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_61_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_062",
    "npcName": "Agent Void Walkers-62",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 62. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_62_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_062"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_62_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_62_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_063",
    "npcName": "Agent Chrono Enclave-63",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 63. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_63_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_063"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_63_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_63_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_064",
    "npcName": "Agent Iron Foundry-64",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 64. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_64_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_064"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_64_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_64_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_065",
    "npcName": "Agent Neon Vanguard-65",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 65. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_65_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_065"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_65_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_65_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_066",
    "npcName": "Agent Synapse Syndicate-66",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 66. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_66_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_066"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_66_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_66_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_067",
    "npcName": "Agent Void Walkers-67",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 67. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_67_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_067"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_67_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_67_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_068",
    "npcName": "Agent Chrono Enclave-68",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 68. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_68_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_068"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_68_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_68_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_069",
    "npcName": "Agent Iron Foundry-69",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 69. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_69_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_069"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_69_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_69_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_070",
    "npcName": "Agent Neon Vanguard-70",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 70. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_70_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_070"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_70_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_70_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_071",
    "npcName": "Agent Synapse Syndicate-71",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 71. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_71_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_071"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_71_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_71_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_072",
    "npcName": "Agent Void Walkers-72",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 72. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_72_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_072"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_72_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_72_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_073",
    "npcName": "Agent Chrono Enclave-73",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 73. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_73_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_073"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_73_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_73_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_074",
    "npcName": "Agent Iron Foundry-74",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 74. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_74_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_074"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_74_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_74_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_075",
    "npcName": "Agent Neon Vanguard-75",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 75. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_75_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_075"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_75_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_75_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_076",
    "npcName": "Agent Synapse Syndicate-76",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 76. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_76_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_076"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_76_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_76_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_077",
    "npcName": "Agent Void Walkers-77",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 77. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_77_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_077"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_77_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_77_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_078",
    "npcName": "Agent Chrono Enclave-78",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 78. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_78_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_078"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_78_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_78_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_079",
    "npcName": "Agent Iron Foundry-79",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 79. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_79_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_079"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_79_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_79_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_080",
    "npcName": "Agent Neon Vanguard-80",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 80. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_80_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_080"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_80_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_80_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_081",
    "npcName": "Agent Synapse Syndicate-81",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 81. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_81_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_081"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_81_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_81_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_082",
    "npcName": "Agent Void Walkers-82",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 82. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_82_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_082"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_82_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_82_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_083",
    "npcName": "Agent Chrono Enclave-83",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 83. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_83_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_083"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_83_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_83_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_084",
    "npcName": "Agent Iron Foundry-84",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 84. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_84_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_084"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_84_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_84_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_085",
    "npcName": "Agent Neon Vanguard-85",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 85. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_85_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_085"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_85_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_85_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_086",
    "npcName": "Agent Synapse Syndicate-86",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 86. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_86_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_086"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_86_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_86_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_087",
    "npcName": "Agent Void Walkers-87",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 87. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_87_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_087"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_87_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_87_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_088",
    "npcName": "Agent Chrono Enclave-88",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 88. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_88_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_088"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_88_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_88_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_089",
    "npcName": "Agent Iron Foundry-89",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 89. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_89_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_089"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_89_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_89_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_090",
    "npcName": "Agent Neon Vanguard-90",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 90. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_90_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_090"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_90_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_90_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_091",
    "npcName": "Agent Synapse Syndicate-91",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 91. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_91_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_091"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_91_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_91_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_092",
    "npcName": "Agent Void Walkers-92",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 92. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_92_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_092"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_92_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_92_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_093",
    "npcName": "Agent Chrono Enclave-93",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 93. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_93_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_093"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_93_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_93_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_094",
    "npcName": "Agent Iron Foundry-94",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 94. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_94_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_094"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_94_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_94_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_095",
    "npcName": "Agent Neon Vanguard-95",
    "faction": "Neon Vanguard",
    "rootNode": {
      "text": "Greetings, operative. The Neon Vanguard has detected anomalous energy signatures in sector 95. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_95_accept",
          "reputationReward": {
            "Neon Vanguard": 15
          },
          "questTrigger": "quest_095"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_95_intel",
          "reputationReward": {
            "Neon Vanguard": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_95_decline",
          "reputationReward": {
            "Neon Vanguard": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_096",
    "npcName": "Agent Synapse Syndicate-96",
    "faction": "Synapse Syndicate",
    "rootNode": {
      "text": "Greetings, operative. The Synapse Syndicate has detected anomalous energy signatures in sector 96. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_96_accept",
          "reputationReward": {
            "Synapse Syndicate": 15
          },
          "questTrigger": "quest_096"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_96_intel",
          "reputationReward": {
            "Synapse Syndicate": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_96_decline",
          "reputationReward": {
            "Synapse Syndicate": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_097",
    "npcName": "Agent Void Walkers-97",
    "faction": "Void Walkers",
    "rootNode": {
      "text": "Greetings, operative. The Void Walkers has detected anomalous energy signatures in sector 97. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_97_accept",
          "reputationReward": {
            "Void Walkers": 15
          },
          "questTrigger": "quest_097"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_97_intel",
          "reputationReward": {
            "Void Walkers": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_97_decline",
          "reputationReward": {
            "Void Walkers": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_098",
    "npcName": "Agent Chrono Enclave-98",
    "faction": "Chrono Enclave",
    "rootNode": {
      "text": "Greetings, operative. The Chrono Enclave has detected anomalous energy signatures in sector 98. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_98_accept",
          "reputationReward": {
            "Chrono Enclave": 15
          },
          "questTrigger": "quest_098"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_98_intel",
          "reputationReward": {
            "Chrono Enclave": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_98_decline",
          "reputationReward": {
            "Chrono Enclave": -10
          }
        }
      ]
    }
  },
  {
    "id": "dialogue_099",
    "npcName": "Agent Iron Foundry-99",
    "faction": "Iron Foundry",
    "rootNode": {
      "text": "Greetings, operative. The Iron Foundry has detected anomalous energy signatures in sector 99. Are you ready for deployment?",
      "options": [
        {
          "text": "I accept the contract immediately.",
          "next": "node_99_accept",
          "reputationReward": {
            "Iron Foundry": 15
          },
          "questTrigger": "quest_099"
        },
        {
          "text": "What kind of opposition should I expect?",
          "next": "node_99_intel",
          "reputationReward": {
            "Iron Foundry": 5
          }
        },
        {
          "text": "Your terms are unacceptable. I decline.",
          "next": "node_99_decline",
          "reputationReward": {
            "Iron Foundry": -10
          }
        }
      ]
    }
  }
];
