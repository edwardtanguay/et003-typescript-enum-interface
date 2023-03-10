import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { ITechBook, Language } from './interfaces';
import * as tools from './tools';

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

	const getLanguage = (language: string) => {
		switch (language) {
			case '':
				return Language.English;
			case 'german':
				return Language.German;
			case 'french':
				return Language.French;
			default:
				return Language.Unknown;	
		}
	}

	useEffect(() => {
		(async () => {
			const rawTechBooks = (await axios.get(techBooksUrl)).data;
			const _techBooks: ITechBook[] = [];
			rawTechBooks.forEach((rawTechBook: any) => {
				const _techBook: ITechBook = {
					id: rawTechBook.id,
					idCode: rawTechBook.idCode,
					title: rawTechBook.title,
					description: rawTechBook.description,
					language: getLanguage(rawTechBook.language),
				};
				_techBooks.push(_techBook);
			});
			setTechBooks(_techBooks);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				techBooks,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
