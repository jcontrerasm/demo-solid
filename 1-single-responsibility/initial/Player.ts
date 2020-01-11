class Player {

  private _id: number;
  private _name: string;
  private _win: number;
  private _lose: number;
  private _date: string;

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get win(): number {
    return this._win;
  }

  public set win(value: number) {
    this._win = value;
  }

  public get lose(): number {
    return this._lose;
  }

  public set lose(value: number) {
    this._lose = value;
  }

  public get date(): string {
    return this._date;
  }

  public set date(value: string) {
    this._date = value;
  }

  public winPercentage(player: Player) {
    // porcentaje ganados
  }

  public losePercentage(player: Player) {
    // porcentaje perdidos
  }

  public savePlayer(player: Player) {
    // guardar jugador
  }

  public deletePlayer(player: Player) {
    // eliminar jugador
  }

  public showPlayerHD(player: Player) {
    // mostrar jugador
  }

  public showPlayer(player: Player) {
    // mostrar jugador
  }
}

export { Player };
