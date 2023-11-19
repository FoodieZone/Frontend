import type { Restaurant } from '~/interfaces';
import '../../styles/overlay.css';

export const makeCustomOverlay = ({ image, name }: Pick<Restaurant, 'image' | 'name'>) => `
    <div class="container">
      <div class="wrapper">
        <img src=${image}/>
      </div>
      <span>${name}</span>
    </div>
  `;
