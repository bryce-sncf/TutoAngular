export class Pokemon {
  id!:number;
  constructor(
    public name: string = 'Entrez un nom...',
    public hp: number = 100,
    public cp: number = 10,
    public picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
    public types: Array<string>= ['Normal'],
    public created: Date = new Date(),
  ) {}
}
