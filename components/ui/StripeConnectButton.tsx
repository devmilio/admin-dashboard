'use client';

import { useState } from 'react';

export function StripeConnectButton() {
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    const res = await fetch('/api/stripe/connect', {
      method: 'POST',
      body: JSON.stringify({ userId: 'acct_1RBkBJDe9kBE4vsE' }), // Replace with real user ID
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Error creating Stripe account link');
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleConnect}
      disabled={loading}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
    >
      {loading ? 'Connecting...' : 'Connect with Stripe'}
    </button>
  );
}
