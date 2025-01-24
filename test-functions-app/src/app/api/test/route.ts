import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { id, input } = await request.json();

    switch (id) {
      case "reverse-string": {
        const reversed = input.split("").reverse().join("");
        return NextResponse.json({
          success: true,
          output: reversed
        });
      }
      
      case "count-words": {
        const wordCount = input.trim().split(/\s+/).length;
        return NextResponse.json({
          success: true,
          output: `Word count: ${wordCount}`
        });
      }
      
      default:
        return NextResponse.json({
          success: false,
          output: null,
          error: "Unknown test function"
        });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      output: null,
      error: error instanceof Error ? error.message : "Unknown error occurred"
    });
  }
}
