# Configure the AWS provider
provider "aws" {
  region = "eu-north-1"
}

# Define the S3 bucket
resource "aws_s3_bucket" "animal_farm_bucket" {
  bucket = "animal-farm-frontend-20240708-12345"  # Replace with your desired bucket name
  acl    = "public-read"

  versioning {
    enabled = true
  }

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

# Define the bucket policy to allow public read access
resource "aws_s3_bucket_policy" "animal_farm_bucket_policy" {
  bucket = aws_s3_bucket.animal_farm_bucket.bucket

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = "*",
        Action = [
          "s3:GetObject"
        ],
        Resource = [
          "${aws_s3_bucket.animal_farm_bucket.arn}/*"
        ]
      }
    ]
  })
}

# Upload files to the S3 bucket
resource "aws_s3_bucket_object" "animal_farm_files" {
  for_each = fileset("../../build", "**")  # Assuming build directory is at animal-farm/build

  bucket = aws_s3_bucket.animal_farm_bucket.buc
}