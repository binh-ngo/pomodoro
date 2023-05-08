#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PomodoroStack } from '../lib/cdk-stack';

const app = new cdk.App();

new PomodoroStack(app, 'PomodoroStack', {
  env: {
    region: 'us-east-1', // add your region
    account: process.env.CDK_DEFAULT_ACCOUNT,
  }
});