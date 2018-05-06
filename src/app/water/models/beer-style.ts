export class BeerStyle {

  constructor(
    public id: number,
    public bjcpStyleId: string,
    public name: string,
    public calciumRange: string,
    public magnesiumRange: string,
    public alkalinityRange: string,
    public sulfateRange: string,
    public chlorideRange: string,
    public sodiumRange: string,
    public residualAlkalinityRange: string,
    public color: string
  ) { }

}
