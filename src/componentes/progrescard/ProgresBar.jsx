import './ProgresCard.css';

export function ProgresBar({ title, percent }) {
  return (
    <>
      <p>{`${title} ${percent}%`}</p>
      <div className="percent-bar">
        <div className={`percent-progres`} style={{width: `${percent}%`}}></div>
      </div>
    </>
  )
}
