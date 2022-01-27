import styles from './PhotoList.module.scss';
import { PhotoListProps } from './PhotoList.props';

export const PhotoList = ({photos, setActiveId, toggleShowModal}:PhotoListProps):JSX.Element => {
	return(
		<div className={styles.photolist}>
			{photos.map(({id, url}) => <img  key={id} src={url} alt="photo" onClick={() => {setActiveId(id); toggleShowModal();}}/>)}
		</div>
	);
};