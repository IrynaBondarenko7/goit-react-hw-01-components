import { Profile } from './Profile/Prorile/Profile';
import user from '../user.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Statistics } from './Statistics/Statistic/Statistics';
import data from '../data.json';
export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <GlobalStyle />
    </Layout>
  );
};
