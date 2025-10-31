'use client';
import { useState } from 'react';

const TWEET_URL = 'https://twitter.com/deshuu_/status/1984338673190543632';

export default function Page() {
  const [username, setUsername] = useState('');
  const [domain, setDomain] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isFormValid = username.trim().length > 0 && domain.trim().length > 0;

  const handleSubmit = () => {
    if (!isFormValid) return;
    setSubmitted(true);
  };

  const intentUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    TWEET_URL
  )}&text=${encodeURIComponent(
    `Just secured ${domain}.billions on Billions Name Service.

Get yours now : https://billions-name-service.vercel.app/
Who wouldn't want to have a unique identity?`
  )}`;

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-16">
      <div className="border border-b rounded-lg bg-gray-900 p-4 md:p-6 w-full max-w-sm md:max-w-md shadow-lg text-white">
        {!submitted ? (
          <> 
            {/* Karakter resmi */}
            <img src="/placeholder.png" alt="character" className="w-full rounded mb-2" />

            <h2 className="text-2xl font-bold mb-2 text-center text-blue-300">
              Get Your Billions Domain Now
            </h2>
            <p className="text-sm text-center text-gray-200 mb-5">
              This is a fan made Billions Name Service that allows you to generate a visual .billions domain card.
            </p>

            <label className="block text-sm font-bold text-gray-200 mb-1">Your X Username</label>
            <input
              type="text"
              placeholder="e.g. @billioners"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-black border border-blue-300 text-white"
            />

            <label className="block text-sm font-bold text-gray-200 mb-1">Your Billions Name</label>
            <div className="flex mb-5">
              <input
                type="text"
                placeholder="yourname"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full p-2 rounded-l bg-black border border-blue-300 text-white"
              />
              <span className="bg-blue-400 text-black font-bold px-4 flex items-center rounded-r">
                .billions
              </span>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid}
              className="w-full bg-blue-300 text-black font-bold py-2 rounded transition"
              style={{
                opacity: isFormValid ? 1 : 0.5,
                cursor: isFormValid ? 'pointer' : 'not-allowed'
              }}
            >
              Secure Your Domain
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
              🎉 Congratulations {username || 'User'}! 🎉
            </h2>
            <img src="/success.png" alt="Success" className="w-full rounded mb-4" />
            <p className="text-center mb-6">
              Your <span className="font-semibold text-blue-400">{domain || 'yourname'}.billions</span> domain is now yours forever.
              <br />
              You have a unique name secured on the blockchain.
            </p>
            <button
              onClick={() => window.open(intentUrl, '_blank')}
              className="w-full bg-blue-300 text-black font-bold py-2 rounded hover:bg-blue-400 transition"
            >
              Share Your Domain on X
            </button>
          </>
        )}
      </div>
    </div>
  );
}