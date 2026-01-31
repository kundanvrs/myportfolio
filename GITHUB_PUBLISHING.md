# GitHub Publishing Guide

## Step 1: Initialize Git Repository (if not already done)

```bash
cd /Users/kundan/Documents/CodeHub/DevOps/myprofile
git init
git config user.name "Kundan Kumar"
git config user.email "kundanvrs@gmail.com"
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: DevOps Resume Portfolio with GitHub Pages support"
```

## Step 4: Create a GitHub Repository

1. Go to https://github.com/new
2. Sign in with your GitHub account (kundanvrs)
3. Create a repository named: **myprofile**
4. Do NOT initialize with README, .gitignore, or license (since we already have them)
5. Click "Create repository"

## Step 5: Add Remote and Push to GitHub

```bash
# Add the remote (replace with your username if different)
git remote add origin https://github.com/kundanvrs/myprofile.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

When prompted for authentication, you have two options:

### Option A: Personal Access Token (Recommended)
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `workflow`
4. Copy the token
5. When prompted for password, paste the token instead

### Option B: SSH Key
1. Generate SSH key: `ssh-keygen -t ed25519 -C "kundanvrs@gmail.com"`
2. Add to GitHub: Settings → SSH and GPG keys
3. Change remote: `git remote set-url origin git@github.com:kundanvrs/myprofile.git`

## Step 6: Enable GitHub Pages

1. Go to https://github.com/kundanvrs/myprofile
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-3 minutes for the site to build

## Step 7: Access Your Live Site

Your portfolio will be available at:
- **https://kundanvrs.github.io/myprofile**

## Step 8: Update Social Links (Optional)

Edit the footer in `index.html` to add your actual social links:
- GitHub: `https://github.com/kundanvrs`
- LinkedIn: `your-linkedin-url`
- Twitter/X: `your-twitter-url`
- Email: `mailto:kundanvrs@gmail.com`

## Making Future Updates

After making changes locally:

```bash
git add .
git commit -m "Update: describe your changes"
git push
```

GitHub Pages will automatically rebuild within 1-3 minutes.

## Resume Download

The resume download button is now configured to pull from GitHub:
```
https://github.com/kundanvrs/myprofile/raw/main/KK_Resume%202.0.pdf
```

Make sure `KK_Resume 2.0.pdf` is in the root directory and committed to GitHub.

## Verify Your Setup

Check the file structure:
```bash
ls -la /Users/kundan/Documents/CodeHub/DevOps/myprofile/
```

Should show:
- `.git/` directory
- `index.html`
- `style.css`
- `script.js`
- `_config.yml`
- `.gitignore`
- `README.md`
- `package.json`
- `KK_Resume 2.0.pdf`

## Troubleshooting

**Pages not showing after push:**
- Wait 1-3 minutes and refresh
- Check Settings → Pages for any errors
- Ensure branch is set to `main`

**Resume download not working:**
- Verify file is committed: `git log --name-status`
- Check GitHub repo has the PDF file

**Need help?**
- Visit: https://docs.github.com/en/pages
- Check GitHub Actions tab for build logs
