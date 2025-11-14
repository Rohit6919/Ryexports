import { useState } from 'react';

function App() {
  return (
    <>
      <style>
        {`
          /* Reset */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          /* Background */
          .container {
            height: 100vh;
            width: 100%;
            background: linear-gradient(135deg, #0a0f24, #1a2751);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          /* Card */
          .card {
            text-align: center;
            padding: 40px 60px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            animation: fadeIn 1.2s ease;
          }

          /* Text */
          .title {
            font-size: 2.5rem;
            color: #ffffff;
            letter-spacing: 2px;
            margin-bottom: 10px;
          }

          .subtitle {
            font-size: 1.2rem;
            color: #d2d3d8;
            margin-bottom: 30px;
          }

          /* Loader Animation */
          .loader {
            width: 40px;
            height: 40px;
            border: 4px solid transparent;
            border-top: 4px solid #ffffff;
            border-radius: 50%;
            margin: auto;
            animation: spin 0.9s linear infinite;
          }

          /* Animations */
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

      <div className="container">
        <div className="card">
          <h1 className="title">RY Internationals</h1>
          <h3 className="subtitle">Coming Soon...</h3>

          <div className="loader"></div>
        </div>
      </div>
    </>
  );
}

export default App;
