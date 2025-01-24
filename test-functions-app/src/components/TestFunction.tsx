"use client";

import { TestResult as TestResultType } from "@/types/testFunction";
import { useState } from "react";
import TestInput from "./TestInput";
import TestResult from "./TestResult";

interface TestFunctionProps {
  testFunction: {
    id: string;
    name: string;
    description: string;
    inputType: 'text' | 'number' | 'select' | 'multiline';
    options?: string[];
  };
}

export default function TestFunction({ testFunction }: TestFunctionProps) {
  const [result, setResult] = useState<TestResultType | null>(null);

  const handleExecute = async (input: string) => {
    try {
      const response = await fetch('/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: testFunction.id,
          input
        })
      });

      const executionResult = await response.json();
      setResult(executionResult);
    } catch (error) {
      setResult({
        success: false,
        output: null,
        error: error instanceof Error ? error.message : "An unexpected error occurred"
      });
    }
  };

  return (
    <div className="border rounded-lg p-6 mb-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{testFunction.name}</h2>
      <p className="text-gray-600 mb-4">{testFunction.description}</p>
      
      <TestInput 
        testFunction={testFunction} 
        onExecute={handleExecute} 
      />
      
      <TestResult result={result} />
    </div>
  );
}
