import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { ReactComponent as Photo } from '../../images/photo.svg';

const StyledAdd = styled.div`
    width: auto;
    height: 180px;
    display: flex;

    justify-content: center;
    align-items: center;

    margin: 29px 25px;
    border: 1px #AFAFAF solid;
`

const StyledDiv = styled.div`
    margin-top: 10px;
`

const AddPicture = (): JSX.Element => {
    return(
        <StyledAdd>
            <Button color="#FF6565"><Photo width="37.5px" /><StyledDiv>학식 사진 등록하고 20P 획득</StyledDiv></Button>
        </StyledAdd>
    )
}

export default AddPicture;