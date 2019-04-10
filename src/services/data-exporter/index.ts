////////////////////////////////////////////////////////////////////////////
//
// Copyright 2019 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import * as path from 'path';

export interface IExportEngine {
  export(realm: Realm, destinationPath: string): void;
}

export enum DataExportFormat {
  JSON = 'json',
  LocalRealm = 'local-realm',
}

export class DataExporter {
  private readonly format: DataExportFormat;

  constructor(format: DataExportFormat) {
    this.format = format;
  }

  public suggestFilename(realm: Realm) {
    const basename = path.basename(realm.path, '.realm');
    if (this.format === DataExportFormat.JSON) {
      return `${basename}.json`;
    } else if (this.format === DataExportFormat.LocalRealm) {
      return `${basename}.realm`;
    } else {
      throw new Error(`Unexpected format ${this.format}`);
    }
  }

  public export(realm: Realm, destinationPath: string) {
    const ExportEngine = engines[this.format];
    const engine = new ExportEngine();
    return engine.export(realm, destinationPath);
  }
}

// Doing this last to prevent circular reference

import { JSONExportEngine } from './json';
import { LocalRealmExportEngine } from './local-realm';
const engines = {
  [DataExportFormat.JSON]: JSONExportEngine,
  [DataExportFormat.LocalRealm]: LocalRealmExportEngine,
};