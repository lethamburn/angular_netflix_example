export interface NetflixModel {
  nav: Nav;
  hero: Hero;
  sciFi: SciFi;
  action: Action;
}

export interface Nav {
  title: string;
  logo: Img;
}

export interface Img {
  src: string;
  alt: string;
}

export interface Hero {
  title: string;
  imgGallery: Img[];
}

export interface SciFi {
  title: string;
  imgGallery: Img[];
}

export interface Action {
  title: string;
  imgGallery: Img[];
}
