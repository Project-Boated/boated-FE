export default function getServerSidePropsCookie(cookieString: string, target: string) {
  return (
    cookieString
      ?.split(';')
      .filter((i) => i.includes(target))[0]
      ?.split('=')[1] || null
  );
}
