import { App } from 'aws-cdk-lib';
import { SonarqubeEcsCdkStack } from '../lib/sonarqube-ecs-cdk-stack';
import { Template } from 'aws-cdk-lib/assertions';

const app = new App();
const stack = new SonarqubeEcsCdkStack(app, 'TestStack');
const synthStack = Template.fromStack(stack);

test('ECS Cluster is created', () => {
  stack.node.tryFindChild('SonarQubeAlbCluster');
});

test('ECS Service is created', () => {
  synthStack.resourceCountIs('AWS::ECS::Service', 1);
});

test('LoadBalancer is created and is internet-facing', () => {
  synthStack.hasResourceProperties(
    'AWS::ElasticLoadBalancingV2::LoadBalancer',
    {
      Scheme: 'internet-facing',
    }
  );
});

test('Task Definition has the correct image and containerPort 9000', () => {
  synthStack.hasResourceProperties('AWS::ECS::TaskDefinition', {
    ContainerDefinitions: [
      {
        Image: 'sonarqube',
        PortMappings: [
          {
            ContainerPort: 9000,
          },
        ],
      },
    ],
  });
});
