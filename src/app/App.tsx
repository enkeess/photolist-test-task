import { useEffect, useState } from 'react';
import { Modal, PhotoList } from '../components';
import { PhotoI } from '../interfaces';
import { Server } from '../service/server';

import styles from './App.module.scss';

const App = ()=> {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [activeId, setActiveId] = useState<number>(0);
	const [photos, setPhotos] = useState<PhotoI[]>([]);
	const server = new Server();

	const updatePhotos = async () => {
		server.getPhotos().then(res => setPhotos(res));
	};

	useEffect(() => {
		updatePhotos();
	}, []);

	const toggleShowModal = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		const body = document.querySelector('body');
		if(body) {body.style.overflow = showModal ? 'hidden' : 'auto';}
	}, [showModal]);

  return (
    <div className={styles.app}>
		<div className={styles.container}>
			<PhotoList photos={photos} setActiveId={setActiveId} toggleShowModal={toggleShowModal}/>
			{
				showModal && <Modal activeId={activeId} toggleShowModal={toggleShowModal}/>
			}		
		</div>
    </div>
  );
};

export default App;
