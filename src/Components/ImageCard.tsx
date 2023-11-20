import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

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
    <div className="imageCard relative">
      <Image
        onClick={openModal}
        src={pic}
        alt="1"
        className="image-comp filter grayscale hover:grayscale-0 cursor-pointer"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ImageCard;
