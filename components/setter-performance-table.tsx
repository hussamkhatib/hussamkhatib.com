export type SetterRow = {
  name: string
  dials: number
  pickups: number
  convos: number
  bookings: number
  showed: number
  closes: number
  pickupRate: number
  convToBook: number
  showRate: number
  setToClose: number
  showToClose: number
}

const DEFAULT_DATA: SetterRow[] = [
  { name: "Ahmed", dials: 510, pickups: 62, convos: 31, bookings: 17, showed: 11, closes: 2, pickupRate: 12, convToBook: 55, showRate: 65, setToClose: 12, showToClose: 18 },
  { name: "Neha", dials: 480, pickups: 28, convos: 9, bookings: 4, showed: 6, closes: 0, pickupRate: 6, convToBook: 44, showRate: 150, setToClose: 0, showToClose: 0 },
  { name: "Adeeb", dials: 560, pickups: 55, convos: 24, bookings: 9, showed: 4, closes: 0, pickupRate: 10, convToBook: 38, showRate: 44, setToClose: 0, showToClose: 0 },
]

const THRESHOLDS = {
  pickupRate: { green: 50, amber: 35 },
  convToBook: { green: 40, amber: 25 },
  showRate: { green: 70, amber: 50 },
  setToClose: { green: 7, amber: 3 },
  showToClose: { green: 30, amber: 25 },
} as const

type RateKey = keyof typeof THRESHOLDS

const RATE_COLS: { key: RateKey; lines: [string, string] }[] = [
  { key: "pickupRate", lines: ["Pick-up", "rate"] },
  { key: "convToBook", lines: ["Convo→", "booking"] },
  { key: "showRate", lines: ["Show", "rate"] },
  { key: "setToClose", lines: ["Set-to-", "close"] },
  { key: "showToClose", lines: ["Show-to-", "close"] },
]

const KPI_PILLS = ["Pickup ≥50%", "Conv→bk ≥40%", "Show ≥70%", "Shw→cls ≥30%"]

function rateClass(value: number, key: RateKey): string {
  const { green, amber } = THRESHOLDS[key]
  if (value >= green) return "bg-green-50 text-green-700"
  if (value >= amber) return "bg-amber-50 text-amber-700"
  return "bg-red-50 text-red-700"
}

function computeTotals(data: SetterRow[]): SetterRow {
  const dials = data.reduce((s, r) => s + r.dials, 0)
  const pickups = data.reduce((s, r) => s + r.pickups, 0)
  const convos = data.reduce((s, r) => s + r.convos, 0)
  const bookings = data.reduce((s, r) => s + r.bookings, 0)
  const showed = data.reduce((s, r) => s + r.showed, 0)
  const closes = data.reduce((s, r) => s + r.closes, 0)
  return {
    name: "Team Total",
    dials,
    pickups,
    convos,
    bookings,
    showed,
    closes,
    pickupRate: dials ? Math.round((pickups / dials) * 100) : 0,
    convToBook: convos ? Math.round((bookings / convos) * 100) : 0,
    showRate: bookings ? Math.round((showed / bookings) * 100) : 0,
    setToClose: bookings ? Math.round((closes / bookings) * 100) : 0,
    showToClose: showed ? Math.round((closes / showed) * 100) : 0,
  }
}

const cell = "border border-gray-200 px-[9px] py-2 text-right text-gray-900"
const hcell = `${cell} bg-gray-50 font-semibold`

function Row({
  row,
  bold,
}: {
  row: SetterRow
  bold?: boolean
}) {
  const base = `${cell} ${bold ? "bg-gray-50 font-semibold" : "bg-white"}`
  return (
    <tr>
      <td className={`${base} text-left whitespace-nowrap`}>{row.name}</td>
      <td className={base}>{row.dials.toLocaleString()}</td>
      <td className={base}>{row.pickups}</td>
      <td className={base}>{row.convos}</td>
      <td className={base}>{row.bookings}</td>
      <td className={base}>{row.showed}</td>
      <td className={base}>{row.closes}</td>
      {RATE_COLS.map(({ key }) => (
        <td key={key} className={`${cell} ${rateClass(row[key], key)}`}>
          {row[key]}%
        </td>
      ))}
    </tr>
  )
}

export function SetterPerformanceTable({ data = DEFAULT_DATA }: { data?: SetterRow[] }) {
  const totals = computeTotals(data)

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        Weekly Performance
      </p>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="border-collapse text-[12px]">
            <thead>
              <tr>
                <th className={`${hcell} text-left whitespace-nowrap`}>Setter</th>
                <th className={`${hcell} whitespace-nowrap`}>Dials</th>
                <th className={`${hcell} whitespace-nowrap`}>Pick ups</th>
                <th className={`${hcell} whitespace-nowrap`}>Convos</th>
                <th className={`${hcell} whitespace-nowrap`}>Bookings</th>
                <th className={`${hcell} whitespace-nowrap`}>Showed</th>
                <th className={`${hcell} whitespace-nowrap`}>Closes</th>
                {RATE_COLS.map(({ key, lines }) => (
                  <th key={key} className={hcell}>
                    <span className="flex flex-col items-end leading-tight">
                      <span>{lines[0]}</span>
                      <span>{lines[1]}</span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <Row key={row.name} row={row} />
              ))}
              <Row row={totals} bold />
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 text-[11px] text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="size-2 shrink-0 rounded-full bg-green-500" />
            On target
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 shrink-0 rounded-full bg-amber-400" />
            Below target
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 shrink-0 rounded-full bg-red-400" />
            Needs attention
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {KPI_PILLS.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] text-gray-600"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
