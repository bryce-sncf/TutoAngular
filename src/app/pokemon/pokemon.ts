export class Pokemon {
  constructor(
    public id: number,
    public hp: number,
    public cp: number,
    public name: string,
    public picture: string,
    public types: Array<string>,
    public created: Date,
  ) {}
}
