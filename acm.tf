# SSL Certificate
resource "aws_acm_certificate" "ssl_certificate" {
  domain_name = var.domain_name
  subject_alternative_names = ["*.${var.domain_name}"]
#   validation_method = "EMAIL"
  validation_method = "DNS"

  tags = var.common_tags

  lifecycle {
    create_before_destroy = true
  }
}

# Uncomment the validation_record_fqdns line if you do DNS validation instead of Email.
resource "aws_acm_certificate_validation" "cert_validation" {
  certificate_arn = aws_acm_certificate.ssl_certificate.arn
  validation_record_fqdns = aws_route53_record.cert-validations.*.fqdn

  timeouts {
    create = "120m"
  }
}

# resource "aws_acm_certificate_validation" "cert-validation" {
#   provider = "aws.us-east-1"

#   certificate_arn         = aws_acm_certificate.some-cert.arn
#   validation_record_fqdns = aws_route53_record.cert-validations.*.fqdn
# }