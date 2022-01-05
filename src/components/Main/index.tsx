import React from 'react';
import  ProfilePage from '../ProfilePage'
 import {
    Container ,
    Header,
    BackIcon,
     ProfileInfo,
     BottomMenu,
     HomeIcon,
     SearchItem,
     EmailIcon,
     BellIcon
    } from './styles';

const Main: React.FC = () => {
  return (

    <Container>
      <Header>

        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Davi Sousa</strong>
          <span>555 Tweets</span>
        </ProfileInfo>

      </Header>

      <ProfilePage/>

       <BottomMenu>
        <HomeIcon className='active'/>
        <SearchItem/>
        <BellIcon/>
        <EmailIcon/>
      </BottomMenu> 

    </Container>
  )
}

export default Main;