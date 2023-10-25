terraform {
  required_version = ">= 1.0.11"

  cloud {
    organization = "favaron-solutions"

    workspaces {
      name = "jimmyfavaron-site"
    }
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.60.0"
    }
  }
}


# Default AWS Provider
provider "aws" {
  region = "us-east-1"
}

# AWS Provider with "default" alias for module
provider "aws" {
  region = "us-east-1"
  alias  = "module"
}