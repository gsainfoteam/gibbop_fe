import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { navigatorState } from '../../Atom/Navigator';
import { PhotoState } from '../../Atom/phototList';
import AddPicture from './AddPicture';

const PhotoList = (): JSX.Element => {
  const [photo, SetPhoto] = useRecoilState(PhotoState);
  const restaurant = useRecoilValue(navigatorState);
  const studentRes = restaurant.student;

  return (
    <>
      <AddPicture />
    </>
  );
};

export default PhotoList;
