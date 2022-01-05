import React from 'react';
import Feed from '../Feed';

import { Container,Banner,Avatar ,ProfileData,LocationIcon,CakeIcon,Followage,EditButton} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>

      <Banner>
        <Avatar/>
        
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Davi Sousa</h1>
        <h2>@davi_sousa</h2>

        <p>
          Developet at <a href="https://github.com/devDaviSousa">@davi_sousa</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Crateús,Brasil
          </li>

          <li>
            <CakeIcon/>
            Nascido(a) em 31 de maio de 1997
          </li>
        </ul>

      <Followage>
        <span>
          seguindo <strong>94</strong>
        </span>

        <span>
        <strong>555 </strong> seguindores 
        </span>
      </Followage>
      </ProfileData>
      <Feed/>

    
    </Container>
  );
}

export default ProfilePage;