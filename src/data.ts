import SimpleMath from './components/tools/SimpleMath';

import { Tool } from './types';

export const data: Tool[] = [
  {
    tab: 'basicalgebra',
    id: 'simple',
    name: 'Simple Math',
    description: 'Add, subtract, multiply, and divide numbers.',
    component: SimpleMath
  }
];
