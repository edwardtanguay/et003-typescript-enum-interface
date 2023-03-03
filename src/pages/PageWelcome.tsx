import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageWelcome = () => {
	const { appTitle, techBooks} = useContext(AppContext);

	return (
		<div className="pageWelcome">
			<Helmet>
				<title>{appTitle} - Welcome</title>
			</Helmet>
			<p>We currently have {techBooks.length} books.</p>
		</div>
	);
};
