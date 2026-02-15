module "networking" {
  source       = "./modules/networking"
  lambda_sg_id = module.security.lambda_sg_id
}

module "security" {
  source = "./modules/security"
  vpc_id = module.networking.vpc_id
}

module "platform" {
  source = "./modules/platform"

  private_subnet_ids = module.networking.private_subnet_ids
  lambda_sg_id       = module.security.lambda_sg_id
}

output "api_endpoint" {
  value = module.platform.api_endpoint
}
