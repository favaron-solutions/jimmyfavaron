# ### https://registry.terraform.io/modules/cn-terraform/s3-static-website/aws/latest
# module "s3-static-website" {
#   source  = "cn-terraform/s3-static-website/aws"
#   version = "1.0.8"

#   # Passing the specific providers to the module
#   providers = {
#     aws.main         = aws.module
#     aws.acm_provider = aws.module
#   }

#   name_prefix                = var.name_prefix
#   website_domain_name        = var.domain_name
#   create_route53_hosted_zone = false
#   route53_hosted_zone_id     = var.hosted_zone
# }

# ### Create User for Bucket Policy
# data "aws_caller_identity" "current" {}

# locals {
#   terraform_user_arn = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:user/terraform"
# }

# ### https://registry.terraform.io/modules/cn-terraform/logs-s3-bucket/aws/latest
# module "logs-s3-bucket" {
#   source                     = "cn-terraform/logs-s3-bucket/aws"
#   version                    = "1.0.6"
#   name_prefix                = var.name_prefix
#   aws_principals_identifiers = [local.terraform_user_arn]
# }

