interface MakeCustomOverlayParams {
	image: string;
	name: string;
}

export const makeCustomOverlay = ({ image, name }: MakeCustomOverlayParams) => {
	console.log(image, name);
	return `
    <div></div>
  `;
};
