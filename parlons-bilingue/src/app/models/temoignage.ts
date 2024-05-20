export interface ITemoignage {
  name: string;
  stars: number;
  title: string;
  description: string;
}

export default class Temoignage implements ITemoignage {
  name: string;
  stars: number;
  title: string;
  description: string;

  constructor(name: string, stars: number, title: string, desc: string) {
    this.name = name;
    this.stars = stars;
    this.title = title;
    this.description = desc;
  }
}
