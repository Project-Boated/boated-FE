const addZeroToNumber = (str: string) => (+str < 10 ? `0${str}` : str);

export default addZeroToNumber;
