'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Project {
    _id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
    category: string;
    featured: boolean;
    order: number;
    createdAt: string;
}

export default function ProjectsAdmin() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const adminAuth = localStorage.getItem('adminAuth');
        if (!adminAuth) {
            router.push('/admin');
            return;
        }

        fetchProjects();
    }, [router]);

    const fetchProjects = async () => {
        try {
            const response = await fetch('/api/projects');
            const data = await response.json();
            if (data.success) {
                setProjects(data.data);
            }
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        try {
            const response = await fetch(`/api/projects/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                fetchProjects();
                alert('Project deleted successfully!');
            }
        } catch (error) {
            alert('Failed to delete project');
        }
    };

    const toggleFeatured = async (project: Project) => {
        try {
            const response = await fetch(`/api/projects/${project._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...project, featured: !project.featured }),
            });

            if (response.ok) {
                fetchProjects();
            }
        } catch (error) {
            alert('Failed to update project');
        }
    };

    if (loading) {
        return (
            <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'var(--bg-dark)' }}>
                <p className="text-white-60">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-vh-100" style={{ background: 'var(--bg-dark)' }}>
            {/* Header */}
            <header className="glass-panel mb-0" style={{ borderRadius: 0, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="container py-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="h3 text-white mb-0">
                            <i className="bi bi-kanban me-2"></i>
                            Projects Management
                        </h1>
                        <div className="d-flex gap-3">
                            <Link href="/admin/dashboard" className="btn btn-outline-primary">
                                <i className="bi bi-arrow-left me-2"></i>
                                Dashboard
                            </Link>
                            <Link href="/admin/projects/new" className="btn btn-primary">
                                <i className="bi bi-plus-circle me-2"></i>
                                New Project
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container py-5">
                {/* Stats */}
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="glass-panel p-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="icon-box" style={{ background: 'var(--primary-color)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="bi bi-grid text-white fs-4"></i>
                                </div>
                                <div>
                                    <h3 className="h2 text-white mb-0">{projects.length}</h3>
                                    <p className="text-white-60 mb-0">Total Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="glass-panel p-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="icon-box" style={{ background: '#f59e0b', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="bi bi-star text-white fs-4"></i>
                                </div>
                                <div>
                                    <h3 className="h2 text-white mb-0">{projects.filter(p => p.featured).length}</h3>
                                    <p className="text-white-60 mb-0">Featured</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="row g-4">
                    {projects.length === 0 ? (
                        <div className="col-12">
                            <div className="glass-panel p-5 text-center">
                                <i className="bi bi-folder-x text-white-60 fs-1 mb-3 d-block"></i>
                                <p className="text-white-60 mb-3">No projects yet</p>
                                <Link href="/admin/projects/new" className="btn btn-primary">
                                    Create Your First Project
                                </Link>
                            </div>
                        </div>
                    ) : (
                        projects.map(project => (
                            <div className="col-md-6 col-lg-4" key={project._id}>
                                <div className="glass-panel p-0 overflow-hidden h-100">
                                    <div className="position-relative" style={{ height: '200px' }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-100 h-100 object-fit-cover"
                                        />
                                        {project.featured && (
                                            <span className="position-absolute top-0 end-0 m-3 badge bg-warning">
                                                <i className="bi bi-star-fill me-1"></i>
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h5 className="text-white mb-2">{project.title}</h5>
                                        <p className="text-white-60 small mb-3">{project.description.substring(0, 80)}...</p>
                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            {project.tech.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="badge bg-primary">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="d-flex gap-2">
                                            <Link
                                                href={`/admin/projects/${project._id}/edit`}
                                                className="btn btn-sm btn-outline-primary flex-grow-1"
                                            >
                                                <i className="bi bi-pencil me-1"></i>
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => toggleFeatured(project)}
                                                className="btn btn-sm btn-outline-warning"
                                                title="Toggle Featured"
                                            >
                                                <i className={`bi bi-star${project.featured ? '-fill' : ''}`}></i>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(project._id)}
                                                className="btn btn-sm btn-outline-danger"
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
