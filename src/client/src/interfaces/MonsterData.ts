export default interface MonsterData {
    id: string,
    name: string,
    meta: string,
    ability_scores: Record<string, string>,
    armor_class: string,
    hit_points: string,
    speed: string,
    saving_throws?: string,
    skills?: string,
    damage_resistances?: string,
    damage_immunities?: string,
    condition_immunities?: string,
    damage_vulnerabilities?: string,
    senses: string,
    languages: string,
    challenge: string,
    traits?: string,
    actions?: string,
    reactions?: string,
    legendary_actions?: string,
    img_url: string,
}