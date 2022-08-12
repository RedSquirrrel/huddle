import { StyledCard } from '../styles/Card.styled';

const Card = ({ item: { id, title, body, image } }) => {
  const ifOdd = id % 2 === 0;

  return (
    <StyledCard layout={ifOdd && 'row-reverse'} bg={ifOdd && '#fff'} bgColor={ifOdd && ''} padding={ifOdd && ''}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <picture>
          <img src={`/images/${image}`} alt='illustration' />
        </picture>
      </div>
    </StyledCard>
  );
};

export default Card;
