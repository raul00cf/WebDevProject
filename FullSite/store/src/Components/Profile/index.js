import React, { useContext } from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content } from './Profile.styles';

import ProfileUser from '../ProfileUser';
import ProfileAdmin from '../ProfileAdmin';

import { Context } from '../../context';


const Profile = ({ option, setOption, setShowing, data, setData, functions, users, setUsers }) => {

  const [session, ] = useContext(Context);

  return (
    <Wrapper>
      <Content>
        {session.user.email!=="admin" ? (
          <ProfileUser option={ option } setOption={ setOption } setShowing={ setShowing } functions={ functions } />
        ) : (
          <ProfileAdmin option={ option } setOption={ setOption } setShowing={ setShowing } data={ data } setData={ setData } functions={ functions } users={ users } setUsers={ setUsers } />
        )}
      </Content>
    </Wrapper>
  )
};


export default Profile;