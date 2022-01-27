import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import { Footer, Header } from '../components';
export const Layout = ({children}:LayoutProps):JSX.Element => {
	return(
		<div className={styles.layout}>
			<Header/>
			{children}
			<Footer/>
		</div>
	);
};