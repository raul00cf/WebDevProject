import React, { useContext } from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content } from './Profile.styles';

import ProfileUser from '../ProfileUser';
import ProfileAdmin from '../ProfileAdmin';

import { Context } from '../../context';


const Profile = ({ option, setOption, setShowing, data, setData, numItems, setNumItems, emptyItem }) => {

  const [session, , users, ] = useContext(Context);

  const user = users[session.user];

  return (
    <Wrapper>
      <Content>
        {user.email!=="admin" ? (
          <ProfileUser option={ option } setOption={ setOption } setShowing={ setShowing } />
        ) : (
          <ProfileAdmin option={ option } setOption={ setOption } setShowing={ setShowing } data={ data } setData={ setData } numItems={ numItems } setNumItems={ setNumItems } emptyItem={ emptyItem } />
        )}
      </Content>
    </Wrapper>
  )
};


export default Profile;