import { CommunitiesContainer, Content } from '../styles/Communities.styled';
import Image from 'next/dist/client/image';

const Communities = () => {
  return (
    <CommunitiesContainer>
      <Content>
        <Image src='/images/icon-communities.svg' alt='icon-communities' width={40} height={40} />
        <h1>1.4k+</h1>
        <p>Communities Formed</p>
      </Content>
      <Content>
        <Image src='/images/icon-messages.svg' alt='icon-messages' width={40} height={40} />
        <h1>2.7m+</h1>
        <p>Messages Sent</p>
      </Content>
    </CommunitiesContainer>
  );
};

export default Communities;
