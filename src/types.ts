export type Tab = 'basicalgebra' | 'geometry' | 'biochem';

export interface Tool {
  tab: Tab;
  id: string;
  name: string;
  description: string;
  component: () => JSX.Element;
}
