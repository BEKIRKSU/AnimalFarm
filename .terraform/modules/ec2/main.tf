provider “aws” {
  region = “eu-north-1"
}
resource “aws_instance” “bekiraws-ec2-animal-farm" {
  ami                                  = var.ami
  instance_type                        = var.instance_type
  key_name                             = var.key_name
  tags                                 = var.tags
  vpc_security_group_ids               = var.vpc_security_group_ids
  cpu_core_count                       = var.cpu_core_count
}