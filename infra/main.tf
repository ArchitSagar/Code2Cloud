# main.tf

terraform {
  backend "azurerm" {
    resource_group_name  = "terraform-state-rg"
    storage_account_name = "tfstatearchit" 
    container_name       = "tfstate"
    key                  = "portfolio.terraform.tfstate"
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.79.0"
    }
  }
}

provider "azurerm" {
  features {}
  skip_provider_registration = true
}

variable "image_tag" {
  type        = string
  description = "Tag for the Docker image"
}

resource "azurerm_resource_group" "portfolio_rg" {
  name     = "code2cloud-container-rg"
  location = "Central India"
}

resource "azurerm_log_analytics_workspace" "log" {
  name                = "code2cloud-log"
  location            = azurerm_resource_group.portfolio_rg.location
  resource_group_name = azurerm_resource_group.portfolio_rg.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

resource "azurerm_container_app_environment" "env" {
  name                       = "code2cloud-env"
  location                   = azurerm_resource_group.portfolio_rg.location
  resource_group_name        = azurerm_resource_group.portfolio_rg.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.log.id
}

resource "azurerm_container_app" "portfolio_app" {
  name                         = "code2cloud-containerapp"
  container_app_environment_id = azurerm_container_app_environment.env.id
  resource_group_name          = azurerm_resource_group.portfolio_rg.name
  revision_mode                = "Single"

  ingress {
    external_enabled = true
    target_port      = 80

    traffic_weight {
      latest_revision = true
      percentage      = 100
    }
  }

  template {
    container {
      name   = "react-app"
      image  = "sagararchit/code2cloud-portfolio:${var.image_tag}"
      cpu    = 0.25
      memory = "0.5Gi"
    }
  }
}

output "container_app_url" {
  value       = azurerm_container_app.portfolio_app.latest_revision_fqdn
  description = "The public URL of the deployed Azure Container App"
}
