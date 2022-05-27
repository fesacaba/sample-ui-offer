variable "aws_region" {
  type    = string
  default = "sa-east-1"
}

variable "aws_owner" {
  type    = string
  default = "631746391068"
}

variable "app_name" {
  type    = string
  default = "omni-ib-offer-account-front"
}

variable "target_group_name" {
  type    = string
  default = "omni-ib-offeracc-front"
}

variable "environment" {
  type    = string
  default = "prd"
}

variable "cpu" {
  type    = number
  default = 256
}

variable "memory" {
  type    = number
  default = 512
}
