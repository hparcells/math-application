import SimpleMath from './components/tools/SimpleMath';
import EquationSolver from './components/tools/LinearEquationSolver';

import { Tool } from './types';

export const data: Tool[] = [
  {
    tab: 'basicalgebra',
    id: 'simple',
    name: 'Simple Math',
    description: 'Add, subtract, multiply, and divide numbers.',
    component: SimpleMath
  },
  {
    tab: 'basicalgebra',
    id: 'linear-equation-solver',
    name: 'Linear Equation Solver',
    description: 'Solve for variables in linear equations.',
    component: EquationSolver
  }
];
