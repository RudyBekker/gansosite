import styled from 'styled-components';
import Slider from 'react-slick';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 90px;
  @media (max-width: 1280px) {
    padding-top: 50px;
  }
  @media (max-width: 1024px) {
    padding-top: 40px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 35px;
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
  img {
    margin-left: auto;
    margin-right: auto;
  }
  h2 {
    font-weight: 700;
    line-height: 1.85;
    margin-top: 30px;
    margin-bottom: 0;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 768px) {
      font-size: 28px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 1.5;
    }
  }
`;

export const AsCarousel = styled(Slider)`
  margin: 0 auto;
  max-width: 720px;
  .slick-slide {
    > div {
      margin: 0 auto;
      max-width: 650px;
      @media only screen and (max-width: 480px) {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
`;

export const AsCarouselNav = styled(Slider)`
  margin: 0 auto;
  max-width: 750px;
  .slick-list {
    padding-top: 10px;
    padding-bottom: 38px;
    margin-top: 42px;
  }
  .slick-track {
    display: flex;
  }
  .slick-slide {
    margin-left: 15px;
    margin-right: 15px;
  }
  .slick-current {
    .author-profile {
      box-shadow: 0px 14px 40px rgba(132, 159, 184, 0.12);
    }
  }
`;

export const Profile = styled.div`
  display: flex !important;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(132, 159, 184, 0.15);
  cursor: pointer;
  padding: 15px;
  border-radius: 40px;
  transition: all 0.3s ease-in-out 0s;
  @media only screen and (max-width: 480px) {
    max-width: 220px;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
  figure {
    margin: 0 15px 0 0;
  }
  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 0;
  }
  p {
    color: ${themeGet('colors.textColor')};
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 0;
    margin-top: 5px;
  }
`;

export const Blockquote = styled.blockquote`
  color: #36526c;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 2;
  letter-spacing: -0.6px;
  margin: 0 auto;
  position: relative;
  max-width: 650px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 16px;
  }
  img {
    display: inline-flex;
    transform: translate(-11px, 10px);
    @media (max-width: 480px) {
      transform: translate(2px, 10px);
      margin-right: 10px;
      max-width: 32px;
    }
  }
`;

export default Section;
