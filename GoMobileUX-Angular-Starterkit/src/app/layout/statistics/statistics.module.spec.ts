import { StatisticsModule } from './statistics.module';

describe('StatisticsModule', () => {
  let statisticsModule: StatisticsModule;

  beforeEach(() => {
    statisticsModule = new StatisticsModule();
  });

  it('should create an instance', () => {
    expect(statisticsModule).toBeTruthy();
  });
});
