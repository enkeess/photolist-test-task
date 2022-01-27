import { useState } from 'react';
import styles from './Form.module.scss';
import { FormProps } from './Form.props';

export const Form = ({id, addComment}:FormProps):JSX.Element => {
	const [name, setName] = useState<string>('');
	const [text, setText] = useState<string>('');

	return(
		<form 
			className={styles.form} 
			onSubmit={(event) => {
					addComment({id, text, date: new Date().getTime()}, event);
					setName('');
					setText('');
				}}
		>
			<input 
				className={styles.input} 
				type="text" 
				name='name' 
				placeholder='Ваше Имя'
				value = {name}
				onChange={(e) => setName(e.target.value)}
				required={true}
			/>

			<input 
				className={styles.input} 
				type="text" 
				name='sername' 
				placeholder='Ваш Комментарий'
				value = {text}
				onChange={(e) => setText(e.target.value)}
				required={true}
			/>

			<button className={styles.btn} type='submit'> Оставить комментарий </button>
		</form>
	);
};