# Deployment Guide for Explanation Backend

This backend serves explanations for GK quiz questions using Google's Gemini API.

## Quick Start (Local Testing)

```bash
# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env

# Run the app
python app.py
```

The app will run on `http://localhost:5000`

---

## Deployment Options

### **Option 1: Railway (Recommended - Easiest)**

1. **Sign up** at https://railway.app (free tier available)
2. **Connect your GitHub repo** or upload project
3. **Railway auto-detects** `Procfile` and `requirements.txt`
4. **Set environment variable:**
   - Go to Variables → Add `GEMINI_API_KEY` with your key
5. **Deploy** - Railway handles the rest!
6. **Copy your deployed URL** (e.g., `https://your-app.railway.app`)
7. **Update `script.js`:**
   ```javascript
   const BACKEND_URL = window.location.hostname === 'localhost' 
       ? 'http://localhost:5000'
       : 'https://your-app.railway.app';
   ```

---

### **Option 2: Render**

1. **Sign up** at https://render.com (free tier available)
2. **Connect GitHub** or upload project
3. **Create new Web Service:**
   - Runtime: Python 3
   - Build: `pip install -r requirements.txt`
   - Start: `python app.py`
4. **Add environment variables:**
   - `GEMINI_API_KEY`: Your API key
   - `PYTHON_VERSION`: 3.11
5. **Deploy**
6. **Update `script.js`** with your Render URL

---

### **Option 3: Heroku (Legacy - Still Works)**

1. **Sign up** at https://heroku.com
2. **Install Heroku CLI**
3. **Login:**
   ```bash
   heroku login
   ```
4. **Create app:**
   ```bash
   heroku create your-app-name
   ```
5. **Set API key:**
   ```bash
   heroku config:set GEMINI_API_KEY=AIzaSyCwHUsLaajbc36ip0wBDe-ptVfcoS7x5cY
   ```
6. **Deploy:**
   ```bash
   git push heroku main
   ```

---

## Update Frontend After Deployment

Once your backend is deployed, update `script.js`:

```javascript
const BACKEND_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000'
    : 'https://your-deployed-backend-url.com'; // ← Your Railway/Render/Heroku URL
```

Then redeploy your Netlify site.

---

## Testing Your Deployment

```bash
# Test the health endpoint
curl https://your-deployed-url.com/health

# Test the explain endpoint
curl -X POST https://your-deployed-url.com/api/explain \
  -H "Content-Type: application/json" \
  -d '{"question":"What is 2+2?","answer":"4"}'
```

---

## Troubleshooting

**Error: "Explanation could not be loaded"**
- Check if backend URL is correct in `script.js`
- Verify GEMINI_API_KEY is set in deployment environment
- Check backend logs on your deployment platform

**Error: CORS issues**
- Flask-CORS is configured in `app.py` - should work automatically

**Slow responses**
- First request to Gemini API can take 5-10 seconds
- Subsequent requests are faster

---

## Files Included

- `app.py` - Flask backend with Gemini API integration
- `requirements.txt` - Python dependencies
- `Procfile` - For Heroku/similar services
- `railway.json` - Configuration for Railway
- `.env.example` - Example environment variables

