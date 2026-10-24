export default function ProjectArt({ project }) {
  const v = project.visual;
  return (
    <div className={`project-art art-${v}`}>
      <div className="project-art-top"><span>PROJECT / {project.number}</span><span>↗</span></div>
      {v === "voc" && (
        <div className="mock-ui">
          <div className="mock-play">▶</div>
          <div className="mock-wave">{Array.from({ length: 13 }, (_, i) => <i key={i} />)}</div>
          <span>Voice-controlled video search</span>
        </div>
      )}
      {v === "movie" && (
        <div className="movie-ui">
          <div className="movie-poster">▶</div>
          <div className="movie-lines"><i /><i /><i /><i /></div>
          <div className="movie-poster second">✦</div>
        </div>
      )}
      {v === "flow" && (
        <div className="flow-ui">
          <div className="flow-row"><i /><i /><i /></div>
          <div className="flow-chart"><i /><i /><i /><i /><i /></div>
          <div className="flow-row bottom"><i /><i /><i /></div>
        </div>
      )}
      {v === "road" && (
        <div className="road-ui">
          <div className="road-stripe" />
          <span className="hazard hazard-one">!</span>
          <span className="hazard hazard-two">!</span>
          <b>ROAD HAZARD AWARENESS</b>
        </div>
      )}
    </div>
  );
}
