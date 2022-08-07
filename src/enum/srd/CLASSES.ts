import ClassData from "../../interfaces/srd/ClassData";
import { OTHER_PROF } from "../OTHER_PROF";
import { TOOLS } from "./TOOLS";

const ARTISAN_TOOLS = TOOLS['ARTISAN'].map(tool => tool.name);
const MUSICAL_INSTRUMENTS = TOOLS['MUSIC'].map(tool => tool.name);

export const CLASSES: ClassData[] = [
    {
        name: 'Custom',
        level: 1,
        hp: {
            hit_die: 0
        },
        other_prof: [],
        tool_prof: {
            label: '',
            tools: []
        },
        saving_throws: [ '???', '???' ],
        skills: {
            final: [],
            choose_n: 0,
            type: 'any'
        },
        features: []
    },
    {
        name: 'Barbarian',
        level: 1,
        hp: {
            hit_die: 12
        },
        other_prof: [
            {
                type: OTHER_PROF.ARMOR,
                name: 'Light armor'
            },
            {
                type: OTHER_PROF.ARMOR,
                name: 'Medium armor'
            },
            {
                type: OTHER_PROF.ARMOR,
                name: 'Shields'
            },
            {
                type: OTHER_PROF.WEAPON,
                name: 'Simple weapons'
            },
            {
                type: OTHER_PROF.WEAPON,
                name: 'Martial weapons'
            }
        ],
        tool_prof: {
            label: 'None',
            tools: []
        },
        saving_throws: [ 'STR', 'CON' ],
        skills: {
            final: [],
            choose_n: 2,
            type: 'list',
            choose_list: [ 'Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival' ]
        },
        features: [

        ]
    },
    {
        name: 'Bard',
        level: 1,
        hp: {
            hit_die: 8
        },
        other_prof: [
            {
                type: OTHER_PROF.ARMOR,
                name: 'Light Armor'
            },
            {
                type: OTHER_PROF.WEAPON,
                name: 'Simple weapons'
            },
            {
                type: OTHER_PROF.WEAPON,
                name: 'Hand crossbows'
            },
            {
                type: OTHER_PROF.WEAPON,
                name: 'Longswords'
            },
            {
                type: OTHER_PROF.WEAPON,
                name: 'Rapiers'
            },
            {
                type: OTHER_PROF.WEAPON,
                name: 'Shortswords'
            },
        ],
        tool_prof: {
            label: 'Choose 3 musical instruments:',
            tools: [
                {
                    name: '',
                    choose_list: MUSICAL_INSTRUMENTS
                },
                {
                    name: '',
                    choose_list: MUSICAL_INSTRUMENTS
                },
                {
                    name: '',
                    choose_list: MUSICAL_INSTRUMENTS
                },
            ]
        },
        saving_throws: [ 'DEX', 'CHA' ],
        skills: {
            final: [],
            choose_n: 3,
            type: 'any'
        },
        features: []
    },
    {
        name: 'Cleric',
        level: 1,
        hp: {
            hit_die: 8
        },
        other_prof: [
            {
                type: OTHER_PROF.ARMOR,
                name: 'Light Armor'
            },
            {
                type: OTHER_PROF.ARMOR,
                name: 'Medium Armor'
            },
            {
                type: OTHER_PROF.ARMOR,
                name: 'Shields'
            },
            {
                type: OTHER_PROF.WEAPON,
                name: 'Simple Weapons'
            },
        ],
        tool_prof: {
            label: 'None',
            tools: []
        },
        saving_throws: [ 'WIS', 'CHA' ],
        skills: {
            final: [],
            choose_n: 2,
            type: 'list',
            choose_list: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion']
        },
        features: []
    },
]
