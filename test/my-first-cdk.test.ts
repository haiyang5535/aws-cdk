import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as MyFirstCdk from '../lib/my-first-cdk-stack';
import { run } from 'node:test';

test('My First Stack Created', () => {
    const app = new cdk.App();
    const stack = new MyFirstCdk.MyFirstCdkStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
        functionName: 'first-cdk-lambda',
        runtime: 'nodejs22.x',
        handler: 'index.handler',
        memorySize: 128,
    });
})