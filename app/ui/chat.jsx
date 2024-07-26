"use client";

import { data } from "@/app/lib/exchange-data-placeholder";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const MyChatBot = () => {
  // const data = await fetchExchangeData();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleExchangeSelect = (exchange) => {
    setSelectedExchange(exchange);
    setStep(2);
  };

  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
    setStep(3);
  };

  const resetSelection = () => {
    setStep(1);
    setSelectedExchange(null);
    setSelectedStock(null);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      resetSelection();
    }
  };

  return (
    <>
      {/* Chatbot Icon */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-blue-500 text-white p-4">
            <h2 className="text-lg font-semibold">Stock Selector</h2>
          </div>
          <div className="p-4 h-96 overflow-y-auto">
            {step === 1 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Select a Stock Exchange
                </h3>
                <ul className="space-y-2">
                  {data.map((exchange) => (
                    <li key={exchange.code}>
                      <button
                        onClick={() => handleExchangeSelect(exchange)}
                        className="w-full text-left p-2 bg-blue-100 hover:bg-blue-200 rounded"
                      >
                        {exchange.stockExchange}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step === 2 && selectedExchange && (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Select a Stock from {selectedExchange.stockExchange}
                </h3>
                <ul className="space-y-2">
                  {selectedExchange.topStocks.map((stock) => (
                    <li key={stock.code}>
                      <button
                        onClick={() => handleStockSelect(stock)}
                        className="w-full text-left p-2 bg-green-100 hover:bg-green-200 rounded"
                      >
                        {stock.stockName}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={resetSelection}
                  className="mt-4 p-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  Back to Exchanges
                </button>
              </div>
            )}

            {step === 3 && selectedStock && (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Stock Information
                </h3>
                <p>
                  <strong>Exchange:</strong> {selectedExchange.stockExchange}
                </p>
                <p>
                  <strong>Stock:</strong> {selectedStock.stockName}
                </p>
                <p>
                  <strong>Price:</strong> ${selectedStock.price.toFixed(2)}
                </p>
                <button
                  onClick={resetSelection}
                  className="mt-4 p-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  Start Over
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MyChatBot;
