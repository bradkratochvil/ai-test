import { TestResult as TestResultType } from "@/types/testFunction";

interface TestResultProps {
  result: TestResultType | null;
}

export default function TestResult({ result }: TestResultProps) {
  if (!result) return null;

  return (
    <div className="mt-4 p-4 rounded-md border">
      <h3 className="text-lg font-medium mb-2">
        {result.success ? (
          <span className="text-green-600">Success</span>
        ) : (
          <span className="text-red-600">Error</span>
        )}
      </h3>
      
      {result.success ? (
        <div className="bg-green-50 p-3 rounded-md">
          <pre className="whitespace-pre-wrap text-sm text-green-800">
            {typeof result.output === 'object' 
              ? JSON.stringify(result.output, null, 2) 
              : String(result.output)}
          </pre>
        </div>
      ) : (
        <div className="bg-red-50 p-3 rounded-md">
          <pre className="whitespace-pre-wrap text-sm text-red-800">
            {result.error || "An unknown error occurred"}
          </pre>
        </div>
      )}
    </div>
  );
}
