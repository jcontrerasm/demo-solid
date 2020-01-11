class Court {

  private _width: number;
  private _height: number;
  private _grass: number;

  public get width(): number {
    return this._width;
  }

  public set width(value: number) {
    this._width = value;
  }

  public get height(): number {
    return this._height;
  }

  public set height(value: number) {
    this._height = value;
  }

  public get grass(): number {
    return this._grass;
  }

  public set grass(value: number) {
    this._grass = value;
  }

  public cutGrass() {}
}

export { Court };
