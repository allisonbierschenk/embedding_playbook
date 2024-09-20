import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui";

import { Metrics, TableauEmbed } from 'components';
import { Transactions, RecentSales } from 'components';

export const description = "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image. The main content area is divided into two rows. The first row has a grid of cards with statistics. The second row has a grid of cards with a table of recent transactions and a list of recent sales.";

export const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Metrics basis='sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5' />
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <Card className='dark:bg-stone-900 shadow-xl'>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>Your personal digest of Superstore sales in North America</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-0 xs:p-6 xs:pt-0">
                <TableauEmbed
                  src='https://prod-useast-b.online.tableau.com/t/embeddingplaybook/views/superstore/overview_800x800'
                  width={800}
                  height={1000}
                  hideTabs={true}
                  device='default'
                  toolbar='hidden'
                  layouts = {{
                    'xs': { 'device': 'phone', 'width': 300, 'height': 1350 },
                    'sm': { 'device': 'phone', 'width': 510, 'height': 1350 },
                    'md': { 'device': 'default', 'width': 600, 'height': 1000 },
                    'lg': { 'device': 'phone', 'width': 400, 'height': 1360 },
                    'xl': { 'device': 'tablet', 'width': 720, 'height': 1100 },
                    'xl2': { 'device': 'desktop', 'width': 860, 'height': 1100 },
                  }}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <RecentSales />
            <Transactions />
          </div>
        </div>
      </main>
    </div>
  )
}
