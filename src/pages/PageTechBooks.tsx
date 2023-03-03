import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageTechBooks = () => {
	const { appTitle } = useContext(AppContext);

	return (
		<div className="pageTechBooks">
			<Helmet>
				<title>{appTitle} - Info</title>
			</Helmet>
			<div className="content">
				<p>tech books are coming here...</p>
			</div>
		</div>
	);
};