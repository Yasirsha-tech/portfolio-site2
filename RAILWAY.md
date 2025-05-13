# Railway Deployment Guide for Your Portfolio

This guide explains how to deploy your portfolio website to Railway.

## Prerequisites

1. [Railway account](https://railway.app/) (Sign up if you don't have one)
2. Git installed on your computer
3. Railway CLI (optional, but recommended)

## Deployment Steps

### Option 1: Deploy from GitHub

1. **Push your code to GitHub**:
   - Create a new GitHub repository
   - Push this project to your repository
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-portfolio-repo.git
   git push -u origin main
   ```

2. **Deploy on Railway**:
   - Go to [Railway](https://railway.app/dashboard)
   - Click "New Project" > "Deploy from GitHub repo"
   - Select your repository
   - Railway will automatically detect your setup and deploy

3. **Configure the project**:
   - No environment variables are needed for this project
   - Railway will use the settings in `railway.json` and `Procfile`

4. **Access your deployed site**:
   - Railway will provide a URL for your deployed site
   - You can set up a custom domain in the Railway dashboard

### Option 2: Deploy using Railway CLI

1. **Install Railway CLI**:
   ```bash
   npm i -g @railway/cli
   ```

2. **Login to Railway**:
   ```bash
   railway login
   ```

3. **Initialize and deploy**:
   ```bash
   railway init
   railway up
   ```

4. **Link to your project**:
   ```bash
   railway link
   ```

5. **Deploy your project**:
   ```bash
   railway up
   ```

## Additional Configuration

- **Custom Domain**: In the Railway dashboard, go to your project's settings and add a custom domain
- **HTTPS**: Railway automatically provides HTTPS for all deployments
- **Environment Variables**: If needed in the future, you can add them in the Railway dashboard

## Troubleshooting

- If deployment fails, check the logs in the Railway dashboard
- Make sure your `package.json` has the correct build and start scripts
- Verify that the `Procfile` and `railway.json` are in the root directory