import { getSurveyById, retrieveList } from './'

describe('#fetch() using async/await', () => {
  it('should load survey list', async () => {
    const data = await retrieveList();

    expect(data).toBeDefined();
    expect(data.length).toEqual(3);
  });

  it('should load 3 types of survey question for XX1', async () => {
    const data = await getSurveyById('XX1');

    expect(data).toBeDefined();
    expect(data.length).toEqual(3);
  });

  it('should have 697.2 for type numeric for XX1', async () => {
    const data = await getSurveyById('XX1');

    expect(data).toBeDefined();
    const d1 = data.find((d) => d.type === 'numeric');
    expect(d1.result).toEqual(697.2);
  });
});
