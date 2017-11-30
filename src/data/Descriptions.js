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
  //Psudeo-traits
  {
    name: 'Foot',
    melee: ['May break-off if losing badly against infantry and not followed.'], 
  },
  {
    name: 'Mounted',
    cohesion: [
      'No cohesion drop from infantry flank charges.',
      'Cannot cause cohesion drop by flanking elephants.'],
    impact: [],
    melee: ['May break-off if losing against infantry or if losing badly against cavalry. Can only break off from mounted Shock Troops if they initiated combat.'], 
    movement: [],
    terrain: [],
    other: []
  },
  {
    name: 'Foot Shock Troops',
    melee: ['Shock troops, may push back enemy if they initiated combat and won decisvely.'], 
  },
  {
    name: 'Mounted Shock Troops',
    melee: ['Prevents enemy cavalry from breaking off if the unit initiated combat.'], 
  },
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
      'Short - 6 tiles, Long - 9 Tiles',
      '+100 vs Large/Enfiladed, +100 vs Elephants, -100 vs Foot, -200 vs Artillery',
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
      'Short - 6 tiles',
      '+100 vs Large/Enfiladed, +100 vs Elephants, -100 vs Foot, -200 vs Artillery',
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
    other: ['Disorders adjacement enemy cavalry. Slightly disorders adjacent friendly cavalry.'],
  },
  { 
    name: 'Cataphracts',
    movement: ['Unmanoeuvrable, no free 45 degree turn'],
    terrain: ['Difficult - Severe Disorder, Rough - Severe Disorder'],
  },
  { 
    name: 'Cavalry',
    other: ['Disordered by adjacent enemy camelry and elephants. Slightly disordered by adjacent friendly camelry and elephants.'],
  },
  { 
    name: 'Bow',
    shooting: [
      'Short - 2 tiles, Long - 4 tiles',
      '-50 vs foot, artillery and elephants',
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