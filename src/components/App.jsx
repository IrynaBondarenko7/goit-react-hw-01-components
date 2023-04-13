import { Profile } from './Profile/Prorile/Profile';
import user from '../user.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <GlobalStyle />
    </Layout>
  );
};
