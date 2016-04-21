/**
 * Species.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:         {type: 'string', required: true},
    key:          {type: 'string', required: true},
    home_planet:  {type: 'string', required: true},
    description:  {type: 'string', required: false},
    units:        { collection: 'Unit' },
  }
};

