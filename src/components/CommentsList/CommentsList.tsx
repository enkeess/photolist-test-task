import styles from './CommentsList.module.scss';
import { CommentsListProps } from './CommentsList.props';
import { Comment } from '../Comment/Comment';

export const CommentsList = ({comments}:CommentsListProps):JSX.Element => {
	console.log(comments.length);
	return(		
		<div className={styles.list}>

		{ comments.length > 0 
		? 
			comments.map(com => <Comment {...com} />)
		: 
			<div> Нет комментариев</div>
		}
		</div>				
	);	
};