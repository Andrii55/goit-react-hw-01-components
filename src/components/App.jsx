import transactions from 'data/transactions.json';
import user from 'data/user.json';
import data from 'data/data.json';
import friendsList from 'data/friends.json';
import { Profile } from './Profile/Profile';
import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Section title="Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistic title="Upload stats" stats={data} />
      </Section>
      <Section title="Friend List">
        <FriendList friends={friendsList} />
      </Section>
      <Section title="Transactions History">
        <TransactionHistory transactions={transactions} />
      </Section>
    </>
  );
};
