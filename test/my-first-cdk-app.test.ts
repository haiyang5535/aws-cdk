import { handler } from "../src";

describe('My First CDK App Tests', () => {

    it('returns name and tests', async () => {
        const output = await handler({ name: 'haiyang' });
        expect(output).toStrictEqual('Good Job haiyang!');
    })

    it('returns name and tests', async () => {
    const output = await handler({ name: '' });
    expect(output).toStrictEqual('Good Job !');
    })

})
