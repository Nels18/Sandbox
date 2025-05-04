import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { faIconsDefinitionsToRegister } from './all-registered.fa-icons';

export const setDefaultPrefixForSyntacticSugarUsage = (
  faConfig: FaConfig,
): IconPrefix => {
  const defaultPrefix: IconPrefix = 'far';
  faConfig.defaultPrefix = defaultPrefix;

  return faConfig.defaultPrefix as IconPrefix;
};

export const registerAllFaIcons = (library: FaIconLibrary): void => {
  library.addIcons(...faIconsDefinitionsToRegister);
};
