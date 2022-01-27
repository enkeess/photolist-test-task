import { PostStatus } from '../../enums';
import Spinner from '../Spinner/Spinner';
import styles from './Message.module.scss';
import { MessageProps } from './Message.props';

export const Message = ({status}:MessageProps)=> {
	const getMessage = () => {
		switch(status) {
			case(PostStatus.wait): {
				return(<>
					<Spinner/>
					<div>Загрузка</div>
				</>);
			}
			case(PostStatus.error): {
				return(<>
					<div>Ошибка сервера</div>
				</>);
			}
			case(PostStatus.done): {
				return(<>
					<div>Комментарий отправлен!</div>
				</>);
			}
		}
	};

	return(
		<div className={styles.message}>
			{getMessage()}
		</div>
	);
};