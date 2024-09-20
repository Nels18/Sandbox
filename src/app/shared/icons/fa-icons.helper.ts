import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { faIconsDefinitionsToRegister } from './all-registered.fa-icons';

export const setDefaultPrefixForSyntacticSugarUsage = (
  faConfig: FaConfig,
): IconPrefix => {
  faConfig.defaultPrefix = 'far';

  return faConfig.defaultPrefix;
};

export const registerAllFaIcons = (library: FaIconLibrary): void => {
  library.addIcons(...faIconsDefinitionsToRegister);
};
