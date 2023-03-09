import React from 'react';
import { useRecoilValue } from 'recoil';
import { PhotoState } from '../../Atom/phototList';
import { plannerAct } from '../../Atom/PlannerAct';
import AddPicture from './AddPicture';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: auto;
  margin: 29px 25px;
  border: 1px #afafaf solid;
`;

const PhotoList = (): JSX.Element => {
  const photo = useRecoilValue(PhotoState);
  const ActivatedPlanner = useRecoilValue(plannerAct);
  const filteredPhoto = photo.filter((p) => p.picId === ActivatedPlanner);

  return (
    <>
      {filteredPhoto.length === 0 ? (
        <AddPicture />
      ) : (
        filteredPhoto.map((p) => {
          return <StyledImg src={p.address} key="1" />;
        })
      )}
    </>
  );
};

export default PhotoList;
