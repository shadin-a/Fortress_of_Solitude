import React from 'react';
import styled from 'styled-components';

const VolunteerBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 24px;
  color: black;
  background-color: #d7ebce;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  font-family: 'Permanent Marker', cursive;
`;

function VolunteerBanner() {
  return (
    <VolunteerBannerWrapper>
      Here are some volunteer opportunities
    </VolunteerBannerWrapper>
  );
}

export default VolunteerBanner;