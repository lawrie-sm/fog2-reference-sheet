/*{ 
  name:
  cohesion: 
  impact:
  melee: 
  shooting: 
  terrain:
  other: []
  },
*/

const Descriptions = [
  { 
    name: 'Heavy Foot',
    cohesion: ['+1 to cohesion tests.', 'Opposing non-heavy infantry take -1 modifier if they lose the combat in open terrain.'],
    terrain: ['Severly disordered in difficult terrain. Disordered in rough terrain.'],
    other: ['heavy test other 1', 'heavy test other 2']
  },
  { 
    name: 'Offensive Spearmen',
    impact: ['spear impact test'],
    melee: ['spear melee test'],
    terrain: ['spear Terrain test'],
  },
  { 
    name: 'Bow',
    shooting: ['Bow Test Shooting'],
  }
];
export default Descriptions;
