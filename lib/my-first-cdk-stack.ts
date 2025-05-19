import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class MyFirstCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucketName = new cdk.CfnParameter(this, 'bucketName', {
      type: 'String',
      default: '',
      description: 'S3 bucket name where the lambda function will upload the file',
    });

    const bucketKey = new cdk.CfnParameter(this, 'bucketKey', {
      type: 'String',
      default: '',
      description: 'S3 bucket key where the lambda function will upload the file',
    });

    const bucket = s3 .Bucket.fromBucketName(this, 'pipelinebucket', bucketName.valueAsString);

    new lambda.Function(this, 'MyFirstLambda', {
      functionName: 'first-cdk-lambda',
      code: lambda.Code.fromBucket(bucket, bucketKey.valueAsString),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: 128
    });
  }
}
