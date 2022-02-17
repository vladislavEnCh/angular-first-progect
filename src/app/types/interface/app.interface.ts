export interface styleObj  {
    placeholder?: string;
      width?: number,
      height?: number,
      checkbox?: boolean,
      borderStyle?: string,
      FontSizeInput?:number,
      Select?: string,
      ColorInputRGB?: number | string
}

export interface dropObjectInterface {
  item:any,
  id:number,
  style?: styleObj
}