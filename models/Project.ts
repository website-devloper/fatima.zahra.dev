import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    tech: [{
        type: String,
    }],
    link: {
        type: String,
        default: '#',
    },
    category: {
        type: String,
        default: 'Web Development',
    },
    featured: {
        type: Boolean,
        default: false,
    },
    order: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
