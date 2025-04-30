
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import { ContentPages } from './components/pages/contentPages'
import { BuildIframe } from './components'
import { HomePage } from './components/pages/homepage/homePage'

function App() {
// Only run in browser
if (typeof window !== 'undefined' && typeof Audio !== 'undefined') {
  const OriginalAudio = window.Audio;

  window.Audio = function (...args: ConstructorParameters<typeof Audio>) {
    console.warn('Blocked Audio() creation:', args);
    const silentAudio = new OriginalAudio(...args);

    // Override play method to do nothing
    silentAudio.play = () => {
      console.warn('Suppressed audio playback:', silentAudio.src);
      return Promise.resolve();
    };

    return silentAudio;
  } as unknown as typeof Audio;
}

// MutationObserver to remove rogue <audio> tags not inside <video>
if (typeof MutationObserver !== 'undefined') {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (
          node instanceof HTMLAudioElement &&
          !node.closest('video')
        ) {
          console.warn('Removed rogue <audio> tag:', node.src || '[inline]');
          node.pause?.();
          node.remove();
        }
      });
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/animation" element={<ContentPages sourceData="animation"/>}/>
        <Route path="/photo" element={<ContentPages sourceData="photo"/>}/>
        <Route path="/code" element={<ContentPages sourceData="code"/>}/>
        <Route path="/design" element={<ContentPages sourceData="design"/>}/>
        <Route path="/video" element={<ContentPages sourceData="video"/>}/>
        <Route path='/unshut-homepage' element={<BuildIframe src='/embedded/hackableBuild/index.html'/>}/>
        <Route path='/unshut-file-server' element={<BuildIframe src='/embedded/hackableFiles/build/index.html'/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
