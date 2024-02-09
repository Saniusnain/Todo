const MAX_LENGTH: number = 30;

export const maxLength = (value: string) => {
	if (value && value.length <= MAX_LENGTH) {
		return value;
	}
	return value ? value.slice(0, MAX_LENGTH) : '';
};

export const setUserId = (id:string) => {
	localStorage.setItem('id', id);
}