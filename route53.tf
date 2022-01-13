# resource "aws_route53_zone" "main" {
#   name = var.domain_name
#   tags = var.common_tags
# }

resource "aws_route53_zone" "main" {
  name = "jimmyfavaron.com"
  # name = var.domain_name
  tags = var.common_tags
}

resource "aws_route53_record" "root-a" {
  allow_overwrite = true
  zone_id = aws_route53_zone.main.zone_id
  name = var.domain_name
  type = "A"

  alias {
    name = aws_cloudfront_distribution.root_s3_distribution.domain_name
    zone_id = aws_cloudfront_distribution.root_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www-a" {
  allow_overwrite = true
  zone_id = aws_route53_zone.main.zone_id
  name = "www.${var.domain_name}"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.www_s3_distribution.domain_name
    zone_id = aws_cloudfront_distribution.www_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}


# resource "aws_route53_record" "cert-validations" {
# #   count = length(aws_acm_certificate.ssl_certificate.domain_validation_options)
#   count = length(var.alternative-names)
#   zone_id = aws_route53_zone.main.zone_id
#   name    = element(aws_acm_certificate.ssl_certificate.domain_validation_options.*.resource_record_name, count.index)
#   type    = element(aws_acm_certificate.ssl_certificate.domain_validation_options.*.resource_record_type, count.index)
#   records = [element(aws_acm_certificate.ssl_certificate.domain_validation_options.*.resource_record_value, count.index)]
#   ttl     = 60
# }

# resource "aws_route53_record" "cert-validations" {
#   allow_overwrite = true
#   name    = tolist(aws_acm_certificate.ssl_certificate.domain_validation_options)[0].resource_record_name
#   records = [tolist(aws_acm_certificate.ssl_certificate.domain_validation_options)[0].resource_record_value]
#   type    = tolist(aws_acm_certificate.ssl_certificate.domain_validation_options)[0].resource_record_type
#   zone_id = aws_route53_zone.main.zone_id
#   ttl     = 60
# }