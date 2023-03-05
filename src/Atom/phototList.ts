import { atom } from 'recoil';

export const PhotoState = atom({
  key: 'PhotoState',
  default: [
    {
      picId: 0,
      address: 'src/image/sampleMeal.png',
    },
  ],
});
