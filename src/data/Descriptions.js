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
    cohesion: '+1 to cohesion tests. Opposing non-heavy infantry take -1 modifier if they lose the combat in open terrain.',
    terrain: 'Severly disordered in difficult terrain. Disordered in rough terrain.',
    other: ['test other rule', 'another test other']
  },
  { 
    name: 'Offensive Spearmen',
    impact: 'impact test',
    melee: 'melee test',
    terrain: 'Terrain test',
  },
  { 
    name: 'Bow',
    shooting: 'Test Shooting',
  }
];
export default Descriptions;
