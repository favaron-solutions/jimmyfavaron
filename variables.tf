variable "domain_name" {
  type        = string
  description = "The domain name for the website."
}

variable "bucket_name" {
  type        = string
  description = "The name of the bucket without the www. prefix. Normally domain_name."
}

variable "name_prefix" {
  type        = string
  description = "The prefix to use on all resources."
}

variable "hosted_zone" {
  type        = string
  description = "Existing Hosted Zone"
}

variable "common_tags" {
  description = "Common tags you want applied to all components."
}

variable "terraform_organization" {
  type    = string
  default = "favaron-solutions"
}

variable "terraform_workspace" {
  type = string
}

### Filler Variables
variable "TFC_AWS_PROVIDER_AUTH" {
  type    = string
  default = ""
}

variable "TFC_AWS_RUN_ROLE_ARN" {
  type    = string
  default = ""
}
