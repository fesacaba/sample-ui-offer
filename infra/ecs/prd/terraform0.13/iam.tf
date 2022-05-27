resource "aws_iam_role" "iam" {
  name        = "${var.environment}-${var.app_name}-iam-ecs-task-execution-role"
  description = "Allows ECS tasks to call AWS services on your behalf."
  path        = "/"

  assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "",
            "Effect": "Allow",
            "Principal": {
                "Service": "ecs-tasks.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
EOF

  tags = {
    Name        = "${var.environment}-${var.app_name}-iam-ecs-task-execution-role"
    Environment = var.environment
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_iam_role_policy_attachment" "attachment01" {
  role       = aws_iam_role.iam.name
  policy_arn = data.aws_iam_policy.default.arn
}

resource "aws_iam_role_policy_attachment" "attachment02" {
  role       = aws_iam_role.iam.name
  policy_arn = data.aws_iam_policy.common.arn
}
