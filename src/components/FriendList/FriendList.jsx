import PropTypes from 'prop-types';
import { Wrapper, List, Item, IsOnline, IsOffline } from "./FriendList.styled"


export const FriendList = ({data}) => {
    return <Wrapper>
        <List>
            {data.map(item => (<Item key={item.id}>
                {item.isOnline ? <IsOnline></IsOnline> : <IsOffline></IsOffline>}
            <img class="avatar" src={item.avatar} alt="User avatar" width="48" />
            <p class="name">{item.name}</p>
             </Item>))}
        </List>
    </Wrapper>
}

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}