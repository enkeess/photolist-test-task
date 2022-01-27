import styles from './Comment.module.scss';
import { CommentProps } from './Comment.props';

export const Comment = ({id, date, text }:CommentProps):JSX.Element => {
	const getZero = (n:number) => {
		return(n > 10? n.toString() : `0${n}`);
	};

	const getDate = (ms:number) => {
		const d = new Date(ms);
		console.log(d.toDateString());
		return(`${getZero(d.getDate())}.${getZero(d.getMonth() + 1)}.${d.getFullYear()}`);
	};

	return(
		<div key={id} className={styles.comment}>
			<div className={styles.title}>	
				{getDate(date)}
			</div>

			<div className={styles.text}>	
				{text}
			</div>
		</div>
	);


};