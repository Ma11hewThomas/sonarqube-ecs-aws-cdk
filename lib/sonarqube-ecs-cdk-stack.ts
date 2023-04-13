import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import { Cluster, ContainerImage } from 'aws-cdk-lib/aws-ecs';
import { ApplicationLoadBalancedFargateService } from 'aws-cdk-lib/aws-ecs-patterns';
import { Construct } from 'constructs';

export class SonarqubeEcsCdkStack extends cdk.Stack {
  public readonly APP_PORT: number = 9000;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const cluster = new Cluster(this, 'SonarQubeAlbCluster', {});

    new ApplicationLoadBalancedFargateService(this, 'SonarQubeAlbService', {
      taskImageOptions: {
        image: ContainerImage.fromRegistry('sonarqube'),
        containerPort: this.APP_PORT,
      },
      cluster,
      cpu: 1024,
      memoryLimitMiB: 2048,
    });
  }
}
