/**
 * Unit.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:             { type: 'string', default: null, required: true },
    key:              { type: 'string', default: null, required: true },
    size:             { type: 'number', default: null, required: true },
    pop_cost:         { type: 'number', default: null, required: true },

    resource_1:       { type: 'string', default: null, required: true }, // minerals
    resource_2:       { type: 'string', default: null, required: true }, // gas
    resource_3:       { type: 'string', default: null, required: true }, // special?

    hitpoints:        { type: 'float', default: null, required: true }, //, type: Float
    shield:           { type: 'float', default: null, required: true }, // #, type: Float
    armor_value:      { type: 'float', default: null, required: true },

    g_attack:         { type: 'string', default: null, required: true },
    g_attack_dps:     { type: 'float', default: null, required: true }, //#, type: Float
    a_attack:         { type: 'string', default: null, required: true },
    a_attack_dps:     { type: 'float', default: null, required: true }, // #, type: Float
    attack_cd:        { type: 'string', default: null, required: true },
    attack_mod_1:     { type: 'string', default: null, required: true },
    attack_mod_2:     { type: 'string', default: null, required: true },
    ground_attack_range: { type: 'float', default: null, required: true }, // type: Float
    air_attack_range: { type: 'float', default: null, required: true }, // type: Float

    max_level:        { type: 'integer', default: null, required: true }, // type: Integer
    sight:            { type: 'float', default: null, required: true }, // type: Float
    notes:            { type: 'string', default: null, required: true },

    build_time:       { type: 'float', default: null, required: true }, // type: Float

    game:             { model: 'Game' },
    species:          { model: 'Species' },
    armor:            { model: 'Armor' },

    images:           { type: 'string', default: null, required: true },

    talents:          { collection: 'Talent' },

  }
};
