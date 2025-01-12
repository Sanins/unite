import * as Styled from './spinner.style';

export const Spinner = () => (
    <Styled.Overlay data-testid="loading-spinner">
        <div className="spinner"></div>
    </Styled.Overlay>
);