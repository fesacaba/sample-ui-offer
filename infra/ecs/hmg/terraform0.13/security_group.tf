resource "aws_security_group" "this" {
  name        = "${var.environment}-${var.app_name}-security-group"
  description = "Security group for omni-ib-offer-account-front"
  vpc_id      = data.terraform_remote_state.omni-ib-vpc.outputs.vpc_id

  # Outbound Internet Access
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "${var.environment}-${var.app_name}-security-group"
    Environment = "all"
  }
}
