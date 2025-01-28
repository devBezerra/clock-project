export interface Segment {
  id: number;
  position: 'horizontal' | 'vertical';
  isOn: boolean;
}

export type Digit = Segment[];

export const dictionary: Digit[] = [
  [
    // Dígito 0
    { id: 0, position: 'horizontal', isOn: true },
    { id: 1, position: 'vertical', isOn: true },
    { id: 2, position: 'vertical', isOn: true },
    { id: 3, position: 'horizontal', isOn: false },
    { id: 4, position: 'vertical', isOn: true },
    { id: 5, position: 'vertical', isOn: true },
    { id: 6, position: 'horizontal', isOn: true },
  ],
  [
    // Dígito 1
    { id: 0, position: 'horizontal', isOn: false },
    { id: 1, position: 'vertical', isOn: false },
    { id: 2, position: 'vertical', isOn: true },
    { id: 3, position: 'horizontal', isOn: false },
    { id: 4, position: 'vertical', isOn: false },
    { id: 5, position: 'vertical', isOn: true },
    { id: 6, position: 'horizontal', isOn: false },
  ],
  [
    // Dígito 2
    { id: 0, position: 'horizontal', isOn: true },
    { id: 1, position: 'vertical', isOn: false },
    { id: 2, position: 'vertical', isOn: true },
    { id: 3, position: 'horizontal', isOn: true },
    { id: 4, position: 'vertical', isOn: true },
    { id: 5, position: 'vertical', isOn: false },
    { id: 6, position: 'horizontal', isOn: true },
  ],
  [
    // Dígito 3
    { id: 0, position: 'horizontal', isOn: true },
    { id: 1, position: 'vertical', isOn: false },
    { id: 2, position: 'vertical', isOn: true },
    { id: 3, position: 'horizontal', isOn: true },
    { id: 4, position: 'vertical', isOn: false },
    { id: 5, position: 'vertical', isOn: true },
    { id: 6, position: 'horizontal', isOn: true },
  ],
  [
    // Dígito 4
    { id: 0, position: 'horizontal', isOn: false },
    { id: 1, position: 'vertical', isOn: true },
    { id: 2, position: 'vertical', isOn: true },
    { id: 3, position: 'horizontal', isOn: true },
    { id: 4, position: 'vertical', isOn: false },
    { id: 5, position: 'vertical', isOn: true },
    { id: 6, position: 'horizontal', isOn: false },
  ],
  [
    // Dígito 5
    { id: 0, position: 'horizontal', isOn: true },
    { id: 1, position: 'vertical', isOn: true },
    { id: 2, position: 'vertical', isOn: false },
    { id: 3, position: 'horizontal', isOn: true },
    { id: 4, position: 'vertical', isOn: false },
    { id: 5, position: 'vertical', isOn: true },
    { id: 6, position: 'horizontal', isOn: true },
  ],
  [
    // Dígito 6
    { id: 0, position: 'horizontal', isOn: true },
    { id: 1, position: 'vertical', isOn: true },
    { id: 2, position: 'vertical', isOn: false },
    { id: 3, position: 'horizontal', isOn: true },
    { id: 4, position: 'vertical', isOn: true },
    { id: 5, position: 'vertical', isOn: true },
    { id: 6, position: 'horizontal', isOn: true },
  ],
  [
    // Dígito 7
    { id: 0, position: 'horizontal', isOn: true },
    { id: 1, position: 'vertical', isOn: false },
    { id: 2, position: 'vertical', isOn: true },
    { id: 3, position: 'horizontal', isOn: false },
    { id: 4, position: 'vertical', isOn: false },
    { id: 5, position: 'vertical', isOn: true },
    { id: 6, position: 'horizontal', isOn: false },
  ],
  [
    // Dígito 8
    { id: 0, position: 'horizontal', isOn: true },
    { id: 1, position: 'vertical', isOn: true },
    { id: 2, position: 'vertical', isOn: true },
    { id: 3, position: 'horizontal', isOn: true },
    { id: 4, position: 'vertical', isOn: true },
    { id: 5, position: 'vertical', isOn: true },
    { id: 6, position: 'horizontal', isOn: true },
  ],
  [
    // Dígito 9
    { id: 0, position: 'horizontal', isOn: true },
    { id: 1, position: 'vertical', isOn: true },
    { id: 2, position: 'vertical', isOn: true },
    { id: 3, position: 'horizontal', isOn: true },
    { id: 4, position: 'vertical', isOn: false },
    { id: 5, position: 'vertical', isOn: true },
    { id: 6, position: 'horizontal', isOn: true },
  ],
];
