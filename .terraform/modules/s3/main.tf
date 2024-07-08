provider "aws" {
  region = "eu-north-1"
}

resource "aws_s3_bucket" "animal_farm_bucket" {
  bucket = "animal-farm-frontend-20240708-12345"

  versioning {
    enabled = true
  }

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_s3_bucket_policy" "animal_farm_bucket_policy" {
  bucket = aws_s3_bucket.animal_farm_bucket.bucket

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.animal_farm_bucket.arn}/*",
      },
    ],
  })
}

resource "aws_s3_bucket_object" "animal_farm_files" {
  for_each = fileset("../../build", "**")

  bucket = aws_s3_bucket.animal_farm_bucket.bucket
  key    = each.value
  source = "../../build/${each.value}"
}
