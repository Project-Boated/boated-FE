// 1 ~ maxNum까지의 랜덤 숫자 반환
const getRandomNumber = (maxNum: number): number => Math.floor(Math.random() * maxNum) + 1;

export default getRandomNumber;
