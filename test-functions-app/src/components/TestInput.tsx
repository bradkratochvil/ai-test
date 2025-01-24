"use client";

interface TestFunctionType {
  id: string;
  name: string;
  description: string;
  inputType: 'text' | 'number' | 'select' | 'multiline';
  options?: string[];
}
import { useState } from "react";

interface TestInputProps {
  testFunction: TestFunctionType;
  onExecute: (input: string) => void;
}

export default function TestInput({ testFunction, onExecute }: TestInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onExecute(input);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor={testFunction.id} className="block text-sm font-medium text-gray-700">
          Input
        </label>
        {testFunction.inputType === "multiline" ? (
          <textarea
            id={testFunction.id}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        ) : testFunction.inputType === "select" && testFunction.options ? (
          <select
            id={testFunction.id}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          >
            <option value="">Select an option</option>
            {testFunction.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={testFunction.inputType}
            id={testFunction.id}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        )}
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Execute
      </button>
    </form>
  );
}
