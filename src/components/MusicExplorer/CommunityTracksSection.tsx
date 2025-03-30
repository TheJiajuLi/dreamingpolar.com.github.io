import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const Container = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.primary};
  padding: 20px;
`;

const TracksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommunityTracksSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <Container>
      <TracksList>
        {/* Your content */}
      </TracksList>
    </Container>
  );
};

export default CommunityTracksSection;
