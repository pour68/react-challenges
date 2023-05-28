import PropTypes from "prop-types";

const JobContent = (props) => {
    const { job } = props;

    return (<section className="job__info">
        <header className="job__header">
            <h1>{job.title}</h1>
            <span>{job.company}</span>
            <time>{job.dates}</time>
        </header>
        <div className="job__data">
            <ul>
                {job.duties.map((duty, index) => <li key={index}>{duty}</li>)}
            </ul>
        </div>
    </section>);
}

JobContent.propTypes = {
    job: PropTypes.object,
}

export default JobContent;