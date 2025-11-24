import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';

interface RouteParams {
    params: Promise<{
        id: string;
    }>;
}

// GET single project
export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        await dbConnect();
        const { id } = await params;
        const project = await Project.findById(id);

        if (!project) {
            return NextResponse.json(
                { success: false, error: 'Project not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: project,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to fetch project',
            },
            { status: 400 }
        );
    }
}

// PUT update project
export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        await dbConnect();
        const { id } = await params;
        const body = await request.json();

        const project = await Project.findByIdAndUpdate(
            id,
            body,
            { new: true, runValidators: true }
        );

        if (!project) {
            return NextResponse.json(
                { success: false, error: 'Project not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: project,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to update project',
            },
            { status: 400 }
        );
    }
}

// DELETE project
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
        await dbConnect();
        const { id } = await params;

        const project = await Project.findByIdAndDelete(id);

        if (!project) {
            return NextResponse.json(
                { success: false, error: 'Project not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: {},
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to delete project',
            },
            { status: 400 }
        );
    }
}
