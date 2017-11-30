/*{ 
  name:
  cohesion: 
  impact:
  melee: 
  shooting: 
  movement:
  terrain:
  other: []
  },
*/

const Descriptions = [
  { 
    name: 'Heavy Artillery',
    cohesion: ['-1 to opponents\' cohesion tests caused by shooting, regardless of casualties.'],
    impact: [
      '+100 vs all if defending obstacle and not Fragmented or Severely Disordered.',
    '-200 vs all if not defending an obstacle.'
    ],
    melee: [
      '+100 vs all if defending obstacle and not Fragmented or Severely Disordered.',
      '-200 vs all if not defending an obstacle.',
      'Opponents get no bonus from better armour.'
    ],
    shooting: [
      'Ranges: Short - 6 tiles, Long - 9 Tiles',
      'Modifiers: +100 vs Large/Enfiladed, +100 vs Elephants, -100 vs Foot, -200 vs Artillery',
      'Can shoot over other units.'
    ],
    movement: ['Cannot move.', 'Unmanoeuvrable, no free 45 degree turn', 'Cannot shoot after turning.'],
    terrain: ['Difficult - Severe Disorder, Rough - Disorder'],
    other: ['Exerts no ZOC.', 'Cannot charge', 'Can be charged by light troops in open terrain', 'Cannot be joined by general', 'Does not force nearby units to test for cohesion on route.']
  },
  { 
    name: 'Light Artillery',
    cohesion: ['-1 to opponents\' cohesion tests caused by shooting, regardless of casualties.'],
    impact: [
      '+100 vs all if defending obstacle and not Fragmented or Severely Disordered.',
    '-200 vs all if not defending an obstacle.'
    ],
    melee: [
      '+100 vs all if defending obstacle and not Fragmented or Severely Disordered.',
      '-200 vs all if not defending an obstacle.',
      'Opponents get no bonus from better armour.'
    ],
    shooting: [
      'Ranges: Short - 6 tiles',
      'Modifiers: +100 vs Large/Enfiladed, +100 vs Elephants, -100 vs Foot, -200 vs Artillery',
      'Can shoot over other units.'
    ],
    movement: ['Unmanoeuvrable, no free 45 degree turn', 'Cannot shoot after turning.'],
    terrain: ['Difficult - Severe Disorder, Rough - Disorder'],
    other: ['Exerts no ZOC.', 'Cannot charge', 'Can be charged by light troops in open terrain', 'Cannot be joined by general', 'Does not force nearby units to test for cohesion on route.']
  },
  { 
    name: 'Bowmen',
    cohesion: ['-1 if combat is lost against mounted or heavy opponent in open terrain.'],
    impact: ['All mounted opponents except scythed chariots get an additional +100.'],
    terrain: ['Difficult - Disorder, Rough - No impact'],
  },
  { 
    name: 'Camelry',
    other: ['Disorders adjacement enemy cavalary. Slightly disorders adjacent friendly cavalry.'],
  },
  { 
    name: 'Bow',
    shooting: [
      'Ranges: Short - 2 tiles, Long - 4 tiles',
      'Modifiers: -50 vs foot, artillery and elephants',
    ]
  }
];
export default Descriptions;


/*
  { 
    name: 'Heavy Foot',
    cohesion: ['+1 to cohesion tests.', 'Opposing non-heavy infantry take -1 modifier if they lose the combat in open terrain.'],
    terrain: ['Difficult - Severe Disorder, Rough - Disorder'],
    other: []
  },
  */