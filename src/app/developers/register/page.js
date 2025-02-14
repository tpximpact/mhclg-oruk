import ToastProvider from '@/components/toast-provider';
import { MessageCreateForm } from '@/components/message-create-form';
import { MessageList } from '@/components/message-list';

export default function Home() {
  return (
  <ToastProvider>
    <main>
      <MessageCreateForm />
      <MessageList />
    </main>
	</ToastProvider>
  );
}
