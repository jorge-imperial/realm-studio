import CSharpSchemaExporter from './languages/csharp';
import JavaSchemaExporter from './languages/java';
import JSSchemaExporter from './languages/javascript';
import KotlinSchemaExporter from './languages/kotlin';
import SwiftSchemaExporter from './languages/swift';

import { ISchemaExporter } from './schemaExporter';

export enum Language {
  CS = 'C#',
  Java = 'Java',
  Kotlin = 'Kotlin',
  JS = 'JavaScript',
  ObjC = 'Objective-C',
  Swift = 'Swift',
  TS = 'TypeScript',
}

export const SchemaExporter = (language: Language): ISchemaExporter => {
  switch (language) {
    case Language.Swift:
      return new SwiftSchemaExporter();
    case Language.JS:
      return new JSSchemaExporter();
    case Language.Java:
      return new JavaSchemaExporter();
    case Language.Kotlin:
      return new KotlinSchemaExporter();
    case Language.CS:
      return new CSharpSchemaExporter();
    default:
      throw new Error('Language not supported');
  }
};