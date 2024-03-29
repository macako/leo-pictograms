import { Pictogram } from '../pictogram/interfaces';
import { getEnvVariables } from './getEnvVariables';

const initSufix = 1;
const { STORAGE_URL } = getEnvVariables();

export const imagesResurces = `${STORAGE_URL}/leo-pictograms`;

export const createPictograms = (
  prefix: string,
  endSufix: number,
  backgroundColor?: string
): Pictogram[] => {
  let pictorgrams: Pictogram[] = [];

  for (let i = initSufix; i <= endSufix; i++) {
    const image = `${imagesResurces}/${prefix}${i}.jpg`;

    pictorgrams.push({
      id: i.toString(),
      name: `${prefix}${i}`,
      image,
      backgroundColor: backgroundColor ? backgroundColor : 'transparent',
    });
  }

  return pictorgrams;
};

export const getImageResource = (pictogramFile: string) => {
  return `${imagesResurces}/pictograms/${pictogramFile}`;
};
