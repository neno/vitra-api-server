import { ObjectsObjMultimediaRel } from '@prisma/client';

export class Product {
  id: number;
  ObjObjectTitleTxt: string;
  ObjCategoryVoc: string;
  ObjDateFromInt?: number;
  ObjDateFromTo?: number;
  ObjDateTxt?: string;
  ObjDesigner?: string;
  ObjDimension?: string;
  ObjMarkdown?: string;
  ObjMaterialTechniqueTxt?: string;
  ObjMultimediaRel?: ObjectsObjMultimediaRel[];
  ObjFullText: string;
}
