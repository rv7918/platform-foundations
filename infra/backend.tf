terraform {
  backend "s3" {
    bucket         = "pf-terraform-state-dev"
    key            = "platform-foundations/dev/terraform.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "pf-terraform-lock-dev"
    encrypt        = true
  }
}
