import characters_json from '../data/characters.json';

export function createCharacter(id){
    /* using the find function */
    let characters = characters_json.find(matchCharacterID => matchCharacterID.id === id)

    return characters;
}
