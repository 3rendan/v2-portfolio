import styled from 'styled-components';


const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: black;
  padding: .5rem 0 2rem 0;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 768px) {
    display: block;
  }
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;


export default Gallery;
