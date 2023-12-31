
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './router/Router'
 import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {
 
const [progress, setProgress] = useState(100)
  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <RouterProvider router={router}/>
    <ToastContainer/>
    </>
  )
}

export default App
