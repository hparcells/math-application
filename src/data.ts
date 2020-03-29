import SimpleMath from './components/tools/SimpleMath';
import LinearEquationSolver from './components/tools/LinearEquationSolver';
import EquationSimplifier from './components/tools/EquationSimplifier';

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
    component: LinearEquationSolver
  },
  {
    tab: 'basicalgebra',
    id: 'equation-simplifier',
    name: 'Equation Simplifier',
    description: 'Simplify equations.',
    component: EquationSimplifier
  }
];
