# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/8bf01c80-3239-4106-a6c4-8b63c6dd0e14

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/8bf01c80-3239-4106-a6c4-8b63c6dd0e14) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/8bf01c80-3239-4106-a6c4-8b63c6dd0e14) and click on Share -> Publish.

### Deploy to Netlify (Recommended)

Follow these steps to deploy your website to Netlify:

#### **Method 1: Using Netlify's Web Interface (Easiest - No Git Required)**

1. **Prepare your project for deployment:**

   ```sh
   # Build your project locally
   npm run build
   ```

   This will create a `dist` folder with your production-ready files.

2. **Go to Netlify:**

   - Visit [Netlify's website](https://www.netlify.com)
   - Click on "Sign up" or "Log in"
   - You can sign up with GitHub, GitLab, Bitbucket, or email

3. **Deploy your site:**

   - Once logged in, on the dashboard, click "Sites"
   - Drag and drop your `dist` folder onto the deployment area
   - Wait for the upload to complete
   - Your site will be live with a URL like: `https://random-name-123.netlify.app`

4. **Custom domain (optional):**
   - Go to your site's settings → Domain management → Add custom domain
   - Follow the DNS configuration instructions

#### **Method 2: Using Netlify CLI (Command Line - For Technical Users)**

1. **Install Netlify CLI:**

   ```sh
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**

   ```sh
   netlify login
   ```

3. **Deploy your site:**

   ```sh
   netlify deploy --prod
   ```

4. **For continuous deployment**, run the first deploy:
   ```sh
   netlify init
   ```
   This will guide you through the setup process.

#### **Method 3: Automatic Deployment via GitHub (Best for Updates)**

1. **Push your code to GitHub** (if you haven't already):

   - Create a new repository on GitHub
   - Push your code:
     ```sh
     git add .
     git commit -m "Initial commit"
     git push origin main
     ```

2. **Connect to Netlify:**

   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository
   - Netlify will auto-detect the build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Automatic deployments:**
   - Every time you push to your GitHub repository, Netlify will automatically rebuild and deploy your site
   - You can set up custom domains, environment variables, and more in Netlify's dashboard

#### **Important Files for Netlify:**

- `netlify.toml` - Configuration file (already created) that tells Netlify:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Redirect rules for SPA routing
  - Security headers

#### **Troubleshooting:**

- **Build fails?** Check the build logs in Netlify's dashboard
- **Site works locally but not on Netlify?** Make sure all environment variables are set in Netlify's site settings
- **Routes not working?** The `netlify.toml` file includes redirect rules that should fix this

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
