import styles from './Footer.module.scss';

export const Footer = ():JSX.Element => {
	
	return(
		<footer className={styles.footer}>
			© 2018- {new Date().getFullYear()}
		</footer>
	);
};