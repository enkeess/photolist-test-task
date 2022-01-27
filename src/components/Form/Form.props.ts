import { CommentI } from '../../interfaces';

export interface FormProps {
	id:number;
	addComment: (data:CommentI, event: React.SyntheticEvent) => void;
}