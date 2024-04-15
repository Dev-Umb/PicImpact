import DashHeader from '~/components/layout/DashHeader'
import { BaseSide } from '~/components/layout/BaseSide'
import Transitions, { Animate } from '~/components/layout/Transitions'

import { AntdRegistry } from '@ant-design/nextjs-registry'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Transitions className="h-full flex flex-col">
          <DashHeader/>
          <div className="grid flex-1 sm:grid-cols-[200px_1fr] h-full w-full bg-gray-100 dark:bg-zinc-900">
            <aside className="hidden w-[200px] flex-col sm:flex">
              <BaseSide/>
            </aside>
            <main className="flex w-full h-full flex-1 flex-col p-2">
              <Animate className="flex-1">
                <AntdRegistry>{children}</AntdRegistry>
              </Animate>
            </main>
          </div>
        </Transitions>
      </div>
    </>
  );
}
