import { Component, OnInit } from '@angular/core';
import { NetflixModel } from './models/netflix-model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  public netflixModel: NetflixModel;

  constructor() {
    this.netflixModel = {
      nav: {
        title: 'Warner Live',
        logo: {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png',
          alt: 'Warner Bros Logo',
        },
      },
      hero: {
        title: 'Los 5 más populares hoy',
        imgGallery: [
          {
            src: '../../../assets/hero/1.png',
            alt: 'Top 1',
          },
          {
            src: '../../../assets/hero/2.png',
            alt: 'Top 2',
          },
          {
            src: '../../../assets/hero/3.png',
            alt: 'Top 3',
          },
          {
            src: '../../../assets/hero/4.png',
            alt: 'Top 4',
          },
          {
            src: '../../../assets/hero/5.png',
            alt: 'Top 5',
          },
        ],
      },
      sciFi: {
        title: 'Ciencia ficción',
        imgGallery: [
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSUkvrLwmBJphsxKIeSV0YrXxqd-1mO8HKjNROTCBHUfFWqFUsxZwCRl3ZtFWS4vvlEZ0V0On9zXn7K5Lffcqc2xCkE.webp?r=ead',
            alt: 'Rick & Morty',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbs-lgRDGEU1BbGJc5nU3F-lr8ltmr2wDVgVFOhH_1WpGzCLQlzACWvi0XJI8I5-WhcPsjXlScVT1E85BY6YXsTw5mNNzQi0h6LRy1j3aaHEsjRpy97E4nZVlSCx.jpg?r=a36',
            alt: 'Umbrella Academy',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdnumTfNILBCnWUXLAf5SmX_BUNQIQtJ0XLwTfi2YSIcs7aZyNfB-zo4enlgr8LaRjwFSbkjejhLBAYd0mmqfHvemn4.webp?r=8af',
            alt: 'Arrival',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaGha2PfvPaJo-TmOsdw5FIJNskNMcmotlwB3ga7cq8o8z6Yn3iIkZl_9ipIpZ3EERZEqAI-h2oKyGrf_xlS8qzSTbM.webp?r=564',
            alt: 'OATS Studios',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQC1JY7P9GbinRKDRt3JwsenQv87EwcOXfQny9Mgagyw924kgI3KzqKtOgYNk1XL9hKl9GJ1jlieHpWgzXurA4UgnitxYNG3hL1kxEzE-6C6Z0Bo4BPSxPbTHXxy.jpg?r=f81',
            alt: 'Love Death & Robots',
          },
        ],
      },
      action: {
        title: 'Ciencia ficción',
        imgGallery: [
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa-MK8vBWPROTifzmZagh1zF3jotSdVo5TDCnjrYzJKPmHggU8SrMCbDUniF4nDbiK_37YHGfxsAzVD2j-mpHDM38k4.webp?r=bab',
            alt: 'Malditos Bastardos',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBBdqi0rvD5y73I6sw78FM42Nxo5nKHoBrKiR0JXXpwxDoJo3FHIkQ3m93b0v-QG0fNPLlRxhPVPhUbJHW6LSVZtN8.webp?r=ceb',
            alt: 'Minority Report',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQEYk1x4p9s1_Tv3ZrTZT9WGLirav0yuhxMiOk_koENK-J-l3bRyDKuAsffPRAX7SiPObHYv3lUKkdOlXMPtZTaI4FM.webp?r=112',
            alt: 'El Increible Hulk',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXqBiMfJUnn8IodGLDrJit6vLZI4vFGrMa4DN-wicHxSmx2GlLu9KBWB1WkDmC9I-0vCwP19jVNWddKDmeWKivfhjdI.webp?r=8a1',
            alt: 'Apollo 13',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW4EBcaFYwd0v1hMDQeF9Oo4OZZUSGRULsLKZESWxUWwfuidhENOgJqnsfirij1pxeA95rNebII-69CTDenoa0oBRzA.webp?r=73c',
            alt: 'Godzilla',
          },
        ],
      },
    };
  }

  ngOnInit(): void {}
}
