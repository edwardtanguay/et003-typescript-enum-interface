import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageTechBooks = () => {
	const { appTitle, techBooks } = useContext(AppContext);

	return (
		<div className="pageTechBooks">
			<Helmet>
				<title>{appTitle} - Tech Books</title>
			</Helmet>
			<div className="content">
				{techBooks.map(techBook => {
					return (
						<div className="techBook" key={techBook.id}>
							<div className="title">{techBook.title}</div>
							<div className="language">The language is: {techBook.language}</div>
						</div>
					)
				})}
			</div>
		</div>
	);
};