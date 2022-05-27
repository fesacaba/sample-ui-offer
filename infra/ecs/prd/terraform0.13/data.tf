# Security Groups
data "terraform_remote_state" "omni-ib-sg" {
  backend = "s3"

  config = {
    region  = "sa-east-1"
    bucket  = "tfstateprdomniibsg"
    key     = "prd/sa-east-1/omni-ib-sg/terraform.tfstate"
  }
}

# route53 zones
data "aws_route53_zone" "internal" {
  name         = "prd-omni-ib.sa-east-1.omniaws.io"
  private_zone = true
}

# VPC
data "terraform_remote_state" "omni-ib-vpc" {
  backend   = "s3"
  workspace = "prd"

  config = {
    region  = "sa-east-1"
    bucket  = "tfstateprdomniibvpc"
    key     = "prd/sa-east-1/omni-ib-vpc/terraform.tfstate"
  }
}

# VPC's private subnets
data "aws_subnet_ids" "private_subnets" {
  vpc_id = data.terraform_remote_state.omni-ib-vpc.outputs.vpc_id

  tags = {
    Name = "${var.environment}-omni-ib-private-subnet-1*"
  }
}

# AWS ALB and Listener Rules
data "aws_lb" "alb_internal" {
  name = "${var.environment}-omni-ib-alb-int-01"
}

data "aws_lb_listener" "blue_listener" {
  load_balancer_arn = data.aws_lb.alb_internal.arn
  port              = 443
}

data "aws_lb_listener" "green_listener" {
  load_balancer_arn = data.aws_lb.alb_internal.arn
  port              = 8443
}

# AWS Availability Zones
data "aws_availability_zones" "available" {
  state = "available"
}

# Region
data "aws_region" "current" {}

# IAM
data "aws_iam_policy" "default" {
  arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

data "aws_iam_policy" "common" {
  arn = "arn:aws:iam::631746391068:policy/ecsTaskExecutionPrdOmniIbMicroserviceCommonPolicy"
}

data "aws_iam_role" "codedeploy" {
  name = "PrdCodeDeployServiceRoleForECS"
}

# ECS Cluster
data "aws_ecs_cluster" "cluster" {
  cluster_name = "prd-omni-ib-ecs"
}

# CloudMap
# data "aws_service_discovery_dns_namespace" "discovery" {
#   name = "cloupmap.prd-omni-ib.sa-east-1.omniaws.io"
#   type = "DNS_PRIVATE"
# }
