import '../styles/construction.css'

function ConstructionScene() {
  return (
    <svg className="construction-art" viewBox="0 0 440 290" role="img" aria-labelledby="construction-art-title">
      <title id="construction-art-title">Casco y barrera de obra</title>
      <defs>
        <linearGradient id="helmet-surface" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0c25a" />
          <stop offset="0.48" stopColor="#c89a32" />
          <stop offset="1" stopColor="#8f6720" />
        </linearGradient>
        <linearGradient id="helmet-side" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8f6720" stopOpacity=".12" />
          <stop offset="1" stopColor="#5f451b" stopOpacity=".82" />
        </linearGradient>
        <linearGradient id="helmet-rib" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8f6720" />
          <stop offset=".48" stopColor="#f0c25a" />
          <stop offset="1" stopColor="#6f501d" />
        </linearGradient>
        <linearGradient id="helmet-visor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e2b447" />
          <stop offset=".62" stopColor="#b78329" />
          <stop offset="1" stopColor="#76551e" />
        </linearGradient>
        <radialGradient id="helmet-reflection" cx="34%" cy="22%" r="68%">
          <stop offset="0" stopColor="#f6d77f" stopOpacity=".58" />
          <stop offset="1" stopColor="#f0c25a" stopOpacity="0" />
        </radialGradient>
        <clipPath id="barrier-face"><rect x="96" y="173" width="248" height="42" rx="3" /></clipPath>
      </defs>

      <ellipse className="construction-art__helmet-shadow" cx="220" cy="158" rx="48" ry="5" />
      <g className="construction-art__helmet">
        <g transform="translate(86 40) scale(.61)">
          <path className="helmet" d="M132 137c2-50 36-83 88-83s86 33 88 83Z" />
          <path className="helmet-side" d="M220 54c52 0 86 33 88 83h-51c-2-35-13-63-37-83Z" />
          <path className="helmet-reflection" d="M148 119c8-32 31-53 64-59-26 15-40 35-46 62Z" />
          <path className="helmet-ridge" d="M211 54h18l8 79h-34Z" />
          <path className="helmet-brim" d="M116 134h208c8 0 14 6 14 14v5H102v-5c0-8 6-14 14-14Z" />
          <path className="helmet-brim-light" d="M111 139h218" />
          <path className="helmet-brim-shadow" d="M104 148h232v5H102v-3c0-1 1-2 2-2Z" />
        </g>
      </g>

      <g className="construction-art__barrier">
        <rect className="barrier-board" x="96" y="173" width="248" height="42" rx="3" />
        <g className="barrier-stripes" clipPath="url(#barrier-face)">
          <path d="m74 221 39-54h25l-39 54Zm67 0 39-54h25l-39 54Zm67 0 39-54h25l-39 54Zm67 0 39-54h25l-39 54Zm67 0 39-54h25l-39 54Z" />
        </g>
        <path className="barrier-leg" d="M128 215h16v39h-16Zm168 0h16v39h-16Z" />
        <path className="barrier-foot" d="M108 253h56v9h-56Zm168 0h56v9h-56Z" />
      </g>
      <path className="ground" d="M76 267h288" />
    </svg>
  )
}

export default function ConstructionPage() {
  return (
    <main className="construction">
      <div className="construction__inner">
        <ConstructionScene />
        <div className="construction__rule" aria-hidden="true" />
        <h1>Estamos trabajando</h1>
        <p className="construction__copy">Estamos preparando esta sección.</p>
        <p className="construction__tagline">Formación que trasciende.</p>
        <div className="construction__progress" aria-hidden="true"><i /></div>
        <a className="construction__back" href="/">Volver al inicio</a>
      </div>
    </main>
  )
}
