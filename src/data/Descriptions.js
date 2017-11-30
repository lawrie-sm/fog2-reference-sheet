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
    cohesion: ['-1 if flank is threatened'],
    impact: [],
    melee: [], 
    terrain: []
  },
  {
    name: 'Mounted',
    cohesion: [
      '-1 to enemy Medium Foot, Light Foot, Warriors, Bowmen or Mobs losing combat in open terrain',
      'No automatic cohesion drop from enemy infantry flank charges',
      'Cannot cause cohesion drop by flanking elephants'],
    impact: ['+100 vs light foot, bowmen and mobs in open terrain', 'Steady enemy missile troops get +100 when defending obstacles'],
    melee: [], 
    movement: [],
    terrain: [],
    other: ['Disordered by adjacent enemy camelry and elephants Slightly disordered by adjacent friendly camelry and elephants']
  },
  {
    name: 'Foot Shock Troops',
    melee: ['May push back enemy if they initiate combat and win decisively'], 
  },
  {
    name: 'Mounted Shock Troops',
    impact: ['Enemy Impact Foot, Offensive Spearmen and Light Spear Infantry do not gain their +100 advantage when initating a charge'],
    melee: ['Prevents enemy cavalry from breaking off if they are the defender'], 
  },
  {
    name: 'Heavy Artillery',
    cohesion: ['-1 to opponents\' cohesion tests caused by shooting, regardless of casualties'],
    impact: [
      '+100 vs all if defending obstacle and not Fragmented or Severely Disordered',
    '-200 vs all if not defending an obstacle'
    ],
    melee: [
      '+100 vs all if defending obstacle and not Fragmented or Severely Disordered',
      '-200 vs all if not defending an obstacle',
      'Enemy gets no POA bonus from better armour'
    ],
    shooting: [
      'Short - 6 tiles, Long - 9 Tiles',
      '+100 vs Large/Enfiladed, +100 vs Elephants, -100 vs Foot, -200 vs Artillery',
      'Can shoot over other units'
    ],
    movement: ['Cannot move', 'Unmanoeuvrable, no free 45 degree turn', 'Cannot shoot after turning'],
    terrain: ['Difficult - Severe Disorder, Rough - Disorder'],
    other: ['Exerts no ZOC', 'Cannot charge', 'Can be charged by light troops in open terrain', 'Cannot be joined by general', 'Does not force nearby units to test for cohesion on route']
  },
  { 
    name: 'Light Artillery',
    cohesion: ['-1 to opponents\' cohesion tests caused by shooting, regardless of casualties'],
    impact: [
      '+100 vs all if defending obstacle and not Fragmented or Severely Disordered',
    '-200 vs all if not defending an obstacle'
    ],
    melee: [
      '+100 vs all if defending obstacle and not Fragmented or Severely Disordered',
      '-200 vs all if not defending an obstacle',
      'Enemy gets no POA bonus from better armour'
    ],
    shooting: [
      'Short - 6 tiles',
      '+100 vs Large/Enfiladed, +100 vs Elephants, -100 vs Foot, -200 vs Artillery',
      'Can shoot over other units'
    ],
    movement: ['Unmanoeuvrable, no free 45 degree turn', 'Cannot shoot after turning'],
    terrain: ['Difficult - Severe Disorder, Rough - Disorder'],
    other: ['Exerts no ZOC', 'Cannot charge', 'Can be charged by light troops in open terrain', 'Cannot be joined by general', 'Does not force nearby units to test for cohesion on route']
  },
  { 
    name: 'Bowmen',
    cohesion: ['-1 if combat is lost against mounted or heavy opponent in open terrain'],
    impact: ['All mounted opponents except scythed chariots get an additional +100', '+100 against mounted troops when steady and defending obstacles'],
    terrain: ['Difficult - Disorder, Rough - No impact'],
  },
  { 
    name: 'Camelry',
    other: ['Disorders adjacement enemy cavalry Slightly disorders adjacent friendly cavalry'],
  },
  { 
    name: 'Cataphracts',
    movement: ['Unmanoeuvrable, no free 45 degree turn'],
    terrain: ['Difficult - Severe Disorder, Rough - Severe Disorder'],
  },
  { 
    name: 'Cavalry', //Unused, see "mounted" (NB: Appears to be more accurate for camels disordering chariots)
  },
  { 
    name: 'Bow',
    shooting: [
      'Short - 2 tiles, Long - 4 tiles',
      '-50 vs foot, artillery and elephants',
    ]
  },
  { 
    name: 'Elephants',
    cohesion: ['-1 to any enemy cohesion tests when if they lose in close combat'],
    impact: ['+250 vs any', 'No automatic cohesion drop from enemy cavalry flank charges', 'Enemy Impact Foot still get +100'],
    melee: ['+100 vs any', 'Enemy gets no POA bonus from better armour'],
    movement: ['Unmanoeuvrable, no free 45 degree turn'],
    terrain: ['Difficult - Severe Disorder, Rough - Disorder'],
    other: ['Disorders adjacent enemy cavalry and camelry Slightly disorders friendly cavalry and camelry',
            'All friendly units within 2 tiles must take a cohesion test when this unit routes']
  },
  { 
    name: 'Heavy Chariots',
    cohesion: ['-1 to any enemy cohesion test if they lost in the impact phase'],
    impact: ['+100 vs any except light troops, elephants, lancers and steady, stationary spearmen/pikemen',],
    melee: ['Enemy gets no POA bonus from better armour'],
    movement: ['Unmanoeuvrable, no free 45 degree turn'],
    terrain: ['Difficult - Impassable, Rough - Severe Disorder'],
  },
  { 
    name: 'Light Chariots',
    melee: ['Enemy gets no POA bonus from better armour'],
    terrain: ['Difficult - Impassable, Rough - Severe Disorder'],
  },
  { 
    name: 'Scythed Chariots',
    cohesion: ['-1 to any enemy cohesion tests if they lose in close combat',
               '-1 to enemy Medium Foot, Light Foot, Warriors, Bowmen or Mobs losing close combat in open terrain',
               'No automatic cohesion drop from enemy infantry flank charges',
      'Cannot cause cohesion drop by flanking elephants'],
    impact: ['+250 vs any except light troops, elephants, lancers and steady, stationary spearmen/pikemen',
             'Steady enemy missile troops get +100 when defending obstacles'],
    melee: ['Unit is destroyed if it fails to route opponent by the end of the first melee phase',
            'Enemy gets no POA bonus from better armour'],
    movement: ['Unmanoeuvrable, no free 45 degree turn'],
    terrain: ['Difficult - Impassable, Rough - Severe Disorder'],
    other: ['Does not count towards the army\'s routed %',
            'Cannot be joined by general',
            'All friendly units within 2 tiles must take a cohesion test when this unit routes',
            'Disordered by adjacent enemy camelry and elephants Slightly disordered by adjacent friendly camelry and elephants']
  },
  {
    name: 'Heavy Foot',
    cohesion: ['-1 to enemy Medium Foot, Light Foot, Warriors, Bowmen or Mobs losing combat in open terrain'],
    terrain: ['Difficult - Severe Disorder, Rough - Disorder']
  },
  {
    name: 'Light Foot', // TODO
  },
  { 
    name: 'Light Lancers', // TO REMEMBER
    other: ['May not evade charges']
  },
];
export default Descriptions;