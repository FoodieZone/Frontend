import type { Restaurant } from '~/interfaces';
import '../../styles/overlay.css';

export const makeCustomOverlay = ({ image, name }: Pick<Restaurant, 'image' | 'name'>, isActive: boolean) => `
    <div class="container">
      <div class="wrapper ${isActive ? 'red' : 'black'}">
        <img src=${image}/>
      </div>
      <span class="text ${isActive ? 'red' : 'black'}">${name}</span>
    </div>
  `;
