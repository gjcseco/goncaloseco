import type { ArchitectureLabels } from '@/lib/content/case-study.types'

/*
 * Architecture diagram drawn as inline SVG (real text, not an image of text).
 * Two layouts of the same diagram: a wide one from `md` up and a tall,
 * single-column one for phones. Only one is displayed at a time, so only one
 * is exposed to assistive technology (display:none removes the other).
 */

type Variant = 'default' | 'accent' | 'dashed'

interface NodeProps {
  x: number
  y: number
  w: number
  h: number
  title: string
  sub?: string
  variant?: Variant
  monoSub?: boolean
  titleSize?: number
  subSize?: number
}

function Node({
  x,
  y,
  w,
  h,
  title,
  sub,
  variant = 'default',
  monoSub = false,
  titleSize = 15,
  subSize = 12.5,
}: NodeProps) {
  const cx = x + w / 2
  const cy = y + h / 2
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        className={variant === 'accent' ? 'fill-primary stroke-primary' : 'fill-secondary stroke-border'}
        fillOpacity={variant === 'accent' ? 0.1 : 0.6}
        strokeWidth={variant === 'accent' ? 1.5 : 1}
        strokeDasharray={variant === 'dashed' ? '5 4' : undefined}
      />
      <text
        x={cx}
        y={sub ? cy - 4 : cy + 5}
        textAnchor="middle"
        fontSize={titleSize}
        fontWeight={600}
        className={variant === 'accent' ? 'fill-primary' : 'fill-foreground'}
      >
        {title}
      </text>
      {sub ? (
        <text
          x={cx}
          y={cy + 15}
          textAnchor="middle"
          fontSize={subSize}
          className={monoSub ? 'fill-muted-foreground font-mono' : 'fill-muted-foreground'}
        >
          {sub}
        </text>
      ) : null}
    </g>
  )
}

function ArrowDefs({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0 0 L10 5 L0 10 z" className="fill-muted-foreground" />
      </marker>
    </defs>
  )
}

const lineClass = 'stroke-muted-foreground'

function WideDiagram({ l }: { l: ArchitectureLabels }) {
  const marker = 'cs-arrow-wide'
  const arrow = `url(#${marker})`
  return (
    <svg
      viewBox="0 0 960 600"
      role="img"
      aria-labelledby="cs-arch-wide-title cs-arch-wide-desc"
      className="hidden md:block w-full h-auto"
    >
      <title id="cs-arch-wide-title">{l.title}</title>
      <desc id="cs-arch-wide-desc">{l.description}</desc>
      <ArrowDefs id={marker} />

      {/* Users */}
      <Node x={150} y={16} w={260} h={64} title={l.users} sub={l.usersSub} />
      <line x1={280} y1={80} x2={280} y2={116} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <text x={290} y={103} fontSize={11} className="fill-muted-foreground font-mono">
        {l.https}
      </text>

      {/* Vercel container */}
      <rect x={20} y={120} width={520} height={250} rx={14} className="fill-card stroke-primary" strokeOpacity={0.6} strokeWidth={1.5} />
      <text x={40} y={148} fontSize={15} fontWeight={700} className="fill-foreground">
        {l.vercel}
      </text>
      <text x={520} y={148} fontSize={12} textAnchor="end" className="fill-muted-foreground font-mono">
        {l.vercelSub}
      </text>
      <Node x={40} y={164} w={230} h={70} title={l.serverComponents} sub={l.serverComponentsSub} />
      <Node x={290} y={164} w={230} h={70} title={l.handlers} sub={l.handlersSub} />
      <line x1={155} y1={234} x2={155} y2={262} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <line x1={405} y1={234} x2={405} y2={262} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <Node x={40} y={264} w={480} h={86} title={l.authz} sub={l.authzSub} variant="accent" monoSub />

      {/* Prisma + DB */}
      <line x1={280} y1={370} x2={280} y2={398} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <Node x={150} y={400} w={260} h={60} title={l.prisma} sub={l.prismaSub} />
      <line x1={280} y1={460} x2={280} y2={488} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <rect x={60} y={490} width={440} height={98} rx={12} className="fill-card stroke-border" />
      <text x={280} y={515} textAnchor="middle" fontSize={15} fontWeight={700} className="fill-foreground">
        {l.database}
      </text>
      <Node x={80} y={528} w={190} h={46} title={l.prod} titleSize={13} />
      <Node x={290} y={528} w={190} h={46} title={l.preview} titleSize={13} variant="dashed" />

      {/* Side services */}
      <text x={620} y={140} fontSize={11} letterSpacing={2} className="fill-primary font-mono">
        {l.sideServices.toUpperCase()}
      </text>
      <Node x={620} y={152} w={320} h={58} title={l.blob} sub={l.blobSub} />
      <Node x={620} y={222} w={320} h={58} title={l.cloudinary} sub={l.cloudinarySub} monoSub subSize={12} />
      <Node x={620} y={292} w={320} h={58} title={l.email} sub={l.emailSub} />
      <line x1={540} y1={181} x2={618} y2={181} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <line x1={540} y1={251} x2={618} y2={251} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <line x1={540} y1={321} x2={618} y2={321} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />

      {/* GitHub Actions */}
      <rect x={620} y={410} width={320} height={150} rx={12} className="fill-secondary stroke-border" fillOpacity={0.6} strokeDasharray="5 4" />
      <text x={640} y={440} fontSize={15} fontWeight={700} className="fill-foreground">
        {l.actions}
      </text>
      {l.actionsLines.map((line, i) => (
        <g key={line}>
          <rect x={642} y={459 + i * 28} width={6} height={6} rx={1} className="fill-primary" />
          <text x={656} y={466 + i * 28} fontSize={12.5} className="fill-muted-foreground">
            {line}
          </text>
        </g>
      ))}
      {/* Backup: Actions reads the DB and mails the encrypted dump */}
      <line x1={620} y1={545} x2={502} y2={545} className={lineClass} strokeWidth={1.5} strokeDasharray="5 4" markerEnd={arrow} />
      <text x={561} y={537} textAnchor="middle" fontSize={11} className="fill-muted-foreground font-mono">
        {l.backupEdge}
      </text>
      <line x1={780} y1={410} x2={780} y2={352} className={lineClass} strokeWidth={1.5} strokeDasharray="5 4" markerEnd={arrow} />
    </svg>
  )
}

function TallDiagram({ l }: { l: ArchitectureLabels }) {
  const marker = 'cs-arrow-tall'
  const arrow = `url(#${marker})`
  return (
    <svg
      viewBox="0 0 340 950"
      role="img"
      aria-labelledby="cs-arch-tall-title cs-arch-tall-desc"
      className="block md:hidden w-full h-auto max-w-sm mx-auto"
    >
      <title id="cs-arch-tall-title">{l.title}</title>
      <desc id="cs-arch-tall-desc">{l.description}</desc>
      <ArrowDefs id={marker} />

      <Node x={40} y={8} w={260} h={60} title={l.users} sub={l.usersSub} />
      <line x1={170} y1={68} x2={170} y2={94} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <text x={180} y={86} fontSize={11} className="fill-muted-foreground font-mono">
        {l.https}
      </text>

      <rect x={14} y={96} width={318} height={252} rx={14} className="fill-card stroke-primary" strokeOpacity={0.6} strokeWidth={1.5} />
      <text x={28} y={122} fontSize={14} fontWeight={700} className="fill-foreground">
        {l.vercel}
      </text>
      <text x={318} y={122} fontSize={11} textAnchor="end" className="fill-muted-foreground font-mono">
        {l.vercelSub}
      </text>
      <Node x={28} y={136} w={290} h={54} title={l.serverComponents} sub={l.serverComponentsSub} titleSize={14} subSize={12} />
      <Node x={28} y={200} w={290} h={54} title={l.handlers} sub={l.handlersSub} titleSize={14} subSize={12} />
      <Node x={28} y={268} w={290} h={66} title={l.authz} sub={l.authzSub} variant="accent" monoSub titleSize={14} subSize={10.5} />

      <line x1={173} y1={348} x2={173} y2={374} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <Node x={43} y={376} w={260} h={56} title={l.prisma} sub={l.prismaSub} titleSize={14} subSize={12} />
      <line x1={173} y1={432} x2={173} y2={458} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <rect x={14} y={460} width={318} height={96} rx={12} className="fill-card stroke-border" />
      <text x={173} y={484} textAnchor="middle" fontSize={14} fontWeight={700} className="fill-foreground">
        {l.database}
      </text>
      <Node x={28} y={496} w={140} h={46} title={l.prod} titleSize={13} />
      <Node x={178} y={496} w={140} h={46} title={l.preview} titleSize={13} variant="dashed" />

      <text x={14} y={592} fontSize={11} letterSpacing={2} className="fill-primary font-mono">
        {l.sideServices.toUpperCase()}
      </text>
      {/* Bus from the Next.js box down to the side services */}
      <path d="M14 222 H6 V791 " fill="none" className={lineClass} strokeWidth={1.5} />
      <line x1={6} y1={631} x2={26} y2={631} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <line x1={6} y1={711} x2={26} y2={711} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <line x1={6} y1={791} x2={26} y2={791} className={lineClass} strokeWidth={1.5} markerEnd={arrow} />
      <Node x={28} y={604} w={304} h={54} title={l.blob} sub={l.blobSub} titleSize={14} subSize={12} />
      <Node x={28} y={684} w={304} h={54} title={l.cloudinary} sub={l.cloudinarySub} monoSub titleSize={14} subSize={11} />
      <Node x={28} y={764} w={304} h={54} title={l.email} sub={l.emailSub} titleSize={14} subSize={12} />

      <rect x={28} y={840} width={304} height={104} rx={12} className="fill-secondary stroke-border" fillOpacity={0.6} strokeDasharray="5 4" />
      <text x={42} y={866} fontSize={14} fontWeight={700} className="fill-foreground">
        {l.actions}
      </text>
      {l.actionsLines.map((line, i) => (
        <g key={line}>
          <rect x={44} y={881 + i * 22} width={6} height={6} rx={1} className="fill-primary" />
          <text x={56} y={888 + i * 22} fontSize={12} className="fill-muted-foreground">
            {line}
          </text>
        </g>
      ))}
      {/* Backup: dashed line from Actions up the right edge to the database */}
      <path d="M332 870 H337 V508 H334" fill="none" className={lineClass} strokeWidth={1.5} strokeDasharray="5 4" markerEnd={arrow} />
      <line x1={180} y1={840} x2={180} y2={820} className={lineClass} strokeWidth={1.5} strokeDasharray="4 3" markerEnd={arrow} />
    </svg>
  )
}

export function ArchitectureDiagram({ labels }: { labels: ArchitectureLabels }) {
  return (
    <figure className="rounded-xl bg-card border border-border p-3 sm:p-6">
      <WideDiagram l={labels} />
      <TallDiagram l={labels} />
      <figcaption className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {labels.legend}
      </figcaption>
    </figure>
  )
}
