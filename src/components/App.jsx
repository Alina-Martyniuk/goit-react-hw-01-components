import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "../../src/user.json";
import items from "../../src/data.json";
import data from "../../src/friends.json";
import transactions from "../../src/transactions.json";


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
      <Profile user={user} />
      <Statistics items={items} />
      <FriendList data={data} />
      <TransactionHistory transactions={transactions} />
      
      </div>
  );
};
