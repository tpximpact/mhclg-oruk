'use client'

export default function Loading() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <div
        style={{
          margin: '0 auto',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          animation: 'spin 1s linear infinite'
        }}
      />
      <p style={{ marginTop: '1rem' }}>Loading developer resources...</p>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
