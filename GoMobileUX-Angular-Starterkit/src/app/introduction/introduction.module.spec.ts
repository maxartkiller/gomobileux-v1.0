import { IntroductionModule } from './introduction.module';

describe('IntroductionModule', () => {
    let introductionModule: IntroductionModule;

    beforeEach(() => {
        introductionModule = new IntroductionModule();
    });

    it('should create an instance', () => {
        expect(introductionModule).toBeTruthy();
    });
});
