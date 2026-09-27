'use client';

import { useMemo, useState } from 'react';

type Mode = 'bug' | 'fix';
type Status = 'idle' | 'ok' | 'skip';

const WRITES = [
  { key: 'receipt', name: 'visitOperations receipt' },
  { key: 'attendance', name: 'attendance' },
  { key: 'presence', name: 'memberPresence' },
  { key: 'occupancy', name: 'gym occupancy' },
] as const;

const IDLE = '—';

/**
 * The real bug: a check-in callable used an operationId scoped only to
 * gym + member, and idempotency receipts never expire. The first visit wrote
 * everything; every later visit replayed the stored receipt, so the callable
 * answered "checkedIn" while attendance, presence and occupancy went untouched.
 */
export default function IdempotencyDemo() {
  const [mode, setMode] = useState<Mode>('bug');
  const [taps, setTaps] = useState(0);

  // The scoped ID includes the member's local day, so it rolls over naturally.
  const localDay = useMemo(() => {
    const d = new Date();
    const p = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }, []);

  const operationId =
    mode === 'bug'
      ? 'checkin:gym_42:user_7'
      : `checkin:gym_42:user_7:${localDay}:visit_${Math.max(taps, 1)}`;

  let status: Status = 'idle';
  let values: Record<string, string> = {};
  let log: React.ReactNode = 'Awaiting first check-in…';

  if (taps === 1) {
    status = 'ok';
    values = { receipt: 'stored', attendance: 'written', presence: 'written', occupancy: '+1' };
    log = <span className="g">visit 1 → receipt stored, all writes committed. Correct.</span>;
  } else if (taps > 1 && mode === 'bug') {
    status = 'skip';
    values = {
      receipt: 'replayed',
      attendance: 'skipped',
      presence: 'skipped',
      occupancy: 'unchanged',
    };
    log = (
      <span className="r">
        visit {taps} → same operationId. The stored receipt is replayed: the callable returns{' '}
        <b>checkedIn</b>, but nothing is written. The member believes they are checked in. Occupancy
        is wrong.
      </span>
    );
  } else if (taps > 1) {
    status = 'ok';
    values = {
      receipt: 'new receipt',
      attendance: 'written',
      presence: 'written',
      occupancy: '+1',
    };
    log = (
      <span className="g">
        visit {taps} → ID scoped to local day + recorded visit count, so this is a distinct
        operation. Writes commit. A genuine retry within the two-minute settle window still
        de-duplicates.
      </span>
    );
  }

  const switchMode = (m: Mode) => {
    setMode(m);
    setTaps(0);
  };

  return (
    <div className="demo">
      <div className="demo-head">
        <div className="t">Interactive — the idempotency trap I hit, and the fix</div>
        <div className="d">
          Idempotency receipts never expire. That is correct for retries and catastrophic for reuse.
          Tap “Check in” twice and watch what the receipt does.
        </div>
      </div>
      <div className="demo-body">
        <div className="demo-left">
          <div className="toggle" role="group" aria-label="operationId strategy">
            <button
              className={mode === 'bug' ? 'on' : ''}
              onClick={() => switchMode('bug')}
              aria-pressed={mode === 'bug'}
            >
              Unscoped ID
            </button>
            <button
              className={mode === 'fix' ? 'on' : ''}
              onClick={() => switchMode('fix')}
              aria-pressed={mode === 'fix'}
            >
              Scoped ID
            </button>
          </div>
          <div className="opid">
            <span className="k">operationId</span>
            <span>{operationId}</span>
          </div>
          <button className="tapbtn" onClick={() => setTaps((t) => t + 1)}>
            Tap “Check in”
          </button>
          <button className="resetbtn" onClick={() => setTaps(0)}>
            Reset
          </button>
        </div>
        <div className="demo-right">
          <div className="wlabel">Server-side writes</div>
          <div className="writes">
            {WRITES.map((w) => (
              <div key={w.key} className={status === 'idle' ? 'w' : `w ${status}`}>
                <span className="name">{w.name}</span>
                <span className="val">{values[w.key] ?? IDLE}</span>
              </div>
            ))}
          </div>
          <div className="log" aria-live="polite">
            {log}
          </div>
        </div>
      </div>
    </div>
  );
}
