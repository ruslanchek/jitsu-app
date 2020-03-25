import React, { FC, Fragment } from 'react';
import { ImageModel } from '../../../models/image';

interface IProps {
  src: ImageModel[];
  alt?: string;
  className?: string;
}

export const ImageSet: FC<IProps> = ({ src, alt = '', className }) => {
  const jpeg = src.find(s => s.format === 'jpeg');
  if (jpeg) {
    return <img className={className} src={jpeg.url} alt={alt} />;
  }
  return null;
};
