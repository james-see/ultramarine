import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';


const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "alex" }
        ) {
          childImageSharp {
            fluid(maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="partners" accent>
        <StyledContainer>
          <div>
            <h1>Partnering with communities to share open data</h1>
          </div>
          <a href="http://www.visitalexandriava.com">
          <LogoGrid>
          
          <Art>
            
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
          </LogoGrid>
          </a>

        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 196px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: 70%;
  right: 25%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 70%;
    right: 25%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    top: 70%;
    right: 25%;
    width: 200px;
  }
`;

export default UsedBy;
