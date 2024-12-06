import {Header} from '@/components/Header'

const RootLayout = ({
  children,
}) =>{
  return (
    <html lang="en">
      <body><Header />{children}</body>
    </html>
  );
}


export default RootLayout