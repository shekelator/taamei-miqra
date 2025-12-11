import { render, screen } from '@testing-library/react';
import Phrase from './Phrase';

describe('Phrase Component', () => {
  test('renders Hebrew text', () => {
    render(<Phrase hebrew="מֵרְכָ֥א טִפְּחָ֖א סִילֽוּק:" audioFile="test.mp3" />);
    const hebrewText = screen.getByText(/מֵרְכָ֥א טִפְּחָ֖א סִילֽוּק:/);
    expect(hebrewText).toBeInTheDocument();
  });

  test('renders audio element with correct source', () => {
    const { container } = render(<Phrase hebrew="Test" audioFile="example.mp3" />);
    const audioElement = container.querySelector('audio');
    expect(audioElement).toBeInTheDocument();
    
    const sourceElement = container.querySelector('source');
    expect(sourceElement).toHaveAttribute('src', 'https://res.dnix.us/recordings/trop/example.mp3');
    expect(sourceElement).toHaveAttribute('type', 'audio/mp3');
  });
});
