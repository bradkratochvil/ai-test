export interface TestFunctionType {
  id: string;
  name: string;
  description: string;
  inputType: 'text' | 'number' | 'select' | 'multiline';
  options?: string[]; // For select input type
}

export interface TestResult {
  success: boolean;
  output: any;
  error?: string;
}
