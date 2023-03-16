import styled from "styled-components";

/*
 * Стили компонента ImageGallery
//  */
export const ImageGalleryList = styled.ul `
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const Notification = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding-top: 50px;
`
