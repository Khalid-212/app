import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

interface ImageCardProps {
  pic: StaticImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ pic }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
    <Fade bottom>
    <Zoom>
    <div className="imageCard relative">
      <Image
        onClick={openModal}
        src={pic}
        alt="1"
        // className="image-comp filter grayscale hover:grayscale-0 cursor-pointer"
        className="image-comp cursor-pointer"
        width={500}
        height={500}
      />
    </div>
    </Zoom>
    </Fade>
    </>
  );
};

export default ImageCard;
