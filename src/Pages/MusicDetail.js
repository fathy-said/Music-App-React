import React from 'react';
import { DetailBox } from '../components';
import { useParams } from 'react-router-dom';
const MusicDetail = () => {
  let params = useParams()
  return (
    <>
      <DetailBox detailId={params.type} />
    </>
  );
}

export default MusicDetail;
