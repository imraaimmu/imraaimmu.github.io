import IdempotencyDemo from '@/components/IdempotencyDemo';

const RESUME = '/Imrankhan_Mohamed_Hanifa_Resume.pdf';

const METRICS = [
  { n: '9+ yrs', l: 'Backend engineering across six business domains' },
  { n: '60%', l: 'Lower event volume and processing cost via stateful deduplication' },
  { n: '150%', l: 'Faster API execution on a production payments platform' },
  { n: '<150ms', l: 'End-to-end latency held at high-velocity fulfillment hubs' },
];

const SKILLS = [
  {
    h: 'Backend',
    p: 'Java 8/11/19, Spring Boot, Spring MVC, Hibernate, REST APIs, microservices',
  },
  {
    h: 'Architecture & reliability',
    p: 'Distributed systems, event-driven architecture, multi-tenant security models, idempotency & deduplication, schema evolution, DLQ and fail-fast validation, low-latency tuning',
  },
  {
    h: 'Event streaming & data',
    p: 'Kafka, Avro, Schema Registry, Redis, Apache NiFi, Oracle, PostgreSQL, MySQL, MongoDB, Cassandra, Firestore',
  },
  {
    h: 'Quality & AI-assisted delivery',
    p: 'Cucumber BDD, JMeter, Vitest, emulator-based integration testing, Claude Code for reusable engineering automation',
  },
  {
    h: 'Cloud & DevOps',
    p: 'AWS Lambda, API Gateway, EventBridge, S3, DynamoDB, CloudFormation · GCP Cloud Run, Cloud Functions, IAM · Docker, Kubernetes, Jenkins, GitHub Actions',
  },
  { h: 'Frontend & mobile', p: 'Flutter, Dart, React, Next.js, TypeScript, JavaScript ES6' },
];

const ROLES = [
  {
    yr: '2025 — 2026',
    title: 'Senior Software Engineer (Contract)',
    org: 'Spectraforce Technologies · Retail & supply chain',
    stack: 'Java · Spring Boot · Kafka · Redis · Avro · Kubernetes',
  },
  {
    yr: '2024 — 2025',
    title: 'Senior Software Engineer',
    org: 'Apexon · Investment banking · Birmingham, UK',
    stack: 'Java 19 · Apache NiFi · Kafka · Kubernetes',
  },
  {
    yr: '2021 — 2024',
    title: 'Senior Software Engineer',
    org: 'UST Global · Payments · Leeds, UK',
    stack: 'Java 19 · Spring Boot 3 · AWS · Kafka · Oracle · React',
  },
  {
    yr: '2020 — 2021',
    title: 'Senior Software Engineer',
    org: 'Sri Mookambika InfoSolutions · Healthcare · Chennai',
    stack: 'Java 11 · React · AWS Lambda · CloudFormation',
  },
  {
    yr: '2016 — 2020',
    title: 'Full Stack Developer',
    org: 'IVTL Infoview Technologies · Supply chain & expense management · Chennai',
    stack: 'Java 8 · Spring MVC · Hibernate · MySQL · Cassandra',
  },
];

const NOTES = [
  {
    k: 'Handover',
    h: 'A 7-section engineering handover for two programs',
    p: 'Architecture, data contracts, risk register, unresolved unknowns marked explicitly, and a first-week plan for whoever inherits it. Available on request.',
  },
  {
    k: 'Contracts',
    h: 'Firestore data contract & security matrix',
    p: 'Collection-by-collection ownership, which writes the backend owns, and what each actor can read. The rules are the authorisation boundary, so they are documented as such.',
  },
  {
    k: 'Decisions',
    h: 'Deliberate mismatches, recorded',
    p: 'A published package name can never change, so a brand rename lives only in labels and listings. Written down as intent so nobody “fixes” it later.',
  },
];

const REDIS_RESULTS = [
  { m: 'Peak memory usage', before: '100% — OOM crash loop', after: '~22–25% stable' },
  { m: 'Swap paging on reader nodes', before: '>22 MB', after: '0 MB' },
  { m: 'Memory fragmentation ratio', before: '>2.2 and spiking', after: '1.05 – 1.15' },
  { m: 'Cache hit rate', before: '0 – 30%, volatile', after: '>85%, stable' },
  { m: 'Unscheduled downtime', before: 'Daily OOM restarts', after: 'None' },
];

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap">
          <div className="brand">
            Imrankhan<b>.</b>
          </div>
          <div className="navlinks">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#writing">Writing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="role">Senior Software Engineer — India</div>
          <h1>
            I build backend systems
            <br />
            that stay correct
            <br />
            under pressure.
          </h1>
          <p className="pitch">
            Nine years across{' '}
            <b>retail, supply chain, payments, investment banking and healthcare</b> — event-driven
            Java services, Kafka pipelines and AWS platforms. I also architected and shipped a{' '}
            <b>multi-tenant SaaS product solo</b>, now live on Google Play.
          </p>
          <div className="cta">
            <a className="btn primary" href="#work">
              See the work
            </a>
            <a className="btn ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="metrics">
            {METRICS.map((m) => (
              <div className="metric" key={m.n}>
                <div className="n">{m.n}</div>
                <div className="l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="work">
        <div className="wrap">
          <div className="eyebrow">01 — Selected work</div>
          <h2>Four systems, four different hard problems.</h2>
          <p className="lede">
            Client engagements are described without internal system names. The platform I own is
            documented in full.
          </p>

          <div className="case feature">
            <div className="tags">
              <span className="tag live">● Live on Google Play</span>
              <span className="tag">Flutter</span>
              <span className="tag">Firebase</span>
              <span className="tag">Next.js 15</span>
              <span className="tag">TypeScript</span>
              <span className="tag">GCP</span>
            </div>
            <h3>FitTrack &amp; Fittie — multi-tenant gym management SaaS</h3>
            <div className="meta">Independent product · Solo architect &amp; engineer · 2025–present</div>
            <ul>
              <li>
                <b>Three surfaces, one contract.</b> A gym-owner app and a member app on Google Play,
                plus a Next.js platform dashboard — all sharing one documented Firestore data
                contract and 11 Cloud Functions.
              </li>
              <li>
                <b>The browser never touches the database.</b> Every platform read goes through a
                callable that checks a super-admin custom claim. No public registration, no
                claim-bootstrap route, PII masked in list responses, and audit logs recursively
                redacted for tokens and credentials.
              </li>
              <li>
                <b>Reconciliation warnings, never silent zeros.</b> Missing amount mappings surface
                as explicit warnings rather than defaulting to zero, and every response carries a{' '}
                <code>dataAsOf</code> timestamp.
              </li>
              <li>
                <b>Production deploys with no stored credentials.</b> GitHub OIDC, approval-gated
                releases, authenticated and unauthenticated canaries, and automatic rollback to a
                last-known-good commit on partial failure.
              </li>
            </ul>
            <IdempotencyDemo />
          </div>

          <div className="case">
            <div className="tags">
              <span className="tag">Redis</span>
              <span className="tag">Spring Data Redis</span>
              <span className="tag">AWS ElastiCache</span>
              <span className="tag">Terraform</span>
              <span className="tag">CloudWatch</span>
            </div>
            <h3>Finding a framework-level memory leak two previous attempts had missed</h3>
            <div className="meta">Large US omnichannel retailer · via consultancy · 2025–2026</div>
            <ul>
              <li>
                A production ElastiCache for Redis cluster was hitting 100% memory daily, paging to
                disk on reader nodes and collapsing to a 0% hit rate, which dumped the load straight
                onto the primary database. Two earlier efforts had not found the cause.
              </li>
              <li>
                <b>The diagnosis was a chain of four commands.</b> Non-blocking <code>SCAN</code> from
                a bastion host surfaced container keys with a TTL of <code>-1</code>;{' '}
                <code>TYPE</code> showed they were Sets; <code>SCARD</code> showed millions of
                members; and <code>EXISTS</code> on a random member returned <code>0</code>. The
                entities had expired. Their IDs had not.
              </li>
              <li>
                <b>Spring Data Redis never purges its own secondary indexes.</b> When a{' '}
                <code>@RedisHash</code> entity expires natively inside Redis, the framework leaves
                the ID behind in the index Set. Millions of orphaned references accumulated into an
                unbounded leak that no application code owned.
              </li>
              <li>
                <b>The fix had to not be the outage.</b> Deleting members with{' '}
                <code>SMEMBERS</code> or <code>KEYS</code> is O(N) on a single-threaded server, so
                cleanup ran as cursor-based <code>SSCAN</code> in 500-key batches with pipelined
                existence checks and pipelined <code>SREM</code>. Keyspaces are discovered by
                scanning the Spring context for <code>@RedisHash</code> repositories rather than
                hardcoded, so a new cache is covered the day it ships.
              </li>
              <li>
                <b>Purging millions of keys then fragments the heap.</b> Reclaiming the memory needed{' '}
                <code>activedefrag</code> and a tuned <code>maxmemory-policy</code> applied through a
                Terraform-managed ElastiCache parameter group — no cluster restart.
              </li>
              <li>
                <b>Three tiers, because one is a single point of failure.</b> A nightly preventative
                job, a CloudWatch and SNS alarm at 80% memory, and an authenticated admin endpoint so
                an on-call engineer can force a cleanup mid-incident.
              </li>
            </ul>
            <div className="ba">
              <div className="ba-row ba-head">
                <div>Metric</div>
                <div>Before</div>
                <div>After</div>
              </div>
              {REDIS_RESULTS.map((r) => (
                <div className="ba-row" key={r.m}>
                  <div className="m">{r.m}</div>
                  <div className="before">{r.before}</div>
                  <div className="after">{r.after}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="case">
            <div className="tags">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">Kafka</span>
              <span className="tag">Redis</span>
              <span className="tag">Kubernetes</span>
            </div>
            <h3>Rebuilding an inventory pipeline so business rules ship without deploys</h3>
            <div className="meta">Large US omnichannel retailer · via consultancy · 2025–2026</div>
            <ul>
              <li>
                Migrated an enterprise inventory pipeline from hardcoded processors to a{' '}
                <b>configuration-driven decorator architecture</b>, so rule changes across diverse
                fulfillment nodes no longer required a deployment.
              </li>
              <li>
                Built a <b>deterministic transition-rule engine</b> that split physical warehouse
                movements into logical financial transactions for reverse logistics and brand
                transformations.
              </li>
              <li>
                Cut downstream event volume and processing cost <b>by up to 60%</b> with Redis-backed
                stateful deduplication that filtered logical no-op updates.
              </li>
              <li>
                Protected raw audit trails with immutable state boundaries and deep copies, and
                quarantined unmapped inventory through fail-fast validation and dead-letter routing —{' '}
                <b>holding sub-150 ms end-to-end latency</b>.
              </li>
            </ul>
          </div>

          <div className="case">
            <div className="tags">
              <span className="tag">Java 19</span>
              <span className="tag">Spring Boot 3</span>
              <span className="tag">AWS Lambda</span>
              <span className="tag">Kafka</span>
              <span className="tag">Oracle</span>
            </div>
            <h3>Moving a payments platform off-premise without losing correctness</h3>
            <div className="meta">Global payments provider · via consultancy · 2021–2024</div>
            <ul>
              <li>
                Modernised on-premise legacy applications into AWS services and delivered new
                remittance operations, <b>improving API execution speed by 150%</b>.
              </li>
              <li>
                Built a Kafka-listener billing service that captured events, generated billing files
                and delivered them to S3.
              </li>
              <li>
                Created Cucumber regression automation to protect existing behaviour during
                continuous deployment, and migrated the database from PostgreSQL to Oracle for the
                beta release.
              </li>
              <li>
                Mentored a junior engineer and coordinated technical requirements directly with
                stakeholders.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="eyebrow">02 — Capabilities</div>
          <h2>What I reach for.</h2>
          <div className="skills">
            {SKILLS.map((s) => (
              <div className="sk" key={s.h}>
                <div className="h">{s.h}</div>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="eyebrow">03 — Experience</div>
          <h2>Nine years, six domains.</h2>
          <div className="tl">
            {ROLES.map((r) => (
              <div className="row" key={r.yr}>
                <div className="yr">{r.yr}</div>
                <div>
                  <h4>{r.title}</h4>
                  <div className="org">{r.org}</div>
                  <div className="stack">{r.stack}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="writing">
        <div className="wrap">
          <div className="eyebrow">04 — Engineering writing</div>
          <h2>I document decisions, not just code.</h2>
          <p className="lede">
            Systems outlive the people who build them. These are the artefacts I produce alongside
            the software.
          </p>
          <div className="notes">
            {NOTES.map((n) => (
              <div className="note" key={n.k}>
                <div className="k">{n.k}</div>
                <h4>{n.h}</h4>
                <p>{n.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="eyebrow">05 — Contact</div>
          <h2>
            Open to senior backend
            <br />
            and platform roles.
          </h2>
          <p className="lede">
            Based in Tamil Nadu, India. Available immediately, comfortable across UK, EU and US time
            zones, and set up to work with global teams remotely.
          </p>
          <div className="clinks">
            <a href="mailto:imrankhanmohamedhanifa@gmail.com">Email</a>
            <a href="https://linkedin.com/in/imrankhan-m-b50580148">LinkedIn</a>
            <a href="https://github.com/imraaimmu">GitHub</a>
            <a href={RESUME}>Download resume (PDF)</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Imrankhan Mohamed Hanifa</span>
          <span>Built with Next.js · static export on GitHub Pages</span>
        </div>
      </footer>
    </>
  );
}
