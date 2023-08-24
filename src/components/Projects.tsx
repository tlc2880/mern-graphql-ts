import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import ProjectCard from './ProjectCard';
import { GET_PROJECTS } from '../queries/projectQueries';
import { ProjectType } from "./Project.types"

export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>

    return (
        <>
            {data.projects.length > 0 ? (
                <div className='row mt-4'>
                    {data.projects.map((project: ProjectType) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <p>No Projects</p>
            )}
        </>
    )
}