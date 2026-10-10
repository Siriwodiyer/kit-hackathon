# Deepfake Defender

An AI-driven deepfake detection prototype built with React and Tailwind CSS. This is a frontend-only interactive prototype that provides lightweight in-browser heuristics for detecting potential deepfake content in video and audio files.

## Features

- **Media Upload**: Upload video or audio files for analysis
- **Real-time Preview**: Preview uploaded media with metadata display
- **In-browser Analysis**: 
  - Frame sampling and blur detection for videos
  - Audio loudness and silence analysis
  - Metadata validation checks
- **Confidence Scoring**: Combined heuristic and simulated ML scoring
- **Explainability**: Detailed findings and analysis timeline
- **Privacy-focused**: All analysis happens in the browser (no data leaves your device)

## Supported Formats

- **Video**: MP4, WebM (browser dependent)
- **Audio**: MP3, WAV (browser dependent)

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation & Setup

1. **Clone or download this project**
   ```bash
   cd deepfake-defender
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## How to Use

1. **Upload Media**: Click the upload area to select a video or audio file
2. **Preview**: The uploaded media will be displayed with metadata
3. **Analyze**: Click the "Analyze" button to run detection algorithms
4. **Review Results**: 
   - Check the confidence score (higher = more likely to be manipulated)
   - Review the analysis timeline for frame-by-frame results
   - Read the explainability findings for detailed insights

## Technical Details

### Analysis Methods

- **Frame Analysis**: Samples frames from video and computes blur metrics using Laplacian-like edge detection
- **Audio Analysis**: Analyzes loudness profiles and silence ratios using Web Audio API
- **Metadata Checks**: Validates file properties and looks for suspicious patterns
- **Simulated ML**: Includes placeholder for server-side deep learning model integration

### Browser Compatibility

- Modern browsers with Web Audio API support
- Canvas API for image processing
- File API for media upload

## Development

### Project Structure

```
src/
├── components/
│   └── DeepfakeDefenderUI.js    # Main component
├── App.js                       # App wrapper
├── App.css                      # Tailwind imports
├── index.js                     # React entry point
└── index.css                    # Global styles

public/
├── index.html                   # HTML template
└── manifest.json               # PWA manifest

tailwind.config.js              # Tailwind configuration
postcss.config.js               # PostCSS configuration
package.json                    # Dependencies and scripts
```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Integration with Real ML Models

To integrate with a real deepfake detection backend:

1. Replace the `simulateServerAnalysis` function in `DeepfakeDefenderUI.js`
2. Send frame samples, audio features, and metadata to your ML API
3. Process the response to update confidence scores and findings

Example integration:
```javascript
async function callRealMLAPI({ frames, audioRes, metadata }) {
  const response = await fetch('/api/detect-deepfake', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ frames, audioRes, metadata })
  });
  return await response.json();
}
```

## Privacy & Security

- **Client-side Processing**: All analysis happens in the browser
- **No Data Storage**: Media files are not stored or transmitted
- **Local Analysis**: Frame sampling and audio analysis use local APIs
- **Optional Backend**: Server-side ML integration is optional and configurable

## Limitations

- **Prototype Nature**: This is a demonstration/prototype, not production-ready
- **Heuristic-based**: Current detection relies on simple heuristics, not advanced ML
- **Browser Limitations**: Some analysis capabilities are limited by browser APIs
- **Accuracy**: Results should not be considered definitive without proper ML model integration

## Contributing

This is a prototype project. For production use, consider:
- Integrating with proven deepfake detection models
- Adding more sophisticated analysis methods
- Implementing proper error handling and validation
- Adding comprehensive testing

## License

This project is provided as-is for educational and demonstration purposes.

## Support

For questions or issues, please refer to the code comments or create an issue in the project repository.
