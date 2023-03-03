/**
* Capitalize the first letter of a string.
*
* tools.capitalizeFirstLetter("this is a sentence.");
*
* "This is a sentence."
*/
export const uppercaseFirstLetter = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
}