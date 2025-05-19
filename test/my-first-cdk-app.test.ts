import { handler } from "../src";

describe('My First CDK App Tests', () => {

    it('returns name with a personalized message', async () => {
        const output = await handler({ name: 'haiyang' });
        expect(output).toStrictEqual('good job haiyang!'); 
    });

    it('returns a generic message when name is empty', async () => {
        const output = await handler({ name: '' });
        expect(output).toStrictEqual('good job!'); 
    });

})