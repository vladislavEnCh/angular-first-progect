import { IElementStyle } from './../../../types/interface/app.interface';

export interface IGlobalStyle {
  'background-color'?: string;
  width?: string;
  height?: string;
  border?: string;
}

export interface IObjectWithStyle {
  item: string;
  id: number;
  style: IElementStyle;
}
