import { useEffect, useState } from 'react';
import { CommentsList } from '../CommentsList/CommentsList';
import { Form } from '../Form/Form';
import Spinner from '../Spinner/Spinner';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';
import { CommentI, ModalI } from '../../interfaces';
import { Server } from '../../service/server';
import { Message } from '../Message/Message';
import { PostStatus } from '../../enums';


export const Modal = ({activeId, toggleShowModal}:ModalProps):JSX.Element => {
	const [modalInfo, setModalInfo] = useState<ModalI>({id: 0, url: "", comments:[]});
	const [postStatus, setPostStatus] = useState<PostStatus>(PostStatus.none);

	const server = new Server();
	const updateModal = async () => {
		server.getModalInfo(activeId).then(res => {
			setModalInfo({...res});
		});
	};

	const addComment = (data:CommentI, event:React.SyntheticEvent) => {
		setPostStatus(PostStatus.wait);

		event.preventDefault();
		
		server.postData(data).then(res => {
			switch(res.status) {
				case(204): {
					setPostStatus(PostStatus.done);
					break;
				}
				default:{
					setPostStatus(PostStatus.error);
					break;
				}
			}		
		});

		togglePostStatus();
	};

	useEffect(() => {
		updateModal();
	}, [activeId]);

	const togglePostStatus = () => {
		setTimeout(() => setPostStatus(PostStatus.none), 1000);
	};

	return(
		<div className={styles.modalContainer} style={ {top: window.pageYOffset} as React.CSSProperties }>
			{
				activeId == modalInfo.id
					?
						<div className={styles.modal}>
						
							<img id={modalInfo.id.toString()} src={modalInfo.url} alt='active photo' className={styles.modalImg}/>
							
							<Form id={activeId} addComment={addComment}/>

							<CommentsList comments={modalInfo.comments}/>	

							<div className={styles.modalClose} onClick={toggleShowModal}>
								X
							</div>	
						</div>		
					:
						<Spinner/>
			}

			{
				postStatus != PostStatus.none && <Message status={postStatus}/>
			}
			
		</div>
	);
};