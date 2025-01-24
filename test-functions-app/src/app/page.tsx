import TestFunction from "@/components/TestFunction";
import { testFunctions } from "./testFunctions";

export default async function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Test Functions</h1>
        
        <div className="space-y-6">
          {testFunctions.map((testFunction) => (
            <TestFunction 
              key={testFunction.id} 
              testFunction={testFunction} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
