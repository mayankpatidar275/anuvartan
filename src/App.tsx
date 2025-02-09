import { useState } from "react";
import "./App.css";

function App() {
  const [apikey, setApikey] = useState<string | null>(
    process.env.REACT_APP_API_KEY
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md p-6 rounded-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800">Anuvartan</h1>
        <p className="text-gray-600 mt-2">Enter the content</p>

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Type your content here..."
            className="border border-gray-300 rounded-lg p-2 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Submit
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
