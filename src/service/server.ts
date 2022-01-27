import { CommentI } from '../interfaces';

export class Server {
	_urlBase = 'https://boiling-refuge-66454.herokuapp.com/images/';

	getPhotos = async () => {
		return(await fetch(this._urlBase)
			.then(res => res.json()));
	};

	getModalInfo = async (id:number) => {
		return(await fetch(`${this._urlBase}${id}`)
			.then(res => res.json()));
	};

	postData = async (data:CommentI) => {
		return(await fetch(`${this._urlBase}${data.id}/comments`, {
			method: 'POST', 
			body: JSON.stringify(data) 
		}));
	};
}