import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FaConfig,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  registerAllFaIcons,
  setDefaultPrefixForSyntacticSugarUsage,
} from './fa-icons.helper';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class RegisteredFontAwesomeIconsModule {
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    setDefaultPrefixForSyntacticSugarUsage(faConfig);
    registerAllFaIcons(library);
  }
}
