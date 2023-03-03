import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { ITechBook } from './interfaces';

const techBooksUrl = 'https://edwardtanguay.vercel.app/share/techBooks.json';

interface IAppContext {
	appTitle: string;
	techBooks: ITechBook[];
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const appTitle = 'Tech Book Site';
	const [techBooks, setTechBooks] = useState<ITechBook[]>([]);

	useEffect(() => {
		(async () => {
			setTechBooks((await axios.get(techBooksUrl)).data);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				techBooks
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
