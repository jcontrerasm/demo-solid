class User {

  private _id: number;
  private _name: string;
  private _email: string;

  constructor(id: number, name: string, email: string) {
    this._id = id;
    this._name = name;
    this.email = email;
  }

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

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }
}

export { User };
