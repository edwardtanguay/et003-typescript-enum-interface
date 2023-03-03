export interface ITechBook {
	id: number;
	idCode: string;
	title: string;
	description: string;
	language: Language
}

export enum Language {
	English = "English",
	German = "German",
	French = "French",
	Unknown = "Unknown"
}