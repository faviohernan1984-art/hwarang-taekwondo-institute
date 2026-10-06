import { pressVideoGroups } from '../data/pressVideos.js'
import '../styles/press-video-archive.css'

function ArchivePhotography({ photo }) {
  return (
    <figure className="hti-video-archive__photo">
      <img
        src={`/images/press/audiovisual/${photo.file}`}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        style={{ objectPosition: photo.position }}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}

function ArchiveCoverage({ video, group, index }) {
  return (
    <figure className="hti-video-archive__piece">
      <div className="hti-video-archive__screen">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          width="640"
          height="360"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <figcaption>
        <span>{group.year}</span>
        <span>YouTube</span>
        <span className="hti-video-archive__record">{String(index + 1).padStart(2, '0')}</span>
      </figcaption>
    </figure>
  )
}

export default function PressVideoArchive() {
  return (
    <section className="hti-video-archive" id="archivo-audiovisual" aria-labelledby="hti-video-archive-title">
      <div className="hti-video-archive__inner">
        <header className="hti-video-archive__header">
          <div>
            <p className="hti-video-archive__eyebrow">Entrevistas · TV · Coberturas</p>
            <h2 id="hti-video-archive-title"><span>ARCHIVO</span><span>AUDIOVISUAL</span></h2>
          </div>
          <p className="hti-video-archive__intro">Entrevistas, programas y coberturas que forman parte de la memoria audiovisual de Hwarang Taekwon-Do Institute.</p>
        </header>
        {pressVideoGroups.map(group => (
          <section className="hti-video-archive__group" key={group.id} aria-labelledby={`hti-video-${group.id}`}>
            <header className="hti-video-archive__identity">
              <p className="hti-video-archive__year">{group.year}</p>
              <h3 id={`hti-video-${group.id}`}>
                {group.event}
              </h3>
            </header>
            <div className="hti-video-archive__rows">
              {group.videos.map((video, index) => (
                <div className="hti-video-archive__row" key={video.id}>
                  <ArchivePhotography photo={group.photos[index]} />
                  <ArchiveCoverage video={video} group={group} index={index} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
