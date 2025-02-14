import {ToastProvider, Register} from '@/components/Register';

export default function Home() {
  return (
  <ToastProvider>
  <Register />
	</ToastProvider>
  );
}
