import { atom } from 'recoil';
import testImg from '../images/sampleMeal.png'

export const PhotoState = atom({
  key: 'PhotoState',
  default: [
    {
      picId: 1,
      address: testImg,
    },
  ],
});
