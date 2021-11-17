import styled from 'styled-components';


const GalleryItem = styled.article`
  text-align: center;
  max-width: 50%;
  /* border: solid black 1px; */
  float: left;
  margin: auto;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    min-height: 45vh;
    max-width: 95%;
    margin: auto;
  }
  @media only screen and (max-width: 600px) {
    min-height: 66vh;
    max-width: 90%;
    margin: auto;
  }
`;
export default GalleryItem;
