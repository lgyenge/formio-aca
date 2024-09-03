/*!
 * Copyright © 2005-2024 Hyland Software, Inc. and its affiliates. All rights reserved.
 *
 * Alfresco Example Content Application
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail. Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * from Hyland Software. If not, see <http://www.gnu.org/licenses/>.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ExtensionService, provideExtensionConfig } from '@alfresco/adf-extensions';
// import { CoreModule,  TRANSLATION_PROVIDER  } from '@alfresco/adf-core';
import { CoreModule } from '@alfresco/adf-core';

import { FirstComponent } from './first/first.component';
import { FormioModule } from '@formio/angular';
// import { MyExtensionService } from './my-extension.service';

export function components() {
  return [FirstComponent];
}

@NgModule({
  imports: [CommonModule, CoreModule, BrowserModule, FormsModule, FormioModule, FirstComponent],
  providers: [
    /* {
        provide: TRANSLATION_PROVIDER,
        multi: true,
        useValue: {
            name: 'adf-my-extension',
            source: 'assets/adf-my-extension',
        },
    }, */
    // MyExtensionService,
    provideExtensionConfig(['formio-extension.json'])
  ],
  // declarations: components(),
  exports: components()
})
export class FormioAcaModule {
  constructor(extensions: ExtensionService) {
    extensions.setComponents({
      'formio-extension.main.component': FirstComponent
    });
  }
}
