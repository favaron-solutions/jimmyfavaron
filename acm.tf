# # # SSL Certificate
# # resource "aws_acm_certificate" "ssl_certificate" {
# #   domain_name = var.domain_name
# #   subject_alternative_names = ["*.${var.domain_name}"]
# # #   validation_method = "EMAIL"
# #   validation_method = "DNS"

# #   tags = var.common_tags

# #   lifecycle {
# #     create_before_destroy = true
# #   }
# # }

# # # Uncomment the validation_record_fqdns line if you do DNS validation instead of Email.
# # resource "aws_acm_certificate_validation" "cert_validation" {
# #   certificate_arn = aws_acm_certificate.ssl_certificate.arn
# #   validation_record_fqdns = aws_route53_record.cert-validations.*.fqdn

# #   timeouts {
# #     create = "120m"
# #   }
# # }

# # Uncomment the validation_record_fqdns line if you do DNS validation instead of Email.
# resource "aws_acm_certificate_validation" "cert_validation" {
#   certificate_arn = aws_acm_certificate.ssl_certificate.arn
#   validation_record_fqdns = aws_route53_record.cert-validations.*.fqdn
#   timeouts {
#     create = "60m"
#   }
# }

# resource "aws_acm_certificate_validation" "cert_validation" {
#   certificate_arn         = aws_acm_certificate.ssl_certificate.arn
#   validation_record_fqdns = [for record in aws_route53_record.example : record.fqdn]

#   timeouts {
#     create = "25m"
#   }
# }





resource "aws_acm_certificate" "ssl_certificate" {
  domain_name               = "jimmyfavaron.com"
  subject_alternative_names = ["*.jimmyfavaron.com"]
  validation_method         = "DNS"

  tags = var.common_tags
  lifecycle {
    create_before_destroy = true
  }
}



resource "aws_route53_record" "cert_validation_records" {
  for_each = {
    for dvo in aws_acm_certificate.ssl_certificate.domain_validation_options : dvo.domain_name => {
      name    = dvo.resource_record_name
      record  = dvo.resource_record_value
      type    = dvo.resource_record_type
      zone_id = aws_route53_zone.main.zone_id
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = each.value.zone_id
}

resource "aws_acm_certificate_validation" "cert_validation" {
  certificate_arn         = aws_acm_certificate.ssl_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation_records : record.fqdn]
  timeouts {
    create = "25m"
  }
}