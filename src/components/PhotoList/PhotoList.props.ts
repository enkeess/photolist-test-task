import { PhotoI } from '../../interfaces';

export interface PhotoListProps {
	photos: PhotoI[];
	setActiveId: (id:number) => void;
	toggleShowModal: () => void;
}