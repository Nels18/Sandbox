import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { freeRegularIcons } from './free-regular-icons';
import { freeSolidIcons } from './free-solid-icons';
import { freeBrandIcons } from './free-brand-icons';

export const faIconsDefinitionsToRegister: IconDefinition[] = [
  ...freeRegularIcons,
  ...freeSolidIcons,
  ...freeBrandIcons,
];
