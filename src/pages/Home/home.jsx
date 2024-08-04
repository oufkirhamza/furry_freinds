
import { CardsSection } from './components/cardsSection';
import { CoexestingSection } from './components/coexestingSection';
import { FirstSection } from './components/firstSection';
import { NewsSection } from './components/newsSection';
import { Questions } from './components/questions';
import Review from './components/review';
import StepsSection from './components/stepsSection';
export const HomePage = () => {
    return (
        <>
            <FirstSection/>
            <CardsSection/>
            <StepsSection/>
            <NewsSection/>
            <CoexestingSection/>
            <Review/>
            <Questions/>
        </>
    );
}
