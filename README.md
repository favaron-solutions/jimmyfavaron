# jimmyfavaron.com

## Tech Stack
* [React](https://reactjs.org/docs/getting-started.html)
* [Terraform](https://www.terraform.io/docs)
* [AWS S3](https://docs.aws.amazon.com/s3/index.html)
* [AWS Cloudfront](https://docs.aws.amazon.com/cloudfront/index.html)
* [AWS Route53](https://docs.aws.amazon.com/route53/)

## Local Deployment in VS Code Development Container
Download the code

```git clone https://github.com/jfavaron/jimmyfavaron.git```

Hit `F1` to open the command palette

Search for 

```Dev Containers: Open Folder in Container...```

and select the `jimmyfavaron` directory.

The development container should be built from the code in `.devcontainer/devcontainer.json`

## AWS Deployment
Now the entire site is deployed using Github Actions and Terraform Cloud. Check out the `.github` directory for the workflows.
