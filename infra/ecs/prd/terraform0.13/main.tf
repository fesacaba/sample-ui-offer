# To initialize backend: terraform init -backend-config=backend.hcl
terraform {
  backend "s3" {
    key = "prd/omni-ib-offer-account-front/terraform.tfstate"
  }
}

# AWS provider
provider "aws" {
  version = "= 2.68"
  region  = var.aws_region
}

# app module
module "ecs_service" {
  source = "git::git@bitbucket.org:/omnifinanceira/terraform-aws-ecs-service.git?ref=v0.1.1"

  # ECS Fargate Service with CodeDeploy Blue/Green Deployment
  name                             = "${var.environment}-${var.app_name}"
  requires_compatibilities         = ["FARGATE"]
  desired_count                    = 2
  cluster                          = data.aws_ecs_cluster.cluster.arn
  cluster_name                     = data.aws_ecs_cluster.cluster.cluster_name
  capacity_provider                = "FARGATE"
  code_deploy_service_role_arn     = data.aws_iam_role.codedeploy.arn
  cpu                              = var.cpu
  memory                           = var.memory
  network_mode                     = "awsvpc"
  task_definition                  = local.container_definitions
  deployment_controller_type       = "CODE_DEPLOY"
  termination_wait_time_in_minutes = 0
  capacity_provider_strategy = [
    {
      capacity_provider = "FARGATE"
      weight            = 0
      base              = 1
    },
    {
      capacity_provider = "FARGATE_SPOT"
      weight            = 50
      base              = 0
    },
  ]

  # Autoscaling Policy
  # appautoscaling_target_min_capacity by default has the same value of desired_count
  appautoscaling_target_min_capacity = 2
  appautoscaling_target_max_capacity = 4

  # Auto scaling CloudWath Thresholds
  aws_cloudwatch_cpu_high_threshold = "60"
  aws_cloudwatch_cpu_low_threshold  = "40"
  aws_cloudwatch_mem_high_threshold = "90"
  aws_cloudwatch_mem_low_threshold  = "70"

  # AWS Cloud Map
  service_discovery_namespace_id = "ns-o5m36l42lpydxnmd"

  # VPC Id
  vpc_id = data.terraform_remote_state.omni-ib-vpc.outputs.vpc_id

  # Subnet Ids
  # Type: list of string
  subnet_ids = data.aws_subnet_ids.private_subnets.ids

  # Availabilty Zones
  # Type: list of string
  availability_zones = data.aws_availability_zones.available.names

  # Security Groups List
  # Type: list of string
  security_groups = [data.terraform_remote_state.omni-ib-sg.outputs.http]

  # ALB config
  health_check_grace_period_seconds = 30
  blue_alb_listener_arn             = data.aws_lb_listener.blue_listener.arn
  green_alb_listener_arn            = data.aws_lb_listener.green_listener.arn
  internal_route53_zone_id          = data.aws_route53_zone.internal.zone_id
  internal_route53_records          = [data.aws_lb.alb_internal.dns_name]
  internal_route53_zone_name        = replace(data.aws_route53_zone.internal.name, "/[.]$/", "")

  # Required if enable_external_access or enable_internal_access are set to true
  # Max num of chars are 22 because target group name cannot be longer than 32 characters
  # Type: string
  target_group_name       = "${var.environment}-${var.target_group_name}"
  target_group_port       = 80
  target_group_protocol   = "HTTP"
  target_group_slow_start = 0

  target_group_health_path                = "/"
  target_group_health_port                = 80
  target_group_health_matcher             = "200"
  target_group_health_protocol            = "HTTP"
  target_group_health_interval            = 20
  target_group_health_timeout             = 10
  target_group_health_healthy_threshold   = 3
  target_group_health_unhealthy_threshold = 3
  target_group_deregistration_delay       = 30

  # Execution Role ARN
  execution_role_arn = aws_iam_role.iam.arn

  # Task Role ARN
  task_role_arn = aws_iam_role.iam.arn

  depends_on = [
    aws_iam_role.iam
  ]

}
