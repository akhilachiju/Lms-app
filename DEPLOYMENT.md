# LMS App Deployment Guide

## Prerequisites
- AWS Free Tier Account
- GitHub repository
- kubectl installed locally

## Setup Steps

### 1. AWS Setup
```bash
# Create ECR repository
aws ecr create-repository --repository-name lms-app --region us-east-1

# Create EKS cluster (free tier eligible)
eksctl create cluster --name lms-cluster --region us-east-1 --nodegroup-name standard-workers --node-type t3.micro --nodes 2 --nodes-min 1 --nodes-max 3
```

### 2. GitHub Secrets
Add these secrets to your GitHub repository:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

### 3. Install ArgoCD
```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Get ArgoCD admin password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

# Port forward to access ArgoCD UI
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

### 4. Deploy Application
```bash
# Update the GitHub repo URL in argocd/application.yaml
# Then apply the ArgoCD application
kubectl apply -f argocd/application.yaml
```

### 5. Access Application
```bash
# Get LoadBalancer URL
kubectl get svc lms-app -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
```

## Local Development
```bash
# Build and test locally
docker build -t lms-app .
docker run -p 8080:80 lms-app
```
