import { CommentI } from './Comment.interface';

export interface ModalI {
	id: number;
	url: string;
	comments: CommentI[];
}