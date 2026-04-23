import { NextRequest, NextResponse } from 'next/server';
import { LeadFormData, LeadResponse } from '@/types/index';

/**
 * POST /api/lead
 * Handles lead form submissions
 * Mock implementation - Replace with your actual API/database call
 */
export async function POST(request: NextRequest): Promise<NextResponse<LeadResponse>> {
  try {
    // Parse the request body
    const body: LeadFormData = await request.json();

    // Validate required fields
    const { name, email, phone, company, employees, interest } = body;

    if (!name || !email || !phone || !company || !employees || !interest) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required',
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid email address',
        },
        { status: 400 }
      );
    }

    // Mock database save or email send
    // In a real application, you would:
    // 1. Save the lead to your database
    // 2. Send a confirmation email
    // 3. Notify the sales team

    console.log('New Lead Received:', {
      timestamp: new Date().toISOString(),
      ...body,
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your interest! Our sales team will contact you within 24 hours.',
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/lead
 * Handle CORS preflight requests
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
