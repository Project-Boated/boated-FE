const kakaoLoginPath = `https://kauth.kakao.com/oauth/authorize?client_id=c4b1acae114723b9d0071de88a8f8b08&redirect_uri=${process.env.CLIENT_URL}/login&response_type=code`;

export default kakaoLoginPath;
