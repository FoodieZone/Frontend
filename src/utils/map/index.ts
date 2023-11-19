import type { Restaurant } from '~/interfaces';

export const makeCustomOverlay = ({ image, name }: Pick<Restaurant, 'image' | 'name'>) => {
	console.log(image);

	return `
    <div>
      ${name}
    </div>
  `;
};
